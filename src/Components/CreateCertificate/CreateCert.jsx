import React, {useState} from 'react'
import Header from '../Header/Header'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CreateCert = () => {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);



  return (
    <div className='flex flex-2'>
        <Header />
        <main  className='h-screen w-full p-10'>
            <div className='mt-10 flex flex-col justify-center items-center'>
                <h1>Create Certification</h1>

                <form action="#" className='w-[60%]'>
                    <div className='flex flex-col'>
                        <label htmlFor="">Supplier</label>
                        <input type="text" className='h-[50px] w-full p-2 border-2 border-[#c7c7c7]' placeholder='Type here'/>
                    </div>

                    <div className='flex flex-col mt-10'>
                        <label htmlFor="">Certificate Type</label>
                        <select name="#" id="" className='h-[50px] w-full p-2 border-2 border-[#c7c7c7]' placeholder >
                            <option disabled >Select your option</option>
                            <option value="#">CCC certificate</option>
                            <option value="#">Permission of Printing</option>
                            <option value="#">OHSAS 18001</option>
                        </select>
                    </div>

                    <div className='flex flex-col mt-10 w-full h-[50px]'>
                        <label htmlFor="#">Valid from</label>
                            <DatePicker className='w-full h-[50px] p-2 border-2 border-[#c7c7c7]'
                            onChange={(date) => setStartDate(date)}
                            selected={startDate}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            placeholderText='Click to select date'
                            />

                        <label htmlFor="" className='mt-10'>Valid to</label>
                            <DatePicker
                            className='h-[50px] w-full p-2 border-2 border-[#c7c7c7]'
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            selected={endDate}
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            placeholderText='Click to select date'
                           />
                    </div>
                </form>
            </div>
        </main>
    </div>
    
  )
}

export default CreateCert