import { transform } from "./transform";
import { Topology } from "../sever/extract";
import { GeometryObject } from '../sever/geometry';


export function reverse(array : any[], n : number) {
  var t, j = array.length, i = j - n;
  while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
}

export function feature(topology : Topology, o : GeometryObject | string) {
  if (typeof o === "string") o = topology.objects[o];
  return o.type === "GeometryCollection"
      ? {type: "FeatureCollection", features: o.geometries.map(function(o : GeometryObject) { return features(topology, o); })}
      : features(topology, o);
}

function features(topology : Topology, o : GeometryObject) {
  var id = o.id,
      bbox = o.bbox,
      properties = o.properties == null ? {} : o.properties,
      geometry = object(topology, o);
  let res =  id == null && bbox == null ? {type: "Feature", properties: properties, geometry: geometry}
      : bbox == null ? {type: "Feature", id: id, properties: properties, geometry: geometry}
      : {type: "Feature", id: id, bbox: bbox, properties: properties, geometry: geometry};
  // if without properties, delete it
  if (Object.keys(properties).length === 0) {
    delete res.properties;
  }
  return res;
}

export function object(topology : Topology, o : GeometryObject) : GeometryObject {
  let transformPoint = transform(topology.transform),
  arcs = topology.arcs as [number, number][][];

  function arc(i : number, points : [number, number][]) {
    if (points.length) points.pop();
    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length as number; k < n; ++k) {
      points.push(transformPoint(a[k], k));
    }
    if (i < 0) reverse(points, n);
  }

  function point(p : [number, number]) {
    return transformPoint(p);
  }

  function line(arcs : number[]) {
    var points = [] as [number, number][];
    for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
    if (points.length < 2) points.push(points[0]); // This should never happen per the specification.
    return points;
  }

  function ring(arcs : number[]) {
    var points = line(arcs);
    while (points.length < 4) points.push(points[0]); // This may happen if an arc has only two points.
    return points;
  }

  function polygon(arcs : number[][]) {
    return arcs.map(ring);
  }

  function geometry(o : GeometryObject) : GeometryObject {
    var type = o.type, coordinates;
    switch (type) {
      case "GeometryCollection": return {type: type, geometries: o.geometries.map(geometry)};
      case "Point": coordinates = point(o.coordinates); break;
      case "MultiPoint": coordinates = o.coordinates.map(point); break;
      case "LineString": coordinates = line(o.arcs); break;
      case "MultiLineString": coordinates = o.arcs.map(line); break;
      case "Polygon": coordinates = polygon(o.arcs); break;
      case "MultiPolygon": coordinates = o.arcs.map(polygon); break;
      // @ts-ignore
      default: return null;
    }
    return {type: type, coordinates: coordinates};
  }

  return geometry(o);
}
