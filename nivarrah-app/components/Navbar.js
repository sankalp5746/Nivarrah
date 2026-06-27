'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="navbar" className={scrolled ? 'scrolled' : ''} role="banner">
      <div className="nav-container">
        <a href="#hero" className="nav-brand" aria-label="Nivarrah — Home">
          <img src="/images/nivarrah-logo.png" alt="Nivarrah" />
        </a>
        <nav aria-label="Primary navigation">
          <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="nav-links">
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Sciences</a></li>
            <li><a href="#calculators" onClick={() => setMenuOpen(false)}>Sacred Tools</a></li>
            <li><a href="#sessions" onClick={() => setMenuOpen(false)}>Sessions</a></li>
            <li><a href="#social" onClick={() => setMenuOpen(false)}>Wisdom</a></li>
            <li><a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Book a Session</a></li>
          </ul>
        </nav>
        <button
          className="hamburger"
          id="hamburger"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
