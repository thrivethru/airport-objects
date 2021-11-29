import Person from '../src/person';
import Bag from '../src/bag';

describe("Person class", () => {
  test("must create a person instance", () => {
    const name = "John";
    const testPerson = new Person(name);
    expect(testPerson).toBeDefined();
    expect(testPerson instanceof Person).toBeTruthy();
  })

  test("must have a name", () => {
    expect(() => new Person()).toThrowError("person must have a name");
    const name = "John";
    const testPerson = new Person(name);
    expect(testPerson.name).toBe(name)
  })

  test("must be able to add bags", () => {
    const name = "John";
    const testPerson = new Person(name);
    expect(testPerson.bags).toStrictEqual([]);
    const testBagA = new Bag(9)
    testPerson.addBag(testBagA);
    expect(testPerson.bags).toStrictEqual([testBagA]);
  })
})