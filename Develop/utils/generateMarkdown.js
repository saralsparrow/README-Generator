// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// let license = responses[9]

function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }

  if (license === "Apache") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  }

  if (license === "GNU GPLv3") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  }

  if (license === "BSD 3-Clause") {
    return `![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
  }

  if (license === "ISC") {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `![License](https://opensource.org/license/mit)`
  }

  if (license === "Apache") {
    return `![License](https://opensource.org/license/apache-2-0)`
  }

  if (license === "GNU GPLv3") {
    return `![License](https://opensource.org/license/gpl-3-0)`
  }

  if (license === "BSD 3-Clause") {
    return `![License](https://opensource.org/license/bsd-3-clause)`
  }

  if (license === "ISC") {
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

  ## Table of Contents

  ### [Installation](#installation)
  ### [Usage](#usage)
  ### [Contributing](#contributing)
  ### [Lisence](#license)
  ### [Tests](#tests)
  ### [Questions](#questions)

  ## Getting Started

  ### Installation

  * ${responses[2]}

  ### Usage

  * ${responses[3]}

  ${renderLicenseSection(responses[4])}

  ## Contributing

  * ${responses[5]}
  * ${responses[6]}

  ## Tests

  ${responses[7]}

  ## Questions

  * ${responses[8]}
  * ${responses[6]}
  * [Github Profile](github.com/${responses[9]})

`;
}

module.exports = generateMarkdown;
