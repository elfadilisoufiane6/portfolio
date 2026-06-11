'use client';

import PricingSection from '@/components/PricingSection';
import FAQList from '@/components/FAQList';
import { waLink } from '@/lib/data';
import { useApp } from './Providers';

function Cell({ value }) {
  if (value === true) return <span className="yes">✓</span>;
  if (value === false) return <span className="no">—</span>;
  return <span>{value}</span>;
}

export default function TarifsRenderer() {
  const { t } = useApp();

  const COMPARE = [
    { feature: t('compare.pages'),       starter: t('compare.1to3'),     pro: t('compare.upto8'),    premium: t('compare.unlimited') },
    { feature: t('compare.responsive'),  starter: true,                  pro: true,                   premium: true },
    { feature: t('compare.seo'),         starter: true,                  pro: true,                   premium: true },
    { feature: t('compare.wa'),          starter: true,                  pro: true,                   premium: true },
    { feature: t('compare.anim'),        starter: false,                 pro: true,                   premium: true },
    { feature: t('compare.multi'),       starter: false,                 pro: true,                   premium: true },
    { feature: t('compare.book'),        starter: false,                 pro: true,                   premium: true },
    { feature: t('compare.seoAdv'),      starter: false,                 pro: false,                  premium: true },
    { feature: t('compare.ecom'),        starter: false,                 pro: false,                  premium: true },
    { feature: t('compare.cms'),         starter: false,                 pro: false,                  premium: true },
    { feature: t('compare.blog'),        starter: false,                 pro: false,                  premium: true },
    { feature: t('compare.analytics'),   starter: false,                 pro: false,                  premium: true },
    { feature: t('compare.host'),        starter: false,                 pro: false,                  premium: true },
    { feature: t('compare.rev'),         starter: '1',                   pro: '3',                    premium: t('compare.unlimited') },
    { feature: t('compare.support'),     starter: '—',                   pro: t('compare.30d'),       premium: t('compare.60d') },
    { feature: t('compare.delay'),       starter: t('compare.5to7'),     pro: t('compare.10to14'),    premium: t('compare.scope') },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">{t('nav.tarifs')}</span>
          <h1>
            {t('tarifs.title1')}<span className="gradient-text">{t('tarifs.title2')}</span>
          </h1>
          <p>{t('tarifs.subtitle')}</p>
        </div>
      </section>

      <PricingSection />

      <section className="section-pad" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t('tarifs.compareTag')}</span>
            <h2>
              {t('tarifs.compareTitle1')}<span className="gradient-text">{t('tarifs.compareTitle2')}</span>
            </h2>
            <p>{t('tarifs.compareSubtitle')}</p>
          </div>

          <div className="compare-table">
            <table>
              <thead>
                <tr>
                  <th>{t('tarifs.compareHeader')}</th>
                  <th>Starter</th>
                  <th>Pro</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={i}>
                    <td>{row.feature}</td>
                    <td><Cell value={row.starter} /></td>
                    <td><Cell value={row.pro} /></td>
                    <td><Cell value={row.premium} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t('tarifs.faqTag')}</span>
            <h2>
              {t('tarifs.faqTitle1')}<span className="gradient-text">{t('tarifs.faqTitle2')}</span>
            </h2>
            <p>{t('tarifs.faqSubtitle')}</p>
          </div>
          <FAQList />
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-block">
            <h2>
              {t('tarifs.ctaTitle1')}<span className="gradient-text">{t('tarifs.ctaTitle2')}</span>
            </h2>
            <p>{t('tarifs.ctaSubtitle')}</p>
            <div className="actions">
              <a href={waLink()} className="btn-wa btn-lg" target="_blank" rel="noopener noreferrer">
                {t('tarifs.ctaBtn')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
