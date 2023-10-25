// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge ="";

  if(license != 'none'){
    badge = "![license Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }
const generateReadme = ({title, description, install, usage, picture, license, credits, test, questions, username, email}) =>
` 
<h1>${title}</h1>\n
<h2>Description</h2>\n${description}\n
<h2>Table Of Contents</h2>\n
<a href='#install'>Install</a>\n
<a href='#usage'>Usage</a>\n
<a href ='#image'>Image</a>\n
<a href ='#license'>License</a>\n
<a href ='#contributions'>Contributions</a>\n
<a href ='#tests'>Tests</a>\n
<a href='#questions'>Questions</a>\n
\n
<h2 id='install'>Installation</h2>\n${install}\n
<h2 id='usage'>Usage</h2>${usage}\n
<h2 id='image'>Image</h2\n
![image](${picture})\n
<h2 id='license'>License</h2>${license}\n
<h2 id='contributions'>Contributions</h2>${credits}\n
<h2 id='tests'>Tests</h2>${test}\n
<h2 id='questions'>Questions</h2>${questions}\n
Find me on Github: @${username}\n
https://github.com/${username}\n
Email: ${email}\n
If you have any questions regarding this project please contact me at the above listed email and i will get back to you as soon as possible! Thank you.
`
;

module.exports = generateReadme;
