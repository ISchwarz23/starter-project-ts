import { InputReader } from "../src/utils/input-reader";
import { solveAssignment1, solveAssignment2 } from '../src/index';


describe('Assignments', () => {

    test('should return correct result for assignment 1', async () => {
        // given
        const input = new InputReader("./input/input.txt").readLineAsString();

        // when
        const result = solveAssignment1(input);

        // then
        expect(result).toEqual(0);
    });

    test('should return correct result for assignment 2', async () => {
        // given
        const input = new InputReader("./input/input.txt").readLineAsString();

        // when
        const result = solveAssignment2(input);

        // then
        expect(result).toEqual(0);
    });
});