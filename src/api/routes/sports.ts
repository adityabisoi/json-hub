import express, { Application, NextFunction, Request, Response } from "express";
const cricketData = require("../../../data/sports/cricketdata.json");

const router = express.Router();

//GET request /sports/cricket route
router.get("/cricket", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json(cricketData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});

//GET request/sports/cricket/:id route
router.get("/cricket/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: any = req.params.id;
        if (id < cricketData.data.length) {
            res.status(200).json({ data: cricketData.data[id] });
        }
        else {
            res.status(404).json({ message: "No data found at the given index" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});

module.exports = router;