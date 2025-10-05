import React from "react";
import { useTranslation } from "react-i18next";
import s from "./HomePage.module.scss";
import images from "../../assets/getItems";
import WhyChoose from "./WhyChoose/WhyChoose";
import AdventureBanner from "./AdventureBanner/AdventureBanner";
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection";
import FeaturedTours from "./FeaturedTours/FeaturedTours";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={s.home}>
        {/* Hero Section */}
        <section
          className={s.hero}
          style={{ backgroundImage: `url(${images.HomeBanner1})` }}
        >
          <div className={s.overlay}></div>
          <div className={s.content}>
            <h1>{t("home.hero.title")}</h1>
            <p>{t("home.hero.subtitle")}</p>
            <NavLink
            to="/contact"
          >
            <button className={s.btn}>{t("home.hero.button")}</button>
          </NavLink>
          </div>
        </section>
      </div>

      <FeaturedTours />
      <TestimonialsSection />
      <WhyChoose />
      <AdventureBanner />
    </>
  );
}
