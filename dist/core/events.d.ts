type asyncFunction = (...args: any[]) => Promise<any>;
interface Listener {
    fn: Function;
    context?: any;
    once?: boolean;
}
interface AsyncListener extends Listener {
    fn: asyncFunction;
}
/**
 * 事件基础函数（类，默认构造函数）
 * - 维护两个事件监听器队列（同步、异步）
 * - 提供事件监听、移除、触发等方法
 * - 提供一次性事件监听
 * - 提供获取指定事件类型的监听器
 * - 提供判断是否存在指定事件类型的监听器
 * > 参考 [Leaflet 的事件机制设计](https://github.com/Leaflet/Leaflet/blob/80a42768306c8c2f9f1bd1eb48d529ffcac3072f/src/core/Events.js#L29)
 */
export declare class Evented {
    private _events;
    private _asyncEvents;
    /**
     * 添加事件监听（同步、异步）
     * @param type - 事件名称（类型）
     * @param fn - 事件处理函数（监听器）
     * @param context - 事件处理函数的上下文
     * @returns {this} 返回 EventEmitter 实例
     */
    on(type: string, fn: Function, context?: any): this;
    /**
     * 移除事件监听
     * @param type
     * @param fn
     * @param context
     * @returns
     */
    off(type: string, fn?: Function, context?: any): this;
    /**
     * 添加一次性事件监听
     * @param type
     * @param fn
     * @param context
     * @returns
     */
    once(type: string, fn: Function, context?: any): this;
    /**
     * 只会触发非异步事件
     * @param type
     * @param data
     * @returns
     */
    emit(type: string, data?: any): this;
    /**
     * 异步触发事件
     * - parallel: 并行执行（同时执行所有处理函数）
     * - series: 串行执行（按照添加顺序执行）
     * - ignore: 忽略(在后台异步执行，但无法得知何时执行完毕)
     * @param type - 事件名称
     * @param mode - 事件处理函数的执行模式('parallel' | 'series' | 'ignore')
     * @param args - 事件处理函数的参数
     * @returns {Promise<void>} 返回一个 Promise 对象
     */
    emitAsync(type: string, mode: 'parallel' | 'series' | 'ignore', data?: any): Promise<void>;
    /**
     * 获取指定事件类型的监听器
     * @param type - 事件名称
     * @returns {Listener[]} 返回一个监听器数组
     */
    listeners(type: string): (Listener | AsyncListener)[];
    /**
     * 判断是否存在指定事件类型的监听器
     * @param type - 事件名称
     * @returns {boolean} 返回一个布尔值
     */
    hasListeners(type: string): boolean;
    /**
     * 移除所有事件监听
     * @returns {this} 返回 EventEmitter 实例
     */
    removeAllListeners(): this;
    /**
     * 判断是否为异步监听器
     * @param {Listener | AsyncListener} listener - 监听器
     * @returns {boolean} 返回一个布尔值
     */
    static isAsyncListener(listener: Listener | AsyncListener): listener is AsyncListener;
}
export {};
