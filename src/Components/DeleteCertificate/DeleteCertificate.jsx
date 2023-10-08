import React, {useState} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../../locales/en/translation.json";
import translationBHS from "../../locales/bhs/translation.json";import Spinner from '../Spinner/Spinner';
;

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

const DeleteCertificate = () => {

    const { id } = useParams();
    const { t } = useTranslation()
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const deleteCertificate = ()=>{

      setLoading(true);
        axios
        .delete(`http://localhost:4000/Certificates/${id}`)
        .then(()=>{
            console.log("certificate deleted")
            navigate('/Certificates');
            setLoading(false)
            
        }) 
        .catch((error)=>{
          setLoading(false)
            alert("Error happened. Please contact IT support")
            console.log(error);
        })
    }

  return (
    <div className='h-screen w-full flex justify-center items-center flex-col'>
      {loading ? <Spinner /> : ''}
        <h1 className='text-xl'>{t("delete_msg")}</h1>
       
        <div className='flex justify-center w-[50%] mt-10'>
        <button className='w-[200px] h-[50px] bg-[#3f9ac9] text-xl text-white  cursor-pointer' onClick={deleteCertificate}>{t("yes")}</button>
        <Link to='/Certificates'><button className='w-[200px] h-[50px] bg-red-400 text-xl text-white cursor-pointer ml-10'>{t("cancel")}</button></Link>
        </div>
    </div>
  )
}

export default DeleteCertificate