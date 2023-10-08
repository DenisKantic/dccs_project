import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header/Header' // header (navigation) component
import DatePicker from 'react-datepicker'; // date picker component for date 
import "react-datepicker/dist/react-datepicker.css"; // date picker component css
import {BiSearch} from 'react-icons/bi';
import {IoClose} from 'react-icons/io5';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'; // for redirect after post method 
import { useTranslation } from "react-i18next"; // for language switch (english or bosnian)
import i18n from "i18next"; // for language switch (english or bosnian)
import { initReactI18next } from "react-i18next"; // for language switch (english or bosnian)
import translationEN from "../../locales/en/translation.json"; // for language switch (english or bosnian)
import translationBHS from "../../locales/bhs/translation.json"; // for language switch (english or bosnian)
import Spinner from '../Spinner/Spinner'; // spinner component 

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

const CreateCert = () => {

  const [supplier, setSupplier] = useState('');
  const [startDate, setStartDate] = useState(new Date()); // date component for setting up endDate
  const [endDate, setEndDate] = useState(new Date()); //date component for setting up endDate
  const [value, setValue] = useState(''); // input field value 
  const [loading,setLoading] = useState(false) // spinner 
  const navigate = useNavigate();

  const { t } = useTranslation() /* from official docs resources for language Switch
        whenever you see in this component for example {t("someText")}, that is for 
        language switch, if you click for example bosnian, it will show that words in bosnian language */


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



  const handleSaveCert = () =>{ // data with it's arguments which are going to be sent in mongoose Schema 
                                // according to it's already created parameters and creating certificate

    const data = {
        supplier: supplier,
        certificateType: value,
        validFrom: startDate.toLocaleDateString("de-DE"), // converts given Date to string in European format dd/mm/yyyy
        validTo: endDate.toLocaleDateString("de-DE")  // converts given Date to string in European format dd/mm/yyyy
        
    }
    setLoading(true)
    axios
    .post('http://localhost:4000/Certificates', data) // post method for sending created object 
    .then(()=>{
        navigate('/Certificates') // after it's sent, redirect automaticaly to displaying all certificates components
        setLoading(false)
    })
    .catch((error)=>{
      setLoading(false);
        alert("Error, something is wrong. Please check your input field and try again");
    })

  }




  return (
    <div className='flex flex-2'>
        <Header />
        <main  className='h-screen w-full p-10'>

            <div className='mt-10 flex flex-col justify-center items-center'>
                <h1 className='text-4xl'>{t("create_certificate")}</h1>

                {loading ? <Spinner /> : ''}
                <div className='w-[60%] pt-10'>

                <div className='w-full mb-4'>
                        <label>{t("supplier")}</label>
                        <div className='flex items-center h-[50px]'>
                            <input 
                            type="text" 
                            value={supplier}
                            className='w-full h-full border-[1px] p-2' 
                            onChange={(e)=> setSupplier(e.target.value)}
                            />
                            <button className='h-full w-[50px] box-border bg-slate-100 border-[1px] cursor-pointer flex justify-center items-center'><BiSearch size={25}/></button>
                            <button className='h-full w-[50px] bg-slate-100 border-[1px] cursor-pointer flex justify-center items-center'><IoClose onClick={()=>setSupplier("")} size={30} /></button>
                        </div>
                    </div>

                    <div className='flex flex-col mt-10'>
                        <label htmlFor="certType">{t("certificate_type")}</label>
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
                        <label htmlFor="startDate">{t("valid_from")}</label>
                        <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        className='w-full border-[1px] h-[50px] p-2'
                    />

                    <label htmlFor='endDate' className='mt-10'>{t("valid_to")}</label>
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
                    <button className='w-[300px] h-[60px] p-2 bg-[#3f9ac9] text-xl text-white mx-auto mt-10' onClick={handleSaveCert}>{t("create_certificate")}</button>
                    <Link to='/Certificates'><button className='w-[300px] h-[60px] p-2 bg-red-400 text-xl text-white mx-auto mt-10'>{t("cancel")}</button></Link>
                    </div>
                    </div>
                 </div>
            </div>


        </main>
    </div>
    
  )
}

export default CreateCert