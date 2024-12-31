[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / CRS

# Interface: CRS

Defined in: src/geo/crs/base.ts:3

## Properties

### area()?

> `optional` **area**: (`latlngs`) => `number`

Defined in: src/geo/crs/base.ts:6

#### Parameters

##### latlngs

\[`number`, `number`\][]

#### Returns

`number`

***

### code?

> `optional` **code**: `string`

Defined in: src/geo/crs/base.ts:8

***

### distance()

> **distance**: (`latlng1`, `latlng2`) => `number`

Defined in: src/geo/crs/base.ts:5

#### Parameters

##### latlng1

\[`number`, `number`\]

##### latlng2

\[`number`, `number`\]

#### Returns

`number`

***

### planeArea()?

> `optional` **planeArea**: (`latlngs`) => `number`

Defined in: src/geo/crs/base.ts:7

#### Parameters

##### latlngs

\[`number`, `number`\][]

#### Returns

`number`

***

### projection

> **projection**: `null` \| [`Projection`](Projection.md)

Defined in: src/geo/crs/base.ts:4

***

### R

> **R**: `number`

Defined in: src/geo/crs/base.ts:9

***

### wrapLat?

> `optional` **wrapLat**: \[`number`, `number`\]

Defined in: src/geo/crs/base.ts:11

***

### wrapLng?

> `optional` **wrapLng**: \[`number`, `number`\]

Defined in: src/geo/crs/base.ts:10
