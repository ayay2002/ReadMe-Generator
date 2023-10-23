// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [];
const generateReadme = ({title, description}) =>
` 
<h1>${title}</h1>
<h2>${description}</h2>
`
;
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
    {
        
        imput: 'imput',
        name: '',
        message: '',
    }
])
.then((answers) => {
    const pagecontent = generateReadme(answers);

    fs.writeFile('README.md', pagecontent, (err) => 
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
