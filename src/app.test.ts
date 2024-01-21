import {describe, expect, test} from '@jest/globals';
import {isSquare} from './app.ts';

type SquareNumbers = [numberA: number, result: boolean];
describe('isSquare', () => {
    it.each<SquareNumbers>([
        [0, true],
        [4, true],
        [25, true],
        [-1, false],
        [3, false],
        [26, false]
    ])('should define is the number is a square or not', (n: number, result: boolean) => {
        expect(isSquare(n)).toBe(result)
    })
});
