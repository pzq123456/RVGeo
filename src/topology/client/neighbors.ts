import { bisect } from "./utils";
import { GeometryObject } from "../sever/geometry";

interface Object {
    type: string;
    arcs: number[][];
    geometries?: GeometryObject;
}

interface Neighbor {
    [key: number]: number[];
}

export function neighbors(objects : Object[]) : Neighbor[] {
  var indexesByArc = {} as {[key: number]: number[]},
      neighbors = objects.map(function() { return []; });

  function line(arcs : number[], i : number) {
    arcs.forEach(function(a) {
    // @ts-ignore
      if (a < 0) a = ~a;
      var o = indexesByArc[a];
      if (o) o.push(i);
      else indexesByArc[a] = [i];
    });
  }

  function polygon(arcs : number[][], i : number) {
    arcs.forEach(function(arc) { line(arc, i); });
  }

  function geometry(o : Object, i : number) {
    if (o.type === "GeometryCollection"){
        (o as GeometryObject).geometries.forEach(function(o : Object) { geometry(o, i); });
    } 
    else if (o.type in geometryType){
        // @ts-ignore
        geometryType[o.type](o.arcs, i);
    } 
  }

  const geometryType = {
    LineString: line,
    MultiLineString: polygon,
    Polygon: polygon,
    MultiPolygon: function(arcs : number[][][], i : number) { arcs.forEach(function(arc) { polygon(arc, i); }); }
  };

  objects.forEach(geometry);

  for (let i in indexesByArc) {
    for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
      for (var k = j + 1; k < m; ++k) {
        var ij = indexes[j], ik = indexes[k], n;
        // @ts-ignore
        if ((n = neighbors[ij])[i = bisect(n, ik)] !== ik) n.splice(i, 0, ik);
        // @ts-ignore
        if ((n = neighbors[ik])[i = bisect(n, ij)] !== ij) n.splice(i, 0, ij);
      }
    }
  }

  return neighbors;
}
