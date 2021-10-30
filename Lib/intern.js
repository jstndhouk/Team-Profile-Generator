const inquirer = require('inquirer');

class Intern {
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
                message: 'What school are they attending?',
                name: 'school',
            }
        ]
    }

    createIntern() {
        inquirer.prompt(this.questions)
            .then((response) => {
                this.name=response.name;
                this.id=response.id;
                this.email=response.email;
                this.school=response.github;
                console.log("The intern object is"+this.name+this.id+this.email+this.school);
                team.push(this);
                nextEmployee();
                }
            )
        
    }
}
module.exports = Intern;