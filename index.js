const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const outputArr = []


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



start();