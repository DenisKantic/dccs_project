import mongoose from 'mongoose';

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