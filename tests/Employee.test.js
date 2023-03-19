const employee = require('../lib/Employee');

describe('employee', () => {
    describe('Initialize', () => {
        it('should create a new employee object', () => {
            const Employee = new employee('Antonio', 50499269, 'robledoy@uci.edu');

            expect(Employee.name).toEqual('Antonio');
            expect(Employee.id).toEqual(50499269);
            expect(Employee.email).toEqual('robledoy@uci.edu')
        })
    })

    describe('getName', () => {
        it('should return name of employee', () => {
            const Employee = new employee('Antonio', 50499269, 'robledoy@uci.edu');

            expect(Employee.name).toEqual('Antonio');
        })
    })

    describe('getId', () => {
        it('should return the employee id number', () => {
            const Employee = new employee('Antonio', 50499269, 'robledoy@uci.edu');

            expect(Employee.id).toEqual('50499269');
        })
    })

    describe('getEmail', () => {
        it('should return the employee email', () => {
            const Employee = new employee('Antonio', 50499269, 'robledoy@uci.edu');

            expect(Employee.email).toEqual('robledoy@uci.edu');
        })
    })

    describe('getRole', () => { 
        it('should return the employee role', () => {
            const Employee = new employee('Antonio', 50499269, 'robledoy@uci.edu');

            expect(Employee.getRole()).toEqual('Employee');
        })
    })
});