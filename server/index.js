import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';
import CertRoutes from './routes/CertRoutes.js'
const PORT = 4000;


const app = express();
dotenv.config()
app.use(express.json())
app.use(cors())

app.use('/Certificates', CertRoutes)

app.get('/', (req,res)=>{
    res.send("node testing")
})


mongoose
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