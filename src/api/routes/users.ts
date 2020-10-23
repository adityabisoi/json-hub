import express, { Application, Request, Response, NextFunction } from 'express'
const router = express.Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        msg: 'Users GET'
    })
})

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    type User = {
        id: number
        first_name: string
        last_name: string
        email: string
    }
    const user: User = { id: req.body.id, first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email }
    res.status(200).json({
        msg: 'Users POST',
        data: user
    })
})

router.get('/:userId', (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.userId

    // Single user valid
    if (id == 'valid') {
        res.status(200).json({
            msg: 'Single user valid'
        })
    }

    // Single user invalid
    else {
        res.status(200).json({
            msg: 'Single user invalid'
        })
    }
})

module.exports = router