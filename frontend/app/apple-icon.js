import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

// Apple touch icon — iOS applies its own rounded mask, so we render a
// full-bleed dark background with the glowing Vertex "Ascension" chevrons.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at 50% 40%, #1a1a1a 0%, #0a0a0a 78%)',
        }}
      >
        <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
          <defs>
            <linearGradient id="vx-mark" x1="0" y1="0" x2="0.4" y2="1">
              <stop offset="0" stopColor="#b6ff5a" />
              <stop offset="0.55" stopColor="#5fe36a" />
              <stop offset="1" stopColor="#35c96a" />
            </linearGradient>
          </defs>
          <path d="M28 70 L50 51 L72 70 L64 77 L50 63 L36 77 Z" fill="url(#vx-mark)" fillOpacity="0.72" />
          <path d="M28 49 L50 27 L72 49 L63 57 L50 45 L37 57 Z" fill="url(#vx-mark)" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
