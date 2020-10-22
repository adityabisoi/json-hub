import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()

const port: number = 3000

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        msg:'Hello'
    })
})


// Run the server
app.listen(port, () => console.log(`Server running on ${port}`))