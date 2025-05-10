# TopoJSON格式规范

__摘要__

TopoJSON是基于GeoJSON的拓扑地理空间数据交换格式。

__目录__

* 1. [简介](#1-简介)
  * 1.1. [示例](#11-示例)
  * 1.2. [定义](#12-定义)
* 2. [TopoJSON对象](#2-topojson对象)
  * 2.1. [拓扑对象](#21-拓扑对象)
    * 2.1.1. [坐标点](#211-坐标点)
    * 2.1.2. [坐标变换](#212-坐标变换)
    * 2.1.3. [弧段](#213-弧段)
    * 2.1.4. [弧段索引](#214-弧段索引)
    * 2.1.5. [几何对象集合](#215-几何对象集合)
  * 2.2. [几何对象](#22-几何对象)
    * 2.2.1. [点](#221-点)
    * 2.2.2. [多点](#222-多点)
    * 2.2.3. [线](#223-线)
    * 2.2.4. [多线](#224-多线)
    * 2.2.5. [面](#225-面)
    * 2.2.6. [多面](#226-多面)
    * 2.2.7. [几何集合](#227-几何集合)
* 3. [边界框](#3-边界框)

## 1. 简介

TopoJSON是一种[JSON](http://json.org/)格式，用于将地理数据结构编码为共享拓扑。TopoJSON拓扑表示共享称为_弧段_的坐标序列的一个或多个几何图形。作为[GeoJSON](http://geojson.org/)的扩展，TopoJSON支持多种几何类型：点、线、面、多点、多线、多面和几何集合。TopoJSON中的几何图形可以包含额外属性来编码非几何数据。

### 1.1. 示例

包含名为"example"的单个几何集合对象的TopoJSON拓扑：

```json
{
  "type": "Topology",
  "objects": {
    "example": {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "properties": {
            "prop0": "value0"
          },
          "coordinates": [102, 0.5]
        },
        {
          "type": "LineString",
          "properties": {
            "prop0": "value0",
            "prop1": 0
          },
          "arcs": [0]
        },
        {
          "type": "Polygon",
          "properties": {
            "prop0": "value0",
            "prop1": {
              "this": "that"
            }
          },
          "arcs": [[-2]]
        }
      ]
    }
  },
  "arcs": [
    [[102, 0], [103, 1], [104, 0], [105, 1]],
    [[100, 0], [101, 0], [101, 1], [100, 1], [100, 0]]
  ]
}
```

量化后的相同拓扑：

```json
{
  "type": "Topology",
  "transform": {
    "scale": [0.0005000500050005, 0.00010001000100010001],
    "translate": [100, 0]
  },
  "objects": {
    "example": {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "properties": {
            "prop0": "value0"
          },
          "coordinates": [4000, 5000]
        },
        {
          "type": "LineString",
          "properties": {
            "prop0": "value0",
            "prop1": 0
          },
          "arcs": [0]
        },
        {
          "type": "Polygon",
          "properties": {
            "prop0": "value0",
            "prop1": {
              "this": "that"
            }
          },
          "arcs": [[1]]
        }
      ]
    }
  },
  "arcs": [
    [[4000, 0], [1999, 9999], [2000, -9999], [2000, 9999]],
    [[0, 0], [0, 9999], [2000, 0], [0, -9999], [-2000, 0]]
  ]
}
```

### 1.2. 定义

JavaScript对象表示法(JSON)以及术语"对象"、"名称"、"值"、"数组"和"数字"的定义见[IETF RTC 4627](http://www.ietf.org/rfc/rfc4627.txt)。

本文档中的关键词"MUST"、"MUST NOT"、"REQUIRED"、"SHALL"、"SHALL NOT"、"SHOULD"、"SHOULD NOT"、"RECOMMENDED"、"MAY"和"OPTIONAL"应按照[IETF RFC 2119](http://www.ietf.org/rfc/rfc2119.txt)中的描述进行解释。

所有浮点数必须被视为双精度浮点数，所有整数必须是32位有符号整数。

## 2. TopoJSON对象

TopoJSON始终由单个拓扑对象组成。一个拓扑可以包含任意数量的命名几何对象。术语"TopoJSON对象"可以指拓扑或其包含的几何对象。

* TopoJSON对象可以有任意数量的成员(名称/值对)
* TopoJSON对象必须有一个名为"type"的成员，其值是确定TopoJSON对象类型的字符串
* type成员的值必须是以下之一："Topology"、"Point"、"MultiPoint"、"LineString"、"MultiLineString"、"Polygon"、"MultiPolygon"或"GeometryCollection"。type成员值的大小写必须如所示
* TopoJSON对象可以有一个"bbox"成员，其值必须是边界框数组

### 2.1. 拓扑对象

拓扑是type成员值为"Topology"的TopoJSON对象。

* 拓扑必须有一个名为"objects"的成员，其值是另一个对象。该对象的每个成员的值都是一个几何对象
* 拓扑必须有一个名为"arcs"的成员，其值是一个弧段数组
* 拓扑可以有一个"transform"成员，其值必须是变换对象
* 拓扑可以有一个"bbox"成员，其值必须是边界框数组

#### 2.1.1. 坐标点

坐标点由数字数组表示。必须至少有两个元素，可以有更多。元素顺序建议遵循_x_、_y_、_z_顺序(投影坐标系中的东移、北移、高度，或地理坐标系中的经度、纬度、高度)。允许任意数量的附加元素——附加元素的解释和含义超出本规范范围。

#### 2.1.2. 坐标变换

拓扑可以有一个"transform"成员，其值是变换对象。变换的目的是通过将坐标表示为整数而非浮点数来实现更高效的序列化。

* 变换必须有一个名为"scale"的成员，其值是两元素数字数组
* 变换必须有一个名为"translate"的成员，其值是两元素数字数组

"scale"和"translate"成员的长度必须为2。拓扑中的每个坐标点都必须被量化，每个坐标点的第一个和第二个元素都是整数。

将量化坐标转换为绝对坐标的方法：

1. 将每个量化坐标元素乘以相应的比例因子
2. 加上相应的平移因子

以下JavaScript参考实现将给定量化拓扑中的单个坐标点转换为绝对坐标：

```js
function transformPoint(topology, position) {
  position = position.slice();
  position[0] = position[0] * topology.transform.scale[0] + topology.transform.translate[0],
  position[1] = position[1] * topology.transform.scale[1] + topology.transform.translate[1]
  return position;
}
```

注意，通过复制输入坐标点，参考实现保留了任何额外维度(如_z_)而不对它们进行变换。

#### 2.1.3. 弧段

拓扑必须有一个"arcs"成员，其值是坐标点数组的数组。每个弧段必须是包含两个或多个坐标点的数组。

如果拓扑被量化，则拓扑中每个弧段的坐标点必须进行差分编码。弧段的第一个坐标点是正常坐标点[<i>x₁</i>, <i>y₁</i>]。第二个坐标点[<i>x₂</i>, <i>y₂</i>]编码为[<i>Δx₂</i>, <i>Δy₂</i>]，其中<i>x₂</i> = <i>x₁</i> + <i>Δx₂</i>且<i>y₂</i> = <i>y₁</i> + <i>Δy₂</i>。第三个坐标点[<i>x₃</i>, <i>y₃</i>]编码为[<i>Δx₃</i>, <i>Δy₃</i>]，其中<i>x₃</i> = <i>x₂</i> + <i>Δx₃</i> = <i>x₁</i> + <i>Δx₂</i> + <i>Δx₃</i>且<i>y₃</i> = <i>y₂</i> + <i>Δy₃</i> = <i>y₁</i> + <i>Δy₂</i> + <i>Δy₃</i>，依此类推。

以下JavaScript参考实现从给定的量化拓扑中解码单个差分编码的量化弧段：

```js
function decodeArc(topology, arc) {
  var x = 0, y = 0;
  return arc.map(function(position) {
    position = position.slice();
    position[0] = (x += position[0]) * topology.transform.scale[0] + topology.transform.translate[0];
    position[1] = (y += position[1]) * topology.transform.scale[1] + topology.transform.translate[1];
    return position;
  });
}
```

#### 2.1.4. 弧段索引

由线(LineString或MultiLineString)或线环(Polygon或MultiPolygon)组成的几何对象必须由弧段构建。每个弧段必须通过从零开始的数字索引引用包含它的拓扑的arcs数组中的弧段。例如，0引用第一个弧段，1引用第二个弧段，依此类推。

负弧段索引表示必须反转该索引的补码对应的弧段以重建几何图形：-1表示反转第一个弧段，-2表示反转第二个弧段，依此类推。在JavaScript中，您可以使用[按位NOT运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT)`~i`对负弧段索引`i`取反。

如果引用多个弧段来构建LineString或LinearRing，则后续弧段的第一个坐标点必须等于前一个弧段的最后一个坐标点。然后，在重建几何图形时，可以丢弃除第一个之外每个弧段的第一个坐标点；等效地，可以丢弃除最后一个之外每个弧段的最后一个坐标点。

#### 2.1.5. 几何对象集合

拓扑必须有一个"objects"成员，其值是一个对象。该对象可以有任意数量的成员，其值必须是几何对象。

### 2.2. 几何对象

几何是type成员值为以下字符串之一的TopoJSON对象："Point"、"MultiPoint"、"LineString"、"MultiLineString"、"Polygon"、"MultiPolygon"或"GeometryCollection"。

类型为"Point"或"MultiPoint"的TopoJSON几何对象必须有一个名为"coordinates"的成员。类型为"LineString"、"MultiLineString"、"Polygon"或"MultiPolygon"的TopoJSON几何对象必须有一个名为"arcs"的成员。arcs和coordinates成员的值始终是数组。该数组中元素的结构由几何类型决定。

如果几何具有常用标识符，则该标识符应作为名为"id"的成员包含在几何对象中。几何对象可以有一个名为"properties"的成员。properties成员的值是一个对象(任何JSON对象或JSON null值)。

#### 2.2.1. 点

对于"Point"类型，"coordinates"成员必须是单个坐标点。

#### 2.2.2. 多点

对于"MultiPoint"类型，"coordinates"成员必须是坐标点数组。

#### 2.2.3. 线

对于"LineString"类型，"arcs"成员必须是弧段索引数组。

#### 2.2.4. 多线

对于"MultiLineString"类型，"arcs"成员必须是LineString弧段索引数组。

#### 2.2.5. 面

对于"Polygon"类型，"arcs"成员必须是LinearRing弧段索引数组。对于具有多个环的多边形，第一个必须是外环，其他必须是内环或孔洞。

LinearRing是具有4个或更多坐标点的闭合LineString。第一个和最后一个坐标点相同(它们表示相同的点)。

#### 2.2.6. 多面

对于"MultiPolygon"类型，"arcs"成员必须是Polygon弧段索引数组。

#### 2.2.7. 几何集合

类型为"GeometryCollection"的TopoJSON对象是表示几何对象集合的几何对象。

几何集合必须有一个名为"geometries"的成员，其值是一个数组。该数组中的每个元素都是一个TopoJSON几何对象。

## 3. 边界框

为了包含关于拓扑或几何坐标范围的信息，TopoJSON对象可以有一个名为"bbox"的成员。bbox成员的值必须是一个2*<i>n</i>数组，其中_n_是所包含几何图形表示的维数，首先是所有轴的最低值，然后是最高值。bbox的轴顺序遵循几何图形的轴顺序。边界框不应使用拓扑的变换(如果有)进行变换。

# TopoJSON技术说明

## 拓扑编码格式

TopoJSON是GeoJSON的扩展格式，采用拓扑编码技术。与离散表示几何图形不同，TopoJSON文件中的几何图形通过称为"弧段(arcs)"的共享线段拼接而成。这种技术类似于Matt Bloch开发的MapShaper工具和Arc/Info的.e00导出格式。

## 核心优势

1. **冗余消除**：
   - 相关几何图形可高效存储于同一文件
   - 例如加利福尼亚州与内华达州的共享边界只需存储一次
   - 单个文件可包含多个要素集合（如州和县边界）且无数据重复

2. **多重表达**：
   - 可同时表示填充多边形和描边边界
   - 两种要素集合共享同一弧段网格

3. **高效压缩**：
   - 采用量化差分编码技术处理整数坐标
   - 类似坐标舍入（如LilJSON）但效率更高
   - 保持文本可编辑性，支持gzip压缩

## 技术特性

* **文件体积**：相比GeoJSON平均减少80%以上
* **拓扑保持**：支持形状简化时保持邻接关系
* **跨要素同步**：可同时简化州界和县界并保持一致性
* **高级应用**：支持Dorling/六边形变形地图、自动地图着色等需要共享边界信息的技术

## 安装方式

```bash
npm install topojson  # NPM安装
```

或直接引入：
```html
<script src="https://unpkg.com/topojson@3"></script>
<script>
  var topology = topojson.topology({foo: geojson});
</script>
```

## API功能分类

### 生成模块（topojson-server）
| 方法 | 功能 |
|------|------|
| `topojson.topology` | GeoJSON转TopoJSON |
| `geo2topo` | 命令行转换工具 |

### 简化模块（topojson-simplify）
| 方法 | 功能 |
|------|------|
| `topojson.presimplify` | 预处理简化 |
| `topojson.simplify` | 几何坐标简化 |
| `topojson.quantile` | 计算简化阈值 |
| 面积计算 | 支持平面/球面两种模式 |

### 操作模块（topojson-client）
| 方法 | 功能 |
|------|------|
| `topojson.feature` | TopoJSON转GeoJSON |
| `topojson.merge` | 几何合并 |
| `topojson.mesh` | 生成网格边界 |
| `topojson.neighbors` | 计算相邻要素 |
| 坐标处理 | 支持量化/变换等操作 |

> 注：所有模块均支持浏览器环境和Node.js环境，提供完整的拓扑数据处理解决方案。


以下是 **简化模块（topojson-simplify）** 和 **操作模块（topojson-client）** 的典型使用示例，并明确说明它们是否需要直接操作 TopoJSON 数据：

---

### **一、简化模块（topojson-simplify）**
#### **功能说明**
用于对 TopoJSON 数据进行拓扑保持的简化，减少坐标点数量以优化性能，同时保持几何图形的拓扑关系（如相邻多边形的共享边界不会断裂）。

#### **使用示例**
```javascript
const topojson = require('topojson-client');
const topojsonSimplify = require('topojson-simplify');

// 1. 加载原始 TopoJSON 数据
const topology = {
  type: "Topology",
  objects: { states: {...} },
  arcs: [...]
};

// 2. 预处理（计算每个坐标点的重要性权重）
const prepped = topojsonSimplify.presimplify(topology);

// 3. 执行简化（保留重要性最高的坐标点，阈值越小简化越激进）
const simplified = topojsonSimplify.simplify(prepped, 0.1); 

// 4. 可选：过滤掉面积过小的孤立多边形
const filtered = topojsonSimplify.filterWeight(
  simplified,
  topojsonSimplify.planarRingArea, // 使用平面面积计算
  0.01 // 面积阈值
);
```

#### **关键点**
- **输入必须为 TopoJSON**：因为简化需要利用弧段（arcs）的共享拓扑关系。
- **拓扑保持**：相邻多边形的边界在简化后仍会完美衔接。
- **量化控制**：通过 `simplify()` 的阈值参数控制简化强度（例如 `0.1` 保留10%的坐标点）。

---

### **二、操作模块（topojson-client）**
#### **功能说明**
用于将 TopoJSON 转换为 GeoJSON 或其他衍生格式（如合并多边形、提取边界网格等）。

#### **使用示例**
```javascript
const topojson = require('topojson-client');

// 1. 加载 TopoJSON 数据
const topology = {
  type: "Topology",
  objects: { 
    states: { type: "GeometryCollection", geometries: [...] },
    counties: { type: "GeometryCollection", geometries: [...] }
  },
  arcs: [...]
};

// 2. 转换为 GeoJSON FeatureCollection
const geojson = topojson.feature(topology, topology.objects.states);

// 3. 合并所有州的多边形（生成一个大的 MultiPolygon）
const merged = topojson.merge(topology, topology.objects.states.geometries);

// 4. 提取州边界的网格线（仅边界，无填充）
const mesh = topojson.mesh(topology, topology.objects.states);

// 5. 计算相邻州（基于共享弧段）
const neighbors = topojson.neighbors(topology.objects.states.geometries);
```

#### **关键点**
- **输入必须为 TopoJSON**：因为操作依赖弧段索引（如 `merge()` 和 `mesh()` 需要解析共享弧段）。
- **输出灵活**：
  - 可输出 GeoJSON（如 `feature()`）
  - 也可输出 TopoJSON 衍生结构（如 `mesh()` 生成的边界线）。

---

### **三、是否需要直接操作 TopoJSON？**
| 模块                | 输入要求       | 输出类型       | 原因                                                                 |
|---------------------|---------------|----------------|----------------------------------------------------------------------|
| `topojson-simplify` | **必须 TopoJSON** | TopoJSON       | 简化需要利用弧段的拓扑关系，保持共享边界的完整性。                   |
| `topojson-client`   | **必须 TopoJSON** | GeoJSON/TopoJSON | 操作（如合并、网格化）依赖弧段索引，无法直接从 GeoJSON 推断拓扑关系。|

---

### **四、完整工作流示例**
```javascript
// 1. 从 GeoJSON 生成 TopoJSON（使用 topojson-server）
const topology = topojson.topology({ states: geojson });

// 2. 简化 TopoJSON
const simplified = topojsonSimplify.simplify(
  topojsonSimplify.presimplify(topology),
  0.5
);

// 3. 操作简化后的数据（客户端使用）
const usBorder = topojson.mesh(simplified, simplified.objects.states);
const california = topojson.feature(simplified, simplified.objects.states.geometries[0]);
```

---

### **总结**
1. **简化模块**：必须操作 TopoJSON，以保持拓扑关系。
2. **操作模块**：必须操作 TopoJSON，以利用弧段共享结构。
3. **GeoJSON 转换**：仅在最终可视化前使用 `topojson.feature()` 转换为 GeoJSON（如传给 D3.js 或 Leaflet）。

> 提示：若原始数据是 GeoJSON，需先用 `topojson-server` 的 `topojson.topology()` 转换为 TopoJSON，再执行后续操作。