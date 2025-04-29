// useDataGroup.js
import { produce } from 'immer'
import { shallowRef } from 'vue'

/**
 * 数据实体类（不可变结构）
 */
export class DataEntity {
  constructor(id, type, props = {}) {
    this.id = id
    this.type = type
    this.props = props
    this.version = 1
    this.createdAt = new Date().toISOString()
    this.updatedAt = this.createdAt
  }

  update(props) {
    return produce(this, draft => {
      draft.props = { ...draft.props, ...props }
      draft.version += 1
      draft.updatedAt = new Date().toISOString()
    })
  }

  toJSON() {
    return {
      id: this.id,
      type: this.type,
      props: this.props,
      version: this.version,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
  }
}

/**
 * 关系类型枚举
 */
export const RelationType = {
  DERIVED: 'derived',
  COMPOSED: 'composed',
  REFERENCED: 'referenced'
}

/**
 * 数据关系组类：管理实体及其依赖关系
 */
class DataGroup {
  constructor(initialEntities = []) {
    this._state = shallowRef({
      entities: initialEntities,
      relations: {},         // { [fromId]: { [toId]: RelationType } }
      reverseRelations: {}   // 反向关系索引 { [toId]: { [fromId]: RelationType } }
    })
  }

  /**
   * 内部更新方法
   */
  _update(updater) {
    this._state.value = produce(this._state.value, updater)
  }

  /**
   * 添加数据实体
   */
  addEntity(entity) {
    this._update(draft => {
      draft.entities.push(entity)
    })
    return this
  }

  /**
   * 设置实体之间的依赖关系
   */
  addRelation(fromId, toId, type = RelationType.DERIVED) {
    this._update(draft => {
      // 正向关系
      if (!draft.relations[fromId]) {
        draft.relations[fromId] = {}
      }
      draft.relations[fromId][toId] = type
      
      // 反向关系
      if (!draft.reverseRelations[toId]) {
        draft.reverseRelations[toId] = {}
      }
      draft.reverseRelations[toId][fromId] = type
    })
    return this
  }

  /**
   * 移除某个实体及其依赖
   */
  removeEntity(entityId) {
    this._update(draft => {
      draft.entities = draft.entities.filter(e => e.id !== entityId)
      
      // 移除正向关系
      delete draft.relations[entityId]
      for (const fromId in draft.relations) {
        delete draft.relations[fromId][entityId]
      }
      
      // 移除反向关系
      delete draft.reverseRelations[entityId]
      for (const toId in draft.reverseRelations) {
        delete draft.reverseRelations[toId][entityId]
      }
    })
    return this
  }

  /**
   * 获取实体
   */
  getEntityById(id) {
    return this._state.value.entities.find(e => e.id === id)
  }

  /**
   * 获取某个实体的直接依赖
   */
  getDependents(id, relationType) {
    const relations = this._state.value.relations[id] || {}
    const result = []
    for (const [toId, type] of Object.entries(relations)) {
      if (!relationType || type === relationType) {
        result.push({ target: toId, type })
      }
    }
    return result
  }

  /**
   * 获取依赖某个实体的所有实体
   */
  getDependencies(id, relationType) {
    const relations = this._state.value.reverseRelations[id] || {}
    const result = []
    for (const [fromId, type] of Object.entries(relations)) {
      if (!relationType || type === relationType) {
        result.push({ source: fromId, type })
      }
    }
    return result
  }

  /**
   * 导出为D3兼容的DAG数据结构
   */
  toD3DAG() {
    const { entities, relations } = this._state.value
    const nodes = entities.map(entity => ({
      id: entity.id,
      type: entity.type,
      version: entity.version,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      // ...entity.props
    }))

    const links = []
    for (const [source, targets] of Object.entries(relations)) {
      for (const [target, type] of Object.entries(targets)) {
        links.push({
          source,
          target,
          type,
          value: 1 // 可用于控制连线粗细
        })
      }
    }

    return { nodes, links }
  }

  /**
   * 获取当前状态（兼容原函数式实现）
   */
  get state() {
    return this._state
  }
}

/**
 * 工厂函数（保持与原API兼容）
 */
export function useDataGroup(initialEntities = []) {
  const dataGroup = new DataGroup(initialEntities)
  
  return {
    state: dataGroup.state,
    addEntity: dataGroup.addEntity.bind(dataGroup),
    addRelation: dataGroup.addRelation.bind(dataGroup),
    removeEntity: dataGroup.removeEntity.bind(dataGroup),
    getEntityById: dataGroup.getEntityById.bind(dataGroup),
    getDependents: dataGroup.getDependents.bind(dataGroup),
    getDependencies: dataGroup.getDependencies.bind(dataGroup),
    toD3DAG: dataGroup.toD3DAG.bind(dataGroup)
  }
}