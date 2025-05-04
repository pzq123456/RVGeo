import { reactive, markRaw } from 'vue';

export class Layer {
  constructor(id, type, options = {}) {
    // 固定属性
    this.id = id;
    this.type = markRaw(type); // 类型不需要响应式
    
    // 响应式状态管理
    this.state = reactive({
      // 默认属性
      opacity: options.opacity ?? 1,
      visible: options.visible ?? true,
      
      // 其他动态属性
      ...options.props
    });
    
    // 大块非响应式数据
    this.data = options.data ? markRaw(options.data) : null;
  }

  // 通用属性访问器
  get(prop) {
    return this.state[prop];
  }

  // 通用属性设置器
  set(prop, value) {
    this.state[prop] = value;
  }

  // 保留原有的opacity和visible访问器以保持兼容性
  get opacity() {
    return this.state.opacity;
  }

  set opacity(value) {
    this.state.opacity = value;
  }

  get visible() {
    return this.state.visible;
  }

  set visible(value) {
    this.state.visible = value;
  }
}

export class LayerGroup {
  constructor(layers = []) {
    this.layers = reactive(layers);
  }

  // 添加新图层
  addLayer(layer) {
    this.layers.push(layer);
  }

  // 移除图层
  removeLayer(layerId) {
    const index = this.layers.findIndex(l => l.id === layerId);
    if (index !== -1) {
      this.layers.splice(index, 1);
    }
  }

  // 通用属性更新方法
  updateLayerProperty(layerId, prop, value) {
    const layer = this.layers.find(l => l.id === layerId);
    if (layer) {
      layer.set(prop, value);
    }
  }

  // 更新图层的不透明度（保持兼容性）
  setOpacity(layerId, opacity) {
    this.updateLayerProperty(layerId, 'opacity', opacity);
  }

  // 更新图层的可见性（保持兼容性）
  setVisibility(layerId, visible) {
    this.updateLayerProperty(layerId, 'visible', visible);
  }

  // 设置图层顺序（支持拖拽）
  setLayerOrder(newOrder) {
    this.layers.length = 0;
    this.layers.push(...newOrder);
  }

  // 根据图层类型和属性生成 DeckGL 图层
  getLayers() {
    const visibleLayers = this.layers.filter(layer => layer.visible).reverse();
    
    return visibleLayers.map((layer, index) => {
      const LayerType = layer.type;
      // 只有最上层图层（数组的第一个元素）也就是倒数第一个元素的 pickable 为 true
      const pickable = index === visibleLayers.length - 1;
      
      // 收集所有状态属性
      const layerProps = {
        id: layer.id,
        pickable,
        ...layer.state, // 展开所有响应式属性
        data: layer.data ? layer.data.get() : null // 处理数据
      };
      
      return new LayerType(layerProps);
    });
  }
}