const supertest = require('supertest');
const endpoint = 'http://localhost:5000/vehicles'

describe("Testing the vehicles API", () => {

    it("Tests the vehicles route and returns true for status", async () => {

        const response = await supertest(endpoint).get('/');
        expect(response.status).toBe(200);

    });

    it("Tests the vehicles route with an individual ID", async () => {

        const response = await supertest(endpoint).get('/2/');
        expect(response.status).toBe(200);
        expect(response.body.data.type).toBe('hatchback')

    });

});