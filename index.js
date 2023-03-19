// import necessary dependencies
const inquirer = require('inquirer');
const htmlTemplate = require('./src/htmlTemplate');
const writeFile = require('./src/writeFile');

// import employee subclasses 
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');

// inquirer prompt 
const team = [];
    const getManager = () => {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter name of manager:',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Enter id number:',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Enter email:',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Enter office number:',
                name: 'officeNumber'
            }
        ]).then((response) => {
            console.log(response);
            const Manager = new manager (response.name, response.id, response.email, response.officeNumber);
            team.push(Manager);
            newEmployee();
        })
    }

    const getEngineer = () => {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter name of engineer:',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Enter id number:',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Enter email:',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Enter github username:',
                name: 'github'
            }
        ]).then((response) => {
            const Engineer = new engineer(response.name, response.id, response.email, response.github);
            team.push(Engineer);
            newEmployee();
        })
    }

    const getIntern = () => {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter name of intern:',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Enter id number:',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Enter email:',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Enter school:',
                name: 'school'
            }
        ]).then((response) => {
            const Intern = new intern(response.name, response.id, response.email, response.school);
            team.push(Intern);
            newEmployee();
        })
    }

    const newEmployee = () => {
        inquirer.prompt([
            {
                type: 'list',
                message: 'Add additional employee?',
                name: 'newEmployee',
                choices: [
                    'Engineer',
                    'Intern',
                    'Finished' ]
            }
        ]).then((response) => {
            switch(response.newEmployee) {
                case 'Engineer':
                    getEngineer();
                    break;
                case 'Intern':
                    getIntern();
                    break;
                case 'Finished':
                    template(team)
                    break;
            }
        })
    }

    // generates html template
    const template = (teamEmployee) => {
    let html = htmlTemplate(teamEmployee);
    writeFile(html);
    }

    // initializes inquirer prompt
    function init() {getManager();}
    init();