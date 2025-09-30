// Tours.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import s from './Tours.module.scss';
import DetailedTourPackages from './DetailedTourPackages/DetailedTourPackages';

function Tours() {
  const { t } = useTranslation();
  const [selectedTour, setSelectedTour] = useState(null);

  const handleViewDetail = (tour) => {
    setSelectedTour(tour);
  };
  const closeModal = () => setSelectedTour(null);

  return (
    <>
      <div className={s.heroSection}>
        <div className={s.contentBox}>
          <h1 className={s.title}>{t('tours.title')}</h1>
          <p className={s.tagline}>{t('tours.tagline')}</p>
        </div>
      </div>

      <DetailedTourPackages onViewDetail={handleViewDetail} />

      {selectedTour && (
        <div className={s.modalOverlay} onClick={closeModal}>
          <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={s.closeBtn} onClick={closeModal}>✕</button>
            <img src={selectedTour.image} alt={selectedTour.title} className={s.modalImage} />
            <h2>{selectedTour.title}</h2>
            <p>{selectedTour.description}</p>
            <p><strong>Duration:</strong> {selectedTour.days} Days / {selectedTour.nights} Nights</p>
            <p><strong>Highlights:</strong></p>
            <ul>
              {selectedTour.highlightsKeys.map((key, idx) => (
                <li key={idx}>{t(key)}</li>
              ))}
            </ul>
            <p><strong>Locations:</strong></p>
            <ul>
              {selectedTour.locationsKeys.map((key, idx) => (
                <li key={idx}>{t(key)}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Tours;
