[rvgeo](../index.md) / Geometry

# `abstract` Geometry

Defined in: [src/geometry/Geometry.ts:30](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L30)

Geometry for GeoJSON independent Objects including Point, LineString, Polygon
- no GeometryCollection
- no MultiPoint, MultiLineString, MultiPolygon

## Extended by

- [`Point`](Point.md)
- [`LineString`](LineString.md)
- [`Polygon`](Polygon.md)

## Constructors

### new Geometry()

```ts
new Geometry(coordinates, properties?): Geometry
```

Defined in: [src/geometry/Geometry.ts:40](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L40)

#### Parameters

##### coordinates

`any`

##### properties?

`any`

#### Returns

[`Geometry`](Geometry.md)

## Properties

### bbox

```ts
bbox: MBR;
```

Defined in: [src/geometry/Geometry.ts:31](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L31)

***

### coordinates

```ts
readonly coordinates: any;
```

Defined in: [src/geometry/Geometry.ts:32](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L32)

***

### projection

```ts
readonly projection: Projection = SphericalMercator;
```

Defined in: [src/geometry/Geometry.ts:34](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L34)

***

### properties

```ts
properties: any;
```

Defined in: [src/geometry/Geometry.ts:33](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L33)

***

### fromFeature

```ts
static fromFeature: any;
```

Defined in: [src/geometry/Geometry.ts:37](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L37)

***

### fromGeometry

```ts
static fromGeometry: any;
```

Defined in: [src/geometry/Geometry.ts:38](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L38)

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

## Methods

### clone()

```ts
clone(): Geometry
```

Defined in: [src/geometry/Geometry.ts:51](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L51)

#### Returns

[`Geometry`](Geometry.md)

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

***

### toGeoJSON()

```ts
toGeoJSON(): GeoJSONFeature
```

Defined in: [src/geometry/Geometry.ts:64](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L64)

#### Returns

[`GeoJSONFeature`](../interfaces/GeoJSONFeature.md)

***

### toXY()

```ts
toXY(): any
```

Defined in: [src/geometry/Geometry.ts:35](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L35)

#### Returns

`any`

***

### updateBBox()

```ts
abstract updateBBox(): void
```

Defined in: [src/geometry/Geometry.ts:62](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Geometry.ts#L62)

#### Returns

`void`

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
