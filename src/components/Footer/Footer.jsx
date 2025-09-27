import React from "react";
import { useTranslation } from "react-i18next";
import s from "./Footer.module.scss";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.columns}>
          <div className={s.column}>
            <h3 className={`${s.logo} ${s.logo1}`}>Samanid<span>Travel</span></h3>
            <p>{t("footer.description")}</p>
            <p>📍 {t("footer.address")}</p>
            <p>📞 {t("footer.phone")}</p>
            <p>✉️ {t("footer.email1")}</p>
            <p>✉️ {t("footer.email2")}</p>
            <p>🕘 {t("footer.hours")}</p>
          </div>

          <div className={s.column}>
            <h4>{t("footer.quickLinks.title")}</h4>
            <ul>
              <li><a href="/">{t("footer.quickLinks.home")}</a></li>
              <li><a href="/tours">{t("footer.quickLinks.tours")}</a></li>
              <li><a href="/about">{t("footer.quickLinks.about")}</a></li>
              <li><a href="/contact">{t("footer.quickLinks.contact")}</a></li>
            </ul>
          </div>

          <div className={s.column}>
            <h4>{t("footer.destinations.title")}</h4>
            <ul>
              <li>{t("footer.destinations.samarkand")}</li>
              <li>{t("footer.destinations.bukhara")}</li>
              <li>{t("footer.destinations.khiva")}</li>
              <li>{t("footer.destinations.tashkent")}</li>
              <li>{t("footer.destinations.fergana")}</li>
            </ul>
          </div>

          <div className={s.column}>
            <h4>{t("footer.followUs.title")}</h4>
            <div className={s.social}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">📷 {t("footer.followUs.instagram")}</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">📘 {t("footer.followUs.facebook")}</a>
            </div>
          </div>
        </div>

        <div className={s.copy}>
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
