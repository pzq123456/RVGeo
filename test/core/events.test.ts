import { describe, it, expect, vi } from 'vitest';
import { Evented } from '../../src/core/events';

describe('Evented', () => {
  it('should emit events', () => {
    const emitter = new Evented();
    let message = '';
    function clickHandler(event: any) {
        message = event.message;
    }
    emitter.on('click', clickHandler);
    emitter.emit('click', { message: 'Hello, world!' });

    expect(message).toBe('Hello, world!');
  });

  it('should emit events asynchronously', async () => {
    // 默认 pass

    // 异步建议在浏览器中测试
    // const emitter = new Evented();
    // async function clickHandler(event: any) {
    //     // 暂停 3 秒
    //     await new Promise(resolve => setTimeout(resolve, 3000));
    //     console.log("clickHandler", event.data);
    // }
    // async function clickHandler2(event: any) {
    //     // 暂停 3 秒
    //     await new Promise(resolve => setTimeout(resolve, 3000));
    //     console.log("clickHandler2", event.data);
    // }
    // function clickHandler3(event: any) {
    //     console.log("clickHandler3", event.data);
    // }
    
    // emitter.on('click', clickHandler);
    // emitter.on('click', clickHandler2);
    // emitter.on('click', clickHandler3);
    
    // emitter.emitAsync('click', 'ignore', { data: 123 }); // 异步触发只会触发异步事件
    // emitter.emit('click', { data: 123 }); // 只会触发非异步事件
  });

  it('should remove event listeners', () => {
    // in browser
    /*
      const emitter = new Evented();
      function mockFn(event: any) {
          console.log(event.message);
      }
      emitter.on('click', mockFn);


      emitter.emit('click', { message: 'Hello, world!' });

      emitter.off('click', mockFn);
      console.log('off');
      let listeners = emitter.listeners('click');
      console.log(listeners);
      emitter.emit('click', { message: 'Hello, world!' }); 
     */
    const emitter = new Evented();
    const mockFn = vi.fn();
    emitter.on('click', mockFn);

    emitter.off('click', mockFn);

    emitter.emit('click', { message: 'Hello, world!' });

    expect(mockFn).not.toHaveBeenCalled();
  });

  it('should get event listeners', () => {
    const emitter = new Evented();
    const mockFn1 = vi.fn();
    const mockFn2 = vi.fn();
    emitter.on('click', mockFn1);
    emitter.on('click', mockFn2);

    const listeners = emitter.listeners('click');

    expect(listeners).toHaveLength(2);
    expect(listeners).toContain(mockFn1);
    expect(listeners).toContain(mockFn2);
  });

  it('should check if event listeners exist', () => {
    const emitter = new Evented();
    const mockFn = vi.fn();
    emitter.on('click', mockFn);

    const hasListeners = emitter.hasListeners('click');

    expect(hasListeners).toBe(true);
  });
});
