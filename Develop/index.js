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
                    return true;
                } else {
                    console.log("Enter Github Username");
                    return false;
                }
            },
        },
    {
        type: "input",
      name: "title",
      message: "What is your project title? (Required)",
      validate: (projectTitle) => {
        if (projectTitle) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },

    },

    {
      type: "input",
      name: "description",
      message: "Please enter a short description of your project (Required)",
      validate: (projectDescription) => {
        if (projectDescription) {
          return true;
        } else {
          console.log("Please enter your project description!");
          return false;
        }
      },
    },
    
  
  
  
  
  
  
  ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
