[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / LineString

# Class: LineString

Defined in: src/geometry/LineString.ts:5

Geometry for GeoJSON independent Objects including Point, LineString, Polygon
- no GeometryCollection
- no MultiPoint, MultiLineString, MultiPolygon

## Extends

- [`Geometry`](Geometry.md)

## Constructors

### new LineString()

> **new LineString**(`coordinates`, `properties`?): [`LineString`](LineString.md)

Defined in: src/geometry/LineString.ts:7

#### Parameters

##### coordinates

\[`number`, `number`\][]

##### properties?

`any`

#### Returns

[`LineString`](LineString.md)

#### Overrides

[`Geometry`](Geometry.md).[`constructor`](Geometry.md#constructors)

## Properties

### bbox

> **bbox**: [`MBR`](../type-aliases/MBR.md)

Defined in: src/geometry/Geometry.ts:31

#### Inherited from

[`Geometry`](Geometry.md).[`bbox`](Geometry.md#bbox)

***

### coordinates

> `readonly` **coordinates**: `any`

Defined in: src/geometry/Geometry.ts:32

#### Inherited from

[`Geometry`](Geometry.md).[`coordinates`](Geometry.md#coordinates-1)

***

### projection

> `readonly` **projection**: [`Projection`](../interfaces/Projection.md) = `SphericalMercator`

Defined in: src/geometry/Geometry.ts:34

#### Inherited from

[`Geometry`](Geometry.md).[`projection`](Geometry.md#projection)

***

### properties

> **properties**: `any`

Defined in: src/geometry/Geometry.ts:33

#### Inherited from

[`Geometry`](Geometry.md).[`properties`](Geometry.md#properties-1)

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

#### Inherited from

[`Geometry`](Geometry.md).[`Properties`](Geometry.md#properties-2)

## Methods

### clone()

> **clone**(): [`Geometry`](Geometry.md)

Defined in: src/geometry/Geometry.ts:51

#### Returns

[`Geometry`](Geometry.md)

#### Inherited from

[`Geometry`](Geometry.md).[`clone`](Geometry.md#clone)

***

### equals()

> **equals**(`geometry`): `boolean`

Defined in: src/geometry/Geometry.ts:58

#### Parameters

##### geometry

[`Geometry`](Geometry.md)

#### Returns

`boolean`

#### Inherited from

[`Geometry`](Geometry.md).[`equals`](Geometry.md#equals)

***

### toGeoJSON()

> **toGeoJSON**(): [`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

Defined in: src/geometry/Geometry.ts:64

#### Returns

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Inherited from

[`Geometry`](Geometry.md).[`toGeoJSON`](Geometry.md#togeojson)

***

### toMultiPoint()

> **toMultiPoint**(): [`MultiPoint`](MultiPoint.md)

Defined in: src/geometry/LineString.ts:28

#### Returns

[`MultiPoint`](MultiPoint.md)

***

### toXY()

> **toXY**(): \[`number`, `number`\][]

Defined in: src/geometry/LineString.ts:22

#### Returns

\[`number`, `number`\][]

#### Overrides

[`Geometry`](Geometry.md).[`toXY`](Geometry.md#toxy)

***

### updateBBox()

> **updateBBox**(): `void`

Defined in: src/geometry/LineString.ts:11

#### Returns

`void`

#### Overrides

[`Geometry`](Geometry.md).[`updateBBox`](Geometry.md#updatebbox)

***

### fromFeature()

> `static` **fromFeature**(`feature`): [`LineString`](LineString.md)

Defined in: src/geometry/LineString.ts:55

#### Parameters

##### feature

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Returns

[`LineString`](LineString.md)

#### Overrides

`Geometry.fromFeature`

***

### fromGeoJSON()

> `static` **fromGeoJSON**(`feature`): [`Geometry`](Geometry.md) \| [`GeometryCollection`](GeometryCollection.md)

Defined in: src/geometry/Geometry.ts:82

#### Parameters

##### feature

[`GeoJSONGeometry`](../interfaces/GeoJSONGeometry.md) | [`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Returns

[`Geometry`](Geometry.md) \| [`GeometryCollection`](GeometryCollection.md)

#### Inherited from

[`Geometry`](Geometry.md).[`fromGeoJSON`](Geometry.md#fromgeojson)

***

### fromGeometry()

> `static` **fromGeometry**(`geometry`): [`LineString`](LineString.md)

Defined in: src/geometry/LineString.ts:51

按照逆时针方向排序点

#### Parameters

##### geometry

[`GeoJSONLineString`](../interfaces/GeoJSONLineString.md)

#### Returns

[`LineString`](LineString.md)

#### Overrides

`Geometry.fromGeometry`

***

### isLineString()

> `static` **isLineString**(`lineString`): `lineString is LineString`

Defined in: src/geometry/LineString.ts:64

#### Parameters

##### lineString

`any`

#### Returns

`lineString is LineString`
