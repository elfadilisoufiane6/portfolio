import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Vertex — Agence Web Premium Maroc';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at 50% 35%, #0d1a0e 0%, #000000 70%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
            <path d="M30 66 L50 50 L70 66 L63 72 L50 61 L37 72 Z" fill="#7DFF81" fillOpacity="0.45" />
            <path d="M30 48 L50 30 L70 48 L62 55 L50 44 L38 55 Z" fill="#7DFF81" />
          </svg>
          <span
            style={{
              fontSize: 150,
              fontWeight: 800,
              letterSpacing: '-6px',
              color: '#ffffff',
            }}
          >
            Vertex
          </span>
        </div>
        <span
          style={{
            marginTop: 24,
            fontSize: 40,
            fontWeight: 500,
            color: '#7DFF81',
          }}
        >
          Agence Web Premium · Maroc
        </span>
      </div>
    ),
    { ...size }
  );
}
