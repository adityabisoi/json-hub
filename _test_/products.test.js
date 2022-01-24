const supertest = require('supertest');
const endpoint = 'http://localhost:5000/products'

describe("Testing the products endpoint", () => {

    it("Products route returns true for status", async () => {

        const response = await supertest(endpoint).get('/');
        expect(response.status).toBe(200);

    });

    it("Tests the products route with an individual ID", async () => {

        const response = await supertest(endpoint).get('/5/');
        expect(response.status).toBe(200);
        expect(response.body.data.name).toBe('digital camera')
        expect(response.body.data.price).toBe('5999')
    });

});