import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {RiSettings5Fill} from 'react-icons/ri'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../../locales/en/translation.json";
import translationBHS from "../../locales/bhs/translation.json";
import Spinner from '../Spinner/Spinner';

const resources = {
  en: {
    translation: translationEN,
  },
  bhs: {
    translation: translationBHS,
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

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


    const { t } = useTranslation()
    const [cert,setCert] = useState([]) // for storing data from .get request and for displaying it 
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
      setLoading(true);
      axios
      .get('http://localhost:4000/Certificates')
      .then((res)=>{
        setCert(res.data.data);
        console.log(res.data.data)
        setLoading(false)
      })
      .catch((error)=>{
        setLoading(false)
        console.log(error);
      })
    },[])
    
  return (
    <div className='w-full mt-10'>
        <Link to="/Certificates/CreateCertification"> {/*redirect to CreateCertificaton component for creating new Certificate*/}
        <button className='w-[180px] h-[40px] mb-5 bg-[#c2cc38] text-white'>{t("create_certificate")}</button>
        </Link>
        {loading ? <Spinner /> : ''}

        <table className='w-full text-left'>
          <thead>
            <tr className='h-[50px] border-solid border-2 border-[#d1d1d1]'>
            <th className='w-[60px] p-2 border-2 border-solid border-[#d1d1d1]'></th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>{t("supplier")}</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>{t("certificate_type")}</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>{t("valid_from")}</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>{t("valid_to")}</th>
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
                  <Dropdown.Item><Link to={`/Certificates/EditCertificate/${certs._id}`}>{t("edit")}</Link></Dropdown.Item>
                    <Dropdown.Item><Link to={`/Certificates/Delete/${certs._id}`}>{t("delete")}</Link></Dropdown.Item>
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