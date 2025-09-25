import React, { useState } from 'react';
import s from './DetailedTourPackages.module.scss';
import { FaClock, FaUsers, FaCalendarAlt, FaRegStar, FaPlus } from 'react-icons/fa';

// Ma'lumotlar obyekti
const tourPackages = [
    {
        id: 1,
        title: "Classic Uzbekistan: Golden Triangle",
        days: 7,
        nights: 6,
        durationTag: "7 Days / 6 Nights",
        seasonTag: "All Year",
        image: "https://i.ibb.co/L8v7f23/registan.jpg", // Haqiqiy rasm URL manzili
        locations: ["Tashkent", "Samarkand", "Bukhara"],
        people: "2-16 people",
        season: "All Year",
        description: "Explore the most iconic cities of Uzbekistan in this comprehensive journey through the heart of the Silk Road. Visit magnificent architectural monuments, bustling bazaars, and experience authentic Central Asian culture.",
        highlights: [
            "Registan Square in Samarkand - UNESCO World Heritage Site",
            "Bibi-Khanym Mosque - One of the largest mosques in the Islamic world",
            "Shah-i-Zinda Necropolis - Avenue of mausoleums",
            "Gur-Emir Mausoleum", 
            "Chor Minor Madrasah", 
        ]
    },
    {
        id: 2,
        title: "Ancient Cities of the Silk Road",
        days: 10,
        nights: 9,
        durationTag: "10 Days / 9 Nights",
        seasonTag: "Mar-Nov",
        image: "https://i.ibb.co/3k5fH8h/khiva.jpg", // Haqiqiy rasm URL manzili
        locations: ["Tashkent", "Samarkand", "Bukhara", "Khiva"],
        people: "4-12 people",
        season: "Mar-Nov",
        description: "The ultimate Silk Road experience covering all major historical cities of Uzbekistan. Journey through 2,500 years of history from ancient Khiva to medieval Bukhara and magnificent Samarkand.",
        highlights: [
            "Khiva's Ichan Qala - Open-air museum city",
            "Kunya Ark - Ancient fortress and former residence of Khiva Khans",
            "Tash Hauli Palace - Masterpiece of Central Asian architecture",
            "Lyab-i Hauz Complex", 
            "Kalta Minor Minaret", 
        ]
    }
];

// Yagona tur paketi kartasi komponenti
const TourCard = ({ tour }) => {
    // Highlights funksionalligi
    const initialHighlights = tour.highlights.slice(0, 3);
    const hiddenHighlights = tour.highlights.slice(3);
    const [showAllHighlights, setShowAllHighlights] = useState(false);
    
    // Tugmalar funksiyalari (Ishlayotganini ko'rsatish uchun)
    const handleRequestQuote = () => alert(`"${tour.title}" uchun so'rov yuborildi.`);
    const handleMoreDetails = () => alert(`"${tour.title}" batafsil ma'lumot sahifasiga o'tildi.`);
    const handleViewDetails = () => alert(`"${tour.title}" rasmi ustidagi View Details bosildi.`);
    const handleDestinationClick = (dest) => console.log(`Manzil tanlandi: ${dest}`);


    return (
        <div className={s.card}>
            {/* Rasm va Overlay qismi */}
            <div className={s.imageWrapper}>
                <div 
                    className={s.image} 
                    style={{ backgroundImage: `url(${tour.image})` }}
                >
                    {/* Yuqori chap va o'ng yorliqlar (Dinamik ma'lumot) */}
                    <span className={s.durationTag}>{tour.durationTag}</span>
                    <span className={s.seasonTag}>{tour.seasonTag}</span>
                    
                    {/* Rasm ustidagi View Details tugmasi */}
                    <div className={s.overlay} onClick={handleViewDetails}>
                        <button className={s.viewDetailsBtn}>
                            View Details
                        </button>
                    </div>
                </div>
            </div>

            {/* Kontent qismi */}
            <div className={s.content}>
                <h3 className={s.cardTitle}>{tour.title}</h3>
                
                {/* Metadata qismi (Dinamik ma'lumot) */}
                <div className={s.metadata}>
                    <div className={s.metaItem}>
                        <FaClock className={s.metaIcon} /> 
                        <span>{tour.days} Days / {tour.nights} Nights</span>
                    </div>
                    <div className={s.metaItem}>
                        <FaUsers className={s.metaIcon} /> 
                        <span>{tour.people}</span>
                    </div>
                    <div className={s.metaItem}>
                        <FaCalendarAlt className={s.metaIcon} /> 
                        <span>{tour.season}</span>
                    </div>
                </div>

                {/* Navigatsiya joylashuvlari (Dinamik Tags) */}
                <div className={s.destinations}>
                    <p className={s.navTitle}>nav.destinations:</p>
                    <div className={s.destinationTags}>
                        {tour.locations.map(loc => (
                            <button 
                                key={loc} 
                                className={s.destinationTag}
                                onClick={() => handleDestinationClick(loc)}
                            >
                                {loc}
                            </button>
                        ))}
                    </div>
                </div>

                <p className={s.description}>{tour.description}</p>

                {/* Highlights qismi (Dinamik va ochiluvchan) */}
                <div className={s.highlightsSection}>
                    <p className={s.highlightsTitle}>
                        <FaRegStar className={s.starIcon} /> Highlights:
                    </p>
                    <ul className={s.highlightsList}>
                        {initialHighlights.map((item, index) => (
                            <li key={index} className={s.highlightItem}>{item}</li>
                        ))}
                        
                        {showAllHighlights && hiddenHighlights.map((item, index) => (
                            <li key={index + 3} className={s.highlightItem}>{item}</li>
                        ))}
                    </ul>
                    
                    {hiddenHighlights.length > 0 && (
                        <button 
                            className={s.moreHighlightsBtn} 
                            onClick={() => setShowAllHighlights(v => !v)}
                        >
                            <FaPlus className={s.moreIcon} style={{ transform: showAllHighlights ? 'rotate(45deg)' : 'none' }}/> 
                            {showAllHighlights ? 'View less highlights' : `+ ${hiddenHighlights.length} more highlights`}
                        </button>
                    )}
                </div>

                {/* Tugmalar qismi */}
                <div className={s.actions}>
                    <button className={`${s.button} ${s.requestQuote}`} onClick={handleRequestQuote}>
                        Request Quote
                    </button>
                    <button className={`${s.button} ${s.moreDetails}`} onClick={handleMoreDetails}>
                        More Details
                    </button>
                </div>
            </div>
        </div>
    );
};

// Asosiy Komponent - Ma'lumotlarni qabul qiladi
export default function DetailedTourPackages({ tours = tourPackages }) {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.toursGrid}>
                    {/* Obyektdagi ma'lumotlar shu yerda dinamik render qilinadi */}
                    {tours.map(tour => (
                        <TourCard key={tour.id} tour={tour} />
                    ))}
                </div>
            </div>
        </section>
    );
}