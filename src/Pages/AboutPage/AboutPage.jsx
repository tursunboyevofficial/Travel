import React from "react";
import s from "./AboutPage.module.scss";
import CultureTravel from "./CultureTravel/CultureTravel";
import NumbersSection from "./NumbersSection/NumbersSection";
import MissionVision from "./MissionVision/MissionVision";
import CoreValues from "./CoreValues/CoreValues";
import WhyCentralAsia from "./WhyCentralAsia/WhyCentralAsia";
import CtaBanner from "./CtaBanner/CtaBanner";
import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className={s.heroSection}>
        {/* Rasmdagi fon va overlay bu div ichida bo'ladi */}
        <div className={s.contentBox}>
          <h1 className={s.title}>{t("about.hero.title")}</h1>
          <p className={s.tagline}>{t("about.hero.tagline")}</p>
        </div>
      </div>
      <CultureTravel />
      <NumbersSection />
      <MissionVision />
      <CoreValues />
      <WhyCentralAsia />
      <CtaBanner />
    </>
  );
}

export default AboutPage;
