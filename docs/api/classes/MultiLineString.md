[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / MultiLineString

# Class: MultiLineString

Defined in: src/geometry/LineString.ts:69

## Extends

- [`GeometryCollection`](GeometryCollection.md)

## Constructors

### new MultiLineString()

> **new MultiLineString**(`geometries`, `properties`?): [`MultiLineString`](MultiLineString.md)

Defined in: src/geometry/LineString.ts:72

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

> **bbox**: [`MBR`](../type-aliases/MBR.md)

Defined in: src/geometry/Geometry.ts:104

#### Inherited from

[`GeometryCollection`](GeometryCollection.md).[`bbox`](GeometryCollection.md#bbox)

***

### coordinates

> **coordinates**: \[`number`, `number`\][][]

Defined in: src/geometry/LineString.ts:70

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

Defined in: src/geometry/LineString.ts:98

#### Parameters

##### geometry

\[`number`, `number`\][] | [`LineString`](LineString.md)

#### Returns

`void`

#### Overrides

[`GeometryCollection`](GeometryCollection.md).[`addGeometry`](GeometryCollection.md#addgeometry)

***

### getCoodinates()

> **getCoodinates**(): \[`number`, `number`\][][]

Defined in: src/geometry/LineString.ts:85

#### Returns

\[`number`, `number`\][][]

***

### toGeoJSON()

> **toGeoJSON**(): [`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

Defined in: src/geometry/LineString.ts:110

#### Returns

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Overrides

[`GeometryCollection`](GeometryCollection.md).[`toGeoJSON`](GeometryCollection.md#togeojson)

***

### toMultiPoint()

> **toMultiPoint**(): [`MultiPoint`](MultiPoint.md)

Defined in: src/geometry/LineString.ts:89

#### Returns

[`MultiPoint`](MultiPoint.md)

***

### toXY()

> **toXY**(): \[`number`, `number`\][][]

Defined in: src/geometry/LineString.ts:93

#### Returns

\[`number`, `number`\][][]

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

Defined in: src/geometry/LineString.ts:128

#### Parameters

##### feature

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Returns

[`GeometryCollection`](GeometryCollection.md)

***

### fromGeometry()

> `static` **fromGeometry**(`geometry`): [`GeometryCollection`](GeometryCollection.md)

Defined in: src/geometry/LineString.ts:138

#### Parameters

##### geometry

[`GeoJSONMultiLineString`](../interfaces/GeoJSONMultiLineString.md)

#### Returns

[`GeometryCollection`](GeometryCollection.md)
