import { bbox } from "./bbox";
import { untransform } from "./transform";
import { Topology } from "../sever/extract";
import { Transform } from "./transform";
import { GeometryObject, geometryOutputs } from "../sever/geometry";

export default function(topology : Topology, transform : Transform | number) : Topology {
  if (topology.transform) throw new Error("already quantized");

  // @ts-ignore
  if (!transform || !transform.scale) {
    if (!((n = Math.floor(transform as number)) >= 2)) throw new Error("n must be ≥2");
    box = topology.bbox || bbox(topology);
    var x0 = box[0], y0 = box[1], x1 = box[2], y1 = box[3], n;
    transform = {scale: [x1 - x0 ? (x1 - x0) / (n - 1) : 1, y1 - y0 ? (y1 - y0) / (n - 1) : 1], translate: [x0, y0]};
  } else {
    box = topology.bbox;
  }

  var t = untransform(transform as Transform), box, key, inputs = topology.objects, outputs: geometryOutputs = {};

  function quantizePoint(point : [number, number]) : [number, number] {
    return t(point);
  }

  function quantizeGeometry(input : GeometryObject) : GeometryObject {
    let output;
    switch (input.type) {
      case "GeometryCollection": output = {type: "GeometryCollection", geometries: input.geometries.map(quantizeGeometry)} as GeometryObject; break;
      case "Point": output = {type: "Point", coordinates: quantizePoint(input.coordinates)} as GeometryObject;; break;
      case "MultiPoint": output = {type: "MultiPoint", coordinates: input.coordinates.map(quantizePoint)} as GeometryObject;; break;
      default: return input;
    }
    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;
    if (input.properties != null) output.properties = input.properties;
    return output;
  }

  function quantizeArc(input: number[][]) {
    var i = 0, j = 1, n = input.length, p, output = new Array(n); // pessimistic
    output[0] = t(input[0], 0);
    while (++i < n) if ((p = t(input[i], i))[0] || p[1]) output[j++] = p; // non-coincident points
    if (j === 1) output[j++] = [0, 0]; // an arc must have at least two points
    output.length = j;
    return output;
  }

  for (key in inputs) outputs[key] = quantizeGeometry(inputs[key]);

  return {
    type: "Topology",
    bbox: box,
    transform: transform,
    objects: outputs,
    // @ts-ignore
    arcs: topology.arcs.map(quantizeArc)
  } as Topology;
}
