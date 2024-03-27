// TODO: Include packages needed for this application

const fs = require('fs');
const readline = require('readline');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "0 What is your project title? ",
    "1 What is your description for this project? ",
    "2 How do I install your program? ",
    "3 How does a user use your website?",
    "4 What type of license does this program use? ",
    "5 What is the author's name? ",
    "6 What is the author's email? ",
    "7 What type of tests did you create for your program?", 
    "8 What do users do if they encounter issues? ",
    "9 What is your github username? ",
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
            const readmeContent = generateMarkdown(responses)
            writeToFile('README.md', readmeContent);
        }
    }

    askQuestion(0);
}

// Function call to initialize app
init()

