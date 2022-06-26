const Manager= require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require ('./lib/Engineer');
const inquirer = require('inquirer');
const generatePage= require('./lib/generatePage');
const fs = require('fs');
var manager;
var empArray = [];

function menu(){
    inquirer
    .prompt({
        type: 'list',
        message: 'what would you like to do?',
        name: 'choice',
        choices: ['Add Intern', 'Add Engineer', 'Finish team']
    })
    .then((response) =>{
        console.log(response);
        if(response.choice == 'Add Intern'){
            addIntern();
        } else if(response.choice == 'Add Engineer'){
            addEngineer();
        } else {
            finishTeam();
        }
    })
}

function addIntern() {
    inquirer.prompt([{
        type: 'text',
        message: "What is the Intern's name?",
        name: 'name'
    },
    {
        type: 'text',
        message: "What is the id of the intern?",
        name: 'id'
    },
    {
        type: 'text',
        message: "What is the intern's email?",
        name: 'email'
    },
    {
        type: 'text',
        message: "What is the intern's school?",
        name: 'school'
    }])
    .then((info) =>{
        tempIntern = new Intern(info.name, info.id, info.email, info.school);
        tempIntern.role='intern';
        console.log(tempIntern);
        empArray.push(tempIntern);
        menu();
    })
}

function addEngineer() {
    console.log('here');
    inquirer.prompt([{
        type: 'text',
        message: "What is the engineer's name?",
        name: 'name'
    },
    {
        type: 'text',
        message: "What is the id of the engineer?",
        name: 'id'
    },
    {
        type: 'text',
        message: "What is the engineer's email?",
        name: 'email'
    },
    {
        type: 'text',
        message: "What is the engineer's github username?",
        name: 'github'
    }])
    .then((info) =>{
        tempEngineer = new Engineer(info.name, info.id, info.email, info.github);
        tempEngineer.role='engineer';
        empArray.push(tempEngineer);
        menu();
    })
}



function startApp() {
    inquirer
    .prompt([{
        type: 'text',
        message: "What is the name of the team's manager?",
        name: 'name'
    },
    {
        type: 'text',
        message: "What is the id of the team's manager?",
        name: 'id'
    },
    {
        type: 'text',
        message: "What is the manager's email?",
        name: 'email'
    },
    {
        type: 'text',
        message: "What is the manager's phone number?",
        name: 'phone'
    }
]).then((info) => {
    console.log(info);
 manager = new Manager(info.name,info.id,info.email,info.phone);
 menu();
})
}

function finishTeam(){
    console.log(manager);
    console.log(empArray);
    sendToHtml(manager,empArray);
}

function sendToHtml(manager,employees){
    console.log('here');
let data = generatePage(manager,employees);
fs.writeFile('./dist/index.html',data, (err) => {
    if(err) throw err;
});
}
startApp();



