// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require("./Lib/intern");
const Employee = require("./Lib/Employee");
const Manager = require("./Lib/manager");
const Engineer = require("./Lib/engineer");


//Create the first manager to start
const manager = new Manager();
//Prompt the manager's questions
inquirer.prompt(manager.questions)
    .then((response) =>{
        let createManager = ({name, id, email, officeNumber}) =>{
            manager.name=name;
            manager.id=id;
            manager.email=email;
            manager.officeNumber=officeNumber;}
    })
//stores the data into the manager object.



inquirer.prompt({ type: 'list', message: 'What would you like to do next?', name: 'next',choices: ['Add an Engineer', 'Add an Intern', "I'm done making my team"]})
    .then((response) =>{
        switch(next){
            case 'Add an Engineer':
                const newEngineer = new Engineer()
                newEngineer.createEngineer();
            case 'Add an Intern':
                const newIntern = new Intern()
                newIntern.createIntern();
            case "I'm done making my team":
            break
        }
        }
    )



//fs.writeFile('index.html', createManager(response), err => err ? console.error(err) : console.log('Success!'))
//const htmlCode=`<html>
//    <head>
//    <link rel="stylesheet" href="./style.css" />
//    <title> Miniproject </title>
//    </head>
//    <body>
//    <h1> Hi!  My name is ${name}.</h1>
//    <h2> My Id is ${id} </h2>
//    <h3> My Email is${email} </h3>
//    <h4>My office number is ${officeNumber}</h4>
//    </body>
//</html>`
//return htmlCode
