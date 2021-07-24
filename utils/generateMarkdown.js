// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
* [Languages](#Languages)
* [Installation](#Installation)
* [Screenshots](#Screenshots)
* [Link](#Link)
  
  ## Description
  ${data.description}

  ## Languages
  The Languages used to build the project are:
  ${data.languages}

  ## Installation
  ${data.install}

  ## Screenshots
  ${data.screenshot}

  ## Link
  https://github.com/${data.link}/${data.title}
`;
}

module.exports = generateMarkdown;