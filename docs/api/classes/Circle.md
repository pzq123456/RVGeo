[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / Circle

# Class: Circle

Defined in: src/geometry/Circle.ts:5

平面图形：圆形

## Constructors

### new Circle()

> **new Circle**(`x`, `y`, `r`): [`Circle`](Circle.md)

Defined in: src/geometry/Circle.ts:17

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

> **r**: `number`

Defined in: src/geometry/Circle.ts:8

***

### rSquared

> **rSquared**: `number`

Defined in: src/geometry/Circle.ts:9

***

### x

> **x**: `number`

Defined in: src/geometry/Circle.ts:6

***

### y

> **y**: `number`

Defined in: src/geometry/Circle.ts:7

## Methods

### contains()

> **contains**(`point`, `threshold`): `boolean`

Defined in: src/geometry/Circle.ts:30

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

> **intersects**(`range`): `boolean`

Defined in: src/geometry/Circle.ts:42

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

> `static` **isCircle**(`obj`): `obj is Circle`

Defined in: src/geometry/Circle.ts:69

#### Parameters

##### obj

`any`

#### Returns

`obj is Circle`
