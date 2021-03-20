import express, { Application, Request, Response, NextFunction } from 'express'
const router = express.Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    res.send(`GET (Valid): ${fullUrl}users`)
})

module.exports = router