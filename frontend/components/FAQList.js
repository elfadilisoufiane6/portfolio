'use client';

import { useState } from 'react';
import { FAQ } from '@/lib/data';
import { useApp } from './Providers';
import Reveal from './Reveal';

export default function FAQList() {
  const { lang } = useApp();
  const [openIdx, setOpenIdx] = useState(null);
  const list = FAQ[lang] || FAQ.fr;

  return (
    <div className="faq-list">
      {list.map((item, i) => (
        <Reveal variant="up" delay={i * 60} as="div" className={`faq-item ${openIdx === i ? 'open' : ''}`} key={i}>
          <button
            className="faq-q"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
          >
            <span className="faq-num">0{i + 1}</span>
            <span className="faq-qtext">{item.q}</span>
            <span className="faq-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </button>
          <div className="faq-a">
            <div className="faq-a-inner">{item.a}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
