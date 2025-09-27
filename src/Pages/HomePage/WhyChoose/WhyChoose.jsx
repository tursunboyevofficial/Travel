import React from "react";
import { useTranslation } from "react-i18next";
import s from "./WhyChoose.module.scss";
import { FaMapMarkedAlt, FaUsers, FaGlobeAsia } from "react-icons/fa";

export default function WhyChoose() {
  const { t } = useTranslation();

  return (
    <section className={s.why}>
      <div className={s.container}>
        <h2>
          {t("whyChoose.heading")} <span>SamanidTravel</span>
        </h2>
        <p className={s.sub}>{t("whyChoose.subheading")}</p>

        <div className={s.features}>
          <div className={s.feature}>
            <div className={s.icon}><FaUsers /></div>
            <h3>{t("whyChoose.feature1.title")}</h3>
            <p>{t("whyChoose.feature1.text")}</p>
          </div>
          <div className={s.feature}>
            <div className={s.icon}><FaMapMarkedAlt /></div>
            <h3>{t("whyChoose.feature2.title")}</h3>
            <p>{t("whyChoose.feature2.text")}</p>
          </div>
          <div className={s.feature}>
            <div className={s.icon}><FaGlobeAsia /></div>
            <h3>{t("whyChoose.feature3.title")}</h3>
            <p>{t("whyChoose.feature3.text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
