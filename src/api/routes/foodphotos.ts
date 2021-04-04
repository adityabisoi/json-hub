import express, { Application, NextFunction, Request, Response } from "express";
const data = require("../../../data/photofooddata.json");

const router = express.Router();

/*

/photos/food/taste -> send all the taste category


/photos/food -> send all the food items


/photos/food?taste={category} -> send items of specific category food


*/

// GET request /photos/food/taste route -> available category
router.get("/taste", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({ data: data.taste });
    } catch (err) {
    //error handling
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});

// GET request /photos/food route
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
    //if query parameters does not exist then send all food items
        if (!req.query.taste) {
            res.status(200).json({ data: data.data });
        }
        // If query parameters exist then sending that type of food object
        else {
            const sendData: Array<any> = [];
            data.data.forEach((element: any) => {
                if (element.taste === req.query.taste) {
                    sendData.push(element);
                }
            });
            res.status(200).json({ data: sendData });
        }
    } catch (err) {
    //error handling
        console.log(err);
        res.status(500).json({
            error: err,
        });
    }
});

module.exports = router;
