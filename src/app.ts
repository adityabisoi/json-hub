import express, { Application, NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import path from "path";

require("dotenv").config();

const app: Application = express();
app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const addressRoute = require("./api/routes/address");   //import address route
const animalRoute = require("./api/routes/animals");    //import animal route
const homeRoute = require("./api/routes/home");
const usersRoute = require("./api/routes/users");
const testRoute = require("./api/routes/usertest");
const taskRoute = require("./api/routes/tasks"); //include tasks route
const commentRoute = require("./api/routes/comments");//importing the comments endpoint file
const photoRoute = require("./api/routes/photos");
const foodPhotoRoute = require("./api/routes/foodphotos"); //include foodphotos route
const vehicleRoute = require("./api/routes/vehicles"); //include vehicles route
const songRoute = require("./api/routes/songs"); //include songs route
const bookRoute = require("./api/routes/books"); //include books route
const showsRoute = require("./api/routes/shows"); //include shows route
const productRoute = require("./api/routes/products"); //include products route

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
};
// Connect to database
let url;
if (process.env.USE_DOCKER == `true`) {
    url = `mongodb://${process.env.MONGO_NON_ROOT_USERNAME}:${process.env.MONGO_NON_ROOT_PASSWORD}@mongodb:27017/${process.env.MONGO_INITDB_DATABASE}`;
} else {
    url = `${process.env.DB_CONNECTION_URL}`;
}

console.log(url);

mongoose.connect(url, options).then(() => {
    console.log("Connected");
});

app.use(morgan("dev"));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    }),
);

// Add CORS
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});

// Routes to handle requests
app.use("/", homeRoute);
app.use("/users", usersRoute);
app.use("/usertest", testRoute);
app.use("/tasks", taskRoute); // Added task route
app.use("/comments", commentRoute);//Routing the app to use the comments endpoint
app.use("/photos/food", foodPhotoRoute); //Added foodphoto route
app.use("/photos", photoRoute);
app.use("/vehicles", vehicleRoute); //Added vehicles route
app.use("/songs", songRoute);
app.use("/animals", animalRoute);
app.use("/songs", songRoute);
app.use("/shows", showsRoute);
app.use("/animals", animalRoute);   //Added animal route
app.use("/address", addressRoute);   //Added address route
app.use("/books", bookRoute);   //Added books route
app.use("/products", productRoute);   //Added products route


// Handle error
interface ErrorWithStatus extends Error {
    status: number;
}

app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error("Not found") as ErrorWithStatus;
    error.status = 404;
    next(error);
});

app.use((error: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
        },
    });
});

module.exports = app;
