import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const DeleteCertificate = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const deleteCertificate = ()=>{

        axios
        .delete(`http://localhost:4000/Certificates/${id}`)
        .then(()=>{
            console.log("certificate deleted")
            navigate('/Certificates');
            
        }) 
        .catch((error)=>{
            alert("Error happened. Please contact IT support")
            console.log(error);
        })
    }

  return (
    <div className='h-screen w-full flex justify-center items-center flex-col'>
        <h1>Are you sure you want to delete? </h1>
        <button className='w-[200px] h-[50px] bg-red-400 cursor-pointer' onClick={deleteCertificate}>Yes</button>
    </div>
  )
}

export default DeleteCertificate