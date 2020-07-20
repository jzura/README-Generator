// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
[![](https://img.shields.io/badge/License-${data.license}-green)](#license)
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.install}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.test}
## License
${getLicenseNotice(data.license)}
## Questions
* Please raise a request at [github](https://github.com/${data.github})`;
}

function getLicenseNotice(license)
{
  return license==="None" ? `This application is not covered under any license currently`:`This application is covered by ${license} license`;
}


module.exports = generateMarkdown;
