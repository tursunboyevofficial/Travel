import React from "react";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.columns}>
          <div className={s.column}>
            <h3 className={`${s.logo} ${s.logo1}`}>Samanid<span>Travel</span></h3>
            <p>
              Markaziy Osiyoda mohirlik bilan tuzilgan sayohatlar. Ipak yo‘li
              shaharlari, jumladan, qadimiy Samarqand me’morchiligi va Buxoro
              ko‘chalari.
            </p>
            <p>📍 Mustakillik 54/1, Buxoro, Uzbekistan</p>
            <p>📞 +998 91 400 44 59 / +998 90 715 51 98</p>
            <p>✉️ beenur@samanidtravel.com</p>
            <p>✉️ anwaratsaxon1@gmail.com</p>
            <p>🕘 Dushanba - Juma: 9:00 - 18:00</p>
          </div>

          <div className={s.column}>
            <h4>Tezkor havolalar</h4>
            <ul>
              <li><a href="/">Bosh sahifa</a></li>
              <li><a href="/tours">Turlar</a></li>
              <li><a href="/about">Biz haqimizda</a></li>
              <li><a href="/contact">Aloqa</a></li>
            </ul>
          </div>

          <div className={s.column}>
            <h4>Yo‘nalishlar</h4>
            <ul>
              <li>Samarkand</li>
              <li>Bukhara</li>
              <li>Khiva</li>
              <li>Tashkent</li>
              <li>Fergana Valley</li>
            </ul>
          </div>

          <div className={s.column}>
            <h4>Bizni kuzating</h4>
            <div className={s.social}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">📷 Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">📘 Facebook</a>
            </div>
          </div>
        </div>

        <div className={s.copy}>
          © 2024 SamanidTravel. All rights reserved. Discover the wonders of Central Asia
        </div>
      </div>
    </footer>
  );
}
