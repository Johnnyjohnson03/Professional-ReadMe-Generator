// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkDown = require('./generateMarkdown');



// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your title?',
    name: 'title',
},
{
    type: 'input',
    message: 'What is the description?',
    name: 'description',
},
{
    type:'input',
    message:'What are the installation instructions?',
    name: 'installation',
},
{
    type:'input',
    message:'What is the usage information?',
    name: 'usage',
},
{
    type:'input',
    message:'What are the contribution guidelines?',
    name:'contribution',
},
{
    type:'input',
    message:'What are the test instructions?',
    name:'test',
},
{
    type:'list',
    message:'What kind of license is needed?',
    name: 'license',
    choices:[
        'MIT',
        'IBM',
        'Apache',
        'Mozilla',
    ]
},
{
    type:'input',
    message:'What is your Github username?',
    name:'username',
},
{
    type: 'input',
    message:'What is your Email?',
    name:'email',
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkDown(data))
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers=>{
      writeToFile('README.md', answers)  
    })
 }

// Function call to initialize app
init();








