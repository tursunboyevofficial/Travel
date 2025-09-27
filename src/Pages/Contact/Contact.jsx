import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './Contact.module.scss';
import ContactFormPage from './ContactFormPage/ContactFormPage';
import SecurePaymentOptions from './SecurePaymentOptions/SecurePaymentOptions';
import FaqSection from './FaqSection/FaqSection';

function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <div className={s.heroSection}>
        <div className={s.contentBox}>
          <h1 className={s.title}>{t('contact.hero.title')}</h1>
          <p className={s.tagline}>{t('contact.hero.tagline')}</p>
        </div>
      </div>

      <ContactFormPage />
      <SecurePaymentOptions />
      <FaqSection />
    </>
  );
}

export default Contact;
