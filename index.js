const inquirer = require('inquirer'); // Package for user interaction
const fs = require('fs'); // Package for file system interaction
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  { name: "title", message: "What is the title of your project?" },
  { name: "description", message: "Enter a short description of your project:" },
  { name: "installation", message: "How do users install your application?" },
  { name: "usage", message: "How do users use your application?" },
  { name: "contribution", message: "Who contributed to your application?" },
  { name: "tests", message: "Was this application tested?" },
  { name: "license", message: "Choose a license for your application: (MIT, Apache-2.0, GPLv3)" },
  { name: "github", message: "Enter your GitHub username (optional):" },
  { name: "email", message: "Enter your email address (optional):" }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`${fileName} created successfully!`);
  });
}

function init() {
  inquirer.prompt(questions)
    .then((data) => {
      console.log(data); // Add this line to inspect the data object
      const markdown = generateMarkdown(data);
      writeToFile('README.md', markdown);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt could not be rendered in the current environment.");
      } else {
        console.log(error);
      }
    });
}

init();
