const intern = require('../lib/Intern');

describe('intern', () => {
    describe('Initialize', () => {
        it('should return a new intern object', () => {
            const Intern = new intern('Antonio', 50499269, 'robledoy@uci.edu', 'UC Irvine');

            expect(Intern.name).toEqual('Antonio');
            expect(Intern.id).toEqual(50499269);
            expect(Intern.email).toEqual('robledoy@uci.edu');
            expect(Intern.school).toEqual('UC Irvine');
        })
    })

    describe('getSchool', () => {
        it('should return intern school', () => {
            const Intern = new intern('Antonio', 50499269, 'robledoy@uci.edu', 'UC Irvine');

            expect(Intern.getSchool()).toEqual('UC Irvine');
        })
    })

    describe('getRole', () => {
        it('should return the Intern role', () => {
            const Intern = new intern('Antonio', 50499269, 'robledoy@uci.edu', 'UC Irvine');

            expect(Intern.getRole()).toEqual('Intern')
        })
    })
});