[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / Projection

# Interface: Projection

Defined in: src/geo/projection/base.ts:3

## Properties

### bounds

> **bounds**: [`MBR`](../type-aliases/MBR.md)

Defined in: src/geo/projection/base.ts:6

***

### name?

> `optional` **name**: `string`

Defined in: src/geo/projection/base.ts:7

## Methods

### project()

> **project**(`latlng`): \[`number`, `number`\]

Defined in: src/geo/projection/base.ts:4

#### Parameters

##### latlng

\[`number`, `number`\]

#### Returns

\[`number`, `number`\]

***

### unproject()

> **unproject**(`point`): \[`number`, `number`\]

Defined in: src/geo/projection/base.ts:5

#### Parameters

##### point

\[`number`, `number`\]

#### Returns

\[`number`, `number`\]
