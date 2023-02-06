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
    {
      type:"checkbox",
      name:"languages",
      message:"What did you use to build this project?",
      choices: [
        "Javascript",
        "HTML",
        "CSS",
        "ES6",
        "jQuery",
        "Bootstrap",
        "Node.js",
      ],
    },
  {
    type: "list",
    name:'license',
    message:"Please select a license",
    choices: [
      "MIT",
      "APACHE(2.0)",
      "GPL(3.0)",
      "BSD(3)",
      "MPL(2.0)",
      "CDDL(1.0)",
      "None",
    ],
    validate: (projectLicense) => {
      if (projectLicense){
        return true;
        } else {
          console.log("Please choose a license");
          return false;
        }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What command(s) should be run to install dependencies?",
    default: "npm install",
  },
  {
    type: "input",
    name: "test",
    message: "What command(s) should be run to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "website",
    message: "Please enter your project website (Required)",
    validate: (projectWebsite) => {
      if (projectWebsite) {
        return true;
      } else {
        console.log("Please enter your project website!");
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
