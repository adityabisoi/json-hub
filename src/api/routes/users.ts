import express, { Application, Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
const router = express.Router()
var dateFormat = require('dateformat');

const User = require('../models/user')

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

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    var userData=req.body
    //validating parameters
    var error="required ";
    if (!userData.first_name) {
        error +=" first_name "
    }if(!userData.last_name){
        error +=" last_name "
    }if(!userData.email){
        error +=" email "
    }
    
    if(!error){
        userData['timestamp']=dateFormat(new Date(), "yyyy-mm-dd HH-MM")
        res.status(200).json(userData)
    }else{
        res.status(400).json({error: error})
    }
})

router.patch('/', (req: Request, res: Response, next: NextFunction) => {
    var jsonData=req.body
    jsonData['timestamp']=dateFormat(new Date(), "yyyy-mm-dd HH-MM")
    
    res.status(200).json(jsonData)
})

router.delete('/:userId', (req: Request, res: Response, next: NextFunction) => {
    const id: any = req.params.userId;
    User.findById(id).exec()
        .then((data: string) => {
            if (data) {
                res.status(204).json()
            }
            else {
                res.status(404).json({
                    message: 'User ID does not exist'
                })
            }
        })
        .catch((err: string) => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router
