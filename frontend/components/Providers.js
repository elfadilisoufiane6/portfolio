'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { DEFAULT_LANG, STRINGS, t as translate } from '@/lib/i18n';

const Ctx = createContext(null);

export function Providers({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);
  const [theme, setThemeState] = useState('dark');
  const [ready, setReady] = useState(false);

  // hydrate from localStorage on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('soufweb_lang');
      const savedTheme = localStorage.getItem('soufweb_theme');
      if (savedLang && STRINGS[savedLang]) setLangState(savedLang);
      if (savedTheme === 'light' || savedTheme === 'dark') setThemeState(savedTheme);
    } catch {}
    setReady(true);
  }, []);

  // apply lang/dir/theme attributes to html root
  useEffect(() => {
    if (!ready) return;
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    html.setAttribute('data-theme', theme);
  }, [lang, theme, ready]);

  function setLang(l) {
    setLangState(l);
    try { localStorage.setItem('soufweb_lang', l); } catch {}
  }

  function setTheme(t) {
    setThemeState(t);
    try { localStorage.setItem('soufweb_theme', t); } catch {}
  }

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const value = {
    lang,
    setLang,
    theme,
    setTheme,
    toggleTheme,
    t: (key) => translate(lang, key),
    dir: lang === 'ar' ? 'rtl' : 'ltr',
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useApp must be used within <Providers>');
  return v;
}
