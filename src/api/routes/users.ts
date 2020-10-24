import express, { Application, Request, Response, NextFunction } from 'express'
import  mongoose  from 'mongoose'
const router = express.Router()

const User=require('../routes/user')

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        msg: 'Users GET'
    })
})

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    // type User = {
    //     id: number
    //     first_name: string
    //     last_name: string
    //     email: string
    // }
    const user=new User({
        _id: new mongoose.Types.ObjectId(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    })
    
    user.save()
        .then((res: string)=>console.log(res))
        .catch((err: string)=>console.log(err))

    res.status(201).json({
        msg: 'Users POST',
        data: user
    })
})

router.get('/:userId', (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.userId

    // Single user valid
    if (id == 'valid') {
        res.status(200).json({
            msg: 'Single user valid'
        })
    }

    // Single user invalid
    else {
        res.status(200).json({
            msg: 'Single user invalid'
        })
    }
})

module.exports = router