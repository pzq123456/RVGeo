[rvgeo](../index.md) / MultiLineString

# MultiLineString

Defined in: [src/geometry/LineString.ts:69](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L69)

## Extends

- [`GeometryCollection`](GeometryCollection.md)

## Constructors

### new MultiLineString()

```ts
new MultiLineString(geometries, properties?): MultiLineString
```

Defined in: [src/geometry/LineString.ts:72](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L72)

#### Parameters

##### geometries

\[`number`, `number`\][][] | [`LineString`](LineString.md)[]

##### properties?

`any`

#### Returns

[`MultiLineString`](MultiLineString.md)

#### Overrides

[`GeometryCollection`](GeometryCollection.md).[`constructor`](GeometryCollection.md#constructors)

## Properties

### bbox

```ts
bbox: MBR;
```

Defined in: [src/geometry/Geometry.ts:104](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L104)

#### Inherited from

[`GeometryCollection`](GeometryCollection.md).[`bbox`](GeometryCollection.md#bbox)

***

### coordinates

```ts
coordinates: [number, number][][];
```

Defined in: [src/geometry/LineString.ts:70](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L70)

#### Overrides

[`GeometryCollection`](GeometryCollection.md).[`coordinates`](GeometryCollection.md#coordinates)

***

### geometries

```ts
geometries: (Geometry | GeometryCollection)[] = [];
```

Defined in: [src/geometry/Geometry.ts:103](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L103)

#### Inherited from

[`GeometryCollection`](GeometryCollection.md).[`geometries`](GeometryCollection.md#geometries-1)

***

### projection

```ts
projection: Projection = SphericalMercator;
```

Defined in: [src/geometry/Geometry.ts:106](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L106)

#### Inherited from

[`GeometryCollection`](GeometryCollection.md).[`projection`](GeometryCollection.md#projection)

***

### properties

```ts
properties: any;
```

Defined in: [src/geometry/Geometry.ts:105](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L105)

#### Inherited from

[`GeometryCollection`](GeometryCollection.md).[`properties`](GeometryCollection.md#properties-1)

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

#### Inherited from

[`GeometryCollection`](GeometryCollection.md).[`_update`](GeometryCollection.md#update)

***

### addGeometry()

```ts
addGeometry(geometry): void
```

Defined in: [src/geometry/LineString.ts:98](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L98)

#### Parameters

##### geometry

\[`number`, `number`\][] | [`LineString`](LineString.md)

#### Returns

`void`

#### Overrides

[`GeometryCollection`](GeometryCollection.md).[`addGeometry`](GeometryCollection.md#addgeometry)

***

### getCoodinates()

```ts
getCoodinates(): [number, number][][]
```

Defined in: [src/geometry/LineString.ts:85](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L85)

#### Returns

\[`number`, `number`\][][]

***

### toGeoJSON()

```ts
toGeoJSON(): GeoJSONFeature
```

Defined in: [src/geometry/LineString.ts:110](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L110)

#### Returns

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Overrides

[`GeometryCollection`](GeometryCollection.md).[`toGeoJSON`](GeometryCollection.md#togeojson)

***

### toMultiPoint()

```ts
toMultiPoint(): MultiPoint
```

Defined in: [src/geometry/LineString.ts:89](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L89)

#### Returns

[`MultiPoint`](MultiPoint.md)

***

### toXY()

```ts
toXY(): [number, number][][]
```

Defined in: [src/geometry/LineString.ts:93](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L93)

#### Returns

\[`number`, `number`\][][]

#### Overrides

[`GeometryCollection`](GeometryCollection.md).[`toXY`](GeometryCollection.md#toxy)

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

#### Inherited from

[`GeometryCollection`](GeometryCollection.md).[`updateBBox`](GeometryCollection.md#updatebbox)

***

### fromFeature()

```ts
static fromFeature(feature): GeometryCollection
```

Defined in: [src/geometry/LineString.ts:128](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L128)

#### Parameters

##### feature

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Returns

[`GeometryCollection`](GeometryCollection.md)

***

### fromGeometry()

```ts
static fromGeometry(geometry): GeometryCollection
```

Defined in: [src/geometry/LineString.ts:138](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L138)

#### Parameters

##### geometry

[`GeoJSONMultiLineString`](../interfaces/GeoJSONMultiLineString.md)

#### Returns

[`GeometryCollection`](GeometryCollection.md)
