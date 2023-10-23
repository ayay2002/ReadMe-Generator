// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [];
const generateReadme = ({title, description, contents, install, usage, picture, license, credits, test, questions, username, email}) =>
` 
<h1>${title}</h1>\n
<h2>Description</h2>\n${description}\n
<h2>Table Of Contents</h2>\n${contents}\n
<h2>Installation</h2>\n${install}\n
<h2>Usage</h2>${usage}\n
<h2>Image</h2>${picture}\n
<h2>License</h2>${license}\n
<h2>Contributions</h2>${credits}
<h2>Tests</h2>${test}\n
<h2>Questions</h2>${questions}\n
Github: ${username}\n
https://github.com/${username}\n
Email: ${email}
`
;
inquirer
.prompt([
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
        name: 'contents',
        message: 'Prodide a table of contents to your read me.'
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
        message: 'Provide a picture for your readme by doing the following\n 1)locating the picture in your folder of this project\n 2)Paste the image into the description of an issue\n 3)Take the new link and pasting it here.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'License'
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
