import React from 'react';
import s from './FeaturedTours.module.scss';
import { FaMapMarkerAlt, FaRegStar } from 'react-icons/fa';

// Ma'lumotlar massivi (rasmdagi 2 ta tur paketi)
const tourPackages = [
    {
        id: 1,
        title: "Classic Uzbekistan: Golden Triangle",
        duration: "7 Days",
        image: "URL_TO_REGISTAN_IMAGE", // Joylashuv rasmini URL manzilini o'rnating
        locations: "Tashkent - Samarkand - Bukhara",
        description: "Discover the golden cities of Uzbekistan in this classic journey through Tashkent, Samarkand, and Bukhara. Experience the architectural wonders and rich history of the Silk Road.",
        highlights: [
            "Registan Square",
            "Gur-Emir Mausoleum",
            "Ark Fortress",
            "Poi Kalyan Complex"
        ]
    },
    {
        id: 2,
        title: "Ancient Cities of the Silk Road",
        duration: "10 Days",
        image: "URL_TO_SHAKH_I_ZINDA_IMAGE", // Joylashuv rasmini URL manzilini o'rnating
        locations: "Tashkent - Samarkand - Bukhara - Khiva",
        description: "Complete exploration of ancient Silk Road cities including the UNESCO World Heritage sites of Samarkand, Bukhara, and Khiva.",
        highlights: [
            "Itchan Kala",
            "Shahi-i Zinda",
            "Lyab-i Hauz",
            "Kalta Minor Minaret"
        ]
    }
];

// Yagona tur paketi kartasi komponenti
const TourCard = ({ tour }) => {
    return (
        <div className={s.card}>
            {/* Rasm va Duration yorlig'i joylashgan yuqori qism */}
            <div className={s.imageWrapper}>
                {/* Bu yerda rasm URL manzilini o'rnating. 
                    Hozirda fon rasmi sifatida CSS orqali ishlatilmoqda
                    Style propini faqat rasm manzilini dinamik o'rnatish uchun ishlatamiz.
                */}
                <div 
                    className={s.image} 
                    style={{ backgroundImage: `url(${tour.image})` }}
                    aria-label={`Featured image for ${tour.title}`}
                />
                <span className={s.durationTag}>{tour.duration}</span>
            </div>

            {/* Kontent qismi */}
            <div className={s.content}>
                <h3 className={s.cardTitle}>{tour.title}</h3>
                
                <div className={s.locations}>
                    <FaMapMarkerAlt className={s.locationIcon} />
                    <span>{tour.locations}</span>
                </div>

                <p className={s.description}>{tour.description}</p>

                {/* Highlights qismi */}
                <div className={s.highlightsSection}>
                    <p className={s.highlightsTitle}>
                        <FaRegStar className={s.starIcon} /> Highlights:
                    </p>
                    <ul className={s.highlightsList}>
                        {tour.highlights.map((item, index) => (
                            <li key={index}>
                                {/* Rasmdagi kabi ko'k nuqtani taqlid qilish */}
                                <span className={s.bulletPoint}></span> 
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tugmalar qismi */}
                <div className={s.actions}>
                    <button className={`${s.button} ${s.learnMore}`}>Learn More</button>
                    <button className={`${s.button} ${s.requestQuote}`}>Request Quote</button>
                </div>
            </div>
        </div>
    );
};

// Asosiy Komponent
export default function FeaturedTours({ tours = tourPackages }) {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <h2 className={s.mainTitle}>Featured Tour Packages</h2>
                <p className={s.tagline}>
                    Carefully crafted itineraries showcasing the best of Uzbekistan's historical treasures and cultural experiences
                </p>
                
                <div className={s.toursGrid}>
                    {tours.map(tour => (
                        <TourCard key={tour.id} tour={tour} />
                    ))}
                </div>
            </div>
        </section>
    );
}