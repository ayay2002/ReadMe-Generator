// packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown')

const licenses = ['BSD','MIT','GPL','None']
// all the below prompts are the user questions asked in the terminal
const questions =
    [
        {
            type: 'input',
            name: 'title',
            message: 'What is your projects title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project.'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Provide the steps required to run your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'input',
            name: 'picture',
            message: 'Provide a picture for your readme by doing the following\n 1)Save the picture in your project repo\n 2)Open the image in github\n 3)Right click the image and select copy image adress to paste it here.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'License',
            choices: licenses
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List any collaborators, tutorials, or third party websites used to help with completion of this project.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Tests'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Questions'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ];

//function to write README file and to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        fs.writeFile('README.md', generateReadme(answers), (err) => 
        err ? console.log(err) : console.log('Successfully created README.md!')
        );
        })     
    }
// Function call to initialize app
init();