const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialize', () => {
        it('should create a new employee object', () => {

            const employee = new Employee('Antonio', 50499269, 'robledoy@uci.edu');

            expect(employee.name).toEqual('Antonio');
            expect(employee.id).toEqual(50499269);
            expect(employee.email).toEqual('robledoy@uci.edu')
        })
    })

    describe('getName', () => {
        it('should return name of employee', () => {
            const employee = new Employee('Antonio', 50499269, 'robledoy@uci.edu');

            expect(employee.name).toEqual('Antonio');
        })
    })

    describe('getId', () => {
        it('should return the employee id number', () => {
            const employee = new Employee('Antonio', 50499269, 'robledoy@uci.edu');

            expect(employee.id).toEqual(50499269);
        })
    })

    describe('getEmail', () => {
        it('should return the employee email', () => {
            const employee = new Employee('Antonio', 50499269, 'robledoy@uci.edu');

            expect(employee.email).toEqual('robledoy@uci.edu');
        })
    })

    describe('getRole', () => { 
        it('should return the employee role', () => {
            const employee = new Employee('Antonio', 50499269, 'robledoy@uci.edu');

            expect(employee.getRole()).toEqual('Employee');
        })
    })
});