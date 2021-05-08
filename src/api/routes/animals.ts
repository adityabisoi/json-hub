import express, { Application, NextFunction, Request, Response } from "express";
const data = require("../../../data/animaldata");

const router = express.Router();

//GET request /animals/amphibians route
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

router.get("/:category", (req: Request, res: Response, next: NextFunction) => {
    const category: any = req.params.category;
    let result = data.data.find((animal: any) => animal.category === category);
    try {
        if (result && Object.keys(req.query).length) {
            const type: any = req.query.type;
            if (!type) {
                res.status(404).json({ message: "Invalid query" });
            } else {
                result = result.types.filter((animal: any) => animal.type === type);
                if (result.length) {
                    res.status(200).json(result);
                } else {
                    res.status(204).json({ message: "No data found" });
                }
            }
        } else {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: "Invalid category" });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});
module.exports = router;
