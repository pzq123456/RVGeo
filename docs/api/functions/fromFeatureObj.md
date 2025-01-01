[rvgeo](../index.md) / fromFeatureObj

# fromFeatureObj()

```ts
function fromFeatureObj(feature): 
  | Geometry
  | GeometryCollection
```

Defined in: [src/geometry/Factory.ts:45](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Factory.ts#L45)

Factory function for creating geometry objects from GeoJSON Feature objects
- you can use this function to create inner geometry from Features
- about Feature objects

## Parameters

### feature

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md) | [`GeoJSONFeatureCollection`](../interfaces/GeoJSONFeatureCollection.md)

## Returns

  \| [`Geometry`](../classes/Geometry.md)
  \| [`GeometryCollection`](../classes/GeometryCollection.md)

## See

GeoJSONFeature
