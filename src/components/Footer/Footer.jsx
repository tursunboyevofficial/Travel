import React from "react";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.logo}>Travel<span>Uz</span></div>
        
        <nav className={s.nav}>
          <a href="#about">Biz haqimizda</a>
          <a href="#services">Xizmatlar</a>
          <a href="#contact">Aloqa</a>
        </nav>

        <div className={s.copy}>
          © {new Date().getFullYear()} TravelUz. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}
