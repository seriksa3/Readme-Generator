const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
      type: 'input',
      name: 'Title',
      message: 'What is your name of your project?',
    },
    {
      type: 'input',
      name: 'name',
      message: 'Where are you from?',
    },
    {
      type: 'checkbox',
      name: 'Languages used',
      message: 'Select the languages going to be used for thos project?',
      choices: ['Baseball','Basketball','Reading'],
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    }
];
inquirer.prompt(questions);
// array of questions for user
// const generateReadme = (data) => {
//     inquirer.prompt([{questions}])
//     .then((response)) => {
//         fs.write
//     }
// }
// // function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
        console.log('-----Welcome-----');
};


// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
//make readme template
//Ask questions
//write questions to readme file
//const generate readme