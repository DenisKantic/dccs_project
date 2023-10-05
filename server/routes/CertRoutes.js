import express from 'express';
import { CertModel } from '../model/CertModel.js'


const router = express.Router();

{/*
router.post('/', async (req,res)=>{
    try{
        if(
            !req.body.supplier || 
            !req.body.certificateType ||
            !req.body.validFrom || 
            !req.body.validTo
        )
    }
})

*/}

router.get('/', async (req,res)=>{
    try{

        const certificate = await CertModel.find({});

        return res.status(200).json({
            data: certificate
        })
    } catch(error){
        console.log(error)
    }
})

export default router;