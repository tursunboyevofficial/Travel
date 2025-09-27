import React from 'react';
import styles from './CoreValues.module.scss';
import { useTranslation } from 'react-i18next';
import { FiHeart, FiUser, FiAward, FiGlobe } from 'react-icons/fi';

const CoreValues = () => {
  const { t } = useTranslation();

  const valuesData = [
    {
      icon: FiHeart,
      title: t('coreValues.heritage.title'),
      text: t('coreValues.heritage.text'),
    },
    {
      icon: FiUser,
      title: t('coreValues.service.title'),
      text: t('coreValues.service.text'),
    },
    {
      icon: FiAward,
      title: t('coreValues.expertise.title'),
      text: t('coreValues.expertise.text'),
    },
    {
      icon: FiGlobe,
      title: t('coreValues.sustainability.title'),
      text: t('coreValues.sustainability.text'),
    },
  ];

  return (
    <section className={styles.coreValuesSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t('coreValues.heading')}</h2>
        <p className={styles.subtitle}>{t('coreValues.subheading')}</p>
      </div>

      <div className={styles.gridContainer}>
        {valuesData.map((item, index) => (
          <div key={index} className={styles.valueCard}>
            <div className={styles.iconContainer}>
              <item.icon size={20} className={styles.icon} />
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
