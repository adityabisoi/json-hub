import express, { Application, NextFunction, Request, Response } from "express";
const data = require("../../../data/addressdata.json");

const router = express.Router();

//GET request /address route
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        const city: any = req.query.city;
        const state: any = req.query.state;
        const country: any = req.query.country;
        let result = [];
        if (city) {
            result = data.data.filter((address: any) => address["city"].toLowerCase() === city.toLowerCase());
        }
        else if (state) {
            result = data.data.filter((address: any) => address["state"].toLowerCase() === state.toLowerCase());
        }
        else if (country) {
            result = data.data.filter((address: any) => address["country"].toLowerCase() === country.toLowerCase());
        }
        if (Object.keys(req.query).length === 0) {
            res.status(200).json(data);
        }
        else if (result.length) {
            res.status(200).json({ data: result });
        }
        else if (!city && !state && !country) {
            res.status(404).json({ message: "Invalid query" });
        }
        else {
            res.status(404).json({ message: "No data found" });
        }
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