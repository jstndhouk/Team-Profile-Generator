const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("../Lib/employee");

class Engineer extends Employee {
    constructor({name, id, email, github}) {
        super({});
        this.name=name;
        this.id=id;
        this.email=email;
        this.github=github;
    }
    
    getRole(){
        return 'Engineer';
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

    getGithub(){
        return this.github
    }
}


module.exports = Engineer;