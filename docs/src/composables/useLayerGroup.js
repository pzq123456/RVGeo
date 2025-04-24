import { reactive } from 'vue';

export class Layer {
  constructor(id, opacity = 1, visible = true, type, props = {}) {
    this.id = id;
    this.state = reactive({ opacity, visible });
    this.type = type;
    this.props = props;
  }

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

  toJSON() {
    return {
      id: this.id,
      opacity: this.state.opacity,
      visible: this.state.visible,
      type: this.type,
      props: this.props
    };
  }
}


export class LayerGroup {
  constructor(layers = []) {
    // 使 layers 数组本身响应式
    this.layers = reactive(layers);
  }

  // 更新图层的不透明度
  setOpacity(layerId, opacity) {
    const layer = this.layers.find(l => l.id === layerId);
    if (layer) {
      layer.opacity = opacity;
    }
  }

  // 更新图层的可见性
  setVisibility(layerId, visible) {
    const layer = this.layers.find(l => l.id === layerId);
    if (layer) {
      layer.visible = visible;
    }
  }

  // 设置图层顺序（支持拖拽）
  setLayerOrder(newOrder) {
    // Vue 会检测到 this.layers 的变化，并更新视图
    this.layers.length = 0;
    this.layers.push(...newOrder);
  }

  // 根据图层类型和属性生成 DeckGL 图层
  getLayers() {
    return this.layers.filter(layer => layer.visible).reverse().map(layer => {
      const LayerType = layer.type;
      return new LayerType({
        id: layer.id,
        opacity: layer.opacity,
        ...layer.props,
      });
    });
  }
}
