import express from 'express';
import { CertModel } from '../model/CertModel.js'

/*In this file, http request methods are defined.
POST, GET, PUT, DELETE

-----------POST Method 
is defined for creating new Certificate and pushing it into database 

-----------GET Method 
for fetching all certificates from database 

-----------GET/:id (Get one certificate by ID)
for fetching one certificate by ID for editing/deleting certificate

-----------PUT (Editing certificate and updating it's data in database)
for updating existing certificate (editing)

-----------DELETE/:id (Deleting)
for deleting existing certificate find by it's ID from database 
*/

const router = express.Router();

router.post('/', async (req,res)=>{ // method for creating certificate
    try{
        if( // if one of parameters are false, send user a message to notify that he needs to sent all required fields 
            !req.body.supplier || 
            !req.body.certificateType ||
            !req.body.validFrom || 
            !req.body.validTo
        ) { 
            return res.status(400).send({ 
                message: "please send all required fields"
            })
        }

        // if all fields are true, than if statement will be skipped and continue down below to create certificate

        const newCert = {
            supplier: req.body.supplier,
            certificateType: req.body.certificateType,
            validFrom: req.body.validFrom,
            validTo: req.body.validTo
        }

        const cert = await CertModel.create(newCert); // creating certificate
        return res.send(cert);
    } 
    catch(error){
        console.log(error)
    }
})

router.get('/', async (req,res)=>{ // method for getting all certificates from database
    try{

        const certificate = await CertModel.find({});

        return res.status(200).json({ // return in json file, in object called "data"
            data: certificate
        })
    } catch(error){
        console.log(error)
    }
})

router.delete('/:id', async (req,res)=>{ // delete method with :id params, so it can target specificaly one certificate
    try{
        const { id } = req.params;

        const result = await CertModel.findByIdAndDelete(id); // findByIdAndDelete is mongoose built in function 

        if(!result){
            return res.status(404).json({message: 'Certificate not found'})
        }

        return res.status(200).send({message: 'Certificate deleted successfulyy'})
    } catch (error){
        console.log(error.message)

    }
})

router.put('/:id', async (req,res)=>{ // put method for editing and submiting new changes for one certificate
    try{
        if(
            !req.body.supplier || 
            !req.body.certificateType ||
            !req.body.validFrom || 
            !req.body.validTo
        ) {
            return res.status(400).send({
                message: 'Send all required fields'
            })
        }

        const { id } = req.params;

        const result = await CertModel.findByIdAndUpdate(id, req.body) // findByIdAndUpdate is mongoose built in function for updating 

        if(!result){
            return res.status(404).json({message: 'Certificate not found'})
        }

        return  res.sendStatus(200),console.log("success")

    } catch (error){
        console.log(error)
        res.status(500).send({message: error.message})
    }
})

router.get('/:id', async (req,res)=>{ // get method for getting specificaly one certificate by ID 
    try{
        const {id} = req.params;

        const certificate = await CertModel.findById(id); // findById is mongoose built in function

        return res.status(200).json(certificate);
    } catch(error) {
        console.log(error);
    }
} )

export default router;