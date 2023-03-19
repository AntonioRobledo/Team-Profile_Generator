// Class and constructors 
class Employee { 
    constructor(name, id, email, role) {
        this.name;
        this.id;
        this.email;
        this.role;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee