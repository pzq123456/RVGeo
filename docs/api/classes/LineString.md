[rvgeo](../index.md) / LineString

# LineString

Defined in: [src/geometry/LineString.ts:5](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L5)

Geometry for GeoJSON independent Objects including Point, LineString, Polygon
- no GeometryCollection
- no MultiPoint, MultiLineString, MultiPolygon

## Extends

- [`Geometry`](Geometry.md)

## Constructors

### new LineString()

```ts
new LineString(coordinates, properties?): LineString
```

Defined in: [src/geometry/LineString.ts:7](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L7)

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

Defined in: [src/geometry/LineString.ts:28](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L28)

#### Returns

[`MultiPoint`](MultiPoint.md)

***

### toXY()

```ts
toXY(): [number, number][]
```

Defined in: [src/geometry/LineString.ts:22](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L22)

#### Returns

\[`number`, `number`\][]

#### Overrides

[`Geometry`](Geometry.md).[`toXY`](Geometry.md#toxy)

***

### updateBBox()

```ts
updateBBox(): void
```

Defined in: [src/geometry/LineString.ts:11](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L11)

#### Returns

`void`

#### Overrides

[`Geometry`](Geometry.md).[`updateBBox`](Geometry.md#updatebbox)

***

### fromFeature()

```ts
static fromFeature(feature): LineString
```

Defined in: [src/geometry/LineString.ts:55](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L55)

#### Parameters

##### feature

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

#### Returns

[`LineString`](LineString.md)

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
static fromGeometry(geometry): LineString
```

Defined in: [src/geometry/LineString.ts:51](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L51)

按照逆时针方向排序点

#### Parameters

##### geometry

[`GeoJSONLineString`](../interfaces/GeoJSONLineString.md)

#### Returns

[`LineString`](LineString.md)

#### Overrides

```ts
Geometry.fromGeometry
```

***

### isLineString()

```ts
static isLineString(lineString): lineString is LineString
```

Defined in: [src/geometry/LineString.ts:64](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/LineString.ts#L64)

#### Parameters

##### lineString

`any`

#### Returns

`lineString is LineString`
