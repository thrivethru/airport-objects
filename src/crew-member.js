import Person from './person';

class CrewMember extends Person {
  constructor(name, position, staffNumber) {
    super(name);
    this.position = position;
    this.staffNumber = staffNumber;
  }
}

export default CrewMember;