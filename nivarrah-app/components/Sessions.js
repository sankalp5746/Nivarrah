'use client';
import { useEffect, useRef } from 'react';

const sessionsData = [
  {
    icon: 'fas fa-sort-numeric-up',
    title: 'Vedic Numerology Session',
    desc: 'A comprehensive analysis of your birth numbers, name vibrations, and life cycles with personalised remedies.',
    features: [
      'Birth & Life Path Number analysis',
      'Name number evaluation & correction',
      'Lucky dates, colours & directions',
      'Personalised Vedic remedies',
      'Mobile number & vehicle number check',
    ],
    featured: false,
  },
  {
    icon: 'fas fa-moon',
    title: 'Vedic Astrology Session',
    desc: 'Deep Kundli analysis covering planetary positions, Dashas, transits and life predictions.',
    features: [
      'Complete birth chart (Kundli) reading',
      'Dasha & transit analysis',
      'Career, health & relationship guidance',
      'Gemstone & Rudraksh recommendations',
      'Muhurta (auspicious timing) guidance',
    ],
    featured: true,
    badge: 'Most Popular',
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Business Numerology',
    desc: 'Align your business identity with cosmic vibrations for growth, stability and success.',
    features: [
      'Business name analysis & suggestions',
      'Brand identity numerology',
      'Launch date & timing guidance',
      'Logo energy assessment',
      'Partnership compatibility',
    ],
    featured: false,
  },
  {
    icon: 'fas fa-yin-yang',
    title: 'Karmic Analysis',
    desc: 'Understand your soul\'s journey, past-life patterns and karmic debts that shape your current reality.',
    features: [
      'Past-life karmic patterns',
      'Soul contract understanding',
      'Karmic debt identification',
      'Spiritual growth guidance',
      'Ancestral pattern clearing',
    ],
    featured: false,
  },
  {
    icon: 'fas fa-gem',
    title: 'Rudraksh Guidance',
    desc: 'Personalised Rudraksh recommendations based on your unique planetary configuration.',
    features: [
      'Chart-based Rudraksh selection',
      'Mukhi identification & benefits',
      'Wearing & energising rituals',
      'Combination recommendations',
      'Authenticity verification guidance',
    ],
    featured: false,
  },
  {
    icon: 'fas fa-pen-ruler',
    title: 'Logo Analysis',
    desc: 'Evaluate the vibrational energy of your logo and brand elements for maximum positive impact.',
    features: [
      'Shape & geometry analysis',
      'Colour vibration assessment',
      'Numerological alignment check',
      'Energy flow evaluation',
      'Redesign suggestions if needed',
    ],
    featured: false,
  },
];

export default function Sessions() {
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
    <section id="sessions" ref={sectionRef}>
      <div className="section-container">
        <header className="section-header" data-reveal="fade-up">
          <span className="eyebrow-tag">Sessions</span>
          <h2 className="section-title">Begin Your Healing Journey</h2>
          <p className="section-lead">
            Every session is personal, unhurried, and guided by ancient wisdom. Choose the path that calls to you.
          </p>
        </header>

        <div className="sessions-grid">
          {sessionsData.map((session, i) => (
            <div
              className={`session-card${session.featured ? ' session-card--featured' : ''}`}
              key={i}
              data-reveal="fade-up"
              data-delay={String(i * 80)}
            >
              {session.badge && <div className="sess-badge">{session.badge}</div>}
              <div className="sess-icon">
                <i className={session.icon}></i>
              </div>
              <h3>{session.title}</h3>
              <p>{session.desc}</p>
              <ul>
                {session.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary btn-full">
                Book This Session <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>

        <div className="no-limit-bar" data-reveal="fade-up">
          <i className="fas fa-infinity"></i>
          Every session has no time limit — your clarity is our only measure of completion
          <i className="fas fa-infinity"></i>
        </div>
      </div>
    </section>
  );
}
