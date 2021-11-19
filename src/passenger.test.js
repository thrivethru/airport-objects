const Passenger = require('./passenger');
const Bag = require('./bag');

describe("Passenger class", () => {
    test("Creates Passenger instance", () => {
        const name = "John";
        const passportNumber = "555555";
        const seatNumber = "25B";
        const testPassenger = new Passenger(name, passportNumber, seatNumber);
        expect(testPassenger).toBeDefined();
    })

    test("passenger must have name", () => {
        expect(() => new Passenger()).toThrowError("passenger must have a name");
        const name = "John";
        const passportNumber = "555555";
        const seatNumber = "25B";
        const testPassenger = new Passenger(name, passportNumber, seatNumber);
        expect(testPassenger.name).toBe("John");
    })

    test("passenger must have a passportNumber", () => {
        const name = "John";
        const seatNumber = "25B";
        expect(() => new Passenger(name)).toThrowError("passenger must have a passport number");
        const passportNumber = "555555";
        const testPassenger = new Passenger(name, passportNumber, seatNumber);
        expect(testPassenger.passportNumber).toBe("555555");
    })

    test("passenger must have a seatNumber", () => {
        const name = "John";
        const passportNumber = "555555";
        expect(() => new Passenger(name, passportNumber)).toThrowError("passenger must have a seat number");
        const seatNumber = "25B";
        const testPassenger = new Passenger(name, passportNumber, seatNumber);
        expect(testPassenger.seatNumber).toBe("25B");
    })

    test("passenger must be able to add a bag", () => {
        const name = "John";
        const passportNumber = "555555";
        const seatNumber = "25B";
        const testPassenger = new Passenger(name, passportNumber, seatNumber);
        expect(testPassenger.bags).toStrictEqual([]);
        const testBagA = new Bag(9)
        testPassenger.addBag(testBagA);
        expect(testPassenger.bags).toStrictEqual([testBagA]);
    })
})