import express, { Application, Request, Response, NextFunction } from "express";
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

module.exports = router;