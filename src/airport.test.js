const Airport = require('./airport');
const Airplane = require('./airplane')

describe("Airport class", () => {
    test("Creates Airport instance", () => {
        const dfw = new Airport("Dallas/Fort Worth", "DFW");
        expect(dfw).toBeDefined();
        expect(dfw instanceof Airport).toBeTruthy();
    })

    test("can have airplanes land", () => {
        const dfw = new Airport("Dallas/Fort Worth", "DFW");
        const id = "1A";
        const capacity = 250;
        const range = 1000;
        const testAirplane = new Airplane(id, capacity, range);
        expect(dfw.airplanes.length).toBe(0);
        dfw.land(testAirplane);
        expect(dfw.airplanes.length).toBe(1);
        expect(dfw.airplanes[0]).toBe(testAirplane);
    })
})