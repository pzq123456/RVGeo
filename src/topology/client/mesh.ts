import { object } from "./feature";
import { stitch } from "./stitch";
import { Topology } from '../sever/extract';
import { GeometryObject } from '../sever/geometry';

interface filter {
    (a : GeometryObject, b : GeometryObject) : boolean;
}

interface GeomsByArc extends Array<{i: number, g: GeometryObject}> {}

export function mesh(topology : Topology) {
// @ts-ignore
  return object(topology, meshArcs.apply(this, arguments));
}

export function meshArcs(topology : Topology, object : GeometryObject, filter : filter) {
    var arcs, i, n;
    if (arguments.length > 1) arcs = extractArcs(topology, object, filter);
    // @ts-ignore
    else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;
    return {type: "MultiLineString", arcs: stitch(topology, arcs)};
  }
  
  function extractArcs(topology : Topology, object : GeometryObject, filter : filter) {
    topology;
    var arcs = [] as number[],
        geomsByArc = [] as GeomsByArc[],
        geom: GeometryObject;
  
    function extract0(i : number) {
      var j = i < 0 ? ~i : i;
      (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
    }
  
    function extract1(arcs : number[]) {
      arcs.forEach(extract0);
    }
  
    function extract2(arcs : number[]) {
      arcs.forEach(extract1 as any);
    }
  
    function extract3(arcs : number[]) {
      arcs.forEach(extract2 as any);
    }
  
    function geometry(o : GeometryObject) {
      switch (geom = o, o.type) {
        case "GeometryCollection": o.geometries.forEach(geometry); break;
        case "LineString": extract1(o.arcs); break;
        case "MultiLineString": case "Polygon": extract2(o.arcs); break;
        case "MultiPolygon": extract3(o.arcs); break;
      }
    }
  
    geometry(object);
  
    geomsByArc.forEach(filter == null
        ? function(geoms) { arcs.push(geoms[0].i); }
        : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });
  
    return arcs;
  }
  
