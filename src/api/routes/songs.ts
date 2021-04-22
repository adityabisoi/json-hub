import express, { Application, NextFunction, Request, Response } from "express";
const data = require("../../../data/songdata.json");

const router = express.Router();

const fetchData = (key:string,value:string)=>{
    const result:any = data.data.filter(function (song:any){
        if(song[key] === value){
            return song;
        }
    });
    return result;
};


// GET request /songs
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        const artist:any = req.query.artist;
        const genre:any = req.query.genre;
        const language:any = req.query.language;
        if(req.query){
            if(artist){
                const result = fetchData("singer",String(artist));
                if(result.length)
                    res.status(200).json({ data:result });
                else
                    res.status(404).json({ message: "Invalid artist" });    
            }
            else if(genre){
                const result = fetchData("genre",String(genre));
                if(result.length)
                    res.status(200).json({ data:result });
                else
                    res.status(404).json({ message: "Invalid genre" });
            }
            else if(language){
                const result = fetchData("language",String(language));
                if(result.length)
                    res.status(200).json({ data:result });
                else
                    res.status(404).json({ message: "Invalid language" });
            }
            else{
                res.status(404).json({ message: "Invalid query" });
            }
        }
        else{
            res.status(200).json(data);
        }
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});
router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: any = req.params.id;
        if (id < data.data.length) {
            res.status(200).json({ data: data.data[id] });
        } else {
            res.status(404).json({ message: "Invalid Id" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});
module.exports = router;
