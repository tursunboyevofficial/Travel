import React, { useState } from 'react';
import s from './DetailedTourPackages.module.scss';
import { FaClock, FaUsers, FaCalendarAlt, FaRegStar, FaPlus } from 'react-icons/fa';

const tourPackages = [
    {
      id: 1,
      image: "https://i.ibb.co/L8v7f23/registan.jpg",
      titleKey: "detailedTours.1.title",
      durationTagKey: "detailedTours.1.durationTag",
      seasonTagKey: "detailedTours.1.seasonTag",
      days: 7,
      nights: 6,
      peopleKey: "detailedTours.1.people",
      seasonKey: "detailedTours.1.season",
      descriptionKey: "detailedTours.1.description",
      locationsKeys: [
        "detailedTours.1.locations.0",
        "detailedTours.1.locations.1",
        "detailedTours.1.locations.2"
      ],
      highlightsKeys: [
        "detailedTours.1.highlights.0",
        "detailedTours.1.highlights.1",
        "detailedTours.1.highlights.2",
        "detailedTours.1.highlights.3",
        "detailedTours.1.highlights.4"
      ]
    },
    {
      id: 2,
      image: "https://i.ibb.co/3k5fH8h/khiva.jpg",
      titleKey: "detailedTours.2.title",
      durationTagKey: "detailedTours.2.durationTag",
      seasonTagKey: "detailedTours.2.seasonTag",
      days: 10,
      nights: 9,
      peopleKey: "detailedTours.2.people",
      seasonKey: "detailedTours.2.season",
      descriptionKey: "detailedTours.2.description",
      locationsKeys: [
        "detailedTours.2.locations.0",
        "detailedTours.2.locations.1",
        "detailedTours.2.locations.2",
        "detailedTours.2.locations.3"
      ],
      highlightsKeys: [
        "detailedTours.2.highlights.0",
        "detailedTours.2.highlights.1",
        "detailedTours.2.highlights.2",
        "detailedTours.2.highlights.3",
        "detailedTours.2.highlights.4"
      ]
    }
  ];
  
  import { useTranslation } from 'react-i18next';

  const TourCard = ({ tour }) => {
    const { t } = useTranslation();
    const initialHighlights = tour.highlightsKeys.slice(0, 3);
    const hiddenHighlights = tour.highlightsKeys.slice(3);
    const [showAllHighlights, setShowAllHighlights] = useState(false);
  
    return (
      <div className={s.card}>
        <div className={s.imageWrapper}>
          <div className={s.image} style={{ backgroundImage: `url(${tour.image})` }}>
            <span className={s.durationTag}>{t(tour.durationTagKey)}</span>
            <span className={s.seasonTag}>{t(tour.seasonTagKey)}</span>
            <div className={s.overlay}>
              <button className={s.viewDetailsBtn}>{t('detailedTours.viewDetails')}</button>
            </div>
          </div>
        </div>
  
        <div className={s.content}>
          <h3 className={s.cardTitle}>{t(tour.titleKey)}</h3>
  
          <div className={s.metadata}>
            <div className={s.metaItem}><FaClock className={s.metaIcon} /> <span>{tour.days} Days / {tour.nights} Nights</span></div>
            <div className={s.metaItem}><FaUsers className={s.metaIcon} /> <span>{t(tour.peopleKey)}</span></div>
            <div className={s.metaItem}><FaCalendarAlt className={s.metaIcon} /> <span>{t(tour.seasonKey)}</span></div>
          </div>
  
          <div className={s.destinations}>
            <p className={s.navTitle}>{t('detailedTours.destinations')}</p>
            <div className={s.destinationTags}>
              {tour.locationsKeys.map((key, index) => (
                <button key={index} className={s.destinationTag}>{t(key)}</button>
              ))}
            </div>
          </div>
  
          <p className={s.description}>{t(tour.descriptionKey)}</p>
  
          <div className={s.highlightsSection}>
            <p className={s.highlightsTitle}><FaRegStar className={s.starIcon} /> {t('detailedTours.highlightsLabel')}</p>
            <ul className={s.highlightsList}>
              {initialHighlights.map((key, index) => (
                <li key={index} className={s.highlightItem}>{t(key)}</li>
              ))}
              {showAllHighlights && hiddenHighlights.map((key, index) => (
                <li key={index + 3} className={s.highlightItem}>{t(key)}</li>
              ))}
            </ul>
            {hiddenHighlights.length > 0 && (
              <button className={s.moreHighlightsBtn} onClick={() => setShowAllHighlights(v => !v)}>
                <FaPlus className={s.moreIcon} style={{ transform: showAllHighlights ? 'rotate(45deg)' : 'none' }} />
                {showAllHighlights ? t('detailedTours.viewLess') : `+ ${hiddenHighlights.length} ${t('detailedTours.moreHighlights')}`}
              </button>
            )}
          </div>
  
          <div className={s.actions}>
            <button className={`${s.button} ${s.requestQuote}`}>{t('detailedTours.requestQuote')}</button>
            <button className={`${s.button} ${s.moreDetails}`}>{t('detailedTours.moreDetails')}</button>
          </div>
        </div>
      </div>
    );
  };
  

// Asosiy Komponent - Ma'lumotlarni qabul qiladi
export default function DetailedTourPackages({ tours = tourPackages }) {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.toursGrid}>
                    {/* Obyektdagi ma'lumotlar shu yerda dinamik render qilinadi */}
                    {tours.map(tour => (
                        <TourCard key={tour.id} tour={tour} />
                    ))}
                </div>
            </div>
        </section>
    );
}