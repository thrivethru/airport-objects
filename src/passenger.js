const Person = require('./person');

class Passenger extends Person {
    constructor(name, passportNumber, seatNumber) {
        if (name === undefined) throw new Error("passenger must have a name");
        if (passportNumber === undefined) throw new Error("passenger must have a passport number");
        if (seatNumber === undefined) throw new Error("passenger must have a seat number");
        super(name);
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
        // this.bags = [];
    }

    callAttendant() {
        return `Hello, please assist me`;
    }
}

module.exports = Passenger;