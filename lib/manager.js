const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, officeNumber) {
        super(name, id, "Manager")
        this.officeNumber = officeNumber
    }
    getRole() {
        console.log(`Employee title: ${this.title}`)
        return this.title
    }
    // Creates an html card using this employee's information
    getCard() {
        return `<div class="card text-white bg-dark my-3 mx-auto" style="max-width: 18rem;">
        <div class="card-header">${this.name}</div>
        <div class="card-body">
          <p class="card-text">Employee ID: #${this.id}</p>
          <p class="card-title">Office Number: ${this.officeNumber}</p>
        </div>
      </div>` 
    }
}

module.exports = Manager