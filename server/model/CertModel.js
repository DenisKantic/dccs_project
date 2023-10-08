import mongoose from 'mongoose';

/* 
basic Schema for creating certificate
All fields are String and REQUIRED, so user can't create/edit certificate until all fields are true (has value)
*/
const CertificateSchema = mongoose.Schema(
    {
        supplier:{
            type: String,
            required: true
        },
        certificateType:{
            type: String,
            required: true
        },
        validFrom:{
            type: String,
            required: true
        },
        validTo:{
            type: String,
            required: true
        }
    }
)


export const CertModel = mongoose.model('Certificate', CertificateSchema)