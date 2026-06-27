'use client';
import { useEffect, useRef } from 'react';

const servicesData = [
  {
    icon: 'fas fa-sort-numeric-up',
    title: 'Vedic Numerology',
    desc: 'Decode the cosmic vibrations embedded in your birth date and name. Understand your life path, karmic debts, and hidden strengths through the ancient science of numbers.',
    sloka: { dev: 'सर्वं खल्विदं ब्रह्म', cite: 'All of this is Brahman — Chandogya Upanishad' },
    link: '#contact',
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Business Numerology',
    desc: 'Align your business name, launch dates, branding, and key decisions with numerological precision for maximum resonance and success.',
    sloka: { dev: 'कर्मण्येवाधिकारस्ते', cite: 'Your right is to action alone — Bhagavad Gita 2.47' },
    link: '#contact',
  },
  {
    icon: 'fas fa-moon',
    title: 'Advanced Vedic Astrology',
    desc: 'A deep dive into your Kundli — Dashas, transits, Nakshatras, and planetary yogas — revealing the cosmic blueprint of your life with extraordinary precision.',
    sloka: { dev: 'ज्योतिषां सूर्यो गतिः', cite: 'The Sun is the soul of all movement — Rig Veda' },
    link: '#contact',
  },
  {
    icon: 'fas fa-gem',
    title: 'Rudraksh Science',
    desc: 'Personalised Rudraksh recommendations based on your chart and energy profile — sacred beads that harmonise planetary influences and restore inner balance.',
    sloka: { dev: 'रुद्राक्षधारणं पुण्यम्', cite: 'Wearing Rudraksh is meritorious — Shiva Purana' },
    link: '#contact',
  },
  {
    icon: 'fas fa-yin-yang',
    title: 'Karmic Analysis',
    desc: 'Understand the deeper &ldquo;why&rdquo; behind life patterns, recurring challenges, and soul contracts. A karmic reading illuminates your spiritual journey across lifetimes.',
    sloka: { dev: 'यथा बीजं तथाङ्कुरः', cite: 'As the seed, so the sprout — Yoga Vasishtha' },
    link: '#contact',
  },
  {
    icon: 'fas fa-pen-ruler',
    title: 'Logo Analysis',
    desc: 'Your logo carries vibrational energy. Analyse its shapes, colours, and numerological alignment to ensure your brand identity resonates with success and trust.',
    sloka: { dev: 'नाम रूपं च सत्यम्', cite: 'Name and form are truth — Brihadaranyaka Upanishad' },
    link: '#contact',
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('[data-reveal]');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef}>
      <div className="section-container">
        <header className="section-header" data-reveal="fade-up">
          <span className="eyebrow-tag">What We Offer</span>
          <h2 className="section-title">The Six Sacred Sciences</h2>
          <p className="section-lead">
            Each science is a lens — together they reveal the full picture of your cosmic identity and life path.
          </p>
        </header>

        <div className="services-grid">
          {servicesData.map((svc, i) => (
            <div className="service-card" key={i} data-reveal="fade-up" data-delay={String(i * 80)}>
              <div className="svc-icon">
                <i className={svc.icon}></i>
              </div>
              <h3>{svc.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: svc.desc }}></p>
              <blockquote>
                <p>{svc.sloka.dev}</p>
                <cite>{svc.sloka.cite}</cite>
              </blockquote>
              <a href={svc.link} className="svc-link">
                Book Session <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}

          {/* Gold signature card */}
          <div className="service-card service-card--gold" data-reveal="fade-up">
            <div className="svc-icon svc-icon--gold">
              <i className="fas fa-star"></i>
            </div>
            <span className="gold-badge">Signature</span>
            <div>
              <h3 className="gold-title">Complete Life Reading</h3>
              <p style={{ marginBottom: 0 }}>
                A comprehensive session combining Numerology, Astrology, and Karmic Analysis for total life clarity.
              </p>
            </div>
            <a href="#contact" className="btn-primary btn-primary--sm">
              Enquire Now <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
