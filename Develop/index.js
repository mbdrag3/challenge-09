// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please give your project a title.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a description.',
      },
      {
        type: 'input',
        name: 'contents',
        message: 'Please write a table of contents.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please write a guide on how to install.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please describe the way you would use the application.',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Please porvide any contributions to the project.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a liscense.',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ]
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please write any contributing tests.',
      },
      {
        type: 'input',
        name: 'user',
        message: 'Please provide your GitHub username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Finally, please provide any questions.',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Check out your new README file!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        writeToFile("READMECreation.md", data);
    });
}

// Function call to initialize app
init();
