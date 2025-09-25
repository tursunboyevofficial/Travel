import React from "react";
import s from "./AdventureBanner.module.scss";
import bannerImg from "../../../assets/Banner/HomeFooterBanner.png"; // rasmni o‘zing joylashtir

export default function AdventureBanner() {
  return (
    <section
      className={s.banner}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className={s.overlay}>
        <div className={s.content}>
          <h2>Ready for Your Central Asia Adventure?</h2>
          <p>
            Let us create an unforgettable journey through the ancient Silk Road.
            Contact our team today to start planning your dream tour to Uzbekistan.
          </p>
          <div className={s.actions}>
            <button className={s.primary}>Get In Touch</button>
            <a
              href="https://wa.me/998914004459"
              target="_blank"
              rel="noopener noreferrer"
              className={s.whatsapp}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
