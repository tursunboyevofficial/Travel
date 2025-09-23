import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiGlobe, FiInstagram, FiSend } from "react-icons/fi";
import { IoMenu, IoClose } from "react-icons/io5";
import s from "./Header.module.scss";
import logo from "../../assets/Logo/logo.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
      <div className={s.container}>
        {/* Logo */}
        <div className={s.logo}>
          <img src={logo} alt="logo" />
          <div className={s.brand}>
            <span className={s.title}>SamanidTravel</span>
            <span className={s.tagline}>Central Asia Tours</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className={s.nav}>
          <NavLink to="/" className={({ isActive }) => (isActive ? s.active : "")}>Home</NavLink>
          <NavLink to="/tours" className={({ isActive }) => (isActive ? s.active : "")}>Tours</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? s.active : "")}>About Us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? s.active : "")}>Contact</NavLink>
        </nav>

        {/* Right side */}
        <div className={s.right}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FiInstagram />
          </a>
          <a href="https://t.me" target="_blank" rel="noreferrer">
            <FiSend />
          </a>

          <div className={s.lang}>
            <FiGlobe />
            <select>
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="uz">O‘zbekcha</option>
            </select>
          </div>

          {/* Mobile toggle */}
          <button className={s.mobileToggle} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={s.mobileMenu}>
          <NavLink to="/" onClick={() => setMobileOpen(false)}>Home</NavLink>
          <NavLink to="/tours" onClick={() => setMobileOpen(false)}>Tours</NavLink>
          <NavLink to="/about" onClick={() => setMobileOpen(false)}>About Us</NavLink>
          <NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</NavLink>
        </div>
      )}
    </header>
  );
}
