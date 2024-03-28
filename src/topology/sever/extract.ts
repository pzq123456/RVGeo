import { GeometryObject, geometryOutputs} from './geometry';
import { quantized } from './prequantize';

const hasOwnProperty = Object.prototype.hasOwnProperty;

export interface Arc {
    0: number;
    1: number;
    next?: Arc;
}

export interface Topology {
    type: string;
    coordinates: [number,number][];
    lines: Arc[];
    rings: Arc[];
    arcs?: any[];
    objects: geometryOutputs;
    bbox?: [number,number,number,number];
    transform?: quantized;
}

// Extracts the lines and rings from the specified hash of geometry objects.
//
// Returns an object with three properties:
//
// * coordinates - shared buffer of [x, y] coordinates
// * lines - lines extracted from the hash, of the form [start, end]
// * rings - rings extracted from the hash, of the form [start, end]
//
// For each ring or line, start and end represent inclusive indexes into the
// coordinates buffer. For rings (and closed lines), coordinates[start] equals
// coordinates[end].
//
// For each line or polygon geometry in the input hash, including nested
// geometries as in geometry collections, the `coordinates` array is replaced
// with an equivalent `arcs` array that, for each line (for line string
// geometries) or ring (for polygon geometries), points to one of the above
// lines or rings.

export function extract(objects : geometryOutputs ) : Topology {
    let index = -1;
    let coordinates: [number,number][] = [];
    let lines: Arc[] = [];
    let rings: Arc[] = [];

    function extractGeometry(geometry : GeometryObject) {
        if (geometry && geometry.type &&hasOwnProperty.call(extractGeometryType, geometry.type)) extractGeometryType[geometry.type](geometry);
    }

    const extractGeometryType : { [key: string]: (o: GeometryObject) => void } = {
        GeometryCollection: function(o) { o.geometries.forEach(extractGeometry); },
        LineString: function(o) { o.arcs = extractLine(o.arcs); },
        MultiLineString: function(o) { o.arcs = o.arcs.map(extractLine); },
        Polygon: function(o) { o.arcs = o.arcs.map(extractRing); },
        MultiPolygon: function(o) { o.arcs = o.arcs.map(extractMultiRing); }
    };

    function extractLine(line : [number,number][]) {
        for (var i = 0, n = line.length; i < n; ++i) coordinates[++index] = line[i];
        var arc = {0: index - n + 1, 1: index};
        lines.push(arc);
        return arc;
    }

    function extractRing(ring : [number,number][]) {
        for (var i = 0, n = ring.length; i < n; ++i) coordinates[++index] = ring[i];
        var arc = {0: index - n + 1, 1: index};
        rings.push(arc);
        return arc;
    }

    function extractMultiRing(rings : [number,number][][]) {
        return rings.map(extractRing);
    }

    for (var key in objects) {
        extractGeometry(objects[key]);
    }

    return {
        type: "Topology",
        coordinates: coordinates,
        lines: lines,
        rings: rings,
        objects: objects
    };
}
