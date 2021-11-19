const Airport = require('./airport');

describe("Airport class", () => {
    test("Creates Airport instance", () => {
        const testAirport = new Airport();
        expect(testAirport).toBeDefined();
    })
})