import express from 'express'

const app=express()
const port:number=3000

const greet: string = "Hello World";

app.get('/',(req,res)=>{
    res.send(greet)
})

app.listen(port,()=>console.log(`Server running on ${port}`))