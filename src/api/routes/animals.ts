import express, { Application, NextFunction, Request, Response } from "express";
const data = require("../../../data/animaldata.json");

const router = express.Router();

//GET request /animals route
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(data);
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});

module.exports = router;