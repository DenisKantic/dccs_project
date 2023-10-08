import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Header from '../Header/Header'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {BsArrowLeftSquareFill} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi';
import {IoClose} from 'react-icons/io5';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const EditCertificate = () => { 


    const [supplier, setSupplier] = useState('');
    const [validFrom, setValidFrom] = useState(new Date());
    const [validTo, setValidTo] = useState(new Date());
    const [certificateType, setCertificateType] = useState('');
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(()=>{
        axios
        .get(`http://localhost:4000/Certificates/${id}`)
        .then((res)=>{
          setSupplier(res.data.supplier)
          setCertificateType(res.data.certificateType)
          setValidFrom(res.data.validFrom)
          setValidTo(res.data.validTo)
          console.log("Option",res.data.validTo)
        })
        .catch((error)=>{
          console.log(error);
        })
      },[])

      const handleEditCertificate = () =>{
        
        const data = {
            supplier,
            certificateType,
            validFrom,
            validTo
        }

        axios
        .put(`http://localhost:4000/Certificates/${id}`, data)
        .then(()=>{
            console.log("edited successfuly")
            navigate('/Certificates')
        })
        .catch((error)=>{
            alert("Error occured. Please contact IT support")
            console.log(error);
            console.log("this data is sent",data)
        })
      }

      const options = [
        {
            id: 1,
            type: "CCC Certificate",
            value: 'CCC Certificate'
        }, 
        {
            id: 2,
            type: "Permission of Printing",
            value: "Permission of Printing"
        },
        {
            id: 3,
            type: "OHSAS 18001",
            value: "OHSAS 18001"
        }
      ];
    
    
  return (
    <div className='flex flex-2'>
        <Header />
        <main  className='h-screen w-full p-10'>
        <Link to='/Certificates'>
        <BsArrowLeftSquareFill  
        title='Go Back'
        className='mt-10 text-[#3f9ac9] cursor-pointer' 
        size={35}
        />
        </Link>

            <div className='mt-10 flex flex-col justify-center items-center'>
                <h1>Create Certification</h1>

                
                <div className='w-[60%] pt-10'>

                <div className='w-full mb-4'>
                        <label>Supplier</label>
                        <div className='flex items-center h-[50px]'>
                            <input 
                            type="text" 
                            className='w-full h-full border-[1px]' 
                            value={supplier}
                            onChange={(e)=> setSupplier(e.target.value)}
                            />
                            <button className='h-full w-[50px] box-border bg-slate-100 border-[1px] cursor-pointer flex justify-center items-center'><BiSearch size={25}/></button>
                            <button className='h-full w-[50px] bg-slate-100 border-[1px] cursor-pointer flex justify-center items-center'><IoClose onClick={()=>setSupplier("")} size={30} /></button>
                        </div>
                    </div>

                    <div className='flex flex-col mt-10'>
                        <label htmlFor="certType">Certificate Type</label>
                        <select className='h-[50px] w-full p-2  border-[1px] border-[#c7c7c7]' onClick={(e)=>setCertificateType(e.target.value)}>
                            <option disabled>Choose your type</option>
                            {options.map((option)=>{
                                return (
                                    <option key={option.id} value={option.value}>{option.value}</option>
                                )
                            })}
                            {console.log()}
                        </select>
                    </div>

                  
                    <button className='w-[300px] h-[60px] p-2 bg-green-300 mx-auto mt-10' onClick={handleEditCertificate}>Edit Certification</button>
                    </div>
                 </div>


        </main>
    </div>
  )
}

export default EditCertificate