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

export class PriorityQueue<T> {
  private elements: [number, T][] = [];

  empty(): boolean {
    return this.elements.length === 0;
  }

  put(item: T, priority: number): void {
    this.elements.push([priority, item]);
    this.elements.sort((a, b) => a[0] - b[0]);
  }

  get(): T | undefined {
    return this.elements.shift()?.[1];
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }
}