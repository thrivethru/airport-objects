const CrewMember = require('./crew-member');

describe("CrewMember class", () => {
    test("Creates CrewMember instance", () => {
        const name = "John";
        const staffNumber = 555;
        const testCrewMember = new CrewMember(name, staffNumber);
        expect(testCrewMember).toBeDefined();
    })
})