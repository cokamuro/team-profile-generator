const { prompt } = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/classes.js");
const Engineer = require("./lib/classes.js");
const Intern = require("./lib/classes.js");
const questions = require('./lib/questions.js');


const init = async () => {
    // prompt the user for all of the data to integrate into the template
    const data = await prompt(questions);
    // read the template README
    const template=utils.readTemplate();
    // perform the wildcard substitutions in the template
    let body=template.replace("%%%project-title%%%",data.projectTitle)
    body=body.replace("%%%project-description%%%",data.projectDescription)
    body=body.replace("%%%installation-instructions%%%",data.installationInstructions)
    body=body.replace("%%%usage-information%%%",data.usageInformation)
    if(data.licenseName=="none"){
        body=body.replace("%%%license-name%%%","There is no usage license for this project.")
    } else {
        body=body.replace("%%%license-name%%%","This project is licensed under "+data.licenseName+".  Click the badge below to see the terms of this license.")
    }
    body=body.replace("%%%license-badge%%%",mdHelper.lookupLicenseMarkup(data.licenseName))
    body=body.replace("%%%contribution-instructions%%%",data.contributionGuidelines)
    body=body.replace("%%%test-instructions%%%",data.testInstructions)
    body=body.replaceAll("%%%email-address%%%",data.emailAddress)
    body=body.replace("%%%github-id%%%",data.githubUsername)
    // write the string to the README.md file in the output directory
    utils.writeToFile("./output/README.md", body);
  };

// Function call to initialize app
init();




//get user input



fs.writeFileSync('./output/index.html', template);
console.log('TEMPLATE GENERATED!');
process.exit();




//Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

//generate HTML file


// User Story
// AS A manager
// I WANT to generate a webpage that displays my team's basic info
// SO THAT I have quick access to their emails and GitHub profiles
// Acceptance Criteria
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
