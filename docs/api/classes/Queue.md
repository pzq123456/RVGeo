[rvgeo](../index.md) / Queue

# Queue\<T\>

Defined in: [src/net/utils.ts:2](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/utils.ts#L2)

## Type Parameters

• **T**

## Constructors

### new Queue()

```ts
new Queue<T>(): Queue<T>
```

#### Returns

[`Queue`](Queue.md)\<`T`\>

## Methods

### get()

```ts
get(): undefined | T
```

Defined in: [src/net/utils.ts:17](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/utils.ts#L17)

#### Returns

`undefined` \| `T`

***

### isEmpty()

```ts
isEmpty(): boolean
```

Defined in: [src/net/utils.ts:21](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/utils.ts#L21)

#### Returns

`boolean`

***

### pop()

```ts
pop(): undefined | T
```

Defined in: [src/net/utils.ts:9](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/utils.ts#L9)

#### Returns

`undefined` \| `T`

***

### push()

```ts
push(item): void
```

Defined in: [src/net/utils.ts:5](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/utils.ts#L5)

#### Parameters

##### item

`T`

#### Returns

`void`

***

### put()

```ts
put(item): void
```

Defined in: [src/net/utils.ts:13](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/utils.ts#L13)

#### Parameters

##### item

`T`

#### Returns

`void`
