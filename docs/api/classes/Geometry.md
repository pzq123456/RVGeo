[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / Geometry

# Class: `abstract` Geometry

Defined in: src/geometry/Geometry.ts:30

Geometry for GeoJSON independent Objects including Point, LineString, Polygon
- no GeometryCollection
- no MultiPoint, MultiLineString, MultiPolygon

## Extended by

- [`Point`](Point.md)
- [`LineString`](LineString.md)
- [`Polygon`](Polygon.md)

## Constructors

### new Geometry()

> **new Geometry**(`coordinates`, `properties`?): [`Geometry`](Geometry.md)

Defined in: src/geometry/Geometry.ts:40

#### Parameters

##### coordinates

`any`

##### properties?

`any`

#### Returns

[`Geometry`](Geometry.md)

## Properties

### bbox

> **bbox**: [`MBR`](../type-aliases/MBR.md)

Defined in: src/geometry/Geometry.ts:31

***

### coordinates

> `readonly` **coordinates**: `any`

Defined in: src/geometry/Geometry.ts:32

***

### projection

> `readonly` **projection**: [`Projection`](../interfaces/Projection.md) = `SphericalMercator`

Defined in: src/geometry/Geometry.ts:34

***

### properties

> **properties**: `any`

Defined in: src/geometry/Geometry.ts:33

***

### fromFeature

> `static` **fromFeature**: `any`

Defined in: src/geometry/Geometry.ts:37

***

### fromGeometry

> `static` **fromGeometry**: `any`

Defined in: src/geometry/Geometry.ts:38

## Accessors

### Properties

#### Set Signature

> **set** **Properties**(`properties`): `void`

Defined in: src/geometry/Geometry.ts:49

##### Parameters

###### properties

`any`

##### Returns

`void`

## Methods

### clone()

> **clone**(): [`Geometry`](Geometry.md)

Defined in: src/geometry/Geometry.ts:51

#### Returns

[`Geometry`](Geometry.md)

***

### equals()

> **equals**(`geometry`): `boolean`

Defined in: src/geometry/Geometry.ts:58

#### Parameters

##### geometry

[`Geometry`](Geometry.md)

#### Returns

`boolean`

***

### toGeoJSON()

> **toGeoJSON**(): [`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

Defined in: src/geometry/Geometry.ts:64

#### Returns

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

***

### toXY()

> **toXY**(): `any`

Defined in: src/geometry/Geometry.ts:35

#### Returns

`any`

***

### updateBBox()

> `abstract` **updateBBox**(): `void`

Defined in: src/geometry/Geometry.ts:62

#### Returns

`void`

***

### fromGeoJSON()

> `static` **fromGeoJSON**(`feature`): [`Geometry`](Geometry.md) \| [`GeometryCollection`](GeometryCollection.md)

Defined in: src/geometry/Geometry.ts:82

#### Parameters

##### feature

[`GeoJSONGeometry`](../interfaces/GeoJSONGeometry.md) | [`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Returns

[`Geometry`](Geometry.md) \| [`GeometryCollection`](GeometryCollection.md)
