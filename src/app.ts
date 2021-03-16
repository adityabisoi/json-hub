import express, { Application, Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
require('dotenv').config()

const app: Application = express()

const homeRoute = require('./api/routes/home')
const usersRoute = require('./api/routes/users')
const testRoute = require('./api/routes/usertest')

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
// Connect to database
const url = `mongodb://${process.env.MONGO_NON_ROOT_USERNAME}:` + `${process.env.MONGO_NON_ROOT_PASSWORD}` + `@` + `mongodb:27017` + `/${process.env.MONGO_INITDB_DATABASE}`

mongoose.connect(url, options)
console.log(url)
console.log("Connected")


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

// Add CORS
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
        return res.status(200).json({})
    }
    next()
})

// Routes to handle requests
app.use('/', homeRoute)
app.use('/users', usersRoute)
app.use('/usertest', testRoute)

// Handle error
interface ErrorWithStatus extends Error {
    status: number
}

app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not found') as ErrorWithStatus
    error.status = 404
    next(error)
})

app.use((error: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    })
})

module.exports = app
