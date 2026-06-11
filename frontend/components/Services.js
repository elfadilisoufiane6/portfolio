'use client';

import { SERVICES } from '@/lib/data';
import { useApp } from './Providers';

export default function Services() {
  const { lang, t } = useApp();
  const list = SERVICES[lang] || SERVICES.fr;
  return (
    <section className="services section-pad" id="services">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">{t('services.tag')}</span>
          <h2>
            {t('services.title1')}<span className="gradient-text">{t('services.title2')}</span>
          </h2>
          <p>{t('services.subtitle')}</p>
        </div>

        <div className="services-grid">
          {list.map((s, i) => (
            <div className="srv-card" key={i}>
              <div className="srv-icon">{s.icon}</div>
              <div className="srv-title">{s.title}</div>
              <div className="srv-desc">{s.desc}</div>
              <div className="srv-benefit">✦ {s.benefit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
