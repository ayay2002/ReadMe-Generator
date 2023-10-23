// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [];
inquirer
.prompt([
    {
        type: 'imput',
        name: 'title',
        message: 'What is your projects title?'
    },
    {
        type: 'imput',
        name: 'description',
        message: 'Provide a description of your project.'
    },
    // {
    //     imput: 'imput',
    //     name: '',
    //     message: '',
    // }
])
.then((answers) => {
    function writeToFile(fileName, data) {}

})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
