// MissionVision.jsx - i18next bilan moslashtirilgan

import React from 'react';
import { useTranslation } from 'react-i18next'; // <-- useTranslation import qilinadi
import styles from './MissionVision.module.scss';
import { FaGlobe, FaBuilding } from 'react-icons/fa'; 

// Ma'lumotlar tuzilmasi endi faqat statik ma'lumotlar (ikonlar, ranglar) va tarjima kalitlarini saqlaydi
const getMissionVisionData = (t) => [
  {
    type: 'Mission',
    // Tarjima kalitini chaqirish
    title: t('mission_vision_title_mission'), 
    icon: FaGlobe,
    // Tarjima kalitini chaqirish
    text: t('mission_vision_text_mission'), 
    bgColor: '#eef8ff', 
    iconColor: '#2563EB', 
  },
  {
    type: 'Vision',
    // Tarjima kalitini chaqirish
    title: t('mission_vision_title_vision'), 
    icon: FaBuilding, 
    // Tarjima kalitini chaqirish
    text: t('mission_vision_text_vision'), 
    bgColor: '#fffbea', 
    iconColor: '#b45309', 
  },
];

const MissionVision = () => {
  // useTranslation hookini ishga tushirish
  const { t } = useTranslation(); 
  
  // Ma'lumotlar tuzilmasini t funksiyasi orqali olish
  const missionVisionData = getMissionVisionData(t);

  return (
    <section className={styles.missionVisionSection}>
      <div className={styles.cardsContainer}>
        {missionVisionData.map((item, index) => (
          <div 
            key={index} 
            className={styles.card} 
            style={{ backgroundColor: item.bgColor }} 
          >
            <div className={styles.cardHeader}>
              <item.icon size={20} color={item.iconColor} className={styles.icon} />
              <h3 className={styles.title}>{item.title}</h3> {/* <-- Tarjima matni */}
            </div>
            <p className={styles.text}>{item.text}</p> {/* <-- Tarjima matni */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;