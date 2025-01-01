[rvgeo](../index.md) / feature

# feature()

```ts
function feature(topology, o): 
  | {
  bbox: undefined;
  geometry: GeometryObject;
  id: undefined;
  properties: any;
  type: string;
 }
  | {
  bbox: undefined;
  geometry: GeometryObject;
  id: undefined | string | number;
  properties: any;
  type: string;
 }
  | {
  bbox: MBR;
  geometry: GeometryObject;
  id: undefined | string | number;
  properties: any;
  type: string;
 }
  | {
  features: any;
  type: string;
}
```

Defined in: [src/topology/client/feature.ts:11](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/topology/client/feature.ts#L11)

## Parameters

### topology

`Topology`

### o

`string` | `GeometryObject`

## Returns

  \| \{
  `bbox`: `undefined`;
  `geometry`: `GeometryObject`;
  `id`: `undefined`;
  `properties`: `any`;
  `type`: `string`;
 \}
  \| \{
  `bbox`: `undefined`;
  `geometry`: `GeometryObject`;
  `id`: `undefined` \| `string` \| `number`;
  `properties`: `any`;
  `type`: `string`;
 \}
  \| \{
  `bbox`: [`MBR`](../type-aliases/MBR.md);
  `geometry`: `GeometryObject`;
  `id`: `undefined` \| `string` \| `number`;
  `properties`: `any`;
  `type`: `string`;
 \}
  \| \{
  `features`: `any`;
  `type`: `string`;
 \}
