import express, { Application, Request, Response, NextFunction } from 'express'
var dateFormat = require('dateformat');
const router = express.Router()

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
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    })

    res.status(200).json({
        first_name:user.first_name,
        last_name:user.last_name,
        email:user.email,
        timestamp:dateFormat(new Date(), "yyyy-mm-dd h-MM")
    })
})

module.exports = router