const { prompt } = require("inquirer");
const { Manager } = require("./lib/classes.js");
const { Engineer } = require("./lib/classes.js");
const { Intern } = require("./lib/classes.js");
const questions = require('./lib/questions.js');
const fileIO = require('./lib/fileio.js');

function renderDynamicContent(employees){
    let output="";
    for(let i=0;i<employees.length;i++){
        const employee=employees[i]
        switch (employee.role) {
            case "manager": {
                output+=`
                <div class="col c3 card manager">
                    <h3>${employee.name}</h3>
                    <hr>
                    <strong>Manager</strong>
                    <hr>
                    ID: ${employee.id}<br>
                    Email: <a href="mailto:${employee.email}">${employee.email}</a><br>
                    Office Number: ${employee.officeNumber}
                </div>`
                break;
            }
            case "engineer": {
                output+=`
                <div class="col c3 card engineer">
                    <h3>${employee.name}</h3>
                    <hr>
                    <strong>Engineer</strong>
                    <hr>
                    ID: ${employee.id}<br>
                    Email: <a href="mailto:${employee.email}">${employee.email}</a><br>
                    Github: <a href="https://github.com/${employee.github}" target = "_blank">${employee.github}</a><br>
                </div>`
                break;
            }
            case "intern": {
                output+=`
                <div class="col c3 card intern">
                    <h3>${employee.name}</h3>
                    <hr>
                    <strong>Intern</strong>
                    <hr>
                    ID: ${employee.id}<br>
                    Email: <a href="mailto:${employee.email}">${employee.email}</a><br>
                    School: ${employee.school}<br>
                </div>`
                break;
            }
        }
    }
    return output;
}



const init = async () => {
    let enterAnother=false;
    let employees=[];
    // prompt the user for all of the data to integrate into the template
    do {
        const data = await prompt(questions.employeeQuestions);
        switch (data.employeeType) {
            case "manager": {
                const thisManager=new Manager(data.employeeName,data.employeeID,data.employeeEmail,data.employeeOfficeNumber)
                employees.push(thisManager);
                break;
            }
            case "engineer": {
                const thisEngineer=new Engineer(data.employeeName,data.employeeID,data.employeeEmail,data.employeeGithub)
                employees.push(thisEngineer);
                break;
            }
            case "intern": {
                const thisIntern=new Intern(data.employeeName,data.employeeID,data.employeeEmail,data.employeeSchool)
                employees.push(thisIntern);
                break;
            }
        }
        enterAnother=data.enterAnother;
    } while (enterAnother == true);

    // read the template HTML
    const templateHTML=fileIO.readTemplate();
    
    // insert the dynamic content into the static HTML
    const finalHTML=templateHTML.replace("~~~dynamic-content~~~",renderDynamicContent(employees));

    // write the finished index.html to the output directory
    fileIO.writeToFile("./output/index.html",finalHTML);    
};

// Function call to initialize app
init();


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
