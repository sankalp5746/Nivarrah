'use client';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

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
            {isSuccess ? (
              <div className="success-message" style={{ textAlign: 'center', padding: '60px 20px', animation: 'fadeUp 0.6s ease-out' }}>
                <div style={{ fontSize: '4rem', color: 'var(--olive)', marginBottom: '20px', animation: 'scaleIn 0.5s ease-out 0.2s both' }}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3 style={{ fontSize: '2rem', fontFamily: 'var(--ff-disp)', color: 'var(--olive)', marginBottom: '16px' }}>Message Sent</h3>
                <p style={{ color: 'var(--text)', opacity: 0.8, lineHeight: 1.6, marginBottom: '32px' }}>
                  Thank you for reaching out. Sunnyy K Parekh will review your message personally, and you can expect a reply within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="btn-primary" 
                  style={{ background: 'transparent', border: '1px solid var(--olive)', color: 'var(--olive)' }}
                >
                  Send Another Message
                </button>
                <style jsx>{`
                  @keyframes scaleIn {
                    0% { transform: scale(0); opacity: 0; }
                    60% { transform: scale(1.1); opacity: 1; }
                    100% { transform: scale(1); opacity: 1; }
                  }
                  @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                  }
                `}</style>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row-2">
                  <div className="form-field">
                    <label htmlFor="cf-name">Full Name</label>
                    <input type="text" id="cf-name" placeholder="Your full name" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="cf-dob">Date of Birth</label>
                    <input type="date" id="cf-dob" required />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label htmlFor="cf-email">Email</label>
                    <input type="email" id="cf-email" placeholder="your@email.com" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="cf-whatsapp">WhatsApp Number</label>
                    <input type="tel" id="cf-whatsapp" placeholder="+91 …" required />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="cf-session">Session Type</label>
                  <select id="cf-session" defaultValue="" required>
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
                  <textarea id="cf-message" rows="4" placeholder="Tell us briefly about what you're seeking guidance for…" required></textarea>
                </div>

                <button type="submit" className="btn-primary btn-full" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                  {isSubmitting ? 'Sending...' : 'Send Message'} <i className={isSubmitting ? "fas fa-spinner fa-spin" : "fas fa-paper-plane"}></i>
                </button>

                <p className="form-note">
                  Every enquiry is read personally by Sunnyy K Parekh. <br />
                  Expect a thoughtful reply within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
