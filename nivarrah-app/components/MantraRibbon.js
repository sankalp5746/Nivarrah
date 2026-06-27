export default function MantraRibbon() {
  const items = [
    { dev: 'ॐ', eng: 'Lead me from untruth to truth' },
    { dev: 'तमसो मा ज्योतिर्गमय', eng: 'From darkness to light' },
    { dev: 'मृत्योर्मा अमृतं गमय', eng: 'From death to immortality' },
    { dev: 'सत्यम् शिवम् सुन्दरम्', eng: 'Truth, Auspiciousness, Beauty' },
  ];

  // Duplicate for seamless loop
  const allItems = [...items, ...items];

  return (
    <div className="ribbon" aria-label="Sacred mantra">
      <div className="ribbon-track">
        {allItems.map((item, i) => (
          <span className="r-item" key={i}>
            <span className="r-dev" lang="sa">{item.dev}</span>
            {' '}
            <span className="r-sep">·</span>
            {' '}{item.eng}
          </span>
        ))}
      </div>
    </div>
  );
}
