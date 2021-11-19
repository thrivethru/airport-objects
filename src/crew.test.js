const CrewMember = require('./crew-member');

describe("CrewMember class", () => {
    test("Creates CrewMember instance", () => {
        const testCrewMember = new CrewMember();
        expect(testCrewMember).toBeDefined();
    })
})