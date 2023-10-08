import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  const { t } = useTranslation();

  return (
    <select value={i18n.language} onChange={handleLanguageChange}>
      <option value="en">{t("en")}</option>
      <option value="bhs">{t("bhs")}</option>
    </select>
  );
};

export default LanguageSwitcher;