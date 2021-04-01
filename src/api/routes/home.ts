import express, { Application, Request, Response, NextFunction } from 'express';
//data to be shown on website
const data = require("../../views/data.js");
const router = express.Router();


router.get('/', (req: Request, res: Response, next: NextFunction) => {
    //var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    // res.send(`GET (Valid): ${fullUrl}users`)
    res.render("index",{data:data});
})

module.exports = router;