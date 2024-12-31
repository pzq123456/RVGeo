[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / Evented

# Class: Evented

Defined in: src/core/events.ts:30

事件基础函数（类，默认构造函数）
- 维护两个事件监听器队列（同步、异步）
- 提供事件监听、移除、触发等方法
- 提供一次性事件监听
- 提供获取指定事件类型的监听器
- 提供判断是否存在指定事件类型的监听器
> 参考 [Leaflet 的事件机制设计](https://github.com/Leaflet/Leaflet/blob/80a42768306c8c2f9f1bd1eb48d529ffcac3072f/src/core/Events.js#L29)

## Constructors

### new Evented()

> **new Evented**(): [`Evented`](Evented.md)

#### Returns

[`Evented`](Evented.md)

## Methods

### emit()

> **emit**(`type`, `data`?): `this`

Defined in: src/core/events.ts:126

只会触发非异步事件

#### Parameters

##### type

`string`

##### data?

`any`

#### Returns

`this`

***

### emitAsync()

> **emitAsync**(`type`, `mode`, `data`?): `Promise`\<`void`\>

Defined in: src/core/events.ts:151

异步触发事件
- parallel: 并行执行（同时执行所有处理函数）
- series: 串行执行（按照添加顺序执行）
- ignore: 忽略(在后台异步执行，但无法得知何时执行完毕)

#### Parameters

##### type

`string`

事件名称

##### mode

事件处理函数的执行模式('parallel' | 'series' | 'ignore')

`"parallel"` | `"series"` | `"ignore"`

##### data?

`any`

#### Returns

`Promise`\<`void`\>

返回一个 Promise 对象

***

### hasListeners()

> **hasListeners**(`type`): `boolean`

Defined in: src/core/events.ts:182

判断是否存在指定事件类型的监听器

#### Parameters

##### type

`string`

事件名称

#### Returns

`boolean`

返回一个布尔值

***

### listeners()

> **listeners**(`type`): (`Listener` \| `AsyncListener`)[]

Defined in: src/core/events.ts:173

获取指定事件类型的监听器

#### Parameters

##### type

`string`

事件名称

#### Returns

(`Listener` \| `AsyncListener`)[]

返回一个监听器数组

***

### off()

> **off**(`type`, `fn`?, `context`?): `this`

Defined in: src/core/events.ts:65

移除事件监听

#### Parameters

##### type

`string`

##### fn?

`Function`

##### context?

`any`

#### Returns

`this`

***

### on()

> **on**(`type`, `fn`, `context`?): `this`

Defined in: src/core/events.ts:41

添加事件监听（同步、异步）

#### Parameters

##### type

`string`

事件名称（类型）

##### fn

`Function`

事件处理函数（监听器）

##### context?

`any`

事件处理函数的上下文

#### Returns

`this`

返回 EventEmitter 实例

***

### once()

> **once**(`type`, `fn`, `context`?): `this`

Defined in: src/core/events.ts:112

添加一次性事件监听

#### Parameters

##### type

`string`

##### fn

`Function`

##### context?

`any`

#### Returns

`this`

***

### removeAllListeners()

> **removeAllListeners**(): `this`

Defined in: src/core/events.ts:190

移除所有事件监听

#### Returns

`this`

返回 EventEmitter 实例

***

### isAsyncListener()

> `static` **isAsyncListener**(`listener`): `listener is AsyncListener`

Defined in: src/core/events.ts:201

判断是否为异步监听器

#### Parameters

##### listener

监听器

`Listener` | `AsyncListener`

#### Returns

`listener is AsyncListener`

返回一个布尔值
