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
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* apex / vertex peak */}
        <path
          d="M16 3.5 L28.5 26 L21.5 26 L16 15.2 L10.5 26 L3.5 26 Z"
          fill="var(--primary)"
        />
      </svg>
      <span className="brand-name">Vertex</span>
    </span>
  );
}
