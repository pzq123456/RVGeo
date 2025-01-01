[rvgeo](../index.md) / alphaComplex

# alphaComplex()

```ts
function alphaComplex(points, alpha): [number, number, number][]
```

Defined in: [src/triangulation/Shell.ts:97](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Shell.ts#L97)

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
