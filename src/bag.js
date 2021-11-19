class Bag {
    constructor(weight) {
        if (weight === undefined) throw new Error("bag must have a weight");
        if (weight <= 0 || weight >= 100) throw new Error("bag must have a valid weight");
        this.weight = weight;
        this.isOverLimit = weight >= 50 ? true : false;
    }
}

module.exports = Bag;