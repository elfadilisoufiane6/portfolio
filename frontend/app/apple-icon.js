import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

// Apple touch icon — iOS applies its own rounded mask, so we render a
// full-bleed dark background with the Vertex "Ascension" chevrons in brand green.
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
          background: 'radial-gradient(circle at 50% 35%, #0f1f11 0%, #060a07 75%)',
        }}
      >
        <svg width="132" height="132" viewBox="0 0 100 100" fill="none">
          <path d="M30 66 L50 50 L70 66 L63 72 L50 61 L37 72 Z" fill="#7DFF81" fillOpacity="0.45" />
          <path d="M30 48 L50 30 L70 48 L62 55 L50 44 L38 55 Z" fill="#7DFF81" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
