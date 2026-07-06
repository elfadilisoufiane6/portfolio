/**
 * Vertex wordmark — inline SVG so it stays transparent and adapts to the
 * active theme (uses --primary for the mark and --text for the name).
 * variant: 'nav' (default) | 'footer' controls the size.
 */
export default function Logo({ variant = 'nav' }) {
  return (
    <span className={`brand brand--${variant}`}>
      <svg
        className="brand-mark"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Ascension — two ascending chevrons (growth) */}
        <path
          d="M30 66 L50 50 L70 66 L63 72 L50 61 L37 72 Z"
          fill="var(--primary)"
          opacity="0.45"
        />
        <path
          d="M30 48 L50 30 L70 48 L62 55 L50 44 L38 55 Z"
          fill="var(--primary)"
        />
      </svg>
      <span className="brand-name">Vertex</span>
    </span>
  );
}
