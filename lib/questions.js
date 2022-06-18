// Create an array of questions for user input
const employeeQuestions = [
    {
    type: "list",
    message: "What type of employee are you entering?",
    choices: ["manager","engineer","intern"],
    name: "employeeType"
    },
    {
        type: "input",
        message: "What is this employee's name?",
        name: "employeeName",
    },
    {
        type: "input",  //numeric?
        message: "What is this employee's ID?",
        name: "employeeID",
    },
    {
        type: "input",
        message: "What is this employee's email?",
        name: "employeeEmail",
    },
    {
        // conditional question, only if employeeType is "engineer"
        type: "input",
        message: "What is this engineer's Github ID?",
        name: "employeeGithub",
        when: (answers) => answers.employeeType == "engineer",
    },
    {
        // conditional question, only if employeeType is "manager"
        type: "input", //numeric
        message: "What is this manager's office number?",
        name: "employeeOfficeNumber",
        when: (answers) => answers.employeeType == "manager",
    },
    {
        // conditional question, only if employeeType is "intern"
        type: "input", 
        message: "What is this intern's school?",
        name: "employeeSchool",
        when: (answers) => answers.employeeType == "intern",
    },
    {
        type: "confirm",
        message: "Would you like to enter another employee?",
        name: "enterAnother"}
]

module.exports = {
    employeeQuestions
}