const supertest = require('supertest')
const endpoint = 'http://localhost:5000/tasks'

describe('Testing the tasks endpoint', () => {
    it('Tasks route returns true for status', async () => {
        const response = await supertest(endpoint).get('/')
        expect(response.status).toBe(200)
    })

    it('Tests the tasks route with an individual ID', async () => {
        const response = await supertest(endpoint).get('/1/')
        expect(response.status).toBe(200)
        expect(response.body.data.task_name).toBe('drinking')
        expect(response.body.data.details).toBe('drink delicious chai or coffee')
    })
})
