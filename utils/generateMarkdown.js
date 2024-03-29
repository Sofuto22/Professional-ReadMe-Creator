
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let output = `![License Badge](https://img.shields.io/badge/License-${data.license}-green.svg)
  
  #### GitHub Username: ${data.github}
  
  #### GitHub Email Address: ${data.email}
  
  
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Languages](#languages)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Website](#website)
  * [Testing](#testing)
  * [Questions](#questions)
  * [License](#license)`;

  data.languages = data.languages.toString().replace(/[ ]*,[ ]*|[ ]+/g, "\n* ");
  output += `
  ## Built With:
  * ${data.languages}
  
  ## Installation
  - ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributors
  - ${data.contributing}
  
  ## Website
  ${data.website}
  
  ## Tests
  - ${data.test}
  
  ## Questions
  For additional questions and information, please see the creator's GitHub profile here: github.com/${
    data.github
  }/
  or reach out through email at ${data.email}.
  
  ## License
  Copyright &copy;${new Date().getFullYear()} by ${data.contributing}.
  Licensed under the ${data.license} license.
  `;
  
  return output;

}

module.exports = generateMarkdown;
