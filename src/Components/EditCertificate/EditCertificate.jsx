import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Header from '../Header/Header'
import DatePicker from 'react-datepicker'; // date picker for selecting date 
import "react-datepicker/dist/react-datepicker.css"; //bootstrap css dropdown
import {BiSearch} from 'react-icons/bi'; // react icons
import {IoClose} from 'react-icons/io5'; // react icons 
import axios from 'axios' // for getting data from database 
import { useNavigate } from 'react-router-dom'; // for redirecting to another component after put method is done
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

const EditCertificate = () => { 

    const { t } = useTranslation(); 
     /* from official docs resources for language Switch
    whenever you see in this component for example {t("someText")}, that is for 
    language switch, if you click for example bosnian, it will show that words in bosnian language */
    const [loading,setLoading] = useState(false); // spinner 
    const [supplier, setSupplier] = useState(''); 
    const [validFrom, setValidFrom] = useState(new Date()); // getting validFrom date from database
    const [validTo, setValidTo] = useState(new Date()); // getting validTo date from database
    const [startDate, setStartDate] = useState(new Date()); // new Date for Date component
    const [endDate, setEndDate] = useState(new Date()); // new Date for Date component
    const [certificateType, setCertificateType] = useState(''); 
    const navigate = useNavigate(); // for redirecting to another component after put method is done


    const { id } = useParams(); 

    useEffect(()=>{ //getting specific certificate by ID and setting data in useState for displaying it
      setLoading(true)
        axios
        .get(`http://localhost:4000/Certificates/${id}`)
        .then((res)=>{
          setSupplier(res.data.supplier)
          setCertificateType(res.data.certificateType)
          setValidFrom(res.data.validFrom)
          setValidTo(res.data.validTo)
          setLoading(false)
        })
        .catch((error)=>{
          setLoading(false)
          console.log(error);
        })
      },[])

      const handleEditCertificate = () =>{ // submiting new values into database

        const data = {
            supplier,
            certificateType,
            validFrom: startDate.toLocaleDateString("de-DE"),
            validTo: endDate.toLocaleDateString("de-DE")
        }

        setLoading(true)
        axios
        .put(`http://localhost:4000/Certificates/${id}`, data)
        .then(()=>{
            setLoading(false)
            console.log("edited successfuly")
            navigate('/Certificates')
        })
        .catch((error)=>{
          setLoading(false)
            alert("Error occured. Please contact IT support")
            console.log(error);
        })
      }

      const options = [ // options for <select></select> tag 
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

            <div className='mt-10 flex flex-col justify-center items-center'>
                <h1 className='text-4xl'>{t("edit_certificate")}</h1>

                {loading ? <Spinner /> : ' '}
                <div className='w-[60%] pt-10'>

                <div className='w-full mb-4'>
                        <label>{t("supplier")}</label>
                        <div className='flex items-center h-[50px]'>
                            <input 
                            type="text" 
                            className='w-full h-full border-[1px] p-2' 
                            value={supplier}
                            onChange={(e)=> setSupplier(e.target.value)}
                            />
                            <button className='h-full w-[50px] box-border bg-slate-100 border-[1px] cursor-pointer flex justify-center items-center'><BiSearch size={25}/></button>
                            <button className='h-full w-[50px] bg-slate-100 border-[1px] cursor-pointer flex justify-center items-center'><IoClose onClick={()=>setSupplier("")} size={30} /></button>
                        </div>
                    </div>

                    <div className='flex flex-col mt-10'>
                        <label htmlFor="certType">{t("certificate_type")}</label>
                        <select className='h-[50px] w-full p-2  border-[1px] border-[#c7c7c7]' onClick={(e)=>setCertificateType(e.target.value)}>
                            <option disabled>{(`${t("previous_option")} ${certificateType}`)}
                            {/* displaying previously selected option, because I don't know how to set it directly 
                            in select to display already picked option */}
                            </option> 
                            {options.map((option)=>{
                                return (
                                    <option key={option.id} value={option.value}>{option.value}</option>
                                )
                            })}
                            {console.log()}
                        </select>
                    </div>
                    
                    <div className='flex flex-col mt-10 w-full h-[50px]'>
                        <label htmlFor="startDate">{t("valid_from")} 
                        <br />
                        {(`${t("previous_selected")} ${validFrom}`)}
                        {/*displaying previously selected date because I had problems in Date component with setting up
                        startDate as already selected Date. I did this as temporary fix */}
                        </label>
                        <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        className='w-full border-[1px] h-[50px] p-2'
                    />

                    <label htmlFor='endDate' className='mt-10'>{t("valid_to")} 
                        <br />
                        {(`${t("previous_selected")} ${validTo}`)}
                         {/*displaying previously selected date because I had problems in Date component with setting up
                        startDate as already selected Date. I did this as temporary fix */}
                    </label>
                            <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            className='w-full border-[1px] h-[50px] p-2'
                           />
                           <div className='mx-auto'>

                      <button className='w-[300px] h-[60px] p-2 bg-[#3f9ac9] text-xl text-white mx-auto mt-10' onClick={handleEditCertificate}>{t("edit_certificate")}</button>
                      <Link to='/Certificates'><button className='w-[300px] h-[60px] p-2 bg-red-400 text-xl text-white mx-auto mt-10'>{t("cancel")}</button></Link>
                      </div>
                           </div>
                  
                    </div>
                 </div>


        </main>
    </div>
  )
}

export default EditCertificate