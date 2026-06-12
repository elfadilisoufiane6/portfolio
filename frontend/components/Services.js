'use client';

import { SERVICES } from '@/lib/data';
import { useApp } from './Providers';
import Reveal from './Reveal';

export default function Services() {
  const { lang, t } = useApp();
  const list = SERVICES[lang] || SERVICES.fr;
  return (
    <section className="services section-pad" id="services">
      <div className="container">
        <Reveal variant="up" as="div" className="section-head">
          <span className="section-tag">{t('services.tag')}</span>
          <h2>
            {t('services.title1')}<span className="gradient-text">{t('services.title2')}</span>
          </h2>
          <p>{t('services.subtitle')}</p>
        </Reveal>

        <div className="services-grid">
          {list.map((s, i) => (
            <Reveal variant="up" delay={i * 80} as="div" className="srv-card" key={i}>
              <div className="srv-icon">{s.icon}</div>
              <div className="srv-title">{s.title}</div>
              <div className="srv-desc">{s.desc}</div>
              <div className="srv-benefit">✦ {s.benefit}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
