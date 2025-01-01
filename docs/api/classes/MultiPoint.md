[rvgeo](../index.md) / MultiPoint

# MultiPoint

Defined in: [src/geometry/Point.ts:55](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L55)

## Extends

- [`GeometryCollection`](GeometryCollection.md)

## Constructors

### new MultiPoint()

```ts
new MultiPoint(geometries, properties?): MultiPoint
```

Defined in: [src/geometry/Point.ts:60](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L60)

#### Parameters

##### geometries

\[`number`, `number`\][] | [`Point`](Point.md)[]

##### properties?

`any`

#### Returns

[`MultiPoint`](MultiPoint.md)

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
readonly coordinates: [number, number][];
```

Defined in: [src/geometry/Point.ts:59](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L59)

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

Defined in: [src/geometry/Point.ts:126](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L126)

将点（类型或数组）、多点类型融合到此 MultiPoint 中

#### Parameters

##### geometry

\[`number`, `number`\] | [`Point`](Point.md) | [`MultiPoint`](MultiPoint.md)

#### Returns

`void`

#### Overrides

[`GeometryCollection`](GeometryCollection.md).[`addGeometry`](GeometryCollection.md#addgeometry)

***

### centroid()

```ts
centroid(values?): Point
```

Defined in: [src/geometry/Point.ts:88](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L88)

- 计算多点的重心
- calculate centroid of MultiPoint

#### Parameters

##### values?

`number`[]

可指定权重数组(可选) 会首先归一化权重数组

#### Returns

[`Point`](Point.md)

返回重心坐标

#### See

https://en.wikipedia.org/wiki/Centroid

***

### getCoodinates()

```ts
getCoodinates(): [number, number][]
```

Defined in: [src/geometry/Point.ts:77](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L77)

#### Returns

\[`number`, `number`\][]

***

### toGeoJSON()

```ts
toGeoJSON(): GeoJSONFeature
```

Defined in: [src/geometry/Point.ts:142](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L142)

#### Returns

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Overrides

[`GeometryCollection`](GeometryCollection.md).[`toGeoJSON`](GeometryCollection.md#togeojson)

***

### toXY()

```ts
toXY(): [number, number][]
```

Defined in: [src/geometry/Point.ts:73](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L73)

#### Returns

\[`number`, `number`\][]

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

Defined in: [src/geometry/Point.ts:168](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L168)

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

Defined in: [src/geometry/Point.ts:183](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L183)

#### Parameters

##### geometry

[`GeoJSONMultiPoint`](../interfaces/GeoJSONMultiPoint.md)

#### Returns

[`GeometryCollection`](GeometryCollection.md)

***

### isMultiPoint()

```ts
static isMultiPoint(geometry): geometry is MultiPoint
```

Defined in: [src/geometry/Point.ts:164](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L164)

#### Parameters

##### geometry

`any`

#### Returns

`geometry is MultiPoint`
