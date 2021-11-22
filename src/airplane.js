const Person = require('./person');
const Passenger = require('./passenger');
const CrewMember = require('./crew-member');

class Airplane {
    static airplanes = [];
    constructor(id, capacity, range, crewMembers, passengers) {
        this.id = id;
        this.capacity = capacity;
        this.range = range;
        this.crewMembers = [];
        this.passengers = [];
        this.constructor.airplanes = [...this.constructor.airplanes, this];
    }

    board(person) {
        if (!(person instanceof Person)) throw new Error("must be a person to board");
        if (person instanceof Passenger) {
            this.passengers = [...this.passengers, person];
        }
        if (person instanceof CrewMember) {
            this.crewMembers = [...this.crewMembers, person];
        }
    }
}

module.exports = Airplane;