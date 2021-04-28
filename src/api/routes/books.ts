import express, { Application, NextFunction, Request, Response } from "express";
const data = require("../../../data/bookdata.json");

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        if(req.query){
            const author: any=req.query.author;
            const price: any=req.query.price;
            const title: any=req.query.title;
            if (!author && !price && !title) {
                res.status(404).json({ message: "Invalid query data" });
            }
            else{
                const result=data.data
                .filter((book:any)=> book.author === (author ?? book.author))
                .filter((book:any)=> book.price === (price ?? book.price))
                .filter((book:any)=> book.title === (title ?? book.title))
                if (result.length) 
                    res.status(200).json({ data: result });
                else 
                    res.status(204).json({ message: "No record found" });
            }
        }
        else{
            res.status(200).json(data);
        }
        
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
});

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: number = parseInt(req.params.id);
        const size = data.data.length;

        if (id < size) {
            res.status(200).json({ data: data.data[id] });
        } else {
            res.status(404).json({ message: "No data found at the given index" });
        }
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
});
module.exports = router;
