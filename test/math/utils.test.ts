import { describe, it, expect } from 'vitest';
import { formatNum, isFloat } from '../../src/';

describe('math utils', () => {
    it('should format a number', () => {
        const result = formatNum(1.23456789, 2);
        expect(result).toBe(1.23);

        const result2 = formatNum(1.23456789, 4);
        expect(result2).toBe(1.2346);

        const result3 = formatNum(1.23456789);
        expect(result3).toBe(1.234568);
    });

    it('should check if a number is a float', () => {
        const result = isFloat(1.23456789);
        expect(result).toBe(true);

        const result2 = isFloat(1);
        expect(result2).toBe(false);

        const result3 = isFloat(1.02);
        expect(result3).toBe(true);
    });
})