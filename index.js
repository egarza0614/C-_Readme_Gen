const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  "What is the title of your project?",
  "Enter a short description of your project.",
  "How do users install your application?",
  "How do users use your application?",
  "Choose a license for your application: (MIT, Apache-2.0, GPLv3)",
  "Enter your GitHub username (optional):",
  "Enter your email address (optional):",
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`${fileName} created successfully!`);
  });
}

function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateReadme(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

function generateReadme(answers) {
  let readme = `# ${answers.title}\n`;
  readme += createTableOfContents(answers.title); // Call function to create TOC
  readme += `\n## Description\n${answers.description}\n`;

  // Add other sections based on user input and functions to handle license badge and links
  readme += `## Installation\n${answers.installation}\n`;
  readme += `## Usage\n${answers.usage}\n`;
  readme += `## License\n${getLicenseBadge(answers.license)}\n ${getLicenseNotice(answers.license)}\n`;
  readme += `## Contributing\n${answers.contributing}\n`;
  readme += `## Tests\n${answers.tests}\n`;
  readme += `## Questions\n`;
  if (answers.githubUsername) {
    readme += `* GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})\n`;
  }
  if (answers.email) {
    readme += `* Email: ${answers.email} (Feel free to contact me with any questions!)\n`;
  }

  return readme;
}

function getLicenseBadge(license) {
  const licenses = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit)',
    'Apache-2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/license/apache-2-0)',
    GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)',
  };
  return licenses[license] || ''; // Return empty string if license not found
}

function getLicenseNotice(license) {
  const notices = {
    MIT: `Copyright (c) ${new Date().getFullYear()} [Your Name]`,
    'Apache-2.0': `Copyright (c) ${new Date().getFullYear()} [Your Name]`,
    GPLv3: `Copyright (c) ${new Date().getFullYear()} [Your Name]`,
  };
  return notices[license] || ''; // Return empty string if license not found
}

function createTableOfContents(title) {
  let toc = `## Table of Contents\n`;
  toc += `* [Description](#description)\n`;
  toc += `* [Installation](#installation)\n`;
  toc += `* [Usage](#usage)\n`;
  toc += `* [License](#license)\n`;
  toc += `* [Contributing](#contributing)\n`;
  toc += `* [Tests](#tests)\n`;
  toc += `* [Questions](#questions)\n`;
  return toc;
}

init();
