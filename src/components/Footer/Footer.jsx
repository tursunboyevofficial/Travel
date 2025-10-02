import React from "react";
import { useTranslation } from "react-i18next";
import s from "./Footer.module.scss";
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  const footerDestinations = [
    { titleKey: "footer.destinations.samarkand", hashLink: "#tour-1" },
    { titleKey: "footer.destinations.bukhara", hashLink: "#tour-2" },
    { titleKey: "footer.destinations.khiva", hashLink: "#tour-2" },
    { titleKey: "footer.destinations.tashkent", hashLink: "#tour-2" },
    { titleKey: "footer.destinations.fergana", hashLink: "#tour-3" },
];
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
            {footerDestinations.map((dest, index) => (
            <li key={index}>
                {/* Tur paketlar sahifasiga borish va o'sha yerdagi elementga scroll qilish */}
                
                <NavLink to={`/tours${dest.hashLink}`} className={({ isActive }) => (isActive ? s.active : "")}>
                {t(dest.titleKey)} 
                    </NavLink>
            </li>
        ))}
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
