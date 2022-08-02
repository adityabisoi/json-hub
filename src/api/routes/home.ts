import express, { Application, NextFunction, Request, Response } from 'express'
//data to be shown on website
import data from '../../views/data'
const router = express.Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    //var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    // res.send(`GET (Valid): ${fullUrl}users`)
    res.render('index', { data: data })
})

module.exports = router
