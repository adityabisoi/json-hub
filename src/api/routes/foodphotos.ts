import express, { Application, Request, Response, NextFunction } from "express";
const data = require("../../../data/photofooddata.json");

const router = express.Router();

// GET request /photos/food route
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    //if query parameters does not exist then send all food items
    if (!req.query.taste) {
      console.log(data.data, data);
      res.status(200).json(data.data);
    }
    // If query parameters exist then sending that type of food object
    else {
      const sendData: Array<any> = [];
      data.data.forEach((element: any) => {
        if (element.taste === req.query.taste) {
          sendData.push(element);
        }
      });
      res.status(200).json(sendData);
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
