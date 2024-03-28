import { GeometryObject, geometryOutputs } from "./geometry";

const hasOwnProperty = Object.prototype.hasOwnProperty;

// Computes the bounding box of the specified hash of GeoJSON objects.
export function bounds(objects: geometryOutputs) : [number,number,number,number] | undefined {
  var x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  function boundGeometry(geometry : GeometryObject) {
    if (geometry != null && geometry.type && hasOwnProperty.call(boundGeometryType, geometry.type)){
      boundGeometryType[geometry.type](geometry);
    }
  }

  const boundGeometryType = {
    "GeometryCollection": function(o) { o.geometries.forEach(boundGeometry); },
    "Point": function(o) { boundPoint(o.coordinates); },
    "MultiPoint": function(o) { o.coordinates.forEach(boundPoint); },
    "LineString": function(o) { boundLine(o.arcs); },
    "MultiLineString": function(o) { o.arcs.forEach(boundLine); },
    "Polygon": function(o) { o.arcs.forEach(boundLine); },
    "MultiPolygon": function(o) { o.arcs.forEach(boundMultiLine); }
  } as {[key: string]: (o: GeometryObject) => void};



  function boundPoint(coordinates : [number,number]) {
    var x = coordinates[0],
        y = coordinates[1];
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  function boundLine(coordinates : [number,number][]) {
    coordinates.forEach(boundPoint);
  }

  function boundMultiLine(coordinates : [number,number][][]) {
    coordinates.forEach(boundLine);
  }

  for (let key in objects){
    //@ts-ignore
    boundGeometry(objects[key]);
  }

  return x1 >= x0 && y1 >= y0 ? [x0, y0, x1, y1] : undefined;
}
