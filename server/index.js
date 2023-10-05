import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
const PORT = 3000;


const app = express();
dotenv.config()

app.get('/', (req,res)=>{
    res.send("node testing")
})


mongoose
.connect(`mongodb+srv://root:${process.env.mongoPass}@certificate-app.qnrswpu.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log("App is connected to database")
})
.catch((error)=>{
    console.log(error);
})