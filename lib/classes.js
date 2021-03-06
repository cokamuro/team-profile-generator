class Employee {
    // The first class is an Employee parent class with the following properties and methods: 
    // name, id, email
    // getName(), getId(), getEmail(), getRole()—returns 'Employee'
    constructor(name, id, email, role = "employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    };

    getName() { return this.name };
    getID() { return this.id };
    getEmail() { return this.email };
    getRole() { return this.role }
}

class Manager extends Employee {
    // In addition to Employee's properties and methods, Manager will also have the following:
    // officeNumber
    // getRole()—overridden to return 'Manager'
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "manager");
        this.officeNumber = officeNumber
    }
}

class Engineer extends Employee {
    // In addition to Employee's properties and methods, Engineer will also have the following:
    // github—GitHub username
    // getGithub()
    // getRole()—overridden to return 'Engineer'
    constructor(name, id, email, github) {
        super(name, id, email, "engineer");
        this.github = github;
    }
    getGithub() { return this.github };
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        // In addition to Employee's properties and methods, Intern will also have the following:
        // school
        // getSchool()
        // getRole()—overridden to return 'Intern'
        super(name, id, email, "intern");
        this.school = school;
    }
    getSchool() { return this.school };
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
};


