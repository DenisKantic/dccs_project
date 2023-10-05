import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {RiSettings5Fill} from 'react-icons/ri'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = () => {

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href="/"
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
        </a>
      ));
    
    
  return (
    <div className='w-full mt-10'>
        <Link to="/Certificate/CreateCertification">
        <button className='w-[180px] h-[40px] mb-5 bg-[#c2cc38] text-white'>New certificate</button>
        </Link>

        <table className='w-full text-left'>
            <tr className='h-[50px] border-solid border-2 border-[#d1d1d1]'>
            <th className='w-[60px] p-2 border-2 border-solid border-[#d1d1d1]'></th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Supplier</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Certificate Type</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Valid from</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Valid to</th>
            </tr>

            <tr className='border-2 border-solid border-[#d1d1d1] h-[50px]'>
                <td className='w-[60px] flex justify-center items-center h-[50px]'>
                     <Dropdown>
                  <Dropdown.Toggle as={CustomToggle}>
                      <RiSettings5Fill size={25} className='text-[#4086b6]'/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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