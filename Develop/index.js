// TODO: Include packages needed for this application

const fs = require('fs');
const readline = require('readline');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "What is your project title? ",
    "What is your description for this project? ",
    "What dependencies do you need before installing this program? This includes libraries or other applications needed for this program to run. ",
    "How and where can I install your programs? ",
    "How does a user use your website?",
    "What do users do if they encounter issues? ",
    "What is the author's name? ",
    "What is the author's email? ",
    "What is the version history? ",
    "What type of license does this program use? ",
    "What other resources did you use to write this program? "
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log("README file created successfully!");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let responses = [];

    function askQuestion(index) {
        if (index < questions.length) {
            rl.question(questions[index] + " ", (answer) => {
                responses.push(answer);
                askQuestion(index + 1);
            });
        } else {
            rl.close();
            // const license = responses[9]
            // renderLicenseBadge(license)
            // renderLicenseLink(license)
            // renderLicenseSection(license)
            const readmeContent = generateMarkdown(responses)
            writeToFile('README.md', readmeContent);
        }
    }

    askQuestion(0);
}

// Function call to initialize app
init()

