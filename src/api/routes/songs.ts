import express, { Application, NextFunction, Request, Response } from "express";
const data = require("../../../data/songdata.json");

const router = express.Router();

// GET request /songs
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.query) {
            const artist: any = req.query.artist;
            const genre: any = req.query.genre;
            const language: any = req.query.language;
            if (!artist && !genre && !language) {
                res.status(404).json({ message: "Invalid query data" });
            } else {
                const result = data.data
                    .filter((song: any) => song.singer === (artist ?? song.singer))
                    .filter((song: any) => song.genre === (genre ?? song.genre))
                    .filter((song: any) => song.language === (language ?? song.language));

                if (result.length) res.status(200).json({ data: result });
                else res.status(204).json({ message: "No record found" });
            }
        } else {
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
