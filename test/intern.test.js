const Intern = require("../Lib/intern");

describe("Intern", () => {
    describe("create object", () => {
        it("should create an object with the keys name, id, email, and school", () => {
            const internData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                school: 'Auburn'
            }
            const intern = new Intern(internData)
            expect(intern).toEqual(internData);
        });
    });
    describe("create object", () => {
        it("return the string intern", () => {
            const internData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                school: 'jstdhouk'
            }
            const internString = 'Intern'
            const intern = new Intern(internData)
            const getTheRole=intern.getRole();
            expect(internString).toEqual(getTheRole);
        });
    });
})