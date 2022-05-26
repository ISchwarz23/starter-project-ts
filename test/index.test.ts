import { getGreeting } from '../src/index';


describe('Index tests', () => {
    test('should return "Hello World"', async () => {
        expect(getGreeting()).toEqual("Hello World");
    });
});