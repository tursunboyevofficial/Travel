import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './FeaturedTours.module.scss';
import { FaMapMarkerAlt, FaRegStar } from 'react-icons/fa';

const tourPackages = [
  {
    id: 1,
    titleKey: 'featuredTours.tour1.title',
    durationKey: 'featuredTours.tour1.duration',
    image: 'URL_TO_REGISTAN_IMAGE',
    locationsKey: 'featuredTours.tour1.locations',
    descriptionKey: 'featuredTours.tour1.description',
    highlightsKeys: [
      'featuredTours.tour1.highlights.0',
      'featuredTours.tour1.highlights.1',
      'featuredTours.tour1.highlights.2',
      'featuredTours.tour1.highlights.3'
    ]
  },
  {
    id: 2,
    titleKey: 'featuredTours.tour2.title',
    durationKey: 'featuredTours.tour2.duration',
    image: 'URL_TO_SHAKH_I_ZINDA_IMAGE',
    locationsKey: 'featuredTours.tour2.locations',
    descriptionKey: 'featuredTours.tour2.description',
    highlightsKeys: [
      'featuredTours.tour2.highlights.0',
      'featuredTours.tour2.highlights.1',
      'featuredTours.tour2.highlights.2',
      'featuredTours.tour2.highlights.3'
    ]
  }
];

const TourCard = ({ tour }) => {
  const { t } = useTranslation();

  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <div
          className={s.image}
          style={{ backgroundImage: `url(${tour.image})` }}
          aria-label={`Featured image for ${t(tour.titleKey)}`}
        />
        <span className={s.durationTag}>{t(tour.durationKey)}</span>
      </div>

      <div className={s.content}>
        <h3 className={s.cardTitle}>{t(tour.titleKey)}</h3>

        <div className={s.locations}>
          <FaMapMarkerAlt className={s.locationIcon} />
          <span>{t(tour.locationsKey)}</span>
        </div>

        <p className={s.description}>{t(tour.descriptionKey)}</p>

        <div className={s.highlightsSection}>
          <p className={s.highlightsTitle}>
            <FaRegStar className={s.starIcon} /> {t('featuredTours.highlightsLabel')}
          </p>
          <ul className={s.highlightsList}>
            {tour.highlightsKeys.map((key, index) => (
              <li key={index}>
                <span className={s.bulletPoint}></span>
                {t(key)}
              </li>
            ))}
          </ul>
        </div>

        <div className={s.actions}>
          <button className={`${s.button} ${s.learnMore}`}>{t('featuredTours.learnMore')}</button>
          <button className={`${s.button} ${s.requestQuote}`}>{t('featuredTours.requestQuote')}</button>
        </div>
      </div>
    </div>
  );
};

export default function FeaturedTours({ tours = tourPackages }) {
  const { t } = useTranslation();

  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.mainTitle}>{t('featuredTours.heading')}</h2>
        <p className={s.tagline}>{t('featuredTours.tagline')}</p>

        <div className={s.toursGrid}>
          {tours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
