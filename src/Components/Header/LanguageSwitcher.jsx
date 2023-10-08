import React from "react";
import { useTranslation } from "react-i18next"; // for language switch (english or bosnian)

const LanguageSwitcher = () => { // from official docs resources for language Switch
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => { // from official docs resources for language Switch 
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  const { t } = useTranslation(); // from official docs resources for language Switch

  return (
    <select value={i18n.language} onChange={handleLanguageChange}>
      <option value="en">{t("en")}</option>
      <option value="bhs">{t("bhs")}</option>
    </select>
  );
};

export default LanguageSwitcher;