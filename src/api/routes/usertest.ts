import express, { Application, NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
const router = express.Router();

const User = require("../models/user");

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    User.find()
        .exec()
        .then((data: string) => {
            console.log(data);
            res.status(200).json(data);
        })
        .catch((err: string) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
    });

    user.save()
        .then((data: string) => {
            console.log(data);
            res.status(201).json({
                data: data,
            });
        })
        .catch((err: string) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

router.get("/:testId", (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.testId;

    User.findById(id)
        .exec()
        .then((data: string) => {
            console.log(data);
            if (data) {
                res.status(200).json({
                    data: data,
                });
            } else {
                res.status(404).json({
                    message: "Id does not exist",
                });
            }
        })
        .catch((err: string) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

router.delete("/:testId", (req: Request, res: Response, next: NextFunction) => {
    const id: any = req.params.testId;
    User.remove({ _id: id })
        .exec()
        .then((data: any) => {
            res.status(200).json(data);
        })
        .catch((err: any) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

module.exports = router;
