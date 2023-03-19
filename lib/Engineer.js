// import Employee class
const employee = require('./Employee');

// extends creates a class that is a child of another class and is used
// extend the properties of the employee file to this file
class Engineer extends employee {
    constructor(name, id, email, github) {
    // super keyword is being used here invoke a subclass' constructor 
    super(name, id, email);
    this.github = github;
    this.id = id;
    this.email = email;
    this.name = name;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer; 