import express, { Application, NextFunction, Request, Response } from "express";
const data = require("../../../data/addressdata.json");

const router = express.Router();

//GET request /address route
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

//GET request/address/:id route
router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: any = req.params.id;
        if (id < data.data.length) {
            res.status(200).json({ data: data.data[id] });
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