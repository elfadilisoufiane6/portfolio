'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { waLink } from '@/lib/data';
import { LANGS } from '@/lib/i18n';
import { useApp } from './Providers';

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, theme, toggleTheme, t } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/tarifs', label: t('nav.tarifs') },
  ];

  return (
    <nav
      className="navbar"
      style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none' }}
    >
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={() => setOpen(false)} aria-label="Souf Web — accueil">
          <img src="/logo.png" alt="Souf Web" className="nav-logo-img" />
        </Link>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={pathname === l.href ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <div className="lang-switcher" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`lang-btn ${lang === l ? 'active' : ''}`}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('nav.theme.light') : t('nav.theme.dark')}
            title={theme === 'dark' ? t('nav.theme.light') : t('nav.theme.dark')}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <a
            href={waLink()}
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('nav.cta')}
          </a>
        </div>

        <button
          className={`hamburger ${open ? 'open' : ''}`}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
