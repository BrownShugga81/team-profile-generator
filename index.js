const inquirer = require("inquirer");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const fs = require('fs');
const outputArr = [];


function start() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's Id?" 
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's Email?"
        }
    ]).then(answers => {
        console.log(answers)
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail)
        outputArr.push(manager)
        // starts menu to add employees
        menu()
    })
}

function menu(){
    inquirer.prompt([{
        type: 'list',
        name: 'select',
        choices: ['Engineer', 'Intern', 'Done'],
        message: 'Add Employees or select Done to finish.'
    }]).then(answers => {
        if(answers.select == 'Engineer'){
            // function for Engineer info
            addEngineer()
        }else if(answers.select == 'Intern'){
            // function for Intern info
            addIntern()
        }else {
            // if done, generate HTML
            console.log(outputArr);
            generateHtml(outputArr);
        };
    });
};

function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the Engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the Engineer's Id?"
        },     
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the Engineer's Email?"
        },     
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the Engineer's Github?"
        }
    ]).then(answers => {
        console.log(answers)
        const newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        outputArr.push(newEngineer);
        menu();
    })
}

function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the Intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the Intern's Id?"
        },     
        {
            type: "input",
            name: "internEmail",
            message: "What is the Intern's Email?"
        },     
        {
            type: "input",
            name: "internGithub",
            message: "What is the Intern's Github?"
        }
    ]).then(answers => {
        console.log(answers)
        const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internGithub)
        outputArr.push(newIntern);
        menu();
    })
}

function generateHtml(arr) {
    console.log(arr);
    let outputString= `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" >
        <link href="./src/style.css" rel="stylesheet">
    </head>
    <body>`

    for(i=0; i< arr.length; i++){
        if(arr[i].getType() == "Manager"){
            outputString += `<div class="card" style="width: 18rem;">
                             <h4 class="card-title" id="manager">Manager: ${arr[i].name}</h4>
                             <p class="card-text">Id: ${arr[i].id}<br>
                             Email: ${arr[i].email}</p>  
                             </div>             
            `
        }else if(arr[i].getType() == "Engineer"){
            outputString += `<div class="card" style="width: 18rem;">
                             <h4 class="card-title" id="engineer">Engineer: ${arr[i].engineerName}</h4>
                             <p class="card-text">Id: ${arr[i].engineerId}<br>
                             Email: ${arr[i].engineerEmail}<br>
                             Github: ${arr[i].engineerGithub}</p>
                             </div>
            `
        }else if(arr[i].getType() == "Intern"){
            outputString += `<div class="card" style="width: 18rem;">
                             <h4 class="card-title" id="intern">Intern: ${arr[i].internName}</h4>
                             <p class="card-text">Id: ${arr[i].internId}<br>
                             Email: ${arr[i].internEmail}<br>
                             Github: ${arr[i].internGithub}</p>   
            `
        }
    }
    outputString +=`
    </body>
    </html>`

    fs.writeFile("index.html", outputString, (err) => {
        if (err) throw err;
    });

};

start();
