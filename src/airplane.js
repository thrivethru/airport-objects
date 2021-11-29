import Person from './person';
import Passenger from './passenger';
import CrewMember from './crew-member';

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

export default Airplane;