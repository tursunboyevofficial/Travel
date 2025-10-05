import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// useTranslation va i18n hooklarini import qilamiz
import { useTranslation } from "react-i18next";
import { FiGlobe, FiInstagram, FiSend } from "react-icons/fi";
import { IoMenu, IoClose } from "react-icons/io5";
import s from "./Header.module.scss";
// import logo from "../../assets/Logo/logo.png";

// Til ma'lumotlari (Siz xohlagan 5 ta til)
const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "zh", label: "中文" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
];

export default function Header() {
  const { t, i18n } = useTranslation(); // <-- i18n va t funksiyalarini olamiz
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tilni almashtirishni boshqaruvchi funksiya
  const handleLangChange = (event) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);
  };

  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
      <div className={s.container}>
        {/* Logo */}
        <div className={s.logo}>
        {/* <img src={logo} alt="logo" /> */}
          <div
            className={s.brand}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className={s.title}>SamanidTravel</span>
            <span className={s.tagline}>{t("header_tagline")}</span>{" "}
            {/* <-- Tarjima */}
          </div>
        </div>

        {/* Desktop Nav - Matnlarni t() bilan almashtiramiz */}
        <nav className={s.nav}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            {t("nav_home")}
          </NavLink>
          <NavLink
            to="/tours"
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            {t("nav_tours")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            {t("nav_about")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            {t("nav_contact")}
          </NavLink>
        </nav>

        {/* Right side */}
        {/* Right side */}
        <div className={s.right}>
          <a
            href="https://www.instagram.com/samanidtravel.uz?igsh=MTh4Yzhwb3pnNnZjeg=="
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>
          <a
            href="https://t.me/samanidtraveluz"
            target="_blank"
            rel="noreferrer"
          >
            <FiSend />
          </a>

          {/* Til tanlash */}
          <div className={s.lang}>
            <FiGlobe />
            <select onChange={handleLangChange} value={i18n.language}>
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          {/* 🔹 Login / Sign Up tugmalari */}
          <div className={s.authBtns}>
            <NavLink to="/login" className={s.loginBtn}>
              {t("nav_login") || "Login"}
            </NavLink>
            <NavLink to="/signup" className={s.signupBtn}>
              {t("nav_signup") || "Sign Up"}
            </NavLink>
          </div>

          {/* Mobile toggle */}
          <button
            className={s.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu - Matnlarni t() bilan almashtiramiz */}
      {mobileOpen && (
        <div className={s.mobileMenu}>
          <NavLink to="/" onClick={() => setMobileOpen(false)}>
            {t("nav_home")}
          </NavLink>
          <NavLink to="/tours" onClick={() => setMobileOpen(false)}>
            {t("nav_tours")}
          </NavLink>
          <NavLink to="/about" onClick={() => setMobileOpen(false)}>
            {t("nav_about")}
          </NavLink>
          <NavLink to="/contact" onClick={() => setMobileOpen(false)}>
            {t("nav_contact")}
          </NavLink>
        </div>
      )}
    </header>
  );
}
