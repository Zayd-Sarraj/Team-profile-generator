const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, github) {
        super(name, id, "Engineer")
        this.github = github
    }
    getGithub(){
        console.log(this.github)
        return this.github
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
          <p class="card-title">Portfolio: <a href="https://github.com/${this.github}">${this.github}</a></p>
        </div>
      </div>` 
    }
}

module.exports = Engineer