const inquirer = require('inquirer');

class Engineer {
    constructor() {
        this.questions = [{
            type: 'input',
            message: 'What is their name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is their ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is their email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is their GitHub username?',
            name: 'github',
        }]
    }
    
    createEngineer(){
        inquirer.prompt(this.questions)
        .then((response) =>{
            let createManager = ({name, id, email, github}) =>{
                this.name=name;
                this.id=id;
                this.email=email;
                this.github=github;}}
        )
    }
}

module.exports = Engineer;