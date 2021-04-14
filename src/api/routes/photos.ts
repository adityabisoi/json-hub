import express, { Application, NextFunction, Request, Response } from "express";
const data = require("../../../data/photodata.json");

const router = express.Router();

// GET request /photos route
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(data);
        res.status(200).json(data);
    } catch (err) {
        //error handling
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});
router.get("/:index", (req: Request, res: Response, next: NextFunction) => {
    const idx:number = parseInt(req.params.index);
    const size = data.data.length;
    try{
        if(idx >= size){
            res.status(404).json({ message: "No data found at the given index" });
        }
        else{
            let count:any = req.query.count;
            if(count){
                count = parseInt(count);
                const result = [];
                for(let i:number = idx ; i < size && i <= (idx + count) ; i++){
                    result.push(data.data[i]);
                }
                res.status(200).json({ data:result });
            }   
            else{
                res.status(200).json({ data: data.data[idx] });
            }
            
        }
        
    }
    catch(err){
        res.status(500).json({ error:err });
    }
});
module.exports = router;
