const Bag = require('./bag');

describe("Bag class", () => {
    test("bag needs a weight", () => {
        expect(() => new Bag()).toThrowError("bag must have a weight");
        const testBag = new Bag(16);
        expect(testBag.weight).toBe(16);
    }) 

    test("bag weight must be valid", () => {
        expect(() => new Bag(-5)).toThrowError("bag must have a valid weight");
        expect(() => new Bag(100)).toThrowError("bag must have a valid weight");
    })

    test("flags if overlimit", () => {
        const testBag = new Bag(16);
        expect(testBag.isOverLimit).toBeFalsy();
        const testBagOverlimit = new Bag(70);
        expect(testBagOverlimit.isOverLimit).toBeTruthy(); 
    })
})