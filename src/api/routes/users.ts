import express, { Application, Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
const router = express.Router()
var dateFormat = require('dateformat');

const User = require('../routes/user')

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    User.find().exec()
        .then((data: string) => {
            console.log(data)
            res.status(200).json(data)
        })
        .catch((err: string) => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

router.patch('/', (req: Request, res: Response, next: NextFunction) => {
    var first_name=req.body.first_name
    var last_name=req.body.last_name
    var email=req.body.email
    
    res.status(200).json({
        first_name:first_name,
        last_name:last_name,
        email:email,
        timestamp:dateFormat(new Date(), "yyyy-mm-dd HH-MM")
    })
})

router.get('/:userId', (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.userId

    User.findById(id).exec()
        // Single user valid
        .then((data: string) => {
            console.log(data)
            if (data) {
                res.status(200).json({
                    data: data
                })
            }
            else {
                res.status(404).json({
                    message: 'Id does not exist'
                })
            }
        })
        // Single user invalid
        .catch((err: string) => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router