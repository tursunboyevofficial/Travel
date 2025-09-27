// LanguageSelector.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'zh', label: 'ZH' },
    { code: 'de', label: 'DE' },
    { code: 'es', label: 'ES' },
  ];

  const changeLanguage = (lng) => {
    // Bu funksiya tanlangan tilni o'rnatadi va butun saytni qayta render qiladi
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          style={{
            fontWeight: i18n.language === lang.code ? 'bold' : 'normal',
            cursor: 'pointer',
            padding: '5px 10px',
            border: '1px solid #ccc'
          }}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;