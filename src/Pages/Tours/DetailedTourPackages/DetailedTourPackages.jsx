import React, { useState } from "react";
import s from "./DetailedTourPackages.module.scss";
import {
  FaClock,
  FaUsers,
  FaCalendarAlt,
  FaRegStar,
  FaPlus,
} from "react-icons/fa";
import images from "../../../assets/getItems";

const tourPackages = [
  {
    id: 1,
    image: images.HomeCardShahiZinda,
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
      "detailedTours.1.locations.2",
    ],
    highlightsKeys: [
      "detailedTours.1.highlights.0",
      "detailedTours.1.highlights.1",
      "detailedTours.1.highlights.2",
      "detailedTours.1.highlights.3",
      "detailedTours.1.highlights.4",
    ],
  },
  {
    id: 2,
    image: images.HomeCardGoldenRing,
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
      "detailedTours.2.locations.3",
    ],
    highlightsKeys: [
      "detailedTours.2.highlights.0",
      "detailedTours.2.highlights.1",
      "detailedTours.2.highlights.2",
      "detailedTours.2.highlights.3",
      "detailedTours.2.highlights.4",
    ],
  },
  {
    id: 3,
    image: images.FerganaTour, // qo‘shimcha rasm qo‘shaman xoxlasangiz
    titleKey: "detailedTours.3.title",
    durationTagKey: "detailedTours.3.durationTag",
    seasonTagKey: "detailedTours.3.seasonTag",
    days: 5,
    nights: 4,
    peopleKey: "detailedTours.3.people",
    seasonKey: "detailedTours.3.season",
    descriptionKey: "detailedTours.3.description",
    locationsKeys: [
      "detailedTours.3.locations.0",
      "detailedTours.3.locations.1",
      "detailedTours.3.locations.2",
    ],
    highlightsKeys: [
      "detailedTours.3.highlights.0",
      "detailedTours.3.highlights.1",
      "detailedTours.3.highlights.2",
    ],
  },
  {
    id: 4,
    image: images.AralTour,
    titleKey: "detailedTours.4.title",
    durationTagKey: "detailedTours.4.durationTag",
    seasonTagKey: "detailedTours.4.seasonTag",
    days: 4,
    nights: 3,
    peopleKey: "detailedTours.4.people",
    seasonKey: "detailedTours.4.season",
    descriptionKey: "detailedTours.4.description",
    locationsKeys: [
      "detailedTours.4.locations.0",
      "detailedTours.4.locations.1",
    ],
    highlightsKeys: [
      "detailedTours.4.highlights.0",
      "detailedTours.4.highlights.1",
      "detailedTours.4.highlights.2",
    ],
  },
  {
    id: 5,
    image: images.TermizTour,
    titleKey: "detailedTours.5.title",
    durationTagKey: "detailedTours.5.durationTag",
    seasonTagKey: "detailedTours.5.seasonTag",
    days: 3,
    nights: 2,
    peopleKey: "detailedTours.5.people",
    seasonKey: "detailedTours.5.season",
    descriptionKey: "detailedTours.5.description",
    locationsKeys: [
      "detailedTours.5.locations.0",
      "detailedTours.5.locations.1",
    ],
    highlightsKeys: [
      "detailedTours.5.highlights.0",
      "detailedTours.5.highlights.1",
    ],
  },
];
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
