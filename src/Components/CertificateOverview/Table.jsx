import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' 
import {RiSettings5Fill} from 'react-icons/ri' // react icon
import Dropdown from 'react-bootstrap/Dropdown'; // dropdown component from bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // dropdown css bootstrap
import axios from 'axios'; // for fetching data from database
import { useTranslation } from "react-i18next"; // for language switch (english or bosnian)
import i18n from "i18next"; // for language switch (english or bosnian)
import { initReactI18next } from "react-i18next"; // for language switch (english or bosnian)
import translationEN from "../../locales/en/translation.json"; // for language switch (english or bosnian)
import translationBHS from "../../locales/bhs/translation.json"; // for language switch (english or bosnian)
import Spinner from '../Spinner/Spinner'; // spinner which spinns before getting data from database

const resources = { // from official docs resources for language Switch
  en: {
    translation: translationEN,
  },
  bhs: {
    translation: translationBHS,
  }
}

i18n.use(initReactI18next).init({ // from official docs resources for language Switch
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
     /* from official docs resources for language Switch
    whenever you see in this component for example {t("someText")}, that is for 
    language switch, if you click for example bosnian, it will show that words in bosnian language */
    const [cert,setCert] = useState([]) // for storing data from .get request and for displaying it 
    const [loading,setLoading] = useState(false) // for displaying Spinner component 

    useEffect(()=>{
      setLoading(true); // displaying Spinner 
      axios
      .get('http://localhost:4000/Certificates') // getting all certificates
      .then((res)=>{
        setCert(res.data.data); // putting all data from get method into setCert, for displaying data later
        console.log(res.data.data)
        setLoading(false) // shutting down Spinner
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
        {loading ? <Spinner /> : ''} {/* if loading is true, then display Spinner, if not do not display anything */}

        <table className='w-full text-left'> {/*table headers */}
          <thead>
            <tr className='h-[50px] border-solid border-2 border-[#d1d1d1]'> 
            <th className='w-[60px] p-2 border-2 border-solid border-[#d1d1d1]'></th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>{t("supplier")}</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>{t("certificate_type")}</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>{t("valid_from")}</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>{t("valid_to")}</th>
            </tr>
            </thead>

          <tbody>  {/* printing data and inserting in <td></td> element from certs useState, which I previously fetched data in get response
          and put it in setCerts() */}
            {cert.map((certs)=>(
            <tr className='border-2 border-solid border-[#d1d1d1] h-[50px]' key={certs._id}>
                <td className='w-[60px] flex justify-center items-center h-[50px]'>
                     <Dropdown> {/*START of Bootstrap dropdown */}
                  <Dropdown.Toggle as={CustomToggle}>
                      <RiSettings5Fill size={25} className='text-[#4086b6] cursor-pointer'/> {/* react icon for dropdown Edit and Delete*/}
                  </Dropdown.Toggle>
                  <Dropdown.Menu> {/*Dropdown menu containing Edit and Delete */}
                  <Dropdown.Item>
                    <Link to={`/Certificates/EditCertificate/${certs._id}`}>{t("edit")}</Link>
                  {/*Edit button which redirect to /EditCertificate component to edit data from table*/}
                    </Dropdown.Item> 
                    <Dropdown.Item>
                      <Link to={`/Certificates/Delete/${certs._id}`}>{t("delete")}</Link>
                      {/*Delete button for deleting data from database and from table */}
                      </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> {/*END of Bootstrap dropdown */}
                </td>

                {/*Other data from database */}
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