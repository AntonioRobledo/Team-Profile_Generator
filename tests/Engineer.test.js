const engineer = require('../lib/Engineer');

describe('engineer', () => {
    describe('Initialize', () => {
        it('should return a new engineer object', () => {
            const Engineer = new engineer('Antonio', 50499269, 'robledoy@uci.edu', 'AntonioRobledo');

            expect(Engineer.name).toEqual('Antonio');
            expect(Engineer.id).toEqual(50499269);
            expect(Engineer.email).toEqual('robledoy@uci.edu');
            expect(Engineer.github).toEqual('AntonioRobledo');
        })
    })

    describe('getGithub', () => {
        it('should return the engineer github profile name', () => {
            const Engineer = new engineer('Antonio', 50499269, 'robledoy@uci', 'AntonioRobledo');

            expect(Engineer.getGithub()).toEqual('AntonioRobledo');
        })
    })

    describe('getRole', () => {
        it('should return the role of Engineer', () => {
            const Engineer = new engineer('Antonio', 50499269, 'robledoy@uci', 'AntonioRobledo');

            expect(Engineer.getRole()).toEqual('Engineer')
        })
    })
});