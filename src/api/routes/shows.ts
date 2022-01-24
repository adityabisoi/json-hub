import express, { Application, NextFunction, Request, Response } from "express";
const data = require("../../data/showsdata.json");

const router = express.Router();

//GET request /shows route
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        const genre: any = req.query.genre;
        const season: any = req.query.season;
        const rating: any = req.query.rating;
        if (Object.keys(req.query).length) {
            if (!genre && !season && !rating)
                res.status(404).json({ message: "Invalid query" });
            else {
                let result = data.data
                    .filter((shows: any) => shows.season === (season ?? shows.season))
                    .filter((shows: any) => shows.rating === (rating ?? shows.rating));
                if (genre) result = data.data.filter((shows: any) => shows.genre.includes(genre));

                if (result.length)
                    res.status(200).json({ data: result });
                else
                    res.status(204).json({ message: "No data found" });
            }
        }
        else {
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

//GET request/shows/:id route
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