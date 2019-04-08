import Greeting from './Greeting';

const dateNow = new Date();

describe('Testing Greeting', () => {

    let result;
    beforeAll(() => {
        result = new Greeting({now: dateNow.toISOString()})
    });

    it('should return a value', () => {
        expect(result).not.toBeNull();
    });

    it('should return h1 tag', () => {
        expect(result.type).toBe("h1")
    });
})