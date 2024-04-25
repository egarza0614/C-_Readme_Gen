// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenses = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit)',
    'Apache-2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/license/apache-2-0)',
    GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)',
  };
  return licenses[license] || ''; // Return empty string if license not found
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    MIT: 'https://opensource.org/licenses/mit',
    'Apache-2.0': 'https://opensource.org/licenses/apache-2-0',
    GPLv3: 'https://www.gnu.org/licenses/gpl-3.0.en.html',
  };
  return links[license] || ''; // Return empty string if license not found
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';

  let licenseSection = `## License\n`;
  licenseSection += `${renderLicenseBadge(license)}\n`;
  licenseSection += `This project is licensed under the ${license} license. `;
  licenseSection += `You can view the license [here](${renderLicenseLink(license)}).`;
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
`;
}

module.exports = generateMarkdown;
