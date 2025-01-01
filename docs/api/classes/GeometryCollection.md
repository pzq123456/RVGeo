[rvgeo](../index.md) / GeometryCollection

# GeometryCollection

Defined in: [src/geometry/Geometry.ts:101](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L101)

## Extended by

- [`MultiPoint`](MultiPoint.md)
- [`MultiLineString`](MultiLineString.md)
- [`MultiPolygon`](MultiPolygon.md)

## Constructors

### new GeometryCollection()

```ts
new GeometryCollection(geometries, properties?): GeometryCollection
```

Defined in: [src/geometry/Geometry.ts:108](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L108)

#### Parameters

##### geometries

([`Geometry`](Geometry.md) \| [`GeometryCollection`](GeometryCollection.md))[]

##### properties?

`any`

#### Returns

[`GeometryCollection`](GeometryCollection.md)

## Properties

### bbox

```ts
bbox: MBR;
```

Defined in: [src/geometry/Geometry.ts:104](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L104)

***

### coordinates

```ts
coordinates: any;
```

Defined in: [src/geometry/Geometry.ts:102](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L102)

***

### geometries

```ts
geometries: (Geometry | GeometryCollection)[] = [];
```

Defined in: [src/geometry/Geometry.ts:103](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L103)

***

### projection

```ts
projection: Projection = SphericalMercator;
```

Defined in: [src/geometry/Geometry.ts:106](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L106)

***

### properties

```ts
properties: any;
```

Defined in: [src/geometry/Geometry.ts:105](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L105)

## Methods

### \_update()

```ts
_update(geometry, index): void
```

Defined in: [src/geometry/Geometry.ts:133](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L133)

#### Parameters

##### geometry

`any`

##### index

`number`

#### Returns

`void`

***

### addGeometry()

```ts
addGeometry(geometry): void
```

Defined in: [src/geometry/Geometry.ts:128](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L128)

#### Parameters

##### geometry

`any`

#### Returns

`void`

***

### toGeoJSON()

```ts
toGeoJSON(): GeoJSONFeature
```

Defined in: [src/geometry/Geometry.ts:138](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L138)

#### Returns

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

***

### toXY()

```ts
toXY(): any
```

Defined in: [src/geometry/Geometry.ts:119](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L119)

#### Returns

`any`

***

### updateBBox()

```ts
updateBBox(geometry): void
```

Defined in: [src/geometry/Geometry.ts:121](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L121)

#### Parameters

##### geometry

`any`

#### Returns

`void`
