import express, { Application, NextFunction, Request, Response } from "express";
import { monitorEventLoopDelay } from "node:perf_hooks";
const data = require("../../../data/vehicledata.json");

const router = express.Router();

// vehicles/ -> send all the vehicle data

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = router;