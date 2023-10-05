import express from 'express';
import { CertModel } from '../model/CertModel.js'


const router = express.Router();

router.post('/', async (req,res)=>{
    try{
        if(
            !req.body.supplier || 
            !req.body.certificateType ||
            !req.body.validFrom || 
            !req.body.validTo
        ) { 
            return res.status(400).send({
                message: "please send all required fields"
            })
        }

        const newCert = {
            supplier: req.body.supplier,
            certificateType: req.body.certificateType,
            validFrom: req.body.validFrom,
            validTo: req.body.validTo
        }

        const cert = await CertModel.create(newCert);
        return res.send(cert);
    } 
    catch(error){
        console.log(error)
    }
})

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