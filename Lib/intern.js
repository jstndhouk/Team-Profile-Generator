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
                let createIntern = ({name,id,email,school}) => {
                    this.name = name;
                    this.id = id;
                    this.email = email;
                    this.school = school;
                }
            })
    }
}
module.exports = Intern;