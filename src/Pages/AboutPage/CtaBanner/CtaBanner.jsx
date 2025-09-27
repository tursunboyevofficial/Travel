import React from 'react';
import styles from './CtaBanner.module.scss';
import { useTranslation } from 'react-i18next';

const CtaBanner = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.ctaSection}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h2 className={styles.title}>{t('cta.title')}</h2>
        <p className={styles.subtitle}>{t('cta.description')}</p>

        <div className={styles.buttonGroup}>
          <a href="tel:+998914044459" className={styles.callButtonPrimary}>
            {t('cta.call1')} +998 91 404 44 59
          </a>
          <a href="tel:+998907155198" className={styles.callButtonSecondary}>
            {t('cta.call2')} +998 90 715 51 98
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
