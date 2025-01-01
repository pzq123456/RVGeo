[rvgeo](../index.md) / K\_means

# K\_means()

```ts
function K_means(
   k, 
   thresh, 
   maxtime, 
   points): undefined | [number, number][][]
```

Defined in: [src/cluster/kmeans.ts:37](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/cluster/kmeans.ts#L37)

k均值聚类

## Parameters

### k

`number`

分类个数

### thresh

`number` = `0.0001`

质心间变化距离

### maxtime

`number` = `100`

最大迭代次数

### points

\[`number`, `number`\][]

二维数组

## Returns

`undefined` \| \[`number`, `number`\][][]

* `groups.length = k` :[
[group1],
[group2],...
]
