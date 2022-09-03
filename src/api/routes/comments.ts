import express, { Application, NextFunction, Request, Response } from 'express'
const router = express.Router()
const path = require('path')

//importing file reader fs
const fs = require('fs')

//endpoint for /GET requests for comments
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    //reading the contents of comments json file
    fs.readFile(path.resolve(__dirname, '../../../data/commentdata.json'), (err: string, data: string) => {
        if (err) {
            console.log(err)
            return res.status(500).json({
                error: err,
            })
        }
        //parsing through the data and sending response
        const comments = JSON.parse(data)
        res.status(200).json(comments)
    })
})

module.exports = router
