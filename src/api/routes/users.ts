import express, { Application, Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
import {fakedata} from "./../../fakedata"
const router = express.Router()

const User = require('../routes/user')

User.find({})
.then((data:string)=>{
    if(data.length===0)
    {
        User.insertMany(fakedata)
        .then((data: string) => {
            console.log(data)
        })
        .catch((err: string) => {
            console.log(err)
        });
    }
})



router.get('/', (req: Request, res: Response, next: NextFunction) => {
    User.find().exec()
        .then((data: string) => {
            if(data.length===0)
            {
                User.insertMany(fakedata)
                .then((data: string) => {
                    console.log(data)
                    res.status(200).json(data)
                })
                .catch((err: string) => {
                    console.log(err)
                });
            }
            else{
            console.log(data)
            res.status(200).json(data)
            }
        })
        .catch((err: string) => {
            console.log(err)
            res.status(500).json({
                error: err
            })
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
        .then((data: string) => {
            console.log(data)
            res.status(201).json({
                data: data
            })
        })
        .catch((err: string) => {
            console.log(err)
            res.status(500).json({
                error: err
            })
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

router.delete('/:userId', (req: Request, res: Response, next: NextFunction) => {
    const id: any = req.params.userId
    User.remove({ _id: id }).exec()
        .then((data: any) => {
            res.status(200).json(data)
        })
        .catch((err: any) => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router