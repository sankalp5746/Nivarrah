'use client';
import { useEffect, useRef } from 'react';

const reels = [
  { icon: 'fas fa-om', title: 'The Power of Your Birth Number' },
  { icon: 'fas fa-star', title: 'Understanding Nakshatras' },
  { icon: 'fas fa-gem', title: 'Rudraksh — Sacred Beads of Shiva' },
  { icon: 'fas fa-moon', title: 'Rahu-Ketu Transit Effects' },
  { icon: 'fas fa-sort-numeric-up', title: 'Name Correction Magic' },
];

export default function Social() {
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
    <section id="social" ref={sectionRef}>
      <div className="section-container">
        <header className="section-header" data-reveal="fade-up">
          <span className="eyebrow-tag">Instagram</span>
          <h2 className="section-title">Wisdom in Every Reel</h2>
          <p className="section-lead">
            Follow Nivarrah on Instagram for daily Vedic insights, number wisdom, and cosmic guidance.
          </p>
        </header>

        <div className="reels-grid" data-reveal="fade-up">
          {reels.map((reel, i) => (
            <div className="reel-card" key={i}>
              <div className="reel-icon-top">
                <i className={reel.icon}></i>
              </div>
              <div className="reel-play">
                <i className="fas fa-play"></i>
              </div>
              <p>{reel.title}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }} data-reveal="fade-up">
          <a
            href="https://instagram.com/nivarrah"
            className="btn-instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i> Follow @nivarrah
          </a>
        </div>
      </div>
    </section>
  );
}
