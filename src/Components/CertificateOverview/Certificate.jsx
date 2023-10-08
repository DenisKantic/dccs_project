import React from 'react'
import Header from '../Header/Header'
import Table from './Table'
import { useTranslation } from "react-i18next"; // for language switch (english or bosnian)
import i18n from "i18next"; // for language switch (english or bosnian)
import { initReactI18next } from "react-i18next"; // for language switch (english or bosnian)
import translationEN from "../../locales/en/translation.json"; // for language switch (english or bosnian)
import translationBHS from "../../locales/bhs/translation.json"; // for language switch (english or bosnian)

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

const Certificate = () => {

  const { t } = useTranslation(); 
   /* from official docs resources for language Switch
    whenever you see in this component for example {t("someText")}, that is for 
    language switch, if you click for example bosnian, it will show that words in bosnian language */

  return (
    <div className='flex flex-2'>
        <Header /> 
        <main className='h-screen w-full p-10'>
            <div className='mt-10 h-full flex flex-col items-center'>
            <h1 className='pt-10 text-4xl'>{t("certificate_overview")}</h1> 
            {/* {t("certificate_overview")} is a function for calling
            parameter from .json file for language switch. You can find this .json file under /src/locales/en for english 
            or bhs for bosnian /..json
            */}
            <Table />
            </div>
        </main>

    </div>
  )
}

export default Certificate