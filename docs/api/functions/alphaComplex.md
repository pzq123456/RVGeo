[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / alphaComplex

# Function: alphaComplex()

> **alphaComplex**(`points`, `alpha`): \[`number`, `number`, `number`\][]

Defined in: src/triangulation/Shell.ts:97

Alpha Complex 算法
- Alpha shapes are a generalization of Delaunay triangulations. 
- Given a parameter alpha and a point set, they compute a simplicial complex which covers the point set in simplices whose circum radii are less than 1/alpha.

## Parameters

### points

[`Point`](../classes/Point.md)[]

点数组

### alpha

`number`

alpha 值

## Returns

\[`number`, `number`, `number`\][]
