import React from "react";
import s from "./TourModal.module.scss";
import { FaClock, FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaRegStar, FaTimes } from "react-icons/fa";

export default function TourModal({ tour, t, onClose }) {
  if (!tour) return null;

  return (
    <div className={s.modalOverlay} onClick={onClose}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeBtn} onClick={onClose}>
          <FaTimes className={s.closeIcon} />
        </button>

        <div className={s.modalHeader}>
          <img src={tour.image} alt={t(tour.titleKey)} className={s.modalImage} />
        </div>

        <div className={s.modalBody}>
          <h2 className={s.modalTitle}>{t(tour.titleKey)}</h2>

          {/* Meta Ma'lumotlar */}
          <div className={s.metadata}>
            <div className={s.metaItem}>
              <FaClock className={`${s.metaIcon} ${s.durationIcon}`} />
              <span>{tour.days} {t("detailedTours.days")} / {tour.nights} {t("detailedTours.nights")}</span>
            </div>
            <div className={s.metaItem}>
              <FaUsers className={`${s.metaIcon} ${s.peopleIcon}`} />
              <span>{t(tour.peopleKey)}</span>
            </div>
            <div className={s.metaItem}>
              <FaCalendarAlt className={`${s.metaIcon} ${s.seasonIcon}`} />
              <span>{t(tour.seasonKey)}</span>
            </div>
          </div>
          
          <div className={s.section}>
            <h3 className={s.sectionTitle}>{t("detailedTours.description")}</h3>
            <p className={s.descriptionText}>{t(tour.descriptionKey)}</p>
          </div>

          <div className={s.section}>
            <h3 className={s.sectionTitle}><FaRegStar className={`${s.sectionIcon} ${s.starIcon}`} /> {t("detailedTours.highlightsLabel")}</h3>
            <ul className={s.list}>
              {tour.highlightsKeys.map((key, idx) => (
                <li key={idx}><span className={s.bullet}>•</span> {t(key)}</li>
              ))}
            </ul>
          </div>

          <div className={s.section}>
            <h3 className={s.sectionTitle}><FaMapMarkerAlt className={`${s.sectionIcon} ${s.locationIcon}`} /> {t("detailedTours.destinations")}</h3>
            <div className={s.locationTags}>
              {tour.locationsKeys.map((key, idx) => (
                <span key={idx} className={s.locationTag}>{t(key)}</span>
              ))}
            </div>
          </div>
        </div>

        <div className={s.modalFooter}>
          <button className={s.actionButton} onClick={onClose}>
            {t("detailedTours.close")}
          </button>
        </div>
      </div>
    </div>
  );
}