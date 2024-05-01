const inquirer = require('inquirer'); // Package for user interaction
const fs = require('fs'); // Package for file system interaction
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  { name: "title", message: "What is the title of your project?", default: "My Readme Generator" },
  { name: "description", message: "Enter a short description of your project:", default: "A simple command-line application to generate READMEs." },
  { name: "installation", message: "How do users install your application?", default: "Step1: Clone the repository. Step2: Install the dependencies with commmand npm install" },
  { name: "usage", message: "How do users use your application?", default: "Type node index.js in the command prompt and follow the prompts." },
  { name: "contributing", message: "How can users contribute to your application?", default: "Please contribute by reporting any fails." },
  { name: "tests", message: "How do you test the application?", default: "Type node index.js" },
  { name: "license", message: "Choose a license for your application: (MIT, Apache-2.0, GPLv3)", default: "MIT" },
  { name: "github", message: "Enter your GitHub username (optional):", default: "egarza0614" },
  { name: "email", message: "Enter your email address (optional):", default: "eloygarza3@gmail.com" }
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
