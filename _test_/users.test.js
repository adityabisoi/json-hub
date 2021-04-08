const supertest = require('supertest');
const endpoint = 'https://rest-fetch.herokuapp.com/users'

describe("Testing the users API", () => {

    it("Tests the users route and returns true for status", async () => {

        const response = await supertest(endpoint).get('/');
        expect(response.status).toBe(200);

    });

});