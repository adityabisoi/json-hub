import express, { Application, NextFunction, Request, Response } from "express";
const amphibianData = require("../../../data/animals/amphibiandata");

const router = express.Router();

//GET request /animals/amphibians route
router.get("/amphibians", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json(amphibianData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});

//GET request /animals/amphibians/:type route
router.get("/amphibians/:type", (req: Request, res: Response, next: NextFunction) => {
    try {
        const type = req.params.type;
        const option = req.query.option;
        console.log(type);
        let result = null;
        for (let i = 0; i < amphibianData.data.length; i++) {
            if (type === amphibianData.data[i].type) {
                if(option){
                    if(option === "breed"){
                        result = amphibianData.data[i].breed;
                        break;
                    }
                    else if(option === "picture"){
                        result = amphibianData.data[i].picture;
                        break;
                    }
                    else if(option === "description"){
                        result = amphibianData.data[i].description;
                        break;
                    }
                    else{
                        break;
                    }
                }
                else{
                    result = amphibianData.data[i];
                    break;
                } 
            }
        }
        if (result !== null) {
            res.status(200).json({ data: result });
        } else {
            res.status(400).json({ error:"invalid request" });
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