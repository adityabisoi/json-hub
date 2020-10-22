import express, { Application, Request, Response, NextFunction } from 'express'
const app: Application = express()
const usersRoute = require('./api/routes/users')

app.use('/users',usersRoute)

module.exports=app
