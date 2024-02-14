# 参考 Leaflet 重构 RVGeo(V2.5.0) 
> 暂不引入新功能，功能接口会有部分调整。考虑适配 Leaflet

## 1. Leaflet 的类型参考
> 会使用 ts 重写（部分） Leaflet 的代码以供内部开发使用
- Leaflet的类型声明(TS) https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/leaflet/index.d.ts
- TS 与 JS  混合编程 https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html
> - 考虑到工作量，我可以直接通过 `@types/leaflet` 引入 Leaflet 的类型声明文件，直接将 Leaflet 作为 TS 项目。

## 2. 参考 leaflet 的设计模式，实现 RVGeo 的类型拓展功能

## 3. 文档及示例网站（Playground）
- codepen 示例代码