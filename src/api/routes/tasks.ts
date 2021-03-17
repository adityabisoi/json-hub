import express, { Application, Request, Response, NextFunction } from "express";
const data = require("./../../taskdata.json");

const router = express.Router();

// GET request /tasks route
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send(data);
});

module.exports = router;
