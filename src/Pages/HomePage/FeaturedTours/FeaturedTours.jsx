import React, { useState, useEffect, useMemo, useRef } from 'react';
// i18n kerak bo'lmasa, useTranslation ni olib tashlash mumkin
// import { useTranslation } from 'react-i18next'; 
import s from './FeaturedTours.module.scss';
import images from "../../../assets/getItems"
// --- DATA: data.js fayliga o'xshash tuzilma ---
const carouselData = [
  { key: "1", title: "Samarqand safari", link: "#", imageUrl: `${images.Samarkand}` }, 
  { key: "2", title: "Buxoro qadimiy shahar", link: "#", imageUrl: `${images.Buxoro}`},
  { key: "3", title: "Xiva sehrli tunlari", link: "#", imageUrl: `${images.Xiva}` },
  { key: "4", title: "Toshkent city", link: "#", imageUrl: `${images.Tashkent}` },
];

const ANNOUNCEMENT_KEYS = {
  SECTION_TITLE: "Featured Tours",
  ALL_BUTTON: "View All Tours",
};

const ITEMS_TO_DISPLAY = 3;
const AUTOPLAY_INTERVAL = 5000;

const FeaturedTours = () => {
  // const { t } = useTranslation(); // Agar ishlatilmasa, olib tashlang

  const trackRef = useRef(null);
  const itemWidthRef = useRef(0);
  
  // Boshlang'ich index: haqiqiy itemlar boshlanadigan joy
  const [currentIndex, setCurrentIndex] = useState(carouselData.length);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // isTransitioningRef o'rniga Autoplay logikasini yangilaymiz

  const items = useMemo(() => {
    if (carouselData.length === 0) return [];
    const clonesStart = carouselData.slice(-ITEMS_TO_DISPLAY);
    const clonesEnd = carouselData.slice(0, ITEMS_TO_DISPLAY);
    return [...clonesStart, ...carouselData, ...clonesEnd];
  }, [carouselData]);

  const measureItemWidth = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const itemElement = track.querySelector(`.${s.carouselItem}`);
    if (!itemElement) return 0;
    itemWidthRef.current = itemElement.getBoundingClientRect().width;
    return itemWidthRef.current;
  };

  // --- QO'SHILGAN ASOSIY FUNKSIYA ---
  const applyTransform = (index, animate) => {
    const track = trackRef.current;
    if (!track) return;
    
    // Kenglikni hisoblash
    if (itemWidthRef.current === 0) measureItemWidth();

    if (animate) track.classList.add(s.animate);
    else track.classList.remove(s.animate);

    const x = -index * itemWidthRef.current;
    track.style.transform = `translateX(${x}px)`;
  };
  // -------------------------------------

  // 1. Transformni qo'llash (currentIndex yoki isTransitioning o'zgarganda)
  useEffect(() => {
    if (itemWidthRef.current === 0) measureItemWidth(); // Kenglikni tekshirish
    
    if (isTransitioning) {
      // Animatsiya bilan harakatlantirish
      applyTransform(currentIndex, true);
    } else if (itemWidthRef.current > 0) {
      // Animatsiyasiz joylashtirish (sakrash/jump)
      applyTransform(currentIndex, false);
    }
  }, [currentIndex, isTransitioning]);

  // 2. Boshlang'ich holat va Resize logicasi
  useEffect(() => {
    const initializeCarousel = () => {
      measureItemWidth();
      if (itemWidthRef.current > 0) {
        // Boshlang'ich joylashuvni klonlardan keyin o'rnatish (animatsiyasiz)
        applyTransform(carouselData.length, false); 
      }
    };

    // DOM to'liq o'rnatilishini kutish (50ms)
    const initTimeout = setTimeout(initializeCarousel, 50);

    const onResize = () => {
      measureItemWidth();
      if (itemWidthRef.current > 0) {
        // Resize'da pozitsiyani animatsiyasiz yangilash
        applyTransform(currentIndex, false); 
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener('resize', onResize);
    };
  }, [items.length]);

  // 3. Autoplay logicasi (isTransitioning ni to'g'ri ishlatish)
  useEffect(() => {
    // Agar tranzitsiya davom etayotgan bo'lsa, yangi interval boshlamaymiz
    if (isTransitioning) return;

    const interval = setInterval(() => {
      setIsTransitioning(true); // Tranzitsiyani boshlaymiz
      setCurrentIndex(prev => prev + 1);
    }, AUTOPLAY_INTERVAL);

    // Tranzitsiya tugagach, bu yerda eski interval tozalanadi va keyin yangi interval boshlanadi
    return () => clearInterval(interval);
  }, [isTransitioning]);


  // Navigatsiya handlerlari (faoliyat tugagandan keyin ishlaydi)
  const handleNavigation = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + direction);
  };

  const handleNext = () => handleNavigation(1);
  const handlePrev = () => handleNavigation(-1);


  // Transition End -> Cheksiz aylanishdagi sakrash (jump)
  const handleTransitionEnd = () => {
    setIsTransitioning(false); // Tranzitsiya tugadi, Autoplay qayta ishga tushadi

    let newIndex = currentIndex;
    
    // Klondan haqiqiy qismga sakrash logicasi
    if (currentIndex >= carouselData.length + ITEMS_TO_DISPLAY) {
      newIndex = ITEMS_TO_DISPLAY;
    } else if (currentIndex < ITEMS_TO_DISPLAY) {
      newIndex = carouselData.length + ITEMS_TO_DISPLAY - 1;
    }

    if (newIndex !== currentIndex) {
      // Animatsiyasiz joyga sakrash
      applyTransform(newIndex, false);
      setCurrentIndex(newIndex);
    }
  };


  return (
    <section className={s.section}>
      <div className={s.header}>
        <h2 className={s.title}>{ANNOUNCEMENT_KEYS.SECTION_TITLE}</h2>
        <div className={s.navigation}>
          <button
            className={`${s.navBtn} ${s.prevBtn}`}
            onClick={handlePrev}
            disabled={isTransitioning}
          />
          <button
            className={`${s.navBtn} ${s.nextBtn}`}
            onClick={handleNext}
            disabled={isTransitioning}
          />
        </div>
      </div>

      <div className={s.carouselContainer}>
        <div
          className={s.carouselTrack} // Classni boshqarish applyTransform ichida
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
        >
          {items.map((item, index) => (
            <div key={`${item.key}-${index}`} className={s.carouselItem}>
              <a href={item.link} className={s.card}>
                <div
                  className={s.cardImage}
                  // MUHIM! Rasmlarni public papkasidan yuklashni tekshiring.
                  style={{ backgroundImage: `url(${item.imageUrl})` }} 
                />
                <div className={s.cardOverlay}>
                  <p className={s.cardText}>{item.title}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className={s.footer}>
        <a href="#" className={s.allAnnouncementsBtn}>
          {ANNOUNCEMENT_KEYS.ALL_BUTTON}
        </a>
      </div>
    </section>
  );
};

export default FeaturedTours;