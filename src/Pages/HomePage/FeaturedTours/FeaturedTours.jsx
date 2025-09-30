import React from "react";
import { useTranslation } from "react-i18next";
import s from "./FeaturedTours.module.scss";
import { FaMapMarkerAlt, FaRegStar } from "react-icons/fa";
import images from "../../../assets/getItems";
import { Link } from "react-router-dom";
const tourPackages = [
  {
    id: 1,
    titleKey: "featuredTours.tour1.title",
    durationKey: "featuredTours.tour1.duration",
    image: images.HomeCardShahiZinda,
    locationsKey: "featuredTours.tour1.locations",
    descriptionKey: "featuredTours.tour1.description",
    highlightsKeys: [
      "featuredTours.tour1.highlights.0",
      "featuredTours.tour1.highlights.1",
      "featuredTours.tour1.highlights.2",
      "featuredTours.tour1.highlights.3",
    ],
  },
  {
    id: 2,
    titleKey: "featuredTours.tour2.title",
    durationKey: "featuredTours.tour2.duration",
    image: images.HomeCardGoldenRing,
    locationsKey: "featuredTours.tour2.locations",
    descriptionKey: "featuredTours.tour2.description",
    highlightsKeys: [
      "featuredTours.tour2.highlights.0",
      "featuredTours.tour2.highlights.1",
      "featuredTours.tour2.highlights.2",
      "featuredTours.tour2.highlights.3",
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
            <FaRegStar className={s.starIcon} />{" "}
            {t("featuredTours.highlightsLabel")}
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
          <Link className={s.Link} to={`/tours?highlight=${tour.id}`}>
            <button className={`${s.button} ${s.learnMore}`}>
              {t("featuredTours.learnMore")}
            </button>
          </Link>
          <Link className={s.Link} to={`/contact?package=${encodeURIComponent(t(tour.titleKey))}`}>
            <button className={`${s.button} ${s.requestQuote}`}>
              {t("featuredTours.requestQuote")}
            </button>
          </Link>
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
        <h2 className={s.mainTitle}>{t("featuredTours.heading")}</h2>
        <p className={s.tagline}>{t("featuredTours.tagline")}</p>

        <div className={s.toursGrid}>
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
