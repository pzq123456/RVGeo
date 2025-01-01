[rvgeo](../index.md) / Polygon

# Polygon

Defined in: [src/geometry/Polygon.ts:5](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L5)

Geometry for GeoJSON independent Objects including Point, LineString, Polygon
- no GeometryCollection
- no MultiPoint, MultiLineString, MultiPolygon

## Extends

- [`Geometry`](Geometry.md)

## Constructors

### new Polygon()

```ts
new Polygon(coordinates, properties?): Polygon
```

Defined in: [src/geometry/Polygon.ts:7](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L7)

#### Parameters

##### coordinates

\[`number`, `number`\][][]

##### properties?

`any`

#### Returns

[`Polygon`](Polygon.md)

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

### toMultiPoint()

```ts
toMultiPoint(): MultiPoint
```

Defined in: [src/geometry/Polygon.ts:16](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L16)

#### Returns

[`MultiPoint`](MultiPoint.md)

***

### toXY()

```ts
toXY(): [number, number][][]
```

Defined in: [src/geometry/Polygon.ts:11](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L11)

#### Returns

\[`number`, `number`\][][]

#### Overrides

[`Geometry`](Geometry.md).[`toXY`](Geometry.md#toxy)

***

### updateBBox()

```ts
updateBBox(): void
```

Defined in: [src/geometry/Polygon.ts:20](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L20)

#### Returns

`void`

#### Overrides

[`Geometry`](Geometry.md).[`updateBBox`](Geometry.md#updatebbox)

***

### fromFeature()

```ts
static fromFeature(feature): Polygon
```

Defined in: [src/geometry/Polygon.ts:41](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L41)

#### Parameters

##### feature

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Returns

[`Polygon`](Polygon.md)

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
static fromGeometry(geometry): Polygon
```

Defined in: [src/geometry/Polygon.ts:37](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L37)

#### Parameters

##### geometry

[`GeoJSONPolygon`](../interfaces/GeoJSONPolygon.md)

#### Returns

[`Polygon`](Polygon.md)

#### Overrides

```ts
Geometry.fromGeometry
```

***

### isPolygon()

```ts
static isPolygon(geometry): geometry is Polygon
```

Defined in: [src/geometry/Polygon.ts:33](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Polygon.ts#L33)

#### Parameters

##### geometry

`any`

#### Returns

`geometry is Polygon`
