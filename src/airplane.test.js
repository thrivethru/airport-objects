const Airplane = require('./airplane');

describe("Airplane class", () => {
    test("Creates Airplane instance", () => {
        const testAirplane = new Airplane();
        expect(testAirplane).toBeDefined();
    })
})