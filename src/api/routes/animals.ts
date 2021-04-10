import express, { Application, NextFunction, Request, Response } from "express";
const data = require("../../../data/animaldata.json");

const router = express.Router();

//GET request /animals route
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

//GET request /animals?type route
router.get("/:type", (req: Request, res: Response, next: NextFunction) => {
    try {
        const type = req.params.type;
        const option = req.query.option;
        console.log(type);
        let result = null;
        for (let i = 0; i < data.data.length; i++) {
            if (type === data.data[i].type) {
                if(option === "breed"){
                    result = data.data[i].breed;
                    break;
                }
                else if(option === "picture"){
                    result = data.data[i].picture;
                    break;
                }
                else{
                    result = data.data[i];
                    break;
                } 
            }
        }
        if (result !== null) {
            res.status(200).json({ data: result });
        } else {
            res.status(200).json(data);
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