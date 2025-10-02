import React from "react";
import { useTranslation } from "react-i18next";
import s from "./AdventureBanner.module.scss";
import bannerImg from "../../../assets/Banner/HomeFooterBanner.png";
import images from "../../../assets/getItems"

export default function AdventureBanner() {
  const { t, i18n } = useTranslation();
  console.log("Current language:", i18n.language);

  return (
    <section
      className={s.banner}
      style={{ backgroundImage: `url(${images.HomeBannerFooter})` }}
    >
      <div className={s.overlay}>
        <div className={s.content}>
          <h2>{t("adventureBanner.title")}</h2>
          <p>{t("adventureBanner.description")}</p>
          <div className={s.actions}>
            <button className={s.primary}>{t("adventureBanner.buttonPrimary")}</button>
            <a
              href="https://wa.me/998914004459"
              target="_blank"
              rel="noopener noreferrer"
              className={s.whatsapp}
            >
              {t("adventureBanner.buttonWhatsapp")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
