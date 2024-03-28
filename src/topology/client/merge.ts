import { object } from "./feature";
import { stitch } from "./stitch";
import { Topology } from '../sever/extract';
import { GeometryObject } from '../sever/geometry';

interface Polygon extends Array<number[][]> {
    _?: number;
}

function planarRingArea(ring : number[][]) {
    var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
    while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
    return Math.abs(area); // Note: doubled area!
}
  
export function merge(topology : Topology) {
    // @ts-ignore
    return object(topology, mergeArcs.apply(this, arguments));
}

export function mergeArcs(topology : Topology, objects : GeometryObject[]) {
    var polygonsByArc = {} as {[key: number]: number[][]},
        polygons = [] as Polygon[],
        groups = [] as Polygon[][];

    objects.forEach(geometry);

    function geometry(o : GeometryObject) {
        switch (o.type) {
        case "GeometryCollection": o.geometries.forEach(geometry); break;
        case "Polygon": extract(o.arcs); break;
        case "MultiPolygon": o.arcs.forEach(extract); break;
        }
    }

    function extract(polygon : Polygon) {
        polygon.forEach(function(ring) {
        ring.forEach(function(arc) {
            // @ts-ignore
            (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [] as number[][])).push(polygon);
        });
        });
        polygons.push(polygon);
    }

    function area(ring : number[]) {
        return planarRingArea(object(topology, {type: "Polygon", arcs: [ring]}).coordinates[0]);
    }

    polygons.forEach(function(polygon) {
        if (!polygon._) {
        var group = [] as Polygon[],
            neighbors = [polygon];
        polygon._ = 1;
        groups.push(group);
        while (polygon = neighbors.pop() as Polygon) {
            group.push(polygon);
            polygon.forEach(function(ring) {
            ring.forEach(function(arc) {
                // @ts-ignore
                polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon : Polygon) {
                if (!polygon._) {
                    polygon._ = 1;
                    neighbors.push(polygon);
                }
                });
            });
            });
        }
        }
    });

    polygons.forEach(function(polygon) {
        delete polygon._;
    });

    return {
        type: "MultiPolygon",
        arcs: groups.map(function(polygons) {
        let arcs = [] as number[] | number[][];
        let n : number;

        // Extract the exterior (unique) arcs.
        polygons.forEach(function(polygon) {
            polygon.forEach(function(ring) {
            ring.forEach(function(arc) {
                // @ts-ignore
                if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
                    (arcs as number[][]).push(arc);
                }
            });
            });
        });

        // Stitch the arcs into one or more rings.
        arcs = stitch(topology, arcs as number[]) as number[][];

        // If more than one ring is returned,
        // at most one of these rings can be the exterior;
        // choose the one with the greatest absolute area.
        if ((n = arcs.length) > 1) {
            for (var i = 1, k = area(arcs[0]), ki, t; i < n; ++i) {
            if ((ki = area(arcs[i])) > k) {
                t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
            }
            }
        }

        return arcs;
        }).filter(function(arcs) {
        return arcs.length > 0;
        })
    };
}
