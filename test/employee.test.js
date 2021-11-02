const Employee = require("../Lib/employee");

describe("Employee", () => {
    describe("create object", () => {
        it("should create an object with the keys name, id and email", () => {
            const employeeData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
            }
            const employee = new Employee(employeeData)
            expect(employee).toEqual(employeeData);
        });
    });
    describe("return name", () => {
        it("return the name with the getName method", () => {
            const employeeData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                github: 'jstdhouk'
            }
            const employeeNameString = 'Justin'
            const employee = new Employee(employeeData)
            const getTheName = employee.getName();
            expect(employeeNameString).toEqual(getTheName);
        })
    })
    describe("return id", () => {
        it("return the id with the getId method", () => {
            const employeeData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                github: 'jstdhouk'
            }
            const employeeIdString = '555'
            const employee = new Employee(employeeData)
            const getTheId = employee.getId();
            expect(employeeIdString).toEqual(getTheId);
        })
    })
    describe("return email", () => {
        it("return the name with the getEmail method", () => {
            const employeeData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                github: 'jstdhouk'
            }
            const employeeEmailString = 'jstndhouk@gmail.com'
            const employee = new Employee(employeeData)
            const getTheEmail = employee.getEmail();
            expect(employeeEmailString).toEqual(getTheEmail);
        })
    })
})  
