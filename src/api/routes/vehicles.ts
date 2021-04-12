import express, { Application, NextFunction, Request, Response } from "express";
import { monitorEventLoopDelay } from "node:perf_hooks";
const data = require("../../../data/vehicledata.json");

const router = express.Router();

// vehicles/ -> send all the vehicle data

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        const manufacturer: any = req.query.manufacturer;
        const result = [];
        if (manufacturer !== undefined) {
            for (let i: any = 0; i < data.data.length; i++) {
                if (data.data[i].manufacturer === manufacturer) {
                    result.push(data.data[i]);
                }
            }
            if (result.length) {
                res.status(200).json({ data: result });
            }
            else {
                res.status(400).json({ message: "invalid request" });
            }
        }
        else {
            res.status(200).json(data);
        }
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
        const idx: number = parseInt(req.params.id);
        if (idx < data.data.length) {
            res.status(200).json({ data: data.data[idx] });
        }
        else {
            res.status(200).json(data);
        }
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = router;