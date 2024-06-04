// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    if (license === 'Apache License 2.0') {
        return "https://img.shields.io/badge/Apache%20License%202.0-blue";
    }
    else if (license === 'GNU General Public License v3.0') { 
        return "https://img.shields.io/badge/GNU%20General%20Public%20License%20v3.0-green";
    }
    else if (license === 'MIT License') { 
        return "https://img.shields.io/badge/MIT%20License-yellow";
    }
    else if (license === 'BSD 2-Clause "Simplified" License') { 
        return "https://img.shields.io/badge/BSD%202%20Clause%20%22Simplified%22%20License-red";
    }
    else if (license === 'BSD 3-Clause "New" or "Revised" License') { 
        return "https://img.shields.io/badge/BSD%203%20Clause%20%22New%22%20or%20%22Revised%22%20License-purple";
    }
    else if (license === 'Boost Software License 1.0') { 
        return "https://img.shields.io/badge/Boost%20Software%20License%201.0-pink";
    }
    else if (license === 'Creative Commons Zero v1.0 Universal') { 
        return "https://img.shields.io/badge/Creative%20Commons%20Zero%20v1.0%20Universal-orange";
    }
    else if (license === 'Eclipse Public License 2.0') { 
        return "https://img.shields.io/badge/Eclipse%20Public%20License%202.0-lightblue";
    }
    else if (license === 'GNU Affero General Public License v3.0') { 
        return "https://img.shields.io/badge/GNU%20Affero%20General%20Public%20License%20v3.0-red";
    }
    else if (license === 'GNU General Public License v2.0') { 
        return "https://img.shields.io/badge/GNU%20General%20Public%20License%20v2.0-purple";
    }
    else if (license === 'GNU Lesser General Public License v2.1') { 
        return "https://img.shields.io/badge/GNU%20Lesser%20General%20Public%20License%20v2.1-yellow";
    }
    else if (license === 'Mozilla Public License 2.0') { 
        return "https://img.shields.io/badge/Mozilla%20Public%20License%202.0-green";
    }
    else if (license === 'The Unlicense') { 
        return "https://img.shields.io/badge/The%20Unlicense-magenta";
    }
    else {
        return ''
    }
/*
List of badge links 

'Apache License 2.0', https://img.shields.io/badge/Apache%20License%202.0-blue

'GNU General Public License v3.0', https://img.shields.io/badge/GNU%20General%20Public%20License%20v3.0-green

'MIT License', https://img.shields.io/badge/MIT%20License-yellow

'BSD 2-Clause "Simplified" License', https://img.shields.io/badge/BSD%202%20Clause%20%22Simplified%22%20License-red

'BSD 3-Clause "New" or "Revised" License', https://img.shields.io/badge/BSD%203%20Clause%20%22New%22%20or%20%22Revised%22%20License-purple

'Boost Software License 1.0', https://img.shields.io/badge/Boost%20Software%20License%201.0-pink

'Creative Commons Zero v1.0 Universal', https://img.shields.io/badge/Creative%20Commons%20Zero%20v1.0%20Universal-orange

'Eclipse Public License 2.0', https://img.shields.io/badge/Eclipse%20Public%20License%202.0-lightblue

'GNU Affero General Public License v3.0', https://img.shields.io/badge/GNU%20Affero%20General%20Public%20License%20v3.0-red

'GNU General Public License v2.0', https://img.shields.io/badge/GNU%20General%20Public%20License%20v2.0-purple

'GNU Lesser General Public License v2.1', https://img.shields.io/badge/GNU%20Lesser%20General%20Public%20License%20v2.1-yellow

'Mozilla Public License 2.0', https://img.shields.io/badge/Mozilla%20Public%20License%202.0-green

'The Unlicense' https://img.shields.io/badge/The%20Unlicense-magenta

*/


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 


    if (license === 'Apache License 2.0') {
        return "https://apache.org/licenses/LICENSE-2.0";
    }
    else if (license === 'GNU General Public License v3.0') { 
        return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    }
    else if (license === 'MIT License') { 
        return "https://mit-license.org/";
    }
    else if (license === 'BSD 2-Clause "Simplified" License') { 
        return "https://help.idbs.com/DocumentationPortal/Polar/LATEST/en/bsd-2-clause--simplified--license-19301.html";
    }
    else if (license === 'BSD 3-Clause "New" or "Revised" License') { 
        return "https://choosealicense.com/licenses/bsd-3-clause/";
    }
    else if (license === 'Boost Software License 1.0') { 
        return "https://www.boost.org/LICENSE_1_0.txt";
    }
    else if (license === 'Creative Commons Zero v1.0 Universal') { 
        return "https://creativecommons.org/publicdomain/zero/1.0/legalcode.en";
    }
    else if (license === 'Eclipse Public License 2.0') { 
        return "https://www.eclipse.org/legal/epl-2.0/";
    }
    else if (license === 'GNU Affero General Public License v3.0') { 
        return "https://www.gnu.org/licenses/agpl-3.0.en.html";
    }
    else if (license === 'GNU General Public License v2.0') { 
        return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    }
    else if (license === 'GNU Lesser General Public License v2.1') { 
        return "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html";
    }
    else if (license === 'Mozilla Public License 2.0') { 
        return "https://www.mozilla.org/en-US/MPL/2.0/";
    }
    else if (license === 'The Unlicense') { 
        return "https://choosealicense.com/licenses/unlicense/";
    }
    else {
        return ''
    }
/*

List of badge links 

'Apache License 2.0', https://apache.org/licenses/LICENSE-2.0
'GNU General Public License v3.0', https://www.gnu.org/licenses/gpl-3.0.en.html
'MIT License', https://mit-license.org/
'BSD 2-Clause "Simplified" License', https://help.idbs.com/DocumentationPortal/Polar/LATEST/en/bsd-2-clause--simplified--license-19301.html
'BSD 3-Clause "New" or "Revised" License', https://choosealicense.com/licenses/bsd-3-clause/
'Boost Software License 1.0', https://www.boost.org/LICENSE_1_0.txt
'Creative Commons Zero v1.0 Universal', https://creativecommons.org/publicdomain/zero/1.0/legalcode.en
'Eclipse Public License 2.0', https://www.eclipse.org/legal/epl-2.0/
'GNU Affero General Public License v3.0', https://www.gnu.org/licenses/agpl-3.0.en.html
'GNU General Public License v2.0', https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
'GNU Lesser General Public License v2.1', https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html
'Mozilla Public License 2.0', https://www.mozilla.org/en-US/MPL/2.0/
'The Unlicense', https://choosealicense.com/licenses/unlicense/


*/


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
    let section = ''

    if (license) {
        section = `${renderLicenseBadge(license)} and the link to the license ${renderLicenseLink(license)}`

        return section
    } 
    
    else {
        return ''
    }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# Project Title
${data.title}

## Description
${data.description}

## Table of contents
## Installation
${data.installation}

## Usage
${data.usage}

## License 
${data.license}
${renderLicenseSection(data.license)}

## Contributing 
${data.contribute}

## Tests
${data.tests}

## Questions
${data.questions}

You may reach me at...
GitHub Username: ${data.user}
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
