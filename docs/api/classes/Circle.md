[rvgeo](../index.md) / Circle

# Circle

Defined in: [src/geometry/Circle.ts:5](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Circle.ts#L5)

平面图形：圆形

## Constructors

### new Circle()

```ts
new Circle(
   x, 
   y, 
   r): Circle
```

Defined in: [src/geometry/Circle.ts:17](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Circle.ts#L17)

构造函数

#### Parameters

##### x

`number`

圆心 x 坐标

##### y

`number`

圆心 y 坐标

##### r

`number`

半径

#### Returns

[`Circle`](Circle.md)

## Properties

### r

```ts
r: number;
```

Defined in: [src/geometry/Circle.ts:8](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Circle.ts#L8)

***

### rSquared

```ts
rSquared: number;
```

Defined in: [src/geometry/Circle.ts:9](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Circle.ts#L9)

***

### x

```ts
x: number;
```

Defined in: [src/geometry/Circle.ts:6](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Circle.ts#L6)

***

### y

```ts
y: number;
```

Defined in: [src/geometry/Circle.ts:7](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Circle.ts#L7)

## Methods

### contains()

```ts
contains(point, threshold): boolean
```

Defined in: [src/geometry/Circle.ts:30](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Circle.ts#L30)

判断点是否在圆内

#### Parameters

##### point

\[`number`, `number`\]

点坐标

##### threshold

`number` = `1800000000`

（默认为0）容差（用于修正计算误差）*建议根据实际情况手动调整

#### Returns

`boolean`

- true if the point is inside the circle

***

### intersects()

```ts
intersects(range): boolean
```

Defined in: [src/geometry/Circle.ts:42](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Circle.ts#L42)

（仅平面下保证有效）判断圆是否与 MBR 相交

#### Parameters

##### range

[`MBR`](../type-aliases/MBR.md)

MBR

#### Returns

`boolean`

- true if the circle intersects the MBR

***

### isCircle()

```ts
static isCircle(obj): obj is Circle
```

Defined in: [src/geometry/Circle.ts:69](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/Circle.ts#L69)

#### Parameters

##### obj

`any`

#### Returns

`obj is Circle`
