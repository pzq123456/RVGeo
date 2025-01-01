[rvgeo](../index.md) / MultiPolygon

# MultiPolygon

Defined in: [src/geometry/Polygon.ts:52](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L52)

## Extends

- [`GeometryCollection`](GeometryCollection.md)

## Constructors

### new MultiPolygon()

```ts
new MultiPolygon(geometries, properties?): MultiPolygon
```

Defined in: [src/geometry/Polygon.ts:55](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L55)

#### Parameters

##### geometries

\[`number`, `number`\][][][] | [`Polygon`](Polygon.md)[]

##### properties?

`any`

#### Returns

[`MultiPolygon`](MultiPolygon.md)

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
readonly coordinates: [number, number][][][];
```

Defined in: [src/geometry/Polygon.ts:53](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L53)

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

Defined in: [src/geometry/Polygon.ts:82](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L82)

#### Parameters

##### geometry

\[`number`, `number`\][][] | [`Polygon`](Polygon.md)

#### Returns

`void`

#### Overrides

[`GeometryCollection`](GeometryCollection.md).[`addGeometry`](GeometryCollection.md#addgeometry)

***

### getCoodinates()

```ts
getCoodinates(): [number, number][][][]
```

Defined in: [src/geometry/Polygon.ts:68](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L68)

#### Returns

\[`number`, `number`\][][][]

***

### toGeoJSON()

```ts
toGeoJSON(): GeoJSONFeature
```

Defined in: [src/geometry/Polygon.ts:94](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L94)

#### Returns

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Overrides

[`GeometryCollection`](GeometryCollection.md).[`toGeoJSON`](GeometryCollection.md#togeojson)

***

### toMultiPoint()

```ts
toMultiPoint(): MultiPoint
```

Defined in: [src/geometry/Polygon.ts:72](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L72)

#### Returns

[`MultiPoint`](MultiPoint.md)

***

### toXY()

```ts
toXY(): [number, number][][][]
```

Defined in: [src/geometry/Polygon.ts:77](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L77)

#### Returns

\[`number`, `number`\][][][]

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

Defined in: [src/geometry/Polygon.ts:112](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L112)

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

Defined in: [src/geometry/Polygon.ts:122](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L122)

#### Parameters

##### geometry

[`GeoJSONMultiPolygon`](../interfaces/GeoJSONMultiPolygon.md)

#### Returns

[`GeometryCollection`](GeometryCollection.md)
