class Airport {
    static airports = [];
    constructor(name, abbreviation) {
        this.name = name;
        this.abbreviation = abbreviation;
        this.airplanes = [];
        this.constructor.airports = [...this.constructor.airports, this];
    }

    land(airplane) {
        this.airplanes = [...this.airplanes, airplane];
    }
}

// const dfw = new Airport("Dallas/Fort Worth", "DFW");
// const iah = new Airport("Houston", "IAH")
// console.log(dfw);
// console.log(iah);
// console.log(Airport.airports);
module.exports = Airport;