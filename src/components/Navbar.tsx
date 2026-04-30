import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Technology', href: '/technology' },
  { label: 'Work',       href: '/work' },
  { label: 'Timeline',   href: '/#timeline' },
  { label: 'About',      href: '/#about' },
  { label: 'FAQ',        href: '/#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return location.pathname === '/';
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.4s, backdrop-filter 0.4s, border-color 0.4s',
        background: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 var(--section-px)', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--color-cream)', textDecoration: 'none' }} aria-label="Eminox home">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 32, width: 32, flexShrink: 0 }} aria-hidden="true">
            <circle cx="16" cy="16" r="15" fill="white" />
            <text x="16" y="22" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="17" fill="#0A0A0A">E</text>
          </svg>
          <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: 18, letterSpacing: '0.06em', color: 'var(--color-cream)' }}>
            Eminox
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hide-mobile" aria-label="Main navigation">
          {NAV_ITEMS.map(item => {
            const active = isActive(item.href);
            const isPage = !item.href.startsWith('/#');
            const el = isPage
              ? <Link key={item.href} to={item.href} style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: active ? 'var(--color-cream)' : 'rgba(243,237,228,0.55)', transition: 'color 0.2s', textDecoration: 'none', borderBottom: active ? '1px solid var(--color-cobalt)' : '1px solid transparent', paddingBottom: 2 }}>{item.label}</Link>
              : <a key={item.href} href={item.href.replace('/#', '#')} style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(243,237,228,0.55)', transition: 'color 0.2s', textDecoration: 'none', paddingBottom: 2 }} className="nav-link">{item.label}</a>;
            return el;
          })}
        </nav>

        <Link
          to="/#contact"
          className="hide-mobile cta-btn"
          style={{
            fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '9px 20px', border: '1px solid rgba(255,255,255,0.2)',
            transition: 'background 0.2s, border-color 0.2s', textDecoration: 'none',
          }}
        >
          Start a project
        </Link>

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
          style={{ background: 'rgba(10,10,10,0.97)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px var(--section-px) 32px' }}
        >
          {NAV_ITEMS.map(item => {
            const isPage = !item.href.startsWith('/#');
            return isPage
              ? <Link key={item.href} to={item.href} onClick={() => setOpen(false)} style={{ display: 'block', padding: '14px 0', fontSize: 15, letterSpacing: '0.06em', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'var(--color-cream)', textDecoration: 'none' }}>{item.label}</Link>
              : <a key={item.href} href={item.href.replace('/#', '#')} onClick={() => setOpen(false)} style={{ display: 'block', padding: '14px 0', fontSize: 15, letterSpacing: '0.06em', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'var(--color-cream)', textDecoration: 'none' }}>{item.label}</a>;
          })}
          <Link
            to="/#contact"
            onClick={() => setOpen(false)}
            style={{ display: 'inline-block', marginTop: 24, padding: '12px 28px', background: 'var(--color-cobalt)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', color: '#fff' }}
          >
            Start a project
          </Link>
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
        .nav-link:hover { color: var(--color-cream) !important; }
        .cta-btn:hover { background: var(--color-cobalt) !important; border-color: var(--color-cobalt) !important; }
      `}</style>
    </header>
  );
}
