class Employee {
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
            }
        ]
    }

}
module.exports = Employee;