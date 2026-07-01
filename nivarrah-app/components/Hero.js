export default function Hero() {
  return (
    <section id="hero">
      <img
        className="hero-bg-img"
        src="https://images.weserv.nl/?url=www.nivarrah.com/css/images/main-1.png"
        alt="Nivarrah — Vedic Wisdom"
      />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-kicker">Vedic Wisdom • Astrology • Numerology</p>
        <h1>Nivarrah</h1>
        <p className="hero-subtitle">Cessation of Restlessness</p>
        <a href="#about" className="btn-primary">Begin Your Journey</a>
      </div>
    </section>
  );
}
