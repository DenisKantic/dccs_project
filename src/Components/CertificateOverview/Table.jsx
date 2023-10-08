import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {RiSettings5Fill} from 'react-icons/ri'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Table = () => {

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => ( // Boostrap custom dropdown, function from the official docs
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

    const [cert,setCert] = useState([]) // for storing data from .get request and for displaying it 

    useEffect(()=>{
      axios
      .get('http://localhost:4000/Certificates')
      .then((res)=>{
        setCert(res.data.data);
        console.log(res.data.data)
      })
      .catch((error)=>{
        console.log(error);
      })
    },[])
    
  return (
    <div className='w-full mt-10'>
        <Link to="/Certificates/CreateCertification"> {/*redirect to CreateCertificaton component for creating new Certificate*/}
        <button className='w-[180px] h-[40px] mb-5 bg-[#c2cc38] text-white'>New certificate</button>
        </Link>

        <table className='w-full text-left'>
          <thead>
            <tr className='h-[50px] border-solid border-2 border-[#d1d1d1]'>
            <th className='w-[60px] p-2 border-2 border-solid border-[#d1d1d1]'></th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Supplier</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Certificate Type</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Valid from</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Valid to</th>
            </tr>
            </thead>

          <tbody>
            {cert.map((certs)=>(
            <tr className='border-2 border-solid border-[#d1d1d1] h-[50px]' key={certs._id}>
                <td className='w-[60px] flex justify-center items-center h-[50px]'>
                     <Dropdown> {/*START of Bootstrap dropdown */}
                  <Dropdown.Toggle as={CustomToggle}>
                      <RiSettings5Fill size={25} className='text-[#4086b6]'/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item><Link to={`/Certificates/EditCertificate/${certs._id}`}>Edit</Link></Dropdown.Item>
                    <Dropdown.Item><Link to={`/Certificates/Delete/${certs._id}`}>Delete</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> {/*END of Bootstrap dropdown */}
                </td>
                <td className='w-[25%] p-2'>{certs.supplier}</td>
                <td className='w-[25%] p-2'>{certs.certificateType}</td>
                <td className='w-[25%] p-2'>{certs.validFrom}</td>
                <td className='w-[25%] p-2'>{certs.validTo}</td>
            </tr>
              ))}  
            </tbody>

            
        </table>
    </div>
  )
}

export default Table