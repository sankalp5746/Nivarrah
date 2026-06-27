'use client';
import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = sectionRef.current?.querySelectorAll('[data-reveal]');
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="section-container">
        <div className="about-grid">

          <div className="about-portrait" data-reveal="fade-right">
            <div className="portrait-frame">
              <div className="portrait-img" aria-label="Portrait of Sunnyy K Parekh">
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="portrait-label">Sunnyy K Parekh · Nivarrah</div>
            </div>

            <div className="stat-row">
              <div className="stat-box">
                <span className="stat-num">1200<sup>+</sup></span>
                <span className="stat-lbl">Lives Transformed</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-box">
                <span className="stat-num">15</span>
                <span className="stat-lbl">Years of Practice</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-box">
                <span className="stat-num"><i className="fas fa-infinity"></i></span>
                <span className="stat-lbl">Session Duration</span>
              </div>
            </div>

            <blockquote className="about-sloka">
              <p lang="sa">ज्ञानं परमं ध्येयम्</p>
              <cite>Supreme knowledge is the highest goal</cite>
            </blockquote>
          </div>

          <div className="about-bio" data-reveal="fade-left">
            <span className="eyebrow-tag">The Guide</span>
            <h2 className="section-title">Sunnyy K&nbsp;Parekh</h2>

            <blockquote className="bio-pullquote">
              &ldquo;What started as a search for clarity eventually became my awakening — and then, my purpose.&rdquo;
            </blockquote>

            <p>Like many, I spent years feeling lost and searching for deeper answers. That journey led me into ancient texts, temples, and silence — and eventually into the living sciences of <strong>Vedic Numerology, Advanced Vedic Astrology, Karmic Understanding, and Rudraksh Science.</strong></p>

            <p>Numbers are not mere mathematics. Stars are not just astronomy. They are a language — the universe speaking directly to each soul. Once I began to hear that language, everything changed.</p>

            <p>Over 15 years and more than 1,200 people, I have seen how decoding someone&apos;s chart and numbers brings clarity so profound it transforms relationships, businesses, health, and life direction.</p>

            <p>That understanding became <strong>Nivarrah</strong> — a Sanskrit-rooted word meaning <em>cessation of restlessness.</em> Real guidance must never feel rushed. Every session has <strong>no time limit and no question limit.</strong></p>

            <div className="promise-box">
              <i className="fas fa-shield-halved"></i>
              <div>
                <strong>Our Promise</strong>
                <p>No automated replies. No time pressure. Only personal, considered guidance from Sunnyy K Parekh directly.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
