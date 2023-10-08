import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
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
        <h1 className='text-xl'>Are you sure you want to delete the certificate? </h1>
       
        <div className='flex justify-center w-[50%] mt-10'>
        <button className='w-[200px] h-[50px] bg-[#3f9ac9] text-xl text-white  cursor-pointer' onClick={deleteCertificate}>Yes</button>
        <Link to='/Certificates'><button className='w-[200px] h-[50px] bg-red-400 text-xl text-white cursor-pointer ml-10'>Cancel</button></Link>
        </div>
    </div>
  )
}

export default DeleteCertificate