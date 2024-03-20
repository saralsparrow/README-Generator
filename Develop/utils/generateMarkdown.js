// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// let license = responses[9]

function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }

  if (license === "Apache License") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  }

  if (license === "GNU GPLv3 License") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  }

  if (license === "BSD 3-Clause License") {
    return `![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
  }

  if (license === "ISC License") {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return `![License](https://opensource.org/license/mit)`
  }

  if (license === "Apache License") {
    return `![License](https://opensource.org/license/apache-2-0)`
  }

  if (license === "GNU GPLv3 License") {
    return `![License](https://opensource.org/license/gpl-3-0)`
  }

  if (license === "BSD 3-Clause License") {
    return `![License](https://opensource.org/license/bsd-3-clause)`
  }

  if (license === "ISC License") {
    return `![License](https://opensource.org/license/isc-license-txt)`
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    // If a license is provided, return a section with license information
    return `
  ## License

  This project is licensed under the [${license} ](${renderLicenseLink(license)}). ${renderLicenseBadge(license)}
  `;
  } else {
      // If no license is provided, return an empty string
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `
  # ${responses[0]}

  ## Description

  ${responses[1]}

  ## Getting Started

  ### Dependencies

  * ${responses[2]}

  ### Installing

  * ${responses[3]}

  ### Executing program

  * ${responses[4]}

  ## Help

  ${responses[5]}

  ## Authors

  * ${responses[6]}
  * ${responses[7]}

  ## Version History

  * ${responses[8]}

  ${renderLicenseSection(responses[9])}

  ## Acknowledgments

  * ${responses[10]}

`;
}

module.exports = generateMarkdown;
