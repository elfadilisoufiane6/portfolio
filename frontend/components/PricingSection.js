'use client';

import Link from 'next/link';
import { PRICING, waLink } from '@/lib/data';
import { useApp } from './Providers';
import Reveal from './Reveal';

export default function PricingSection({ withCompareLink = false }) {
  const { lang, t } = useApp();
  const list = PRICING[lang] || PRICING.fr;

  return (
    <section className="pricing section-pad" id="pricing">
      <div className="container">
        <Reveal variant="up" as="div" className="section-head">
          <span className="section-tag">{t('pricing.tag')}</span>
          <h2>
            {t('pricing.title1')}<span className="gradient-text">{t('pricing.title2')}</span>
          </h2>
          <p>{t('pricing.subtitle')}</p>
        </Reveal>

        <div className="pricing-grid">
          {list.map((p, i) => (
            <Reveal variant="up" delay={i * 110} as="div" className={`price-card ${p.popular ? 'popular' : ''}`} key={i}>
              {p.popular && <div className="popular-badge">{t('pricing.popular')}</div>}
              <div className="price-name">{p.name}</div>
              <div className="price-desc">{p.desc}</div>
              <div className="price-amount">{p.price}</div>
              <div className="price-period">{p.period}</div>

              <div className="price-features">
                {p.features.map((f, fi) => (
                  <div className="pf-item" key={fi}>
                    <div className="pf-check">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <polyline points="1.5,5.5 4,8 8.5,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <a
                href={waLink(`Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20pack%20${encodeURIComponent(p.name)}`)}
                className="btn-primary btn-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.cta}
              </a>
            </Reveal>
          ))}
        </div>

        {withCompareLink && (
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/tarifs" className="btn-secondary">
              {t('pricing.compare')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
