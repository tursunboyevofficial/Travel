import React from "react";
import s from "./HomePage.module.scss";
import images from "../../assets/getItems"; // obyekt sifatida keladi
import WhyChoose from "./WhyChoose/WhyChoose";
import AdventureBanner from "./AdventureBanner/AdventureBanner";
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection";
import FeaturedTours from "./FeaturedTours/FeaturedTours";

export default function HomePage() {
  return (
    <>
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
      

        {/* Call to Action */}
       
      </div>
      <FeaturedTours/>
      <TestimonialsSection/>
      <WhyChoose />
      <AdventureBanner/>
    </>
  );
}
