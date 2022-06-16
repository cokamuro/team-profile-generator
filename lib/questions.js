// Create an array of questions for user input
const employeeTypeQuestion = {
    type: "list",
    message: "What type of employee are you entering?",
    choices: ["manager","engineer","intern"],
    name: "employeeType"}

const engineerQuestions = [
    {
        type: "input",
        message: "What is this engineer's name?",
        name: "employeeName",
    },
    {
        type: "input",  //numeric?
        message: "What is this engineer's ID?",
        name: "employeeID",
    },
    {
        type: "input",
        message: "What is this engineer's email?",
        name: "employeeEmail",
    },
    {
        type: "input", //numeric
        message: "What is this engineer's Github ID?",
        name: "employeeGithub",
    },
]

const managerQuestions = [
    {
        type: "input",
        message: "What is this manager's name?",
        name: "employeeName",
    },
    {
        type: "input",  //numeric?
        message: "What is this manager's ID?",
        name: "employeeID",
    },
    {
        type: "input",
        message: "What is this manager's email?",
        name: "employeeEmail",
    },
    {
        type: "input", //numeric
        message: "What is this manager's office number?",
        name: "employeeOfficeNumber",
    },
]

const internQuestions = [
    {
        type: "input",
        message: "What is this intern's name?",
        name: "employeeName",
    },
    {
        type: "input",  //numeric?
        message: "What is this intern's ID?",
        name: "employeeID",
    },
    {
        type: "input",
        message: "What is this intern's email?",
        name: "employeeEmail",
    },
    {
        type: "input", //numeric
        message: "What is this intern's school?",
        name: "employeeSchool",
    },
]

module.exports = {
    employeeTypeQuestion,
    managerQuestions,
    engineerQuestions,
    internQuestions
}