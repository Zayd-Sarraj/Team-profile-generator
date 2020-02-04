class Employee {
    constructor(name, id, title){
    // Capitalizes the first letter of a name
      this.name = name.replace(/^./, name[0].toUpperCase())
      this.id = id
      this.title = title
    }

    getName() {
        console.log(`Employee Name: ${this.name}`);
        return this.name
    }

    getId() {
        console.log(`Employee ID: ${this.id}`);
        return this.id
    }

    getRole() {
        console.log(`Employee title: ${this.title}`)
        return "Employee"
    }
  }

  module.exports = Employee