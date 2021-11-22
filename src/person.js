class Person {
    constructor(name) {
        if (name === undefined) throw new Error("person must have a name");
        this.name = name;
        this.bags = [];
    }

    addBag(bag) {
        this.bags = [...this.bags, bag];
    }
}

module.exports = Person;