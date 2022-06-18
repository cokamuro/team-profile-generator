//The application must include Employee, Manager, Engineer, and Intern classes. The tests for these classes (in the _tests_ directory) must ALL pass.
const { Employee } = require("../lib/classes.js");
const { Manager } = require("../lib/classes.js");
const { Engineer } = require("../lib/classes.js");
const { Intern } = require("../lib/classes.js");


describe("Employee Object Tests", () => {
  describe("Initialization", () => {
    it("should return an object containing properties with the constructor values", () => {
      const obj = new Employee("testname",999,"testemail@domain.com");

      expect(obj.name).toEqual("testname");
      expect(obj.id).toEqual(999);
      expect(obj.email).toEqual("testemail@domain.com");
      expect(obj.role).toEqual("employee");
    });  
  });

  describe("getName", () => {
    it("should return return the name property value when the getName method is called", () => {
        const obj = new Employee("testname",999,"testemail@domain.com");
        
        const result = obj.getName();

      expect(result).toEqual("testname");
    }); 
  });

  describe("getID", () => {
    it("should return return the ID property value when the getID method is called", () => {
        const obj = new Employee("testname",999,"testemail@domain.com");
        
        const result = obj.getID();

      expect(result).toEqual(999);
    }); 
  });

  describe("getEmail", () => {
    it("should return return the email property value when the getEmail method is called", () => {
        const obj = new Employee("testname",999,"testemail@domain.com");
        
        const result = obj.getEmail();

      expect(result).toEqual("testemail@domain.com");
    }); 
  });

  describe("getRole", () => {
    it("should return return the role property value of employee when the getRole method is called", () => {
        const obj = new Employee("testname",999,"testemail@domain.com");
        
        const result = obj.getRole();

      expect(result).toEqual("employee");
    }); 
  });

});

describe("Manager Object Tests", () => {
  describe("Initialization", () => {
    it("should return an object containing properties with the constructor values", () => {
      const obj = new Manager("testname",999,"testemail@domain.com",1234);

      expect(obj.name).toEqual("testname");
      expect(obj.id).toEqual(999);
      expect(obj.email).toEqual("testemail@domain.com");
      expect(obj.role).toEqual("manager");
      expect(obj.officeNumber).toEqual(1234);
    });  
  });

  describe("getRole", () => {
    it("should return return the role property value of manager when the getRole method is called", () => {
        const obj = new Manager("testname",999,"testemail@domain.com");
        
        const result = obj.getRole();

      expect(result).toEqual("manager");
    }); 
  });
});

describe("Engineer Object Tests", () => {
  describe("Initialization", () => {
    it("should return an object containing properties with the constructor values", () => {
      const obj = new Engineer("testname",999,"testemail@domain.com","githubid");

      expect(obj.name).toEqual("testname");
      expect(obj.id).toEqual(999);
      expect(obj.email).toEqual("testemail@domain.com");
      expect(obj.role).toEqual("engineer");
      expect(obj.github).toEqual("githubid");
    });  
  });

  describe("getRole", () => {
    it("should return return the role property value of engineer when the getRole method is called", () => {
        const obj = new Engineer("testname",999,"testemail@domain.com","githubid");
        
        const result = obj.getRole();

      expect(result).toEqual("engineer");
    }); 
  });

  describe("getGithub", () => {
    it("should return return the gethub id property value when the getGithub method is called", () => {
        const obj = new Engineer("testname",999,"testemail@domain.com","githubid");
        
        const result = obj.getGithub();

      expect(result).toEqual("githubid");
    }); 
  });
});

describe("Intern Object Tests", () => {
  describe("Initialization", () => {
    it("should return an object containing properties with the constructor values", () => {
      const obj = new Intern("testname",999,"testemail@domain.com","uncc");

      expect(obj.name).toEqual("testname");
      expect(obj.id).toEqual(999);
      expect(obj.email).toEqual("testemail@domain.com");
      expect(obj.role).toEqual("intern");
      expect(obj.school).toEqual("uncc");
    });  
  });

  describe("getRole", () => {
    it("should return return the role property value of intern when the getRole method is called", () => {
        const obj = new Intern("testname",999,"testemail@domain.com","uncc");
        
        const result = obj.getRole();

      expect(result).toEqual("intern");
    }); 
  });

  describe("getSchool", () => {
    it("should return return the school property value when the getSchool method is called", () => {
        const obj = new Intern("testname",999,"testemail@domain.com","uncc");
        
        const result = obj.getSchool();

      expect(result).toEqual("uncc");
    }); 
  });
});