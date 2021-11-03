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
    describe("return role", () => {
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
    describe("return name", () => {
        it("return the name with the getName method", () => {
            const managerData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                officeNumber: '321'
            }
            const managerNameString = 'Justin'
            const manager = new Manager(managerData)
            const getTheName = manager.getName();
            expect(managerNameString).toEqual(getTheName);
        })
    })
    describe("return id", () => {
        it("return the id with the getId method", () => {
            const managerData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                officeNumber: '321'
            }
            const managerIdString = '555'
            const manager = new Manager(managerData)
            const getTheId = manager.getId();
            expect(managerIdString).toEqual(getTheId);
        })
    })
    describe("return email", () => {
        it("return the email with the getEmail method", () => {
            const managerData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                officeNumber: '321'
            }
            const managerEmailString = 'jstndhouk@gmail.com'
            const manager = new Manager(managerData)
            const getTheEmail = manager.getEmail();
            expect(managerEmailString).toEqual(getTheEmail);
        })
    })
    describe("return office number", () => {
        it("return the office number with the getOfficeNum method", () => {
            const managerData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                officeNumber: '321'
            }
            const managerOfficeNumString = '321'
            const manager = new Manager(managerData)
            const getTheOfficeNum = manager.getOfficeNum();
            expect(managerOfficeNumString).toEqual(getTheOfficeNum);
        })
    })
})