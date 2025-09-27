import React from 'react';
import styles from './NumbersSection.module.scss';
import { useTranslation } from 'react-i18next';
import { FaUsers, FaMapMarkerAlt, FaAward, FaGlobe } from 'react-icons/fa';

const NumbersSection = () => {
  const { t } = useTranslation();

  const statistics = [
    {
      icon: FaUsers,
      number: '500+',
      label: t('numbers.travelers'),
      color: '#D4E2FF',
      iconColor: '#2563EB',
    },
    {
      icon: FaMapMarkerAlt,
      number: '50+',
      label: t('numbers.packages'),
      color: '#D4E2FF',
      iconColor: '#2563EB',
    },
    {
      icon: FaAward,
      number: '10+',
      label: t('numbers.experience'),
      color: '#D4E2FF',
      iconColor: '#2563EB',
    },
    {
      icon: FaGlobe,
      number: '15+',
      label: t('numbers.destinations'),
      color: '#D4E2FF',
      iconColor: '#2563EB',
    },
  ];

  return (
    <section className={styles.numbersSectionContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t('numbers.title')}</h2>
        <p className={styles.subtitle}>{t('numbers.subtitle')}</p>
      </div>

      <div className={styles.statsGrid}>
        {statistics.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.iconWrapper} style={{ backgroundColor: stat.color }}>
              <stat.icon
                size={36}
                color={stat.iconColor}
                className={styles.icon}
              />
            </div>
            <p className={styles.number}>{stat.number}</p>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NumbersSection;
