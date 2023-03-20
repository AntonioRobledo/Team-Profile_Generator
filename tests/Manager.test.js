const manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialize', () => {
        it('should return a new Manager object', () => {
            const Manager = new manager('Antonio', 50499269, 'robledoy@uci.edu', 404)

            expect(Manager.name).toEqual('Antonio');
            expect(Manager.id).toEqual(50499269);
            expect(Manager.email).toEqual('robledoy@uci.edu');
            expect(Manager.officeNumber).toEqual(404);
        })
    })

    describe('getOfficeNumber', () => {
        it('should return the manager office number', () => {
            const Manager = new manager('Antonio', 50499269, 'robledoy@uci.edu', 404)

            expect(Manager.getOfficeNumber()).toEqual(404);
        })
    })

    describe('getRole', () => {
        it('should return the manager role', () => {
            const Manager = new manager('Antonio', 50499269, 'robledoy@uci.edu', 404)

            expect(Manager.getRole()).toEqual('Manager')
        })
    })
});