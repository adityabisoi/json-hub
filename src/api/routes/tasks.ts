import express, { Application, NextFunction, Request, Response } from "express";
const data = require("../../data/taskdata.json");

const router = express.Router();

// GET request /tasks route
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        const count: any = req.query.count;
        // console.log("/-count: ", count);
        if (count) {
            const result = [];
            for (let i: any = 0; i < parseInt(count) && i < data.data.length; i++) {
                result.push(data.data[i]);
            }
            res.status(200).json({ data: result });
        } else {
            res.status(200).json(data);
        }
    } catch (err) {
        //error handling
        // console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});

//GET request /tasks/index
router.get("/:index", (req: Request, res: Response, next: NextFunction) => {
    try {
        const idx: number = parseInt(req.params.index);
        const count: any = req.query.count;
        // console.log("index: ", idx)
        // console.log("count: ", count);
        if (data.data.length > idx) {
            if (count) {
                const result = [];
                const size: number = idx + parseInt(count);
                for (let i: any = idx; i < size && i < data.data.length; i++) {
                    // console.log("insdie loop:  ", data.data[i]);
                    result.push(data.data[i]);
                }
                res.status(200).json({ data: result });
            } else {
                res.status(200).json({ data: data.data[idx] });
            }
        } else {
            res.status(404).json({ message: "No data found at the given index" });
        }
    } catch (err) {
        console.log("tasks: ", err);
        res.status(500).json({
            error: err,
        });
    }
});

module.exports = router;
