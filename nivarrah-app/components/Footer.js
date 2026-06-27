export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <i className="fas fa-om"></i> Nivarrah
            </div>
            <p>Cessation of restlessness. Ancient Vedic sciences for modern clarity — guided by Sunnyy K Parekh.</p>
            <div className="footer-socials">
              <a href="https://instagram.com/nivarrah" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com/@nivarrah" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="mailto:hello@nivarrah.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="#contact" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <span className="footer-col-head">Sciences</span>
            <ul className="footer-links">
              <li><a href="#services">Vedic Numerology</a></li>
              <li><a href="#services">Vedic Astrology</a></li>
              <li><a href="#services">Karmic Analysis</a></li>
              <li><a href="#services">Rudraksh Science</a></li>
              <li><a href="#services">Business Numerology</a></li>
              <li><a href="#services">Logo Analysis</a></li>
            </ul>
          </div>

          <div>
            <span className="footer-col-head">Quick Links</span>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#calculators">Sacred Tools</a></li>
              <li><a href="#sessions">Sessions</a></li>
              <li><a href="#social">Instagram</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <span className="footer-col-head">Sacred Verse</span>
            <div className="footer-sloka">
              <p>कर्मण्येवाधिकारस्ते मा फलेषु कदाचन</p>
              <em>&ldquo;You have the right to work only, but never to its fruits.&rdquo;</em>
              <cite>— Bhagavad Gita 2.47</cite>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>ॐ शान्तिः शान्तिः शान्तिः</p>
          <p>© {new Date().getFullYear()} Nivarrah · Sunnyy K Parekh · All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
