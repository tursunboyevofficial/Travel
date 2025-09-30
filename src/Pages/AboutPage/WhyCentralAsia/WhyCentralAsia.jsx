import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './WhyCentralAsia.module.scss';
import images from "../../../assets/getItems"
const IMAGE_URL = 'https://picsum.photos/seed/kalyan/450/600';

const WhyCentralAsia = () => {
  const { t } = useTranslation();

  const points = [
    t('whyCentralAsia.point1'),
    t('whyCentralAsia.point2'),
    t('whyCentralAsia.point3'),
    t('whyCentralAsia.point4'),
  ];

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageCard}>
          <img
            src={images.AboutCentralAsia}
            alt={t('whyCentralAsia.imageAlt')}
            className={styles.mainImage}
          />
        </div>

        <div className={styles.textBlock}>
          <h2 className={styles.title}>{t('whyCentralAsia.title')}</h2>
          <p className={styles.description}>{t('whyCentralAsia.description')}</p>

          <ul className={styles.bulletList}>
            {points.map((point, index) => (
              <li key={index} className={styles.listItem}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyCentralAsia;
