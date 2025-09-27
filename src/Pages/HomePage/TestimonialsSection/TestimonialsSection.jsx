import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './TestimonialsSection.module.scss';
import { FaStar } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    quoteKey: 'testimonials.1.quote',
    authorKey: 'testimonials.1.author',
    countryKey: 'testimonials.1.country',
    tourKey: 'testimonials.1.tour',
    tourLink: '#'
  },
  {
    id: 2,
    rating: 5,
    quoteKey: 'testimonials.2.quote',
    authorKey: 'testimonials.2.author',
    countryKey: 'testimonials.2.country',
    tourKey: 'testimonials.2.tour',
    tourLink: '#'
  },
  {
    id: 3,
    rating: 5,
    quoteKey: 'testimonials.3.quote',
    authorKey: 'testimonials.3.author',
    countryKey: 'testimonials.3.country',
    tourKey: 'testimonials.3.tour',
    tourLink: '#'
  }
];

const StarRating = ({ rating }) => (
  <div className={s.rating}>
    {[...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={s.star}
        style={{ color: i < rating ? '#ffc107' : '#e4e5e9' }}
      />
    ))}
  </div>
);

const TestimonialCard = ({ data }) => {
  const { t } = useTranslation();
  const { rating, quoteKey, authorKey, countryKey, tourKey, tourLink } = data;

  return (
    <div className={s.card}>
      <StarRating rating={rating} />
      <p className={s.quote}>"{t(quoteKey)}"</p>

      <div className={s.authorInfo}>
        <p className={s.authorName}>{t(authorKey)}</p>
        <p className={s.authorCountry}>{t(countryKey)}</p>
        <a href={tourLink} className={s.tourLink}>{t(tourKey)}</a>
      </div>
    </div>
  );
};

export default function TestimonialsSection({ testimonials = testimonialsData }) {
  const { t } = useTranslation();

  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.title}>{t('testimonials.heading')}</h2>
        <p className={s.subtitle}>{t('testimonials.subtitle')}</p>

        <div className={s.cardsGrid}>
          {testimonials.map(item => (
            <TestimonialCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
