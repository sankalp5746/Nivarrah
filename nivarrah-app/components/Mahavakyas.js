export default function Mahavakyas() {
  const items = [
    { dev: 'प्रज्ञानं ब्रह्म', eng: 'Consciousness is Brahman', src: 'Aitareya Upanishad' },
    { dev: 'अहं ब्रह्मास्मि', eng: 'I am Brahman', src: 'Brihadaranyaka Upanishad' },
    { dev: 'तत् त्वम् असि', eng: 'Thou art That', src: 'Chandogya Upanishad' },
    { dev: 'अयम् आत्मा ब्रह्म', eng: 'This Self is Brahman', src: 'Mandukya Upanishad' },
  ];

  return (
    <div className="mahavakyas">
      <div className="maha-grid">
        {items.map((item, i) => (
          <div key={i} style={{ display: 'contents' }}>
            {i > 0 && <div className="maha-sep"></div>}
            <div className="maha-item">
              <p>{item.dev}</p>
              <em>{item.eng}</em>
              <span>{item.src}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
