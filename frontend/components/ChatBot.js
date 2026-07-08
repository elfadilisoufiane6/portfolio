'use client';

import { useEffect, useRef, useState } from 'react';
import { useApp } from './Providers';
import { waLink } from '@/lib/data';
import {
  UI, GREETING, FALLBACK, START_CHIPS, INTENTS,
  matchIntent, getIntentById,
} from '@/lib/botKnowledge';

let msgId = 0;
const nextId = () => ++msgId;

export default function ChatBot() {
  const { lang } = useApp();
  const ui = UI[lang] || UI.fr;

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chips, setChips] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const timers = useRef([]);

  // (re)initialise the conversation for the active language
  function boot() {
    setMessages([{ id: nextId(), from: 'bot', text: GREETING[lang] || GREETING.fr }]);
    setChips(START_CHIPS[lang] || START_CHIPS.fr);
  }

  // greet on first open; reset greeting if language changes while closed
  useEffect(() => {
    if (open && messages.length === 0) boot();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (open) boot();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  // auto-scroll to the newest message
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, chips]);

  // clear pending timers on unmount
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function pushBotReply(intent) {
    setTyping(true);
    setChips([]);
    const t = setTimeout(() => {
      setTyping(false);
      const text = intent ? (intent.answer[lang] || intent.answer.fr) : (FALLBACK[lang] || FALLBACK.fr);
      const wantWa = !intent || intent.wa;
      setMessages((m) => [...m, { id: nextId(), from: 'bot', text, wa: wantWa }]);
      const c = intent && intent.chips ? (intent.chips[lang] || intent.chips.fr || []) : [];
      setChips(c);
    }, 650);
    timers.current.push(t);
  }

  function handleUser(text, intentId) {
    const clean = text.trim();
    if (!clean) return;
    setMessages((m) => [...m, { id: nextId(), from: 'user', text: clean }]);
    setInput('');
    const intent = intentId ? getIntentById(intentId) : matchIntent(clean, lang);
    pushBotReply(intent);
  }

  const onSubmit = (e) => { e.preventDefault(); handleUser(input); };

  const waHref = waLink();

  return (
    <>
      {/* launcher */}
      <button
        type="button"
        className={`chat-fab${open ? ' is-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={ui.open}
        aria-expanded={open}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.03 2 11c0 2.5 1.13 4.75 2.95 6.36-.13 1.2-.62 2.5-1.4 3.4-.2.24-.05.6.26.63 1.9.18 3.7-.4 5.02-1.36.99.3 2.05.47 3.17.47 5.52 0 10-4.03 10-9S17.52 2 12 2z" />
            <circle cx="8" cy="11" r="1.3" fill="#0a0a0a" />
            <circle cx="12" cy="11" r="1.3" fill="#0a0a0a" />
            <circle cx="16" cy="11" r="1.3" fill="#0a0a0a" />
          </svg>
        )}
        {!open && <span className="chat-fab-dot" aria-hidden="true" />}
      </button>

      {/* panel */}
      {open && (
        <div className="chat-panel" role="dialog" aria-label={ui.title}>
          <header className="chat-head">
            <div className="chat-head-id">
              <span className="chat-avatar" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
                  <path d="M28 70 L50 51 L72 70 L64 77 L50 63 L36 77 Z" fill="#0a0a0a" opacity="0.55" />
                  <path d="M28 49 L50 27 L72 49 L63 57 L50 45 L37 57 Z" fill="#0a0a0a" />
                </svg>
              </span>
              <div>
                <strong>{ui.title}</strong>
                <span className="chat-status">{ui.subtitle}</span>
              </div>
            </div>
            <button type="button" className="chat-x" onClick={() => setOpen(false)} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </header>

          <div className="chat-body" ref={scrollRef}>
            {messages.map((m) => (
              <div key={m.id} className={`chat-msg chat-msg--${m.from}`}>
                <div className="chat-bubble">{m.text}</div>
                {m.wa && (
                  <a className="chat-wa" href={waHref} target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                    </svg>
                    {ui.waCta}
                  </a>
                )}
              </div>
            ))}
            {typing && (
              <div className="chat-msg chat-msg--bot">
                <div className="chat-bubble chat-typing"><span /><span /><span /></div>
              </div>
            )}
            {chips.length > 0 && (
              <div className="chat-chips">
                {chips.map(([id, label]) => (
                  <button key={id + label} type="button" className="chat-chip" onClick={() => handleUser(label, id)}>
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form className="chat-input" onSubmit={onSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={ui.placeholder}
              aria-label={ui.placeholder}
            />
            <button type="submit" aria-label={ui.send} disabled={!input.trim()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.4 20.4l17.45-7.48a1 1 0 000-1.84L3.4 3.6a.993.993 0 00-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
