import { describe, it, expect, vi } from 'vitest';
import { throttle, extend } from '../../src/core';

describe('utils', () => {
    it('should throttle a function', () => {
        const mockFn = vi.fn();
        const throttledFn = throttle(mockFn, 100);
        throttledFn();
        throttledFn();
        throttledFn();
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('should merge the properties', () => {
        const obj = { a: 1 };
        const result = extend(obj, { b: 2 }, { c: 3 });
        expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });

});
