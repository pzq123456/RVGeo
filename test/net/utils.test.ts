import { describe, it, expect } from 'vitest';
import { Queue } from '../../src';

describe('Queue', () => {
  it('should push and pop items', () => {
    const queue = new Queue<number>();
    queue.push(1);
    queue.push(2);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
  });

  it('should put and get items', () => {
    const queue = new Queue<number>();
    queue.put(1);
    queue.put(2);
    expect(queue.get()).toBe(1);
    expect(queue.get()).toBe(2);
  });

  it('should check if queue is empty', () => {
    const queue = new Queue<number>();
    expect(queue.isEmpty()).toBe(true);
    queue.put(1);
    expect(queue.isEmpty()).toBe(false);
    queue.get();
    expect(queue.isEmpty()).toBe(true);
  });
});