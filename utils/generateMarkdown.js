// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  
  ## Description
  ${data.projectDescription}

  ## Table of contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  

  ## Installation

  ${data.installInstructions}

  ## usage

  ${data.usageInfo}

  ## License

  ${data.License}

  ## Contributing

  ${data.guidelines}

  ## Tests

  ${data.testInstructions}

  ## Questions

  github username: ${data.github}

  Link: [Github](https://github.com/${data.github}/)

  If you want to contact me please sent me an email to ${data.email}



`;
}

module.exports = {
  generateMarkdown,
};
