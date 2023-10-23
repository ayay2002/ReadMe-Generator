// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [];
const generateReadme = ({title, description, install, usage, picture}) =>
` 
<h1>${title}</h1>
<h2>${description}</h2>
<h2>${install}</h2>
<h2>${usage}</h2>
<img>${picture}</img>
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
        name: 'install',
        message: 'Provide the steps required to run your project.',
    },
    {
        imput: 'imput',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        imput: 'imput',
        name: 'picture',
        message: 'Paste the'
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
