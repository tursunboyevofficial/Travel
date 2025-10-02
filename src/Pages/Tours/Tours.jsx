import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import s from './Tours.module.scss';
import DetailedTourPackages from './DetailedTourPackages/DetailedTourPackages';
// ✨ TourModal komponentini import qilish
import TourModal from './TourModal/TourModal'; 

function Tours() {
    const { t } = useTranslation();
    const [selectedTour, setSelectedTour] = useState(null);

    const handleViewDetail = (tour) => {
        // ✨ Tur ob'ektini state ga saqlash
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
            
            {/* ✨ onViewDetail propini uzatish */}
            <DetailedTourPackages onViewDetail={handleViewDetail} /> 

            {selectedTour && (
                // ✨ TourModal komponentini ishlatish
                <TourModal 
                    tour={selectedTour} 
                    t={t} // Agar TourModal t ni prop sifatida kutsa
                    onClose={closeModal} 
                />
            )}
        </>
    );
}

export default Tours;