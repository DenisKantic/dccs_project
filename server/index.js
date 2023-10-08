import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';
import CertRoutes from './routes/CertRoutes.js'
const PORT = 4000; // if your port 4000 is busy, you can change it to whatever you want


const app = express();
dotenv.config() // for .env encrypting password for MongoDB database
app.use(express.json()) // for handling json files
app.use(cors()) // cors 

app.use('/Certificates', CertRoutes) // custom middleware

app.get('/', (req,res)=>{
    res.send("node testing")
})


mongoose // connecting to database 
.connect(`mongodb+srv://root:${process.env.mongoPass}@certificate-app.qnrswpu.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log("App is connected to database")
    app.listen(PORT, ()=>{
        console.log("App is listening on port", PORT)
    })
})
.catch((error)=>{
    console.log(error);
})