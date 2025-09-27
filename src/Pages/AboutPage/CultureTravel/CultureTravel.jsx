import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './CultureTravel.module.scss';

const IMAGE_URL = 'https://picsum.photos/seed/bukhara/600/400';

const CultureTravel = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.cultureTravelContainer}>
      <div className={styles.cultureTravelContentWrapper}>
        <div className={styles.contentLayout}>
          <div className={styles.titleGroup}>
            <h1 className={styles.title}>{t('culture.title')}</h1>
            <div className={styles.textSection}>
              <p className={styles.paragraph}>{t('culture.paragraph1')}</p>
              <p className={styles.paragraph}>{t('culture.paragraph2')}</p>
              <p className={styles.paragraph}>{t('culture.paragraph3')}</p>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageCard}>
              <img
                src={IMAGE_URL}
                alt={t('culture.imageAlt')}
                className={styles.travelImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureTravel;
