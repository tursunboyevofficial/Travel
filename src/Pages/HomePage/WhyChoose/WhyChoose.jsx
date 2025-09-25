import React from "react";
import s from "./WhyChoose.module.scss";
import { FaMapMarkedAlt, FaUsers, FaGlobeAsia } from "react-icons/fa";

export default function WhyChoose() {
  return (
    <section className={s.why}>
      <div className={s.container}>
        <h2>Nega aynan <span>SamanidTravel</span>?</h2>
        <p className={s.sub}>
          Biz Markaziy Osiyoning go‘zalligi va merosini dunyo sayohatchilariga
          ulashishga ishtiyoq bilan yondashamiz.
        </p>

        <div className={s.features}>
          <div className={s.feature}>
            <div className={s.icon}><FaUsers /></div>
            <h3>Mahalliy ekspert gidlar</h3>
            <p>O‘zbekiston tarixi va madaniyatini chuqur biladigan professional gidlar.</p>
          </div>
          <div className={s.feature}>
            <div className={s.icon}><FaMapMarkedAlt /></div>
            <h3>Haqiqiy tajribalar</h3>
            <p>Mahalliy urf-odatlar va an’analarga to‘liq sho‘ng‘ish imkoniyati.</p>
          </div>
          <div className={s.feature}>
            <div className={s.icon}><FaGlobeAsia /></div>
            <h3>Markaziy Osiyo mutaxassislari</h3>
            <p>Faqat O‘zbekiston va Markaziy Osiyoga ixtisoslashgan xizmatlar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
