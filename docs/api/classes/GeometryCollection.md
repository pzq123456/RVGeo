[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / GeometryCollection

# Class: GeometryCollection

Defined in: src/geometry/Geometry.ts:101

## Extended by

- [`MultiPoint`](MultiPoint.md)
- [`MultiLineString`](MultiLineString.md)
- [`MultiPolygon`](MultiPolygon.md)

## Constructors

### new GeometryCollection()

> **new GeometryCollection**(`geometries`, `properties`?): [`GeometryCollection`](GeometryCollection.md)

Defined in: src/geometry/Geometry.ts:108

#### Parameters

##### geometries

([`Geometry`](Geometry.md) \| [`GeometryCollection`](GeometryCollection.md))[]

##### properties?

`any`

#### Returns

[`GeometryCollection`](GeometryCollection.md)

## Properties

### bbox

> **bbox**: [`MBR`](../type-aliases/MBR.md)

Defined in: src/geometry/Geometry.ts:104

***

### coordinates

> **coordinates**: `any`

Defined in: src/geometry/Geometry.ts:102

***

### geometries

> **geometries**: ([`Geometry`](Geometry.md) \| [`GeometryCollection`](GeometryCollection.md))[] = `[]`

Defined in: src/geometry/Geometry.ts:103

***

### projection

> **projection**: [`Projection`](../interfaces/Projection.md) = `SphericalMercator`

Defined in: src/geometry/Geometry.ts:106

***

### properties

> **properties**: `any`

Defined in: src/geometry/Geometry.ts:105

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

***

### addGeometry()

> **addGeometry**(`geometry`): `void`

Defined in: src/geometry/Geometry.ts:128

#### Parameters

##### geometry

`any`

#### Returns

`void`

***

### toGeoJSON()

> **toGeoJSON**(): [`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

Defined in: src/geometry/Geometry.ts:138

#### Returns

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

***

### toXY()

> **toXY**(): `any`

Defined in: src/geometry/Geometry.ts:119

#### Returns

`any`

***

### updateBBox()

> **updateBBox**(`geometry`): `void`

Defined in: src/geometry/Geometry.ts:121

#### Parameters

##### geometry

`any`

#### Returns

`void`
