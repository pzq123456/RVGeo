[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / K\_means

# Function: K\_means()

> **K\_means**(`k`, `thresh`, `maxtime`, `points`): `undefined` \| \[`number`, `number`\][][]

Defined in: src/cluster/kmeans.ts:37

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
