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
    createManager = ({name, id, email, officeNumber}) =>{
        this.name=name;
        this.id=id;
        this.email=email;
        this.officeNumber=officeNumber;
        console.log("The manager data is"+this.name+this.id+this.email+this.officeNumber);
        
    }
}
module.exports = Manager;