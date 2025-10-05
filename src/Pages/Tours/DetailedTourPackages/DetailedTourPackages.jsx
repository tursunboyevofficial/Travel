import React, { useState } from "react";
import s from "./DetailedTourPackages.module.scss";
import {
  FaClock,
  FaUsers,
  FaCalendarAlt,
  FaRegStar,
  FaPlus,
} from "react-icons/fa";
import {tourPackages} from "../../../data"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TourModal from "../TourModal/TourModal";
// TourCard komponenti

const TourCard = ({ tour, onOpenModal }) => {
  const { t } = useTranslation();
  const initialHighlights = tour.highlightsKeys.slice(0, 3);
  const hiddenHighlights = tour.highlightsKeys.slice(3);
  const [showAllHighlights, setShowAllHighlights] = useState(false);

  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <div
          className={s.image}
          style={{ backgroundImage: `url(${tour.image})` }}
        >
          <span className={s.durationTag}>{t(tour.durationTagKey)}</span>
          <span className={s.seasonTag}>{t(tour.seasonTagKey)}</span>
          <div className={s.overlay}>
            <button
              className={s.viewDetailsBtn}
              onClick={() => onOpenModal(tour)}
            >
              {t("detailedTours.viewDetails")}
            </button>
          </div>
        </div>
      </div>

      <div className={s.content}>
        <h3 className={s.cardTitle}>{t(tour.titleKey)}</h3>

        <div className={s.metadata}>
          <div className={s.metaItem}>
            <FaClock className={s.metaIcon} />{" "}
            <span>
              {tour.days} Days / {tour.nights} Nights
            </span>
          </div>
          <div className={s.metaItem}>
            <FaUsers className={s.metaIcon} /> <span>{t(tour.peopleKey)}</span>
          </div>
          <div className={s.metaItem}>
            <FaCalendarAlt className={s.metaIcon} />{" "}
            <span>{t(tour.seasonKey)}</span>
          </div>
        </div>

        <div className={s.destinations}>
          <p className={s.navTitle}>{t("detailedTours.destinations")}</p>
          <div className={s.destinationTags}>
            {tour.locationsKeys.map((key, index) => (
              <button key={index} className={s.destinationTag}>
                {t(key)}
              </button>
            ))}
          </div>
        </div>

        <p className={s.description}>{t(tour.descriptionKey)}</p>

        <div className={s.highlightsSection}>
          <p className={s.highlightsTitle}>
            <FaRegStar className={s.starIcon} />{" "}
            {t("detailedTours.highlightsLabel")}
          </p>
          <ul className={s.highlightsList}>
            {initialHighlights.map((key, index) => (
              <li key={index} className={s.highlightItem}>
                {t(key)}
              </li>
            ))}
            {showAllHighlights &&
              hiddenHighlights.map((key, index) => (
                <li key={index + 3} className={s.highlightItem}>
                  {t(key)}
                </li>
              ))}
          </ul>
          {hiddenHighlights.length > 0 && (
            <button
              className={s.moreHighlightsBtn}
              onClick={() => setShowAllHighlights((v) => !v)}
            >
              <FaPlus
                className={s.moreIcon}
                style={{
                  transform: showAllHighlights ? "rotate(45deg)" : "none",
                }}
              />
              {showAllHighlights
                ? t("detailedTours.viewLess")
                : `+ ${hiddenHighlights.length} ${t(
                    "detailedTours.moreHighlights"
                  )}`}
            </button>
          )}
        </div>

        <div className={s.actions}>
          <Link
            className={s.Link}
            to={`/contact?package=${encodeURIComponent(t(tour.titleKey))}`}
          >
            <button className={`${s.button} ${s.requestQuote}`}>
              {t("detailedTours.requestQuote")}
            </button>
          </Link>

          <button
            className={`${s.button} ${s.moreDetails}`}
            onClick={() => onOpenModal(tour)}
          >
            {t("detailedTours.moreDetails")}
          </button>
        </div>
      </div>
    </div>
  );
};

// Asosiy komponent
export default function DetailedTourPackages({ tours = tourPackages ,onViewDetail }) {
  const location = useLocation();
  const { t } = useTranslation();
  const [selectedTour, setSelectedTour] = useState(null);

  const openModal = (tour) => setSelectedTour(tour);
  const closeModal = () => setSelectedTour(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
        const element = document.querySelector(hash);
        if (element) {
            const yOffset = -100;
            const y =
                element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }
}, [location]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.toursGrid}>
          {tours.map((tour) => (
            <div id={`tour-${tour.id}`} key={tour.id}>
            <TourCard tour={tour} onOpenModal={onViewDetail} /> 
            </div>
          ))}
        </div>
      </div>

      {selectedTour && (
        <TourModal tour={selectedTour} t={t} onClose={closeModal} />
      )}
    </section>
  );
}
