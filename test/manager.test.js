const Manager = require("../Lib/manager");

describe("Manager", () => {
    describe("create object", () => {
        it("should create an object with the keys name, id, email, and github", () => {
            const managerData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                officeNumber: '321'
            }
            const manager = new Manager(managerData)
            expect(manager).toEqual(managerData);
        });
    });
    describe("create object", () => {
        it("return the string manager", () => {
            const managerData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                officeNumber: '321'
            }
            const managerString = 'Manager'
            const manager = new Manager(managerData)
            const getTheRole=manager.getRole();
            expect(managerString).toEqual(getTheRole);
        });
    });
})