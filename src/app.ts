import express, { Application, Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
const app: Application = express()

const usersRoute = require('./api/routes/users')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

// Routes to handle requests
app.use('/users', usersRoute)

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
