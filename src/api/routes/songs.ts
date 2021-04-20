import express, { Application, NextFunction, Request, Response } from "express";
const data = require("../../../data/songdata.json");

const router = express.Router();

// GET request /songs
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});
router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: any = req.params.id;
        if (id < data.data.length) {
            res.status(200).json({ data: data.data[id] });
        } else {
            res.status(404).json({ message: "Invalid Id" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});
module.exports = router;
