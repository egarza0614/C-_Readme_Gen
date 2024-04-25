// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenses = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit)',
    'Apache-2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/license/apache-2-0)',
    GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)',
  };
  return licenses[license] || ''; // Return empty string if license not found
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    MIT: 'https://opensource.org/licenses/mit',
    'Apache-2.0': 'https://opensource.org/licenses/apache-2-0',
    GPLv3: 'https://www.gnu.org/licenses/gpl-3.0.en.html',
  };
  return links[license] || ''; // Return empty string if license not found
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';

  let licenseSection = `## License\n`;
  licenseSection += `${renderLicenseBadge(license)}\n`;
  licenseSection += `This project is licensed under the ${license} license. `;
  licenseSection += `You can view the license [here](${renderLicenseLink(license)}).\n`;
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
const generateTableOfContents = (data) => {
  const sections = ["Description", "Installation", "Usage", "Contribution", "Tests", "Questions"];
  let tableOfContents = "## Table of Contents\n";

  sections.forEach((section) => {
    tableOfContents += `* [${section}](#${section.toLowerCase()})\n`;
  });

  return tableOfContents;
};

function generateMarkdown(data) {
  let markdown = `# ${data.title}\n`;
  // Add the license section near the top
  const licenseSection = renderLicenseSection(data.license);
  if (licenseSection) {
    markdown += licenseSection;
  }

  markdown += generateTableOfContents(data); // Add Table of Contents

  markdown += `## Description\n${data.description}\n`;

  markdown += `## Installation\n${data.installation}\n`;

  markdown += `## Usage\n${data.usage}\n`;
  // Add the link to the demo video
  markdown += `Here's a quick demo of the application in action: [ReadMe Generator Demo](https://github.com/egarza0614/C9_Readme_Gen/assets/ReadMeGen_Demo.webm)\n`;

  markdown += `## Contribution\n${data.contributing}\n`;

  markdown += `## Tests\n${data.tests}\n`;

  markdown += `## Questions\n`;

  if (data.github) {
    markdown += `* GitHub: [${data.github}](https://github.com/${data.github})\n`;
  }

  if (data.email) {
    markdown += `* Email: ${data.email} (Feel free to contact me with additional questions.)\n`;
  }

  return markdown;
}

module.exports = generateMarkdown;
