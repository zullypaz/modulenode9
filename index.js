const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown')
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "Title",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "What is the description of the project:",
        },
        {
            type: "input",
            name: "installation",
            message: "What is the installation: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Describe the usage of the project?"
        },
        {
            type: "list",
            name: "license",
            message: "What is the license for this project: ",
            choices: [
                "Apache",
                "ISC",
                "MIT",
                "Mozilla",
                "None"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Describe the constribution for the project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Describe tests needed to run for the project"
        },
        {
            type: "input",
            name: "questions",
            message: "If the user has any questions? "
        },
        {
            type: "input",
            name: "username",
            message: "GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Email Address: "
        }
    ]);
} 


  async function init() {
    try {
        
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);
        
        await writeFileAsync('02-Challenge\developmodule9\README.md', generateContent);
        console.log('README.md created');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  










