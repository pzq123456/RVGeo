import { GeometryObject, geometryOutputs } from "./geometry";
const hasOwnProperty = Object.prototype.hasOwnProperty;

export function prequantize(objects : geometryOutputs, bbox : [number,number,number,number], n : number) : quantized {
    var x0 = bbox[0],
        y0 = bbox[1],
        x1 = bbox[2],
        y1 = bbox[3],
        kx = x1 - x0 ? (n - 1) / (x1 - x0) : 1,
        ky = y1 - y0 ? (n - 1) / (y1 - y0) : 1;

    function quantizePoint(input : [number,number]) : [number,number] {
        return [Math.round((input[0] - x0) * kx), Math.round((input[1] - y0) * ky)];
    }

    function quantizePoints(input : [number,number][], m: number) {
        var i = -1,
            j = 0,
            n = input.length,
            output = new Array(n), // pessimistic
            pi,
            px,
            py,
            x,
            y;

        while (++i < n) {
        pi = input[i];
        x = Math.round((pi[0] - x0) * kx);
        y = Math.round((pi[1] - y0) * ky);
        if (x !== px || y !== py) output[j++] = [px = x, py = y]; // non-coincident points
        }

        output.length = j;
        while (j < m) j = output.push([output[0][0], output[0][1]]);
        return output;
    }

    function quantizeLine(input : [number,number][]) {
        return quantizePoints(input, 2);
    }

    function quantizeRing(input : [number,number][]) {
        return quantizePoints(input, 4);
    }

    function quantizePolygon(input : [number,number][][]) {
        return input.map(quantizeRing);
    }

    function quantizeGeometry(o : GeometryObject) {
        if (o != null && o.type &&hasOwnProperty.call(quantizeGeometryType, o.type)) quantizeGeometryType[o.type](o);
    }

    const quantizeGeometryType = {
        GeometryCollection: function(o) { o.geometries.forEach(quantizeGeometry); },
        Point: function(o) { o.coordinates = quantizePoint(o.coordinates); },
        MultiPoint: function(o) { o.coordinates = o.coordinates.map(quantizePoint); },
        LineString: function(o) { o.arcs = quantizeLine(o.arcs); },
        MultiLineString: function(o) { o.arcs = o.arcs.map(quantizeLine); },
        Polygon: function(o) { o.arcs = quantizePolygon(o.arcs); },
        MultiPolygon: function(o) { o.arcs = o.arcs.map(quantizePolygon); }
    } as {[key: string]: (o: GeometryObject) => void};

    for (var key in objects) {
        quantizeGeometry(objects[key]);
    }

    return {
        scale: [1 / kx, 1 / ky],
        translate: [x0, y0]
    };
}

export interface quantized {
    scale: [number,number],
    translate: [number,number]
}
