// function to generate markdown for README
function generateMarkdown(data) {
        var badge =  getlicense(data.License);
  return ` ${badge}

  # ${data.projectTitle}

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

  Your license id ${data.License}

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

function getlicense(value){

  switch(value){
    case "Apache License" :
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "BSD 3-Clause license" :
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "BSD 2-Clause license" :
      return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"; 
    case "GNU General Public License (GPL)" :
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "GNU Library License (LGPL)" :
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    case "MIT license" :
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Mozilla Public License" :
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "Eclipse Public License" :
      return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  }
}

module.exports = {
  generateMarkdown,
};
