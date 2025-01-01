[rvgeo](../index.md) / toPoint

# toPoint()

## Call Signature

```ts
function toPoint(
   Lon, 
   Lat, 
   properties?): Point
```

Defined in: [src/geometry/Point.ts:203](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L203)

the factory function to create a Point(the following ways are equivalent)

### Parameters

#### Lon

`number`

#### Lat

`number`

#### properties?

`any`

### Returns

[`Point`](../classes/Point.md)

### Example

```ts
// base usage
let point = toPoint(120, 30);
// override properties
// all properties are optional(可以不传)
let point = toPoint(120, 30, { name: 'test' });
let point = toPoint([120, 30], { name: 'test' });
// lon, lat = X, Y = lng, lat = x, y
let point = toPoint({lon: 120, lat: 30}, { name: 'test' });
```

## Call Signature

```ts
function toPoint(coordinates, properties?): Point
```

Defined in: [src/geometry/Point.ts:204](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L204)

the factory function to create a Point(the following ways are equivalent)

### Parameters

#### coordinates

\[`number`, `number`\]

#### properties?

`any`

### Returns

[`Point`](../classes/Point.md)

### Example

```ts
// base usage
let point = toPoint(120, 30);
// override properties
// all properties are optional(可以不传)
let point = toPoint(120, 30, { name: 'test' });
let point = toPoint([120, 30], { name: 'test' });
// lon, lat = X, Y = lng, lat = x, y
let point = toPoint({lon: 120, lat: 30}, { name: 'test' });
```

## Call Signature

```ts
function toPoint(obj, properties?): Point
```

Defined in: [src/geometry/Point.ts:205](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Point.ts#L205)

the factory function to create a Point(the following ways are equivalent)

### Parameters

#### obj

\{
`lat`: `number`;
`lon`: `number`;
\} | \{
`x`: `number`;
`y`: `number`;
\} | \{
`lat`: `number`;
`lng`: `number`;
\}

#### properties?

`any`

### Returns

[`Point`](../classes/Point.md)

### Example

```ts
// base usage
let point = toPoint(120, 30);
// override properties
// all properties are optional(可以不传)
let point = toPoint(120, 30, { name: 'test' });
let point = toPoint([120, 30], { name: 'test' });
// lon, lat = X, Y = lng, lat = x, y
let point = toPoint({lon: 120, lat: 30}, { name: 'test' });
```
