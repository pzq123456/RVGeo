import { Arc, Topology } from './extract';
import {hashmap, equalPoint, hashPoint} from './hash';

export interface dedupedTopology extends Topology {
    arcs: Arc[] | [number,number][][];
}

// Given a cut topology, combines duplicate arcs.
export function dedup(topology: dedupedTopology) : dedupedTopology {
    let coordinates = topology.coordinates,
        lines = topology.lines, line,
        rings = topology.rings, ring,
        arcCount = lines.length + rings.length,
        i, n;

    // @ts-ignore
    delete topology.lines;
    // @ts-ignore
    delete topology.rings;
    // topology.lines = null as any;
    // topology.rings = null as any;


    // Count the number of (non-unique) arcs to initialize the hashmap safely.
    for (i = 0, n = lines.length; i < n; ++i) {
    line = lines[i]; while (line = line.next) ++arcCount;
    }
    for (i = 0, n = rings.length; i < n; ++i) {
    ring = rings[i]; while (ring = ring.next) ++arcCount;
    }

    let arcsByEnd = hashmap(arcCount * 2 * 1.4, hashPoint, equalPoint),
        arcs = topology.arcs = [] as Arc[];

    for (i = 0, n = lines.length; i < n; ++i) {
    line = lines[i];
    do {
        dedupLine(line);
    } while (line = line.next);
    }

    for (i = 0, n = rings.length; i < n; ++i) {
    ring = rings[i];
    if (ring.next) { // arc is no longer closed
        do {
        dedupLine(ring);
        } while (ring = ring.next);
    } else {
        dedupRing(ring);
    }
    }

    function dedupLine(arc : Arc) {
    let startPoint,
        endPoint,
        startArcs, startArc,
        endArcs, endArc,
        i, n;

    // Does this arc match an existing arc in order?
    if (startArcs = arcsByEnd.get(startPoint = coordinates[arc[0]])) {
        for (i = 0, n = startArcs.length; i < n; ++i) {
        startArc = startArcs[i];
        if (equalLine(startArc, arc)) {
            arc[0] = startArc[0];
            arc[1] = startArc[1];
            return;
        }
        }
    }

    // Does this arc match an existing arc in reverse order?
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[1]])) {
        for (i = 0, n = endArcs.length; i < n; ++i) {
            endArc = endArcs[i];
            if (reverseEqualLine(endArc, arc)) {
                arc[1] = endArc[0];
                arc[0] = endArc[1];
                return;
            }
        }
    }

    if (startArcs) startArcs.push(arc); else arcsByEnd.set(startPoint, [arc]);
    if (endArcs) endArcs.push(arc); else arcsByEnd.set(endPoint, [arc]);
        arcs.push(arc);
    }

    function dedupRing(arc : Arc) {
    let endPoint,
        endArcs,
        endArc,
        i, n;

    // Does this arc match an existing line in order, or reverse order?
    // Rings are closed, so their start point and end point is the same.
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0]])) {
        for (i = 0, n = endArcs.length; i < n; ++i) {
        endArc = endArcs[i];
        if (equalRing(endArc, arc)) {
            arc[0] = endArc[0];
            arc[1] = endArc[1];
            return;
        }
        if (reverseEqualRing(endArc, arc)) {
            arc[0] = endArc[1];
            arc[1] = endArc[0];
            return;
        }
        }
    }

    // Otherwise, does this arc match an existing ring in order, or reverse order?
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0] + findMinimumOffset(arc)])) {
        for (i = 0, n = endArcs.length; i < n; ++i) {
        endArc = endArcs[i];
        if (equalRing(endArc, arc)) {
            arc[0] = endArc[0];
            arc[1] = endArc[1];
            return;
        }
        if (reverseEqualRing(endArc, arc)) {
            arc[0] = endArc[1];
            arc[1] = endArc[0];
            return;
        }
        }
    }

    if (endArcs) endArcs.push(arc); else arcsByEnd.set(endPoint, [arc]);
    arcs.push(arc);
    }

    function equalLine(arcA : Arc, arcB : Arc) {
    let ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1];
    if (ia - ja !== ib - jb) return false;
    for (; ia <= ja; ++ia, ++ib) if (!equalPoint(coordinates[ia], coordinates[ib])) return false;
    return true;
    }

    function reverseEqualLine(arcA : Arc, arcB : Arc) {
    let ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1];
    if (ia - ja !== ib - jb) return false;
    for (; ia <= ja; ++ia, --jb) if (!equalPoint(coordinates[ia], coordinates[jb])) return false;
    return true;
    }

    function equalRing(arcA : Arc, arcB : Arc) {
    let ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1],
        n = ja - ia;
    if (n !== jb - ib) return false;
    let ka = findMinimumOffset(arcA),
        kb = findMinimumOffset(arcB);
    for (let i = 0; i < n; ++i) {
        if (!equalPoint(coordinates[ia + (i + ka) % n], coordinates[ib + (i + kb) % n])) return false;
    }
    return true;
    }

    function reverseEqualRing(arcA : Arc, arcB : Arc) {
    let ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1],
        n = ja - ia;
    if (n !== jb - ib) return false;
    let ka = findMinimumOffset(arcA),
        kb = n - findMinimumOffset(arcB);
    for (let i = 0; i < n; ++i) {
        if (!equalPoint(coordinates[ia + (i + ka) % n], coordinates[jb - (i + kb) % n])) return false;
    }
    return true;
    }

    // Rings are rotated to a consistent, but arbitrary, start point.
    // This is necessary to detect when a ring and a rotated copy are dupes.
    function findMinimumOffset(arc : Arc) {
    let start = arc[0],
        end = arc[1],
        mid = start,
        minimum = mid,
        minimumPoint = coordinates[mid];
    while (++mid < end) {
        let point = coordinates[mid];
        if (point[0] < minimumPoint[0] || point[0] === minimumPoint[0] && point[1] < minimumPoint[1]) {
        minimum = mid;
        minimumPoint = point;
        }
    }
    return minimum - start;
    }

    return topology;
}
