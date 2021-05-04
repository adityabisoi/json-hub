import express, { Application, NextFunction, Request, Response } from "express";
const data = require("../../../data/animals/animaldata");

const router = express.Router();

//GET request /animals/amphibians route
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

router.get("/:category", (req: Request, res: Response, next: NextFunction) => {
    const category:any = req.params.category ;
    const result = data.data.filter((animal:any)=>animal.category === category);
    try {
        if(result.length)
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