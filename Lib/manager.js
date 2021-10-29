class Manager {
    constructor() {
        this.questions = [
            {
                type: 'input',
                message: "What is the manager's name?",
                name: 'name'
            },
            {
                type: 'input',
                message: "What is the their ID?",
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is their email?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What is their office number?',
                name: 'officeNumber'
            }
        ]
    }
}
module.exports = Manager;