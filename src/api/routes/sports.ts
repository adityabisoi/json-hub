import express, { Application, NextFunction, Request, Response } from "express";
const data = require("../../../data/sports/sportdata.json");

const router = express.Router();

//GET request /sports route
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});

//GET request/sports/:category route
router.get("/:category", (req: Request, res: Response, next: NextFunction) => {
    try {
        const category: any = req.params.category;
        const result = data.data.filter((sport: any) => sport.category === category);
        if (result.length)
            res.status(200).json(result);
        else
            res.status(404).json({ message: "Invalid category" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});

module.exports = router;