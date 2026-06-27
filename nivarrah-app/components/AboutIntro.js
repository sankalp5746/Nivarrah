export default function AboutIntro() {
  const services = [
    'Vedic Numerology',
    'Advanced Astrology',
    'Karmic Analysis',
    'Rudraksh Science',
    'Business Numerology',
    'Logo Analysis',
  ];

  return (
    <section id="about-intro">
      <div className="section-heading">
        <p className="sloka">यथा पिण्डे तथा ब्रह्माण्डे</p>
        <h2>Ancient Wisdom for Modern Life</h2>
      </div>

      <p className="intro-text">
        Guided by Sunnyy K Parekh through Vedic Numerology,
        Advanced Vedic Astrology, Karmic Analysis and
        Rudraksh Science — helping individuals, families and
        businesses find clarity and alignment.
      </p>

      <div className="services">
        {services.map((svc) => (
          <span key={svc}>{svc}</span>
        ))}
      </div>
    </section>
  );
}
