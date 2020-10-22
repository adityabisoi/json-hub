import express, { Application, Request, Response, NextFunction } from 'express'
const router=express.Router()

router.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).json({
        msg:'Users GET'
    })
})

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        msg: 'Users POST'
    })
})

module.exports=router