import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.4s, backdrop-filter 0.4s, border-color 0.4s',
        background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--color-cream)' }}>
          Eminox
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hide-mobile">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(243,237,228,0.65)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-cream)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(243,237,228,0.65)')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hide-mobile"
          style={{
            fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '9px 20px', border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 2, transition: 'background 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-cobalt)'; e.currentTarget.style.borderColor = 'var(--color-cobalt)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
        >
          Start a project
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-cream)', padding: 4 }}
          className="show-mobile"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: 'rgba(10,10,10,0.97)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px 32px 32px' }}
        >
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '12px 0', fontSize: 15, letterSpacing: '0.06em', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'var(--color-cream)' }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{ display: 'inline-block', marginTop: 24, padding: '12px 28px', background: 'var(--color-cobalt)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: 2 }}
          >
            Start a project
          </a>
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hide-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
