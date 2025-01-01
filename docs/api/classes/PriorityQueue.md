[rvgeo](../index.md) / PriorityQueue

# PriorityQueue\<T\>

Defined in: [src/net/utils.ts:26](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/utils.ts#L26)

## Type Parameters

• **T**

## Constructors

### new PriorityQueue()

```ts
new PriorityQueue<T>(): PriorityQueue<T>
```

#### Returns

[`PriorityQueue`](PriorityQueue.md)\<`T`\>

## Methods

### empty()

```ts
empty(): boolean
```

Defined in: [src/net/utils.ts:29](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/utils.ts#L29)

#### Returns

`boolean`

***

### get()

```ts
get(): undefined | T
```

Defined in: [src/net/utils.ts:38](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/utils.ts#L38)

#### Returns

`undefined` \| `T`

***

### isEmpty()

```ts
isEmpty(): boolean
```

Defined in: [src/net/utils.ts:42](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/utils.ts#L42)

#### Returns

`boolean`

***

### put()

```ts
put(item, priority): void
```

Defined in: [src/net/utils.ts:33](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/utils.ts#L33)

#### Parameters

##### item

`T`

##### priority

`number`

#### Returns

`void`
