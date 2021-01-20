const inquirer = require('inquirer');

const readme = require('./utils/generateMarkdown.js');

const fs = require('fs');

//const util = require('util');



// array of questions for user
const questions = [
    "What is the title of your project?",
    "What is the description of your project?",
    "What are the installation instructions?",
    "What is the usage information?",
    "What are the contribution guidelines?",
    "What are the test instructions?",
    "What license do you want?",
    "What is your Github name?",
    "What is your Email address?"

];

// function to write README file
function writeToFile(fileName, data) {

   const readmeFile = readme.generateMarkdown(data);
   fs.writeFile(fileName,readmeFile,(err) => {
        err ? console.log(err) : console.log("success");
    })

}

// function to initialize program
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'projectDescription',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'installInstructions',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'usageInfo',
    },
    {
        type: 'input',
        message: questions[4],
        name: 'guidelines',
    },
    {
        type: 'input',
        message: questions[5],
        name: 'testInstructions',
    },
    {
        type: 'list',
        message: questions[6],
        name: 'License',
        choices:["MIT","Carleton","uOttawa"],
        default: 0,
    },
    {
        type: 'input',
        message: questions[7],
        name: 'github',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'email',
    },
  ])
  .then((response) =>
    writeToFile("READMEfile.md", response)
  );


}

// function call to initialize program
init();
