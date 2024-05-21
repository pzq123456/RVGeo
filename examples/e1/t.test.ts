import { describe, it, expect} from 'vitest';
import { lev } from './levenshtein';

describe('levenshtein', () => {
    it('should return 3', () => {
        expect(lev("cat","dog")).toBe(3);
    });
    it('should return 1', () => {
        expect(lev("cat","can")).toBe(1);
    });
    it('should return 0', () => {
        expect(lev("kitten","kitten")).toBe(0);
    });
    it('should return 3', () => {
        expect(lev("sitting","kitten")).toBe(3);
    });
});