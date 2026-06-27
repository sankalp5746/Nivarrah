import './globals.css';

export const metadata = {
  title: 'Nivarrah — Vedic Healing by Sunnyy K Parekh | Vedic Numerology, Astrology & Karmic Guidance, Vapi',
  description: 'Nivarrah offers transformative Vedic Numerology, Advanced Vedic Astrology, Karmic Analysis, Business Numerology and Rudraksh guidance by Sunnyy K Parekh. Sessions with no time limit. Vapi, India — worldwide via video.',
  authors: [{ name: 'Sunnyy K Parekh · Nivarrah' }],
  openGraph: {
    type: 'website',
    url: 'https://nivarrah.com/',
    title: 'Nivarrah — Vedic Healing by Sunnyy K Parekh',
    description: 'Decode your destiny through Vedic Numerology, Advanced Vedic Astrology, and Karmic Analysis. Personal sessions with no time limit.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&family=Noto+Serif+Devanagari:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Nivarrah',
              description: 'Vedic Numerology, Advanced Vedic Astrology, Karmic Analysis and Rudraksh guidance',
              founder: { '@type': 'Person', name: 'Sunnyy K Parekh' },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Vapi',
                addressRegion: 'Gujarat',
                addressCountry: 'IN',
              },
              url: 'https://nivarrah.com',
              sameAs: ['https://instagram.com/nivarrah'],
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
