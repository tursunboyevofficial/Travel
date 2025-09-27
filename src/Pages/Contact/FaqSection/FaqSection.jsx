import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './FaqSection.module.scss';

const FaqSection = () => {
  const { t } = useTranslation();

  const faqData = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1'),
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2'),
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3'),
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4'),
    },
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t('faq.heading')}</h2>
        <p className={styles.subtitle}>{t('faq.subtitle')}</p>
      </div>

      <div className={styles.faqContainer}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.questionBlock}>
              <h3 className={styles.question}>{item.question}</h3>
            </div>
            <div className={styles.answerBlock}>
              <p className={styles.answer}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
