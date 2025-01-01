[rvgeo](../index.md) / CRS

# CRS

Defined in: [src/geo/crs/base.ts:3](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geo/crs/base.ts#L3)

## Properties

### area()?

```ts
optional area: (latlngs) => number;
```

Defined in: [src/geo/crs/base.ts:6](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geo/crs/base.ts#L6)

#### Parameters

##### latlngs

\[`number`, `number`\][]

#### Returns

`number`

***

### code?

```ts
optional code: string;
```

Defined in: [src/geo/crs/base.ts:8](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geo/crs/base.ts#L8)

***

### distance()

```ts
distance: (latlng1, latlng2) => number;
```

Defined in: [src/geo/crs/base.ts:5](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geo/crs/base.ts#L5)

#### Parameters

##### latlng1

\[`number`, `number`\]

##### latlng2

\[`number`, `number`\]

#### Returns

`number`

***

### planeArea()?

```ts
optional planeArea: (latlngs) => number;
```

Defined in: [src/geo/crs/base.ts:7](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geo/crs/base.ts#L7)

#### Parameters

##### latlngs

\[`number`, `number`\][]

#### Returns

`number`

***

### projection

```ts
projection: null | Projection;
```

Defined in: [src/geo/crs/base.ts:4](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geo/crs/base.ts#L4)

***

### R

```ts
R: number;
```

Defined in: [src/geo/crs/base.ts:9](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geo/crs/base.ts#L9)

***

### wrapLat?

```ts
optional wrapLat: [number, number];
```

Defined in: [src/geo/crs/base.ts:11](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geo/crs/base.ts#L11)

***

### wrapLng?

```ts
optional wrapLng: [number, number];
```

Defined in: [src/geo/crs/base.ts:10](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geo/crs/base.ts#L10)
