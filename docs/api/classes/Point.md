[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / Point

# Class: Point

Defined in: src/geometry/Point.ts:10

Point geometry

## Extends

- [`Geometry`](Geometry.md)

## Constructors

### new Point()

> **new Point**(`coordinates`, `properties`?): [`Point`](Point.md)

Defined in: src/geometry/Point.ts:19

#### Parameters

##### coordinates

`any`

##### properties?

`any`

#### Returns

[`Point`](Point.md)

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

### lat

#### Get Signature

> **get** **lat**(): `number`

Defined in: src/geometry/Point.ts:15

##### Returns

`number`

***

### lon

#### Get Signature

> **get** **lon**(): `number`

Defined in: src/geometry/Point.ts:12

##### Returns

`number`

***

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

### toXY()

> **toXY**(): \[`number`, `number`\]

Defined in: src/geometry/Point.ts:27

#### Returns

\[`number`, `number`\]

#### Overrides

[`Geometry`](Geometry.md).[`toXY`](Geometry.md#toxy)

***

### updateBBox()

> **updateBBox**(): `void`

Defined in: src/geometry/Point.ts:23

#### Returns

`void`

#### Overrides

[`Geometry`](Geometry.md).[`updateBBox`](Geometry.md#updatebbox)

***

### fromFeature()

> `static` **fromFeature**(`feature`): [`Point`](Point.md)

Defined in: src/geometry/Point.ts:39

#### Parameters

##### feature

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Returns

[`Point`](Point.md)

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

> `static` **fromGeometry**(`geometry`): [`Point`](Point.md)

Defined in: src/geometry/Point.ts:35

#### Parameters

##### geometry

[`GeoJSONPoint`](../interfaces/GeoJSONPoint.md)

#### Returns

[`Point`](Point.md)

#### Overrides

`Geometry.fromGeometry`

***

### isPoint()

> `static` **isPoint**(`geometry`): `geometry is Point`

Defined in: src/geometry/Point.ts:31

#### Parameters

##### geometry

`any`

#### Returns

`geometry is Point`
