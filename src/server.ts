import express, { json, NextFunction, Request, Response } from 'express';
import router from './Routes/Routes';
const app=express()

app.use(json())
app.use('/user',router)

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    res.json(Error)
})
app.listen(5000,()=>{
    console.log('App is running');
    
})