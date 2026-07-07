/**
 * Vertex wordmark — the agency icon (the same tile used as the site favicon:
 * green "Ascension" chevrons on a dark rounded tile) followed by the name.
 * variant: 'nav' (default) | 'footer' controls the size and keeps gradient
 * ids unique so both instances on a page render correctly.
 */
export default function Logo({ variant = 'nav' }) {
  const bg = `vx-bg-${variant}`;
  const mk = `vx-mark-${variant}`;
  return (
    <span className={`brand brand--${variant}`}>
      <svg
        className="brand-mark"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={bg} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0f1f11" />
            <stop offset="1" stopColor="#060a07" />
          </linearGradient>
          <linearGradient id={mk} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#aaffad" />
            <stop offset="1" stopColor="#52e057" />
          </linearGradient>
        </defs>
        {/* rounded tile with a faint ring so the edge reads on dark grounds too */}
        <rect width="100" height="100" rx="24" fill={`url(#${bg})`} />
        <rect
          x="0.75"
          y="0.75"
          width="98.5"
          height="98.5"
          rx="23.25"
          fill="none"
          stroke="rgba(125,255,129,0.18)"
          strokeWidth="1.5"
        />
        {/* Ascension — two ascending chevrons (growth) */}
        <path
          d="M30 66 L50 50 L70 66 L63 72 L50 61 L37 72 Z"
          fill={`url(#${mk})`}
          opacity="0.45"
        />
        <path d="M30 48 L50 30 L70 48 L62 55 L50 44 L38 55 Z" fill={`url(#${mk})`} />
      </svg>
      <span className="brand-name">Vertex</span>
    </span>
  );
}
