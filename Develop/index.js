// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require(".utils/generateMarkdown");
const {loadFromBuffer} = require("bser");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.createPromptModule([
        {
            type: "input",
            name: "github",
            message: "Please enter Username (Required)",
            validate: (githubInput) => {
                if (githubInput) {
                    return: true;
                } else {
                    console.log("Enter Github Username");
                    return false;
                }
            },
        },
    {
        
    }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
