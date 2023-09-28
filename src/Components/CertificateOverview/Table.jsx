import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {RiSettings5Fill} from 'react-icons/ri'

const Table = () => {

    const [menu,setMenu] = useState(false);

    
  return (
    <div className='w-full mt-10'>
        <Link to="/CreateCertification">
        <button className='w-[180px] h-[40px] mb-5 bg-[#c2cc38] text-white'>New certificate</button>
        </Link>

        <table className='w-full text-left'>
            <tr className='h-[50px] border-solid border-2 border-[#d1d1d1]'>
            <th className='w-[5%] p-2 border-2 border-solid border-[#d1d1d1]'></th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Supplier</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Certificate Type</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Valid from</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Valid to</th>
            </tr>

            <tr className='border-2 border-solid border-[#d1d1d1] h-[50px]'>
                <td className='w-[5%]'>
                    <RiSettings5Fill 
                    className='mx-auto cursor-pointer text-[#3a88ba]' 
                    size={25}
                    onClick={()=>setMenu(!menu)}
                    />
                    <div className={ menu ? 'h-[60px] w-[100px] absolute bg-[#f9f9f9] outline-none p-2 shadow-xl' : 'hidden' }>
                        <p className='hover:font-bold hover:text-[#3a88ba] cursor-pointer'>Edit</p>
                        <p className='hover:font-bold hover:text-[#3a88ba] cursor-pointer'>Delete</p>
                    </div>
                </td>
                <td className='w-[25%] p-2'>Example 1</td>
                <td className='w-[25%] p-2'>Example 2</td>
                <td className='w-[25%] p-2'>1.1.2023</td>
                <td className='w-[25%] p-2'>12.3.2023</td>
            </tr>

            
        </table>

        <Outlet></Outlet>
    </div>
  )
}

export default Table