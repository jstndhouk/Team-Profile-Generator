const Engineer = require("../Lib/engineer");

describe("Engineer", () => {
    describe("create object", () => {
        it("should create an object with the keys name, name, email, and office number", () => {
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
    describe("return role", () => {
        it("return the string engineer", () => {
            const engineerData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                github: 'jstdhouk'
            }
            const engineerString = 'Engineer'
            const engineer = new Engineer(engineerData)
            const getTheRole = engineer.getRole();
            expect(engineerString).toEqual(getTheRole);
        });
    });
    describe("return name", () => {
        it("return the name with the name method", () => {
            const engineerData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                github: 'jstdhouk'
            }
            const engineerNameString = 'Justin'
            const engineer = new Engineer(engineerData)
            const getTheName = engineer.getName();
            expect(engineerNameString).toEqual(getTheName);
        })
    })
    describe("return id", () => {
        it("return the id with the id method", () => {
            const engineerData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                github: 'jstdhouk'
            }
            const engineerIdString = '555'
            const engineer = new Engineer(engineerData)
            const getTheId = engineer.getId();
            expect(engineerIdString).toEqual(getTheId);
        })
    })
    describe("return email", () => {
        it("return the name with the email method", () => {
            const engineerData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                github: 'jstdhouk'
            }
            const engineerEmailString = 'jstndhouk@gmail.com'
            const engineer = new Engineer(engineerData)
            const getTheEmail = engineer.getEmail();
            expect(engineerEmailString).toEqual(getTheEmail);
        })
    })
})
