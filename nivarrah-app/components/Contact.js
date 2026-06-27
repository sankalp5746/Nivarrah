'use client';
import { useEffect, useRef } from 'react';

export default function Contact() {
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
    <section id="contact" ref={sectionRef}>
      <div className="section-container">
        <header className="section-header" data-reveal="fade-up">
          <span className="eyebrow-tag">Get in Touch</span>
          <h2 className="section-title">Book Your Session</h2>
          <p className="section-lead">
            Ready to decode your destiny? Reach out and begin your transformative journey with Sunnyy K Parekh.
          </p>
        </header>

        <div className="contact-grid">
          <div className="contact-info" data-reveal="fade-right">
            <div className="info-item">
              <div className="info-icon"><i className="fab fa-whatsapp"></i></div>
              <div>
                <span>WhatsApp</span>
                <p>+91 98765 43210 <br /><small>Preferred for session bookings</small></p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><i className="fas fa-envelope"></i></div>
              <div>
                <span>Email</span>
                <p>hello@nivarrah.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div>
                <span>Location</span>
                <p>Vapi, Gujarat, India <br /><small>Worldwide via video call</small></p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><i className="fas fa-clock"></i></div>
              <div>
                <span>Session Hours</span>
                <p>By appointment <br /><small>Flexible timing across time zones</small></p>
              </div>
            </div>

            <blockquote className="contact-quote">
              &ldquo;The moment you decide to seek clarity, the universe begins to rearrange itself in your favour.&rdquo;
              <cite>— Sunnyy K Parekh</cite>
            </blockquote>

            <div className="contact-sloka">
              <p>श्रद्धावान् लभते ज्ञानम्</p>
              <cite>The faithful one attains knowledge — Bhagavad Gita 4.39</cite>
            </div>
          </div>

          <div className="contact-form" data-reveal="fade-left">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="cf-name">Full Name</label>
                  <input type="text" id="cf-name" placeholder="Your full name" />
                </div>
                <div className="form-field">
                  <label htmlFor="cf-dob">Date of Birth</label>
                  <input type="date" id="cf-dob" />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="cf-email">Email</label>
                  <input type="email" id="cf-email" placeholder="your@email.com" />
                </div>
                <div className="form-field">
                  <label htmlFor="cf-whatsapp">WhatsApp Number</label>
                  <input type="tel" id="cf-whatsapp" placeholder="+91 …" />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="cf-session">Session Type</label>
                <select id="cf-session" defaultValue="">
                  <option value="" disabled>Select a session</option>
                  <option>Vedic Numerology</option>
                  <option>Vedic Astrology (Kundli)</option>
                  <option>Business Numerology</option>
                  <option>Karmic Analysis</option>
                  <option>Rudraksh Guidance</option>
                  <option>Logo Analysis</option>
                  <option>Complete Life Reading (Signature)</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="cf-message">Your Message</label>
                <textarea id="cf-message" rows="4" placeholder="Tell us briefly about what you're seeking guidance for…"></textarea>
              </div>

              <button type="submit" className="btn-primary btn-full">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>

              <p className="form-note">
                Every enquiry is read personally by Sunnyy K Parekh. <br />
                Expect a thoughtful reply within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
