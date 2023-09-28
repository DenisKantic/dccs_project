import React from 'react'
import Header from '../Header/Header'

const CreateCert = () => {
  return (
    <div className='flex flex-2'>
        <Header />
        <main  className='h-screen w-full p-10'>
            <div className='mt-10 flex flex-col justify-center items-center'>
                <h1>Create Certification</h1>

                <form action="#" className='w-[60%]'>
                    <div className='flex flex-col'>
                        <label htmlFor="">Supplier</label>
                        <input type="text" className='h-[50px] w-full bg-red-400 p-2' placeholder='Type here'/>
                    </div>

                    <div className='flex flex-col mt-10'>
                        <label htmlFor="">Certificate Type</label>
                        <select name="#" id="" className='h-[50px] w-full bg-red-400 p-2' placeholder >
                            <option disabled >Select your option</option>
                            <option value="#">CCC certificate</option>
                            <option value="#">Permission of Printing</option>
                            <option value="#">OHSAS 18001</option>
                        </select>
                    </div>

                    <div className='flex flex-col mt-10'>
                        <label htmlFor="#">Valid from</label>
                        <input type="date" placeholder='Click to select date' />
                    </div>
                </form>
            </div>
        </main>
    </div>
    
  )
}

export default CreateCert