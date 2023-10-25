// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [];
const generateReadme = ({title, description, install, usage, picture, license, credits, test, questions, username, email}) =>
` 
<h1>${title}</h1>\n
<h2>Description</h2>\n${description}\n
<h2>Table Of Contents</h2>\n
<a href='#install'>Install</a>\n
<a href='#usage'>Usage</a>\n
<a href = 'image'>Image</a>\n
<a href = '#license'>License</a>\n
<a href = '#contributions'>Contributions</a>\n
<a href = '#tests'>Tests</a>\n
<a href='#questions'>Questions</a>\n
\n
<h2 id='install'>Installation</h2>\n${install}\n
<h2 id='usage'>Usage</h2>${usage}\n
![image](${picture})\n
<h2 id='license'>License</h2>${license}\n
<h2 id='contributions'>Contributions</h2>${credits}
<h2 id='tests'>Tests</h2>${test}\n
<h2 id='questions'>Questions</h2>${questions}\n
Find me on Github: @${username}\n
https://github.com/${username}\n
Email: ${email}\n
If you have any questions regarding this project please contact me at the above listed email and i will get back to you as soon as possible! Thank you.
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
    // {
    //     type: 'input',
    //     name: 'contents',
    //     message: 'Prodide a table of contents to your read me.'
    // },
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
