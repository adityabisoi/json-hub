import express, { Application, Request, Response, NextFunction } from 'express'
const router = express.Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('GET (Valid): https://rest-fetch.herokuapp.com/users/ ')
})

module.exports = router