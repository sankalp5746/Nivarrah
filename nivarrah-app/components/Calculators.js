'use client';
import { useState, useRef, useEffect } from 'react';

/* ── Chaldean number map ── */
const CHALDEAN = {
  A:1, B:2, C:3, D:4, E:5, F:8, G:3, H:5, I:1, J:1,
  K:2, L:3, M:4, N:5, O:7, P:8, Q:1, R:2, S:3, T:4,
  U:6, V:6, W:6, X:5, Y:1, Z:7
};

/* ── Vedic planet data ── */
const PLANET_DATA = {
  1: { planet: 'Sun (Surya)', vedic: 'सूर्य', traits: 'Leadership, authority, vitality, confidence. Natural-born leaders who shine brightly.', gem: 'Ruby (Manikya)', remedy: 'Offer water to the Sun at sunrise.' },
  2: { planet: 'Moon (Chandra)', vedic: 'चन्द्र', traits: 'Intuition, sensitivity, nurturing, emotional depth. Deeply connected to the subconscious.', gem: 'Pearl (Moti)', remedy: 'Worship Lord Shiva on Mondays.' },
  3: { planet: 'Jupiter (Guru)', vedic: 'गुरु', traits: 'Wisdom, expansion, teaching, optimism. Natural educators and spiritual seekers.', gem: 'Yellow Sapphire (Pukhraj)', remedy: 'Donate yellow items on Thursdays.' },
  4: { planet: 'Rahu (North Node)', vedic: 'राहु', traits: 'Innovation, unconventionality, sudden changes. Karmic lessons through disruption.', gem: 'Hessonite (Gomed)', remedy: 'Chant Rahu mantra on Saturdays.' },
  5: { planet: 'Mercury (Budha)', vedic: 'बुध', traits: 'Communication, intellect, versatility, adaptability. Quick-minded and eternally youthful.', gem: 'Emerald (Panna)', remedy: 'Feed green vegetables to cows on Wednesdays.' },
  6: { planet: 'Venus (Shukra)', vedic: 'शुक्र', traits: 'Love, beauty, harmony, luxury. Drawn to aesthetics and meaningful relationships.', gem: 'Diamond (Heera)', remedy: 'Offer white flowers to Goddess Lakshmi on Fridays.' },
  7: { planet: 'Ketu (South Node)', vedic: 'केतु', traits: 'Spirituality, mysticism, detachment, moksha. Deep inner wisdom and past-life connections.', gem: "Cat's Eye (Lahsuniya)", remedy: 'Donate blankets or sesame on Tuesdays.' },
  8: { planet: 'Saturn (Shani)', vedic: 'शनि', traits: 'Discipline, karma, endurance, justice. Masters of perseverance through challenges.', gem: 'Blue Sapphire (Neelam)', remedy: 'Light a sesame oil lamp on Saturdays.' },
  9: { planet: 'Mars (Mangal)', vedic: 'मंगल', traits: 'Courage, energy, passion, action. Warriors who lead with fire and determination.', gem: 'Red Coral (Moonga)', remedy: 'Offer red flowers to Lord Hanuman on Tuesdays.' },
};

function reduceToSingle(n) {
  while (n > 9) {
    n = String(n).split('').reduce((s, d) => s + parseInt(d), 0);
  }
  return n;
}

function BirthNumberCalc() {
  const [dob, setDob] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!dob) return;
    const digits = dob.replace(/\D/g, '');
    const sum = digits.split('').reduce((s, d) => s + parseInt(d), 0);
    const birthNum = reduceToSingle(sum);
    // Life Path = full DOB reduction
    const lifePathSum = digits.split('').reduce((s, d) => s + parseInt(d), 0);
    const lifeNum = reduceToSingle(lifePathSum);
    // Day number only
    const day = parseInt(dob.split('-')[2] || dob.split('/')[0]);
    const dayNum = reduceToSingle(day);
    setResult({ dayNum, lifeNum });
  };

  return (
    <div className="calc-card">
      <span className="calc-card-tag">Calculator 01</span>
      <div className="calc-inner">
        <div>
          <h3 className="calc-h"><i className="fas fa-calendar-day"></i> Birth Number Calculator</h3>
          <p className="calc-sub">Enter your date of birth to discover your Vedic Birth Number and Life Path Number — the two core numbers that shape your destiny.</p>
          <div className="field-wrap">
            <label htmlFor="birth-dob">Date of Birth</label>
            <input
              type="date"
              id="birth-dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              placeholder="DD/MM/YYYY"
            />
          </div>
          <button className="btn-primary btn-full" onClick={calculate}>
            Reveal My Numbers <i className="fas fa-arrow-right"></i>
          </button>
          <p className="calc-note">This is a simplified preview. A complete Vedic analysis covers much deeper layers. <a href="#contact">Book a full session →</a></p>

          <div className="calc-sloka">
            <p>अङ्कानां ब्रह्म रूपाणि</p>
            <cite>Numbers are the forms of Brahman</cite>
          </div>
        </div>

        <div>
          <div className={`calc-result${result ? ' show' : ''}`}>
            {result && (
              <div className="dual-result">
                <div>
                  <span className="res-label">Birth Number</span>
                  <div className="res-num">{result.dayNum}</div>
                  <span className="planet-chip">{PLANET_DATA[result.dayNum]?.planet}</span>
                  <p className="res-vedic">{PLANET_DATA[result.dayNum]?.vedic}</p>
                  <p className="res-body">{PLANET_DATA[result.dayNum]?.traits}</p>
                  <p className="res-gem">💎 {PLANET_DATA[result.dayNum]?.gem}</p>
                  <p className="res-remedy">{PLANET_DATA[result.dayNum]?.remedy}</p>
                </div>
                <div className="result-divider"></div>
                <div>
                  <span className="res-label">Life Path Number</span>
                  <div className="res-num">{result.lifeNum}</div>
                  <span className="planet-chip">{PLANET_DATA[result.lifeNum]?.planet}</span>
                  <p className="res-vedic">{PLANET_DATA[result.lifeNum]?.vedic}</p>
                  <p className="res-body">{PLANET_DATA[result.lifeNum]?.traits}</p>
                  <p className="res-gem">💎 {PLANET_DATA[result.lifeNum]?.gem}</p>
                  <p className="res-remedy">{PLANET_DATA[result.lifeNum]?.remedy}</p>
                </div>
              </div>
            )}
            {result && (
              <p className="res-cta">
                This is a glimpse. For a complete Vedic Numerology session, <a href="#contact">book your personal reading</a>.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function NameNumberCalc() {
  const [name, setName] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!name.trim()) return;
    const upper = name.toUpperCase().replace(/[^A-Z]/g, '');
    const sum = upper.split('').reduce((s, c) => s + (CHALDEAN[c] || 0), 0);
    const nameNum = reduceToSingle(sum);
    setResult({ nameNum, totalSum: sum });
  };

  return (
    <div className="calc-card">
      <span className="calc-card-tag">Calculator 02</span>
      <div className="calc-inner">
        <div>
          <h3 className="calc-h"><i className="fas fa-spell-check"></i> Name Number Calculator</h3>
          <p className="calc-sub">Discover the Chaldean numerological vibration of your name. In Vedic tradition, your name carries cosmic energy that influences your destiny.</p>
          <div className="field-wrap">
            <label htmlFor="name-input">Your Full Name</label>
            <input
              type="text"
              id="name-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
          </div>
          <button className="btn-primary btn-full" onClick={calculate}>
            Calculate Name Number <i className="fas fa-arrow-right"></i>
          </button>

          <div className="chaldean-table">
            <div className="ch-header">Chaldean Number Chart</div>
            <div className="ch-body">
              <div className="ch-row">
                {[1,2,3,4,5,6,7,8].map(n => <span key={n}>{n}</span>)}
              </div>
              <div className="ch-row ch-letters">
                {['A I J Q Y','B K R','C G L S','D M T','E H N X','U V W','O Z','F P'].map((l,i) => (
                  <span key={i}>{l}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="calc-sloka" style={{ marginTop: '18px' }}>
            <p>नाम्नि रूपं प्रतिष्ठितम्</p>
            <cite>In the name rests the form</cite>
          </div>
        </div>

        <div>
          <div className={`calc-result${result ? ' show' : ''}`}>
            {result && (
              <>
                <span className="res-label">Name Number (Chaldean)</span>
                <div className="res-num">{result.nameNum}</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--ink-soft)', marginBottom: '8px' }}>
                  Total sum: {result.totalSum} → reduced to {result.nameNum}
                </p>
                <span className="planet-chip">{PLANET_DATA[result.nameNum]?.planet}</span>
                <p className="res-vedic">{PLANET_DATA[result.nameNum]?.vedic}</p>
                <p className="res-body">{PLANET_DATA[result.nameNum]?.traits}</p>
                <p className="res-gem">💎 {PLANET_DATA[result.nameNum]?.gem}</p>
                <p className="res-cta">
                  Name vibration analysis is part of a full Vedic Numerology session. <a href="#contact">Book your reading →</a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function BirthChartVisualiser() {
  const canvasRef = useRef(null);
  const [houses, setHouses] = useState(Array(12).fill(''));

  const houseLabels = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th'];
  const planets = ['Su','Mo','Ma','Me','Ju','Ve','Sa','Ra','Ke'];

  const handleChange = (i, val) => {
    const next = [...houses];
    next[i] = val;
    setHouses(next);
    drawChart(next);
  };

  const drawChart = (h) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width, ht = canvas.height;
    ctx.clearRect(0, 0, w, ht);

    // Draw South Indian style chart
    ctx.strokeStyle = 'rgba(99,108,60,0.3)';
    ctx.lineWidth = 1;

    const cellW = w / 4, cellH = ht / 4;

    // Draw grid
    for (let r = 0; r <= 4; r++) {
      ctx.beginPath(); ctx.moveTo(0, r * cellH); ctx.lineTo(w, r * cellH); ctx.stroke();
    }
    for (let c = 0; c <= 4; c++) {
      ctx.beginPath(); ctx.moveTo(c * cellW, 0); ctx.lineTo(c * cellW, ht); ctx.stroke();
    }

    // House positions (South Indian style)
    const positions = [
      [1,0],[2,0],[3,0],[3,1],[3,2],[3,3],
      [2,3],[1,3],[0,3],[0,2],[0,1],[0,0]
    ];

    positions.forEach((pos, i) => {
      const x = pos[0] * cellW, y = pos[1] * cellH;

      // House number
      ctx.font = '9px Inter';
      ctx.fillStyle = 'rgba(99,108,60,0.4)';
      ctx.fillText(houseLabels[i], x + 4, y + 12);

      // Planet text
      if (h[i]) {
        ctx.font = 'bold 11px Inter';
        ctx.fillStyle = '#636c3c';
        ctx.fillText(h[i], x + cellW / 2 - 10, y + cellH / 2 + 4);
      }
    });

    // Mark center
    ctx.fillStyle = 'rgba(232,198,68,0.15)';
    ctx.fillRect(cellW, cellH, cellW * 2, cellH * 2);
    ctx.font = 'italic 14px Cormorant Garamond';
    ctx.fillStyle = 'rgba(99,108,60,0.35)';
    ctx.textAlign = 'center';
    ctx.fillText('Kundli', w / 2, ht / 2 + 5);
    ctx.textAlign = 'start';
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 320;
      canvas.height = 320;
      drawChart(houses);
    }
  }, []);

  return (
    <div className="calc-card">
      <span className="calc-card-tag">Tool 03</span>
      <div className="calc-inner">
        <div>
          <h3 className="calc-h"><i className="fas fa-dharmachakra"></i> Vedic Birth Chart Visualiser</h3>
          <p className="calc-sub">Enter planetary placements to visualise a South-Indian style Kundli. This is an educational tool — for accurate chart reading, consult directly.</p>
          <div className="house-grid">
            {houseLabels.map((label, i) => (
              <div className={`z-cell${houses[i] ? ' filled' : ''}`} key={i}>
                <span className="z-cell-lbl">{label}</span>
                <input
                  value={houses[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  placeholder="—"
                  aria-label={`${label} house planets`}
                />
              </div>
            ))}
          </div>
          <div className="planet-legend">
            {planets.map(p => <span key={p}>{p}</span>)}
          </div>
        </div>
        <div className="chart-col">
          <canvas ref={canvasRef} id="chart-canvas"></canvas>
          <div className="calc-sloka" style={{ marginTop: '18px', width: '100%' }}>
            <p>ग्रहाणां चरितं ज्ञेयम्</p>
            <cite>The movements of planets must be known</cite>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Calculators() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.05 }
    );
    const els = sectionRef.current?.querySelectorAll('[data-reveal]');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="calculators" ref={sectionRef}>
      <div className="section-container">
        <header className="section-header" data-reveal="fade-up">
          <span className="eyebrow-tag">Sacred Tools</span>
          <h2 className="section-title">Explore Your Numbers</h2>
          <p className="section-lead">
            Begin your journey of self-discovery with these Vedic calculators. For deeper insight, book a personal session.
          </p>
        </header>

        <BirthNumberCalc />
        <NameNumberCalc />
        <BirthChartVisualiser />
      </div>
    </section>
  );
}
