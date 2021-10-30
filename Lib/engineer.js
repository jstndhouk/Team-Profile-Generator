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
            //There has to be a better way to do this...
                this.name=response.name;
                this.id=response.id;
                this.email=response.email;
                this.github=response.github;
                console.log("The engineer object is"+this.name+this.id+this.email+this.github);
                team.push(this);
                nextEmployee();
            }
        )
    }
}

module.exports = Engineer;