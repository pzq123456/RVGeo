[rvgeo](../index.md) / Point

# Point

Defined in: [src/geometry/Point.ts:10](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L10)

Point geometry

## Extends

- [`Geometry`](Geometry.md)

## Constructors

### new Point()

```ts
new Point(coordinates, properties?): Point
```

Defined in: [src/geometry/Point.ts:19](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L19)

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

```ts
bbox: MBR;
```

Defined in: [src/geometry/Geometry.ts:31](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L31)

#### Inherited from

[`Geometry`](Geometry.md).[`bbox`](Geometry.md#bbox)

***

### coordinates

```ts
readonly coordinates: any;
```

Defined in: [src/geometry/Geometry.ts:32](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L32)

#### Inherited from

[`Geometry`](Geometry.md).[`coordinates`](Geometry.md#coordinates-1)

***

### projection

```ts
readonly projection: Projection = SphericalMercator;
```

Defined in: [src/geometry/Geometry.ts:34](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L34)

#### Inherited from

[`Geometry`](Geometry.md).[`projection`](Geometry.md#projection)

***

### properties

```ts
properties: any;
```

Defined in: [src/geometry/Geometry.ts:33](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L33)

#### Inherited from

[`Geometry`](Geometry.md).[`properties`](Geometry.md#properties-1)

## Accessors

### lat

#### Get Signature

```ts
get lat(): number
```

Defined in: [src/geometry/Point.ts:15](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L15)

##### Returns

`number`

***

### lon

#### Get Signature

```ts
get lon(): number
```

Defined in: [src/geometry/Point.ts:12](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L12)

##### Returns

`number`

***

### Properties

#### Set Signature

```ts
set Properties(properties): void
```

Defined in: [src/geometry/Geometry.ts:49](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L49)

##### Parameters

###### properties

`any`

##### Returns

`void`

#### Inherited from

[`Geometry`](Geometry.md).[`Properties`](Geometry.md#properties-2)

## Methods

### clone()

```ts
clone(): Geometry
```

Defined in: [src/geometry/Geometry.ts:51](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L51)

#### Returns

[`Geometry`](Geometry.md)

#### Inherited from

[`Geometry`](Geometry.md).[`clone`](Geometry.md#clone)

***

### equals()

```ts
equals(geometry): boolean
```

Defined in: [src/geometry/Geometry.ts:58](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L58)

#### Parameters

##### geometry

[`Geometry`](Geometry.md)

#### Returns

`boolean`

#### Inherited from

[`Geometry`](Geometry.md).[`equals`](Geometry.md#equals)

***

### toGeoJSON()

```ts
toGeoJSON(): GeoJSONFeature
```

Defined in: [src/geometry/Geometry.ts:64](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L64)

#### Returns

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Inherited from

[`Geometry`](Geometry.md).[`toGeoJSON`](Geometry.md#togeojson)

***

### toXY()

```ts
toXY(): [number, number]
```

Defined in: [src/geometry/Point.ts:27](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L27)

#### Returns

\[`number`, `number`\]

#### Overrides

[`Geometry`](Geometry.md).[`toXY`](Geometry.md#toxy)

***

### updateBBox()

```ts
updateBBox(): void
```

Defined in: [src/geometry/Point.ts:23](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L23)

#### Returns

`void`

#### Overrides

[`Geometry`](Geometry.md).[`updateBBox`](Geometry.md#updatebbox)

***

### fromFeature()

```ts
static fromFeature(feature): Point
```

Defined in: [src/geometry/Point.ts:39](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L39)

#### Parameters

##### feature

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Returns

[`Point`](Point.md)

#### Overrides

```ts
Geometry.fromFeature
```

***

### fromGeoJSON()

```ts
static fromGeoJSON(feature): Geometry | GeometryCollection
```

Defined in: [src/geometry/Geometry.ts:82](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L82)

#### Parameters

##### feature

[`GeoJSONGeometry`](../interfaces/GeoJSONGeometry.md) | [`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Returns

[`Geometry`](Geometry.md) \| [`GeometryCollection`](GeometryCollection.md)

#### Inherited from

[`Geometry`](Geometry.md).[`fromGeoJSON`](Geometry.md#fromgeojson)

***

### fromGeometry()

```ts
static fromGeometry(geometry): Point
```

Defined in: [src/geometry/Point.ts:35](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L35)

#### Parameters

##### geometry

[`GeoJSONPoint`](../interfaces/GeoJSONPoint.md)

#### Returns

[`Point`](Point.md)

#### Overrides

```ts
Geometry.fromGeometry
```

***

### isPoint()

```ts
static isPoint(geometry): geometry is Point
```

Defined in: [src/geometry/Point.ts:31](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L31)

#### Parameters

##### geometry

`any`

#### Returns

`geometry is Point`
