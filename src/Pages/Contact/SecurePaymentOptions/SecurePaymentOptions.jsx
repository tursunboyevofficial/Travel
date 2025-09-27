import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './SecurePaymentOptions.module.scss';
import {
  FaMapMarkerAlt, FaCheckCircle, FaShieldAlt, FaClock,
  FaDollarSign, FaEuroSign, FaGlobe, FaCreditCard,
  FaCheck, FaInfoCircle, FaAward, FaRegCreditCard,
  FaRegCheckCircle, FaRegClock, FaPaypal
} from 'react-icons/fa';

const SecurePaymentOptions = () => {
  const { t } = useTranslation();
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const howItWorks = [
    { step: 1, icon: FaMapMarkerAlt, title: t('payment.howItWorks.step1.title'), description: t('payment.howItWorks.step1.desc') },
    { step: 2, icon: FaRegCheckCircle, title: t('payment.howItWorks.step2.title'), description: t('payment.howItWorks.step2.desc') },
    { step: 3, icon: FaAward, title: t('payment.howItWorks.step3.title'), description: t('payment.howItWorks.step3.desc') },
    { step: 4, icon: FaRegClock, title: t('payment.howItWorks.step4.title'), description: t('payment.howItWorks.step4.desc') },
  ];

  const currencies = [
    { code: 'USD', name: t('payment.currencies.usd'), icon: FaDollarSign, isPopular: true },
    { code: 'EUR', name: t('payment.currencies.eur'), icon: FaEuroSign, isPopular: true },
    { code: 'UZS', name: t('payment.currencies.uzs'), icon: FaGlobe, isPopular: false },
  ];

  const paymentMethods = [
    {
      icon: FaRegCreditCard, color: '#3b82f6', title: t('payment.methods.card.title'),
      details: [
        { text: t('payment.methods.card.detail1'), isHeader: true },
        { text: t('payment.methods.card.detail2'), isCheck: true },
        { text: t('payment.methods.card.detail3'), isCheck: true },
        { text: t('payment.methods.card.detail4'), isCheck: true },
      ],
      logos: ['VISA', 'MASTERCARD'],
    },
    {
      icon: FaCheckCircle, color: '#10b981', title: t('payment.methods.bank.title'),
      details: [
        { text: t('payment.methods.bank.detail1'), isHeader: true },
        { text: t('payment.methods.bank.detail2'), isCheck: true },
        { text: t('payment.methods.bank.detail3'), isCheck: true },
        { text: t('payment.methods.bank.detail4'), isCheck: true },
      ],
      logos: [],
    },
    {
      icon: FaPaypal, color: '#3b82f6', title: t('payment.methods.paypal.title'),
      details: [
        { text: t('payment.methods.paypal.detail1'), isHeader: true },
        { text: t('payment.methods.paypal.detail2'), isCheck: true },
        { text: t('payment.methods.paypal.detail3'), isCheck: true },
        { text: t('payment.methods.paypal.detail4'), isCheck: true },
      ],
      logos: ['PAYPAL'],
    },
  ];

  const securityAndTerms = [
    {
      type: 'security', title: t('payment.security.title'), icon: FaShieldAlt, iconColor: '#10b981', bgColor: '#ecfdf5',
      list: [
        t('payment.security.item1'),
        t('payment.security.item2'),
        t('payment.security.item3'),
        t('payment.security.item4'),
      ],
    },
    {
      type: 'terms', title: t('payment.terms.title'), icon: FaRegClock, iconColor: '#3b82f6', bgColor: '#eff6ff',
      list: [
        t('payment.terms.item1'),
        t('payment.terms.item2'),
        t('payment.terms.item3'),
        t('payment.terms.item4'),
      ],
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('payment.header.title')}</h1>
        <p className={styles.subtitle}>{t('payment.header.subtitle')}</p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('payment.howItWorks.title')}</h2>
        <div className={styles.stepsGrid}>
          {howItWorks.map((item) => (
            <div key={item.step} className={styles.stepItem}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>{item.step}</div>
                <div className={styles.stepIconWrapper}>
                  <item.icon size={28} className={styles.stepIcon} />
                </div>
              </div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('payment.currencies.title')}</h2>
        <div className={styles.currencyGrid}>
          {currencies.map((currency) => (
            <div
              key={currency.code}
              className={`${styles.currencyCard} ${currency.code === selectedCurrency ? styles.active : ''}`}
              onClick={() => setSelectedCurrency(currency.code)}
            >
              {currency.isPopular && <span className={styles.popularBadge}>{t('payment.currencies.popular')}</span>}
              <currency.icon size={20} className={styles.currencyIcon} />
              <p className={styles.currencyCode}>{currency.code}</p>
              <p className={styles.currencyName}>{currency.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('payment.methods.title')}</h2>
        <div className={styles.methodsGrid}>
          {paymentMethods.map((method, index) => (
            <div key={index} className={styles.methodCard}>
              <div className={styles.methodHeader}>
                <div className={styles.methodIconWrapper} style={{ color: method.color }}>
                  <method.icon size={22} />
                </div>
                <h3 className={styles.methodTitle}>{method.title}</h3>
              </div>
              <ul className={styles.methodDetailsList}>
                {method.details.map((detail, dIndex) => (
                  <li key={dIndex} className={detail.isHeader ? styles.detailHeader : styles.detailItem}>
                    {detail.isCheck && <FaCheck size={16} className={styles.checkIcon} />}
                    <span>{detail.text}</span>
                  </li>
                ))}
              </ul>
              {method.logos.length > 0 && (
                <div className={styles.logoContainer}>
                  {method.logos.map((logo, lIndex) => (
                    <span key={lIndex} className={`${styles.logo} ${styles[`logo${logo}`]}`}>{logo}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.termsGrid}>
        {securityAndTerms.map((item, index) => (
          <div key={index} className={styles.termsCard} style={{ backgroundColor: item.bgColor }}>
            <div className={styles.termsHeader}>
              <item.icon size={20} style={{ color: item.iconColor }} />
              <h3 className={styles.termsTitle}>{item.title}</h3>
            </div>
            <ul className={styles.termsList}>
              {item.list.map((text, lIndex) => (
                <li key={lIndex} className={styles.termsListItem}>
                  <FaCheck size={16} className={styles.termsCheckIcon} style={{ color: item.iconColor }} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.ctaBanner}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>{t('payment.cta.title')}</h2>
          <p className={styles.ctaSubtitle}>{t('payment.cta.subtitle')}</p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaButtonPrimary}>{t('payment.cta.button1')}</button>
            <button className={styles.ctaButtonSecondary}>{t('payment.cta.button2')}</button>
</div>
          <p className={styles.ctaDisclaimer}>{t('payment.cta.disclaimer')}</p>
        </div>
      </div>
    </div>
  );
};

export default SecurePaymentOptions