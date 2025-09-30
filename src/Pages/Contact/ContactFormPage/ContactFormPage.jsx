import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ContactFormPage.module.scss';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { MdOutlineInfo } from 'react-icons/md';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ContactForm = () => {
  
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('contactForm.alert'));
  };

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const preselectedPackage = params.get("package");
    if (!preselectedPackage) return; // agar package param bo'lmasa scroll bo'lmasin

    const formElement = document.querySelector(`.${styles.formContainer}`);
    if (formElement) {
      const yOffset = -100; // tepaga 100px offset
      const y = formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>{t('contactForm.title')}</h2>
      <p className={styles.formSubtitle}>{t('contactForm.subtitle')}</p>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroupRow}>
          <div className={styles.inputField}>
            <label htmlFor="fullName">{t('contactForm.fullName')}</label>
            <input type="text" id="fullName" placeholder={t('contactForm.fullNamePlaceholder')} required />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="email">{t('contactForm.email')}</label>
            <input type="email" id="email" placeholder={t('contactForm.emailPlaceholder')} required />
          </div>
        </div>

        <div className={styles.inputField}>
          <label htmlFor="phone">{t('contactForm.phone')}</label>
          <input type="tel" id="phone" placeholder={t('contactForm.phonePlaceholder')} />
        </div>

        <div className={styles.inputField}>
          <label htmlFor="package">{t('contactForm.package')}</label>
          <div className={styles.customSelect}>
            <select id="package" defaultValue="">
              <option value="" disabled>{t('contactForm.packagePlaceholder')}</option>
              <option value="silk_road">{t('contactForm.packageOptions.silkRoad')}</option>
              <option value="uzb_special">{t('contactForm.packageOptions.uzbekistan')}</option>
              <option value="taylor_made">{t('contactForm.packageOptions.tailorMade')}</option>
            </select>
          </div>
        </div>

        <div className={styles.inputField}>
          <label htmlFor="message">{t('contactForm.message')}</label>
          <textarea
            id="message"
            placeholder={t('contactForm.messagePlaceholder')}
            rows="6"
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.sendButton}>
          <FiSend size={18} />
          <span>{t('contactForm.sendButton')}</span>
        </button>
      </form>

      <div className={styles.infoBox}>
        <MdOutlineInfo size={20} className={styles.infoIcon} />
        <p>{t('contactForm.responseTime')}</p>
      </div>
    </div>
  );
};

const ContactFormPage = () => {
  const { t } = useTranslation();
  const contactCards = [
    {
      icon: FaMapMarkerAlt,
      title: t('contactInfo.office.title'),
      content: (
        <>
          <p className={styles.cardDetailPrimary}>{t('contactInfo.office.address1')}</p>
          <p className={styles.cardDetailPrimary}>{t('contactInfo.office.address2')}</p>
          <p className={styles.cardDetailSecondary}>{t('contactInfo.office.note')}</p>
        </>
      ),
    },
    {
      icon: FaPhone,
      title: t('contactInfo.phone.title'),
      content: (
        <>
          <a href="tel:+998914044459" className={styles.cardLinkPrimary}>+998 91 404 44 59</a>
          <p className={styles.cardDetailSecondary}>{t('contactInfo.phone.main')}</p>
          <a href="tel:+998907155198" className={styles.cardLinkSecondary}>+998 90 715 51 98</a>
          <p className={styles.cardDetailSecondary}>{t('contactInfo.phone.alt')}</p>
        </>
      ),
    },
    {
      icon: FaEnvelope,
      title: t('contactInfo.email.title'),
      content: (
        <>
          <a href="mailto:reservation@samanidtravel.uz" className={styles.cardLinkPrimary}>reservation@samanidtravel.uz</a>
          <p className={styles.cardDetailSecondary}>{t('contactInfo.email.general')}</p>
          <a href="mailto:tour.information@gmail.com" className={styles.cardLinkSecondary}>tour.information@gmail.com</a>
          <p className={styles.cardDetailSecondary}>{t('contactInfo.email.booking')}</p>
        </>
      ),
    },
    {
      icon: FaClock,
      title: t('contactInfo.hours.title'),
      content: (
        <>
          <p className={styles.cardDetailPrimary}>{t('contactInfo.hours.weekdays')}</p>
          <p className={styles.cardDetailPrimary}>{t('contactInfo.hours.saturday')}</p>
          <p className={styles.cardDetailPrimary}>{t('contactInfo.hours.sunday')}</p>
          <p className={styles.cardDetailSecondary}>{t('contactInfo.hours.note')}</p>
        </>
      ),
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentGrid}>
        <div className={styles.contactInfo}>
          <h2 className={styles.infoTitle}>{t('contactInfo.heading')}</h2>

          {contactCards.map((card, index) => (
            <div key={index} className={styles.contactCard}>
              <div className={styles.iconWrapper}>
                <card.icon size={20} className={styles.cardIcon} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardHeading}>{card.title}</h3>
                {card.content}
              </div>
            </div>
          ))}

          <div className={styles.whatsappCard}>
            <div className={styles.iconWrapper}>
              <FaWhatsapp size={20} className={styles.cardIcon} />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardHeading}>WhatsApp</h3>
              <p className={styles.cardDetailSecondary}>{t('contactInfo.whatsapp.note')}</p>
              <a
                href="https://wa.me/998914044459"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                <FaWhatsapp size={16} />
                <span>{t('contactInfo.whatsapp.button')}</span>
              </a>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactFormPage;
