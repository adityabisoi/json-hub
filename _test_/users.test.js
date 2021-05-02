const supertest = require('supertest');
const endpoint = 'http://localhost:3000/users'

describe("Testing the users API", () => {

    it("Tests the users route and returns true for status", async () => {

        const response = await supertest(endpoint).get('/');
        expect(response.status).toBe(200);

    });

});