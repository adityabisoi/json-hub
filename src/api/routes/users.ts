import express, { Application, Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
const router = express.Router()

const User = require('../routes/user')

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        msg: 'Users GET'
    })
})

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    })

    user.save()
        .then((data: string) => console.log(data))
        .catch((err: string) => console.log(err))

    res.status(201).json({
        msg: 'Users POST',
        data: user
    })
})

router.get('/:userId', (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.userId

    User.findById(id).exec()
        // Single user valid
        .then((data: any) => {
            console.log(data)
            res.status(200).json(data)
        })
        // Single user invalid
        .catch((err: any) => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router