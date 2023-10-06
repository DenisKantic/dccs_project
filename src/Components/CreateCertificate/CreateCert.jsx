import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {BsArrowLeftSquareFill} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi';
import {IoClose} from 'react-icons/io5';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateCert = () => {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [supplier, setSupplier] = useState('');
  const [certificateType, setCertificate] = useState('')
  const [validFrom, setValidFrom] = useState('')
  const [validTo, setValidTo] = useState('')
  const navigate = useNavigate();
  
  const handleSaveCert = () =>{


    const data = {
        supplier,
        certificateType,
        validFrom,
        validTo
    }
    axios
    .post('http://localhost:4000/Certificates', data)
    .then(()=>{
        navigate('/')
    })
    .catch((error)=>{
        alert("an error happened.")
    })

  }


  return (
    <div className='flex flex-2'>
        <Header />
        <main  className='h-screen w-full p-10'>
        <Link to='/Certificate'>
        <BsArrowLeftSquareFill  
        title='Go Back'
        className='mt-10 text-[#3f9ac9] cursor-pointer' 
        size={35}
        />
        </Link>

            <div className='mt-10 flex flex-col justify-center items-center'>
                <h1>Create Certification</h1>

                
                <div className='w-[60%] mb-4'>
                        <label>Supplier</label>
                        <div className='flex items-center h-[50px]'>
                            <input 
                            type="text" 
                            className='w-full h-full border-[1px]' 
                            value={supplier}
                            />
                            <span className='h-full w-[50px] box-border bg-slate-100 border-[1px] cursor-pointer flex justify-center items-center'><BiSearch size={25}/></span>
                            <span className='h-full w-[50px] bg-slate-100 border-[1px] cursor-pointer flex justify-center items-center'><IoClose size={30} /></span>
                        </div>
                    </div>

                    <div className='flex flex-col mt-10'>
                        <label htmlFor="certType">Certificate Type</label>
                        <select name="#" id="" className='h-[50px] w-full p-2  border-[1px] border-[#c7c7c7]'>
                            <option disabled >Select your option</option>
                            <option value={certificateType} onChange={(e)=>setCertificate(e.target.value)}>CCC certificate</option>
                            <option value={certificateType} onChange={(e)=>setCertificate(e.target.value)}>Permission of Printing</option>
                            <option value={certificateType} onChange={(e)=>setCertificate(e.target.value)}>OHSAS 18001</option>
                        </select>
                    </div>

                    <div className='flex flex-col mt-10 w-full h-[50px]'>
                        <label htmlFor="startDate">Valid from</label>
                            <DatePicker className='w-full h-[50px] p-2  border-[1px] border-[#c7c7c7]'
                            onChange={(date)=>setValidFrom(date)}
                            selected={validFrom}
                            selectsStart
                            startDate={validFrom}
                            endDate={validTo}
                            placeholderText='Click to select date'
                            /> 

                        <label htmlFor='endDate' className='mt-10'>Valid to</label>
                            <DatePicker
                            className='h-[50px] w-full p-2  border-[1px] border-[#c7c7c7]'
                            onChange={(date) => setValidTo(date)}
                            selectsEnd
                            selected={endDate}
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            placeholderText='Click to select date'
                           />
                    <button className='w-[300px] h-[60px] p-2 bg-green-300 mx-auto mt-10' onClick={handleSaveCert}>Create Certification{console.log(startDate)}</button>
                    </div>
            </div>

        </main>
    </div>
    
  )
}

export default CreateCert