
function generateMarkdown(answers) {
 return `
<h1 align="center">${answers.projectTitle} </h1>
  

## Description
🔍 ${answers.description}

## Table of Contents
- [Description](#description)
- [Table of Contents](#tableofcontents)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
💾 ${answers.installation}

## Usage
💻 ${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 


## Contributing
  ${answers.contributing}

## Tests
  ${answers.tests}

## Questions
 ${answers.questions}<br />
<br />
GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
Questions: ${answers.email}<br /><br />

 `;
  }

  
  
  module.exports = generateMarkdown;  