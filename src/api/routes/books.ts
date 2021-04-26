import express, { Application, NextFunction, Request, Response } from "express";
const data = require("../../../data/bookdata.json");

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
});

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: number = parseInt(req.params.id);
        const size = data.data.length;

        if (id < size) {
            res.status(200).json({ data: data.data[id] });
        } else {
            res.status(404).json({ message: "No data found at the given index" });
        }
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
});
module.exports = router;
