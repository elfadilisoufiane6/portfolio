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
          <svg width="120" height="120" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 3.5 L28.5 26 L21.5 26 L16 15.2 L10.5 26 L3.5 26 Z"
              fill="#7DFF81"
            />
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
