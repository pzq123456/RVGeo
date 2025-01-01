[rvgeo](../index.md) / Projection

# Projection

Defined in: [src/geo/projection/base.ts:3](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geo/projection/base.ts#L3)

## Properties

### bounds

```ts
bounds: MBR;
```

Defined in: [src/geo/projection/base.ts:6](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geo/projection/base.ts#L6)

***

### name?

```ts
optional name: string;
```

Defined in: [src/geo/projection/base.ts:7](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geo/projection/base.ts#L7)

## Methods

### project()

```ts
project(latlng): [number, number]
```

Defined in: [src/geo/projection/base.ts:4](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geo/projection/base.ts#L4)

#### Parameters

##### latlng

\[`number`, `number`\]

#### Returns

\[`number`, `number`\]

***

### unproject()

```ts
unproject(point): [number, number]
```

Defined in: [src/geo/projection/base.ts:5](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geo/projection/base.ts#L5)

#### Parameters

##### point

\[`number`, `number`\]

#### Returns

\[`number`, `number`\]
