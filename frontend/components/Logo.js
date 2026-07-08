/* eslint-disable @next/next/no-img-element */
/**
 * Vertex agency logo — the official horizontal lockup (green "Ascension"
 * chevrons + VERTEX wordmark). Two theme variants are rendered and toggled
 * by CSS so the wordmark stays legible on both dark and light backgrounds.
 * variant: 'nav' (default) | 'footer' controls the size.
 */
export default function Logo({ variant = 'nav' }) {
  return (
    <span className={`brand brand--${variant}`}>
      <img
        className="brand-logo brand-logo--dark"
        src="/logo-dark.png"
        alt="Vertex"
        width={688}
        height={128}
      />
      <img
        className="brand-logo brand-logo--light"
        src="/logo-light.png"
        alt="Vertex"
        width={688}
        height={128}
      />
    </span>
  );
}
