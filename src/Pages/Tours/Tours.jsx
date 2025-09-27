import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './Tours.module.scss';
import DetailedTourPackages from './DetailedTourPackages/DetailedTourPackages';

function Tours() {
  const { t } = useTranslation();

  return (
    <>
      <div className={s.heroSection}>
        <div className={s.contentBox}>
          <h1 className={s.title}>{t('tours.title')}</h1>
          <p className={s.tagline}>{t('tours.tagline')}</p>
        </div>
      </div>
      <DetailedTourPackages />
    </>
  );
}

export default Tours;
