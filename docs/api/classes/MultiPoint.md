[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / MultiPoint

# Class: MultiPoint

Defined in: src/geometry/Point.ts:55

## Extends

- [`GeometryCollection`](GeometryCollection.md)

## Constructors

### new MultiPoint()

> **new MultiPoint**(`geometries`, `properties`?): [`MultiPoint`](MultiPoint.md)

Defined in: src/geometry/Point.ts:60

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

> **bbox**: [`MBR`](../type-aliases/MBR.md)

Defined in: src/geometry/Geometry.ts:104

#### Inherited from

[`GeometryCollection`](GeometryCollection.md).[`bbox`](GeometryCollection.md#bbox)

***

### coordinates

> `readonly` **coordinates**: \[`number`, `number`\][]

Defined in: src/geometry/Point.ts:59

#### Overrides

[`GeometryCollection`](GeometryCollection.md).[`coordinates`](GeometryCollection.md#coordinates)

***

### geometries

> **geometries**: ([`Geometry`](Geometry.md) \| [`GeometryCollection`](GeometryCollection.md))[] = `[]`

Defined in: src/geometry/Geometry.ts:103

#### Inherited from

[`GeometryCollection`](GeometryCollection.md).[`geometries`](GeometryCollection.md#geometries-1)

***

### projection

> **projection**: [`Projection`](../interfaces/Projection.md) = `SphericalMercator`

Defined in: src/geometry/Geometry.ts:106

#### Inherited from

[`GeometryCollection`](GeometryCollection.md).[`projection`](GeometryCollection.md#projection)

***

### properties

> **properties**: `any`

Defined in: src/geometry/Geometry.ts:105

#### Inherited from

[`GeometryCollection`](GeometryCollection.md).[`properties`](GeometryCollection.md#properties-1)

## Methods

### \_update()

> **\_update**(`geometry`, `index`): `void`

Defined in: src/geometry/Geometry.ts:133

#### Parameters

##### geometry

`any`

##### index

`number`

#### Returns

`void`

#### Inherited from

[`GeometryCollection`](GeometryCollection.md).[`_update`](GeometryCollection.md#_update)

***

### addGeometry()

> **addGeometry**(`geometry`): `void`

Defined in: src/geometry/Point.ts:126

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

> **centroid**(`values`?): [`Point`](Point.md)

Defined in: src/geometry/Point.ts:88

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

> **getCoodinates**(): \[`number`, `number`\][]

Defined in: src/geometry/Point.ts:77

#### Returns

\[`number`, `number`\][]

***

### toGeoJSON()

> **toGeoJSON**(): [`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

Defined in: src/geometry/Point.ts:142

#### Returns

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Overrides

[`GeometryCollection`](GeometryCollection.md).[`toGeoJSON`](GeometryCollection.md#togeojson)

***

### toXY()

> **toXY**(): \[`number`, `number`\][]

Defined in: src/geometry/Point.ts:73

#### Returns

\[`number`, `number`\][]

#### Overrides

[`GeometryCollection`](GeometryCollection.md).[`toXY`](GeometryCollection.md#toxy)

***

### updateBBox()

> **updateBBox**(`geometry`): `void`

Defined in: src/geometry/Geometry.ts:121

#### Parameters

##### geometry

`any`

#### Returns

`void`

#### Inherited from

[`GeometryCollection`](GeometryCollection.md).[`updateBBox`](GeometryCollection.md#updatebbox)

***

### fromFeature()

> `static` **fromFeature**(`feature`): [`GeometryCollection`](GeometryCollection.md)

Defined in: src/geometry/Point.ts:168

#### Parameters

##### feature

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Returns

[`GeometryCollection`](GeometryCollection.md)

***

### fromGeometry()

> `static` **fromGeometry**(`geometry`): [`GeometryCollection`](GeometryCollection.md)

Defined in: src/geometry/Point.ts:183

#### Parameters

##### geometry

[`GeoJSONMultiPoint`](../interfaces/GeoJSONMultiPoint.md)

#### Returns

[`GeometryCollection`](GeometryCollection.md)

***

### isMultiPoint()

> `static` **isMultiPoint**(`geometry`): `geometry is MultiPoint`

Defined in: src/geometry/Point.ts:164

#### Parameters

##### geometry

`any`

#### Returns

`geometry is MultiPoint`
