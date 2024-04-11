// 包装数组，使其支持队列操作
export class Queue<T> {
    private data: T[] = [];
  
    push(item: T): void {
      this.data.push(item);
    }
  
    pop(): T | undefined {
      return this.data.shift();
    }
  
    put(item: T): void {
      this.push(item);
    }
  
    get(): T | undefined {
      return this.pop();
    }
  
    isEmpty(): boolean {
      return this.data.length === 0;
    }
}