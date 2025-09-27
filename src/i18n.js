// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Serverdan JSON fayllarni yuklash uchun
  .use(initReactI18next) // React komponentlari bilan bog'lash
  .init({
    // Qo'llab-quvvatlanadigan tillar
    supportedLngs: ['en', 'ru', 'zh', 'de', 'es'],
    // Boshlang'ich til (qaysi tilda ishga tushsin)
    lng: 'en', 
    // Zaxira til (agar tarjima topilmasa)
    fallbackLng: 'en', 
    
    // Tarjima fayllarining yo'li
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', 
    },

    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;