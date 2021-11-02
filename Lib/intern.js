const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("../Lib/employee");

class Intern extends Employee{
    constructor({name, id, email, school}) {
        super({})
        this.name=name;
        this.id=id;
        this.email=email;
        this.school=school;
    }

    getRole(){
        return 'Intern';
    }      

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getName(){
        return this.name
    }

    getSchool(){
        return this.school
    }
}
module.exports = Intern;