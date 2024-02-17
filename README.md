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

## 4. 核心技术
### 1. 多继承
在 TypeScript 中，类只支持单继承，这意味着一个类只能直接继承自一个父类。然而，你可以通过混合 (Mixin) 的方式来模拟多继承的效果。Mixin 是一种通过组合多个类来创建新类的技术。

以下是一个简单的示例，展示了如何使用 Mixin 来实现多继承的效果：在这个示例中，我们定义了两个基础类 A 和 B，然后通过创建一个新的类 AB，并将 A 和 B 类混合到 AB 类中来实现多继承的效果。最后，我们可以通过创建 AB 类的实例来使用继承自 A 和 B 类的方法。

```typescript
    // 定义一个基础类 A
    class A {
        methodA() {
            console.log('Method A');
        }
    }

    // 定义一个基础类 B
    class B {
        methodB() {
            console.log('Method B');
        }
    }

    // 定义一个混合类，通过组合 A 和 B 类来实现多继承的效果
    class AB implements A, B {
        constructor() { }

        methodA: () => void;
        methodB: () => void;
    }

    applyMixins(AB, [A, B]);

    // 应用 Mixin 的辅助函数
    function applyMixins(derivedCtor: any, baseCtors: any[]) {
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    }

    // 创建 AB 类的实例
    const abInstance = new AB();

    // 调用继承自类 A 的方法
    abInstance.methodA(); // 输出: Method A

    // 调用继承自类 B 的方法
    abInstance.methodB(); // 输出: Method B
```
