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
    describe("return role", () => {
        it("return the string intern", () => {
            const internData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                school: 'Auburn'
            }
            const internString = 'Intern'
            const intern = new Intern(internData)
            const getTheRole=intern.getRole();
            expect(internString).toEqual(getTheRole);
        });
    });
    describe("return name", () => {
        it("return the name with the getName method", () => {
            const internData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                school: 'Auburn'
            }
            const internNameString = 'Justin'
            const intern = new Intern(internData)
            const getTheName = intern.getName();
            expect(internNameString).toEqual(getTheName);
        })
    })
    describe("return id", () => {
        it("return the id with the getId method", () => {
            const internData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                school: 'Auburn'
            }
            const internIdString = '555'
            const intern = new Intern(internData)
            const getTheId = intern.getId();
            expect(internIdString).toEqual(getTheId);
        })
    })
    describe("return email", () => {
        it("return the email with the getEmail method", () => {
            const internData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                school: 'Auburn'
            }
            const internEmailString = 'jstndhouk@gmail.com'
            const intern = new Intern(internData)
            const getTheEmail = intern.getEmail();
            expect(internEmailString).toEqual(getTheEmail);
        })
    })
    describe("return school", () => {
        it("return the school with the getSchool method", () => {
            const internData = {
                name: 'Justin',
                id: '555',
                email: 'jstndhouk@gmail.com',
                school: 'Auburn'
            }
            const internEmailString = 'jstndhouk@gmail.com'
            const intern = new Intern(internData)
            const getTheEmail = intern.getEmail();
            expect(internEmailString).toEqual(getTheEmail);
        })
    })
})