const supertest = require('supertest');
const endpoint = 'http://localhost:5000/photos'

describe("Testing the photos endpoint", () => {

    it("Photos route returns true for status", async () => {

        const response = await supertest(endpoint).get('/');
        expect(response.status).toBe(200);

    });

    it("Tests the photos route with an individual ID", async () => {

        const response = await supertest(endpoint).get('/5/');
        expect(response.status).toBe(200);
        expect(response.body.data.name).toBe('yellow son robot')
        expect(response.body.data.picture).toBe('https://robohash.org/6')
    });

});