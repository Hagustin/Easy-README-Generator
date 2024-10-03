import inquirer from 'inquirer'; // Inquirer
import fs from 'fs';  // File System

function userInput() {
 return inquirer.prompt([
    {type: 'input', name: 'title', message: 'What is the title of your project?'},
    {type: 'input', name: 'description', message: 'Describe your project.'},
    {type: 'input', name: 'installation', message: 'What are the installation instructions?'},
    {type: 'input', name: 'usage', message: 'What is the usage information?'},
    {type: 'input', name: 'license', message: 'What is the license?'},
    {type: 'input', name: 'contributing', message: 'What are the contribution guidelines?'},
    {type: 'input', name: 'tests', message: 'What are the test instructions?'},
    {type: 'input', name: 'username', message: 'What is your GitHub username?'},
    {type: 'input', name: 'email', message: 'What is your email address?'}

 ]);
}

function generateReadMe(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions, please contact me at: ${answers.email}
`;
}

userInput().then(function(answers) {
    const readMe = generateReadMe(answers);
    fs.writeFile('README.md', readMe, function(err) {
        (err) ? console.error(err) : console.log('Success! Your README.md file has been created.');
    });
});