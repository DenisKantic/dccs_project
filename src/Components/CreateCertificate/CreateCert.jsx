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

  const [supplier, setSupplier] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [value, setValue] = useState('');
  const navigate = useNavigate();


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



  const handleSaveCert = () =>{

    const data = {
        supplier: supplier,
        certificateType: value,
        validFrom: startDate.toLocaleDateString("de-DE"), // converts given Date to string in European format dd/mm/yyyy
        validTo: endDate.toLocaleDateString("de-DE")  // converts given Date to string in European format dd/mm/yyyy
        
    }

    const getSupplier = () =>{

    }

    axios
    .post('http://localhost:4000/Certificates', data)
    .then(()=>{
        navigate('/Certificates')
    })
    .catch((error)=>{
        alert("Error, something is wrong. Please check your input field and try again");
    })

  }




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
                            onChange={(e)=> setSupplier(e.target.value)}
                            />
                            <button className='h-full w-[50px] box-border bg-slate-100 border-[1px] cursor-pointer flex justify-center items-center'><BiSearch size={25}/></button>
                            <button className='h-full w-[50px] bg-slate-100 border-[1px] cursor-pointer flex justify-center items-center'><IoClose onClick={()=>setSupplier("")} size={30} /></button>
                        </div>
                    </div>

                    <div className='flex flex-col mt-10'>
                        <label htmlFor="certType">Certificate Type</label>
                        <select className='h-[50px] w-full p-2  border-[1px] border-[#c7c7c7]' onClick={(e)=>setValue(e.target.value)}>
                            <option disabled>Choose your option</option>
                            {options.map((option)=>{
                                return (
                                    <option key={option.id} value={option.value}>{option.type}</option>
                                )
                            })}
                            {console.log(value)}
                        </select>
                    </div>

                    <div className='flex flex-col mt-10 w-full h-[50px]'>
                        <label htmlFor="startDate">Valid from</label>
                        <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />

                    <label htmlFor='endDate' className='mt-10'>Valid to</label>
                            <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                           />

                    <button className='w-[300px] h-[60px] p-2 bg-green-300 mx-auto mt-10' onClick={handleSaveCert}>Create Certification</button>
                    </div>
                 </div>
            </div>


        </main>
    </div>
    
  )
}

export default CreateCert