const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("../Lib/employee");

class Manager extends Employee{
    constructor({name, id, email, officeNumber}) {
        super({});
        this.name=name;
        this.id=id;
        this.email=email;
        this.officeNumber=officeNumber;
    }

    getRole(){
        return 'Manager';
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

    getOfficeNum(){
        return this.officeNumber
    }

}
module.exports = Manager;