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
        const player: any = req.query.players;
        const result = data.data.find((sport: any) => sport.category === category);
        if (result && Object.keys(req.query).length) {
            if (!player) {
                res.status(404).json({ message: "Invalid query" });
            } else {
                const players: any = [];
                for (let i: any = 0; i < result.players.length; i++) {
                    if (result.players[i].name === player) {
                        players.push(result.players[i]);
                    }
                }
                if (players.length) {
                    res.status(200).json({ data: players });
                } else {
                    res.status(204).json({ message: "No data found" });
                }
            }
        } else {
            if (result) {
                res.status(200).json({ data: result });
            } else {
                res.status(404).json({ message: "Invalid category" });
            }
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
