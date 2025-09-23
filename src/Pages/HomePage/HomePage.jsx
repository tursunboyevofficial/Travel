import React from "react";
import s from "./HomePage.module.scss";
import images from "../../assets/getItems"; // obyekt sifatida keladi

export default function HomePage() {
  return (
    <div className={s.home}>
      {/* Hero Section */}
      <section
        className={s.hero}
        style={{ backgroundImage: `url(${images.HomeBanner})` }}
      >
        <div className={s.overlay}></div>
        <div className={s.content}>
          <h1>TravelUz bilan dunyoni kashf eting</h1>
          <p>
            Qiziqarli sayohatlar, arzon chipta va eng yaxshi xizmatlarni biz
            orqali toping.
          </p>
          <button className={s.btn}>Boshlash</button>
        </div>
      </section>

      {/* Services Section */}
      <section className={s.services}>
        <h2>Xizmatlarimiz</h2>
        <div className={s.cards}>
          <div className={s.card}>
            <img src="/images/plane.png" alt="Samolyot" />
            <h3>Aviabiletlar</h3>
            <p>Eng qulay narxlarda aviabiletlar bron qiling.</p>
          </div>
          <div className={s.card}>
            <img src="/images/hotel.png" alt="Mehmonxona" />
            <h3>Mehmonxonalar</h3>
            <p>Dunyo bo‘ylab arzon va qulay mehmonxonalar.</p>
          </div>
          <div className={s.card}>
            <img src="/images/tour.png" alt="Tour" />
            <h3>Turlar</h3>
            <p>Qiziqarli turlar bilan dam olishni yanada maroqli qiling.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={s.cta}>
        <h2>Sayohatingizni bugun boshlang!</h2>
        <button className={s.btnLight}>Hoziroq buyurtma qiling</button>
      </section>
    </div>
  );
}
