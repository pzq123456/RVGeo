import { bounds } from "./bounds";
import { cut } from "./cut";
import { dedup, dedupedTopology } from "./dedup";
import { delta } from "./delta";
import { Arc, extract } from "./extract";
import { geometry, GeometryObject, geometryInputs } from "./geometry";
import { hashmap } from "./hash";
import { prequantize } from "./prequantize";

const hasOwnProperty = Object.prototype.hasOwnProperty;

// Constructs the TopoJSON Topology for the specified hash of features.
// Each object in the specified hash must be a GeoJSON object,
// meaning FeatureCollection, a Feature or a geometry object.
export function topology(objects: geometryInputs, quantization: number) : dedupedTopology {
  let geoObjects = geometry(objects);
  var bbox = bounds(geoObjects),
      transform = quantization > 0 && bbox && prequantize(geoObjects, bbox, quantization),
      topology = dedup(cut(extract(geoObjects)) as dedupedTopology),
      coordinates = topology.coordinates,
      indexByArc = hashmap(topology.arcs.length * 1.4, hashArc, equalArc);

  // objects = topology.objects; // for garbage collection

  topology.bbox = bbox;
  topology.arcs = topology.arcs.map(function(arc, i) {
    indexByArc.set(arc, i);
    return coordinates.slice(arc[0] as number, arc[1] as number + 1 );
  }) as [number,number][][];

  // @ts-ignore
  delete topology.coordinates;
  // topology.coordinates = null as any;
  coordinates = null as any;

  function indexGeometry(geometry : GeometryObject) {
    if (geometry && geometry.type &&hasOwnProperty.call(indexGeometryType, geometry.type)) indexGeometryType[geometry.type](geometry);
  }

  var indexGeometryType = {
    GeometryCollection: function(o) { o.geometries.forEach(indexGeometry); },
    LineString: function(o) { o.arcs = indexArcs(o.arcs); },
    MultiLineString: function(o) { o.arcs = o.arcs.map(indexArcs); },
    Polygon: function(o) { o.arcs = o.arcs.map(indexArcs); },
    MultiPolygon: function(o) { o.arcs = o.arcs.map(indexMultiArcs); }
  } as {[key: string]: (o: GeometryObject) => void};

  function indexArcs(arc : Arc) {
    var indexes = [];
    do {
      var index = indexByArc.get(arc);
      indexes.push(arc[0] < arc[1] ? index : ~index);
    } while (arc = arc.next as Arc);
    return indexes;
  }

  function indexMultiArcs(arcs : Arc[]) {
    return arcs.map(indexArcs);
  }

  for (var key in geoObjects) {
    indexGeometry(geoObjects[key]);
  }

  if (transform) {
    topology.transform = transform;
    topology.arcs = delta(topology.arcs);
  }

  return topology;
}

function hashArc(arc : [number,number]) {
  var i = arc[0], j = arc[1], t;
  if (j < i) t = i, i = j, j = t;
  return i + 31 * j;
}

function equalArc(arcA : [number,number], arcB : [number,number]) {
  var ia = arcA[0], ja = arcA[1],
      ib = arcB[0], jb = arcB[1], t;
  if (ja < ia) t = ia, ia = ja, ja = t;
  if (jb < ib) t = ib, ib = jb, jb = t;
  return ia === ib && ja === jb;
}
