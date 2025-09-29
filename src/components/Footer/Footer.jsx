import React from "react";
import { useTranslation } from "react-i18next";
import s from "./Footer.module.scss";
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.columns}>

          {/* Left Column */}
          <div className={s.column}>
            <h3 className={`${s.logo} ${s.logo1}`}>Samanid<span>Travel</span></h3>
            <p>{t("footer.description")}</p>
            <p><FaMapMarkerAlt /> {t("footer.address")}</p>
            <p><FaPhone /> {t("footer.phone")}</p>
            <p><FaEnvelope /> {t("footer.email1")}</p>
            <p><FaEnvelope /> {t("footer.email2")}</p>
            <p><FaClock /> {t("footer.hours")}</p>
          </div>

          {/* Quick Links */}
          <div className={s.column}>
            <h4>{t("footer.quickLinks.title")}</h4>
            <ul>
              <li><a href="/">{t("footer.quickLinks.home")}</a></li>
              <li><a href="/tours">{t("footer.quickLinks.tours")}</a></li>
              <li><a href="/about">{t("footer.quickLinks.about")}</a></li>
              <li><a href="/contact">{t("footer.quickLinks.contact")}</a></li>
            </ul>
          </div>

          {/* Destinations */}
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

          {/* Social Icons */}
          <div className={s.column}>
            <h4>{t("footer.followUs.title")}</h4>
            <div className={s.social}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram /> {t("footer.followUs.instagram")}
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook /> {t("footer.followUs.facebook")}
              </a>
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
