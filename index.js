// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require("./Lib/intern");
const Employee = require("./Lib/employee");
const Manager = require("./Lib/manager");
const Engineer = require("./Lib/engineer");
const team=[];


//creates the questions for each employee

const managerq=[{
    type: 'input',
    message: "What is the manager's name?",
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
    message: 'What is their office number?',
    name: 'officeNumber'
    }]

const internq=[{
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
    }]

const engineerq=[
    {
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

//Prompt the manager's questions. This is not in a function, because it is only being done once.  
//It then stores the new manager in the team array, and prompts the creation of the next employee.
inquirer.prompt(managerq)
    .then((response) =>{
    const manager= new Manager(response);
    team.push(manager);
    nextEmployee();
    })

//prompts the creation of the next employee, or creates the html file with whats been entered.
let nextEmployee=() => {
inquirer.prompt({ type: 'list', message: 'What would you like to do next?', name: 'next',choices: ['Add an Engineer', 'Add an Intern', "I'm finished making my team"]})
    .then((response) =>{
        //switch statement that handles what the program should do next, based off off the input.
        switch(response.next){
            case 'Add an Engineer':
                createEngineer();
                break;
            case 'Add an Intern':
                createIntern();
                break;
            case "I'm finished making my team":
                finishAndGenerateHTML(team);
                break;
        }
    })
}

//Creates an engineer object, and pushes the engineer to the team array
const createEngineer=() =>{
    inquirer.prompt(engineerq)
    .then((response) =>{
    const engineer= new Engineer(response);
    team.push(engineer);
    nextEmployee();
    })
}

//Creates an intern object, and pushes the engineer to the team array
const createIntern=() =>{
    inquirer.prompt(internq)
    .then((response) =>{
    const intern= new Intern(response);
    team.push(intern);
    nextEmployee();
    })
}

//Creates the html card for the manager.
const generateManagerCard=(team)=>{
    const {name, id, email ,officeNumber}=team[0];
    const managerCard=` <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
        <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
        <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
    </h5>
      <p class="card-text">${name}</p>
      <p class="card-text">ID:  ${id}</p>
      <a href="mailto:${email}"class="card-text">Email: ${email}</a>
      <p class="card-text">Office Number: ${officeNumber}</p>
    </div>
</div>`
return managerCard
}

//creates the engineer card
const generateEngineerCards=(team)=>{
//This complicated statement does four things.
//1.  It uses .filter to get only the engineer objects in "team" and puts them in a new array
//2.  That array then goes through .map and deconstructs each of the engineer objects into name, id, email, and github
//    and returns a literal that is stored in engineers.
//3.  It then joins all of those engineer object literals together with .join so that the final return, returns one big object literall for all the engineers.
//....phew.
const engineers = team.filter(thisRole=>{return thisRole.getRole()==='Engineer'}).map(eachEngineer=> { const {name, id, email ,github}=eachEngineer
return `<div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Engineer <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
  </svg></h5>
  <p class="card-text">${name}</p></n>
  <p class="card-text">ID: ${id}</p>
  <a href="mailto:${email}"class="card-text">Email: ${email}</a></n>
  <a href="https://github.com/${github}" text='' class="card-text">GitHub:${github}</a>
</div>
</div>` }).join('')
return engineers
}

//Generates the intern card in the same manner as the engineer cards.
const generateInternsCard=(team)=>{
const interns = team.filter(thisRole=>{return thisRole.getRole()==='Intern'}).map(eachIntern=> { const {name, id, email ,school}=eachIntern
return `<div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Intern <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
  </svg></h5>
  <p class="card-text">${name}</p>
  <p class="card-text">ID: ${id}</p>
  <a href="mailto:${email}"class="card-text">Email: ${email}</a></n>
  <p class="card-text">Enrolled School: ${school}</p>
</div>
</div>` }).join('')
return interns
}
//Generates all the cards
const generateCards=(team)=>{
    return `<!DOCTYPE html>
    <html lang="en-US">
        <head>
            <meta charset="UTF-8">
            <title>Generated Team</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="./dist/style.css">
            <script
              type="text/javascript"
              src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js">
            </script>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <script
              src="https://code.jquery.com/jquery-3.5.1.min.js"
              integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
              crossorigin="anonymous">
            </script>
        </head>
        <body>
            <div class="container-fluid py-5 bg-dark">
                <h1 class="display-5 fw-bold text-light headerAlign">My Team</h1>
              </div>
              <main class='theMain'>
    ${generateManagerCard(team)}
    ${generateEngineerCards(team)}
    ${generateInternsCard(team)}
    </main>
    </body>
</html>`;
}

let finishAndGenerateHTML=()=>{
fs.writeFile('index.html', generateCards(team), err => err ? console.error(err) : console.log('Success!  Your webpage has been created!!'))
}