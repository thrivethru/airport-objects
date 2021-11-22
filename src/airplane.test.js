const Airplane = require('./airplane');
const Passenger = require('./passenger');
const CrewMember = require('./crew-member');

describe("Airplane class", () => {
    test("Creates Airplane instance", () => {
        const id = "1A";
        const capacity = 250;
        const range = 1000;
        const testAirplane = new Airplane(id, capacity, range);
        expect(testAirplane).toBeDefined();
        expect(testAirplane instanceof Airplane).toBeTruthy();
    })

    test("Must be a person to board", () => {
        const id = "1A";
        const capacity = 250;
        const range = 1000;
        const testAirplane = new Airplane(id, capacity, range);
        expect(() => testAirplane.board("")).toThrowError("must be a person to board");
    })

    test("Boards a passenger", () => {
        const id = "1A";
        const capacity = 250;
        const range = 1000;
        const testAirplane = new Airplane(id, capacity, range);
        const name = "John";
        const passportNumber = "555555";
        const seatNumber = "25B";
        const testPassenger = new Passenger(name, passportNumber, seatNumber);
        expect(testAirplane.passengers.length).toBe(0);
        testAirplane.board(testPassenger);
        expect(testAirplane.passengers.length).toBe(1);
        expect(testAirplane.passengers[0]).toBe(testPassenger);
    })

    test("Boards a crew member", () => {
        const id = "1A";
        const capacity = 250;
        const range = 1000;
        const testAirplane = new Airplane(id, capacity, range);
        const name = "John";
        const staffNumber = 555;
        const testCrewMember = new CrewMember(name, staffNumber);
        expect(testAirplane.crewMembers.length).toBe(0);
        testAirplane.board(testCrewMember);
        expect(testAirplane.crewMembers.length).toBe(1);
        expect(testAirplane.crewMembers[0]).toBe(testCrewMember);
    })
})