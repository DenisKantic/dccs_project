import React from 'react'
import Header from '../Header/Header'
import Table from './Table'
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../../locales/en/translation.json";
import translationBHS from "../../locales/bhs/translation.json";

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

const Certificate = () => {

  const { t } = useTranslation();

  return (
    <div className='flex flex-2'>
        <Header />
        <main className='h-screen w-full p-10'>
            <div className='mt-10 h-full flex flex-col items-center'>
            <h1 className='pt-10 text-4xl'>{t("certificate_overview")}</h1>
            <Table />
            </div>
        </main>

    </div>
  )
}

export default Certificate