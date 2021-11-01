const Engineer = require("../Lib/engineer");

describe("Engineer", () => {
    describe("create object", () => {
        it("should create an object with the keys name, id, email, and office number", () => {
            const engineerData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                github: 'jstdhouk'
            }
            const engineer = new Engineer(engineerData)
            expect(engineer).toEqual(engineerData);
        });
    });
    describe("create object", () => {
        it("return the string engineer", () => {
            const engineerData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                github: 'jstdhouk'
            }
            const engineerString = 'Engineer'
            const engineer = new Engineer(engineerData)
            const getTheRole=engineer.getRole();
            expect(engineerString).toEqual(getTheRole);
        });
    });
})