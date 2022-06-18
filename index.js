const { prompt } = require("inquirer");
const { Manager } = require("./lib/classes.js");
const { Engineer } = require("./lib/classes.js");
const { Intern } = require("./lib/classes.js");
const questions = require('./lib/questions.js');
const fileIO = require('./lib/fileio.js');

function renderDynamicContent(employees) {
    let output = "";
    //iterate through the employees collection
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i]
        //pick html card block depending on role
        switch (employee.role) {
            case "manager": {
                output += `
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
                output += `
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
                output += `
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
    //return the concatenated HTML
    return output;
}

const init = async () => {
    let enterAnother = false;
    let employees = [];
    const employeeQuestions = questions.employeeQuestions
    // prompt the user for all of the data to integrate into the template
    do {
        const data = await prompt(employeeQuestions);
        switch (data.employeeType) {
            case "manager": {
                    const thisManager = new Manager(data.employeeName, data.employeeID, data.employeeEmail, data.employeeOfficeNumber)
                    //once a manager has been entered, remove the "manager" choice from the question's choices
                    employeeQuestions[0].choices.shift();
                    employees.push(thisManager);
                break;
            }
            case "engineer": {
                const thisEngineer = new Engineer(data.employeeName, data.employeeID, data.employeeEmail, data.employeeGithub)
                employees.push(thisEngineer);
                break;
            }
            case "intern": {
                const thisIntern = new Intern(data.employeeName, data.employeeID, data.employeeEmail, data.employeeSchool)
                employees.push(thisIntern);
                break;
            }
        }
        enterAnother = data.enterAnother;
    } while (enterAnother == true);

    // read the template HTML
    const templateHTML = fileIO.readTemplate();

    // insert the dynamic content into the static HTML
    const finalHTML = templateHTML.replace("~~~dynamic-content~~~", renderDynamicContent(employees));

    // write the finished index.html to the output directory
    fileIO.writeToFile("./output/index.html", finalHTML);

    console.log("index.html was written to ./output");
};

// Function call to initialize app
init();