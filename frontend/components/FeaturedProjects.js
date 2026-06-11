'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/lib/data';
import { useApp } from './Providers';

/**
 * @param {{ covers: Record<string, string|null> }} props
 *   covers is a map of slug -> first image URL (or null if folder empty)
 */
export default function FeaturedProjects({ covers = {} }) {
  const { lang, t } = useApp();
  const list = PROJECTS[lang] || PROJECTS.fr;

  return (
    <section className="featured section-pad" id="featured">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">{t('projects.tag')}</span>
          <h2>
            {t('projects.title1')}<span className="gradient-text">{t('projects.title2')}</span>
          </h2>
          <p>{t('projects.subtitle')}</p>
        </div>

        <div className="feat-grid">
          {list.map((p) => {
            const cover = covers[p.slug];
            return (
              <Link href="/projects" className="feat-card" key={p.slug}>
                <div className="feat-cover">
                  {cover ? (
                    <Image
                      src={cover}
                      alt={p.title}
                      width={640}
                      height={400}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="feat-cover-fallback">{p.icon}</div>
                  )}
                  <span className="feat-tag">{p.category}</span>
                </div>
                <div className="feat-body">
                  <div className="feat-title">
                    <span>{p.icon}</span>
                    {p.title}
                  </div>
                  <div className="feat-summary">{p.summary}</div>
                  <div className="feat-metrics">
                    {p.metrics.map((m, i) => (
                      <div className="feat-metric" key={i}>
                        <div className="v">{m.value}</div>
                        <div className="l">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="featured-foot">
          <Link href="/projects" className="btn-secondary">
            {t('projects.viewAll')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
