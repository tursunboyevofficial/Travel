import React from 'react';
import s from './TestimonialsSection.module.scss';
import { FaStar } from 'react-icons/fa'; // Yulduzcha ikonkasi uchun

// Ma'lumotlar massivi (props sifatida berishingiz mumkin)
const testimonialsData = [
    {
        id: 1,
        rating: 5,
        quote: "An absolutely magical journey through Uzbekistan! The guides were incredibly knowledgeable and the historical sites were breathtaking.",
        author: "Sarah Johnson",
        country: "United Kingdom",
        tour: "Golden Triangle Tour",
        tourLink: "#"
    },
    {
        id: 2,
        rating: 5,
        quote: "Perfect organization and authentic experiences. The silk road cities exceeded all my expectations. Highly recommended!",
        author: "Hans Mueller",
        country: "Germany",
        tour: "Ancient Cities Tour",
        tourLink: "#"
    },
    {
        id: 3,
        rating: 5,
        quote: "The cultural immersion was incredible. From traditional crafts to local cuisine, every moment was unforgettable.",
        author: "Marie Dubois",
        country: "France",
        tour: "Fergana Valley Tour",
        tourLink: "#"
    },
];

// Yulduzcha komponenti
const StarRating = ({ rating }) => {
    return (
        <div className={s.rating}>
            {[...Array(5)].map((_, i) => (
                <FaStar
                    key={i}
                    className={s.star}
                    // Rasmdagi kabi barcha 5 ta yulduz ham to'liq sariq rangda
                    style={{ color: i < rating ? '#ffc107' : '#e4e5e9' }} 
                />
            ))}
        </div>
    );
};


const TestimonialCard = ({ data }) => {
    const { rating, quote, author, country, tour, tourLink } = data;
    
    return (
        <div className={s.card}>
            <StarRating rating={rating} />
            <p className={s.quote}>"{quote}"</p>
            
            <div className={s.authorInfo}>
                <p className={s.authorName}>{author}</p>
                <p className={s.authorCountry}>{country}</p>
                <a href={tourLink} className={s.tourLink}>{tour}</a>
            </div>
        </div>
    );
};


export default function TestimonialsSection({ testimonials = testimonialsData }) {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <h2 className={s.title}>What Our Travelers Say</h2>
                <p className={s.subtitle}>Real experiences from real travelers</p>
                
                <div className={s.cardsGrid}>
                    {testimonials.map(item => (
                        <TestimonialCard key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}