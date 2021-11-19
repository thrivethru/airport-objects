class Passenger {
    constructor(name, passportNumber, seatNumber) {
        if (name === undefined) throw new Error("passenger must have a name");
        if (passportNumber === undefined) throw new Error("passenger must have a passport number");
        if (seatNumber === undefined) throw new Error("passenger must have a seat number");
        this.name = name;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
        this.bags = [];
    }

    addBag(bag) {
        this.bags = [...this.bags, bag];
    }
}

module.exports = Passenger;