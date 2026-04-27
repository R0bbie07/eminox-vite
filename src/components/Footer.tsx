import { FOOTER_LINKS, NAV_ITEMS } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--color-ink)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '64px var(--section-px) 40px' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 40, alignItems: 'start', marginBottom: 56 }} className="footer-top">
          {/* Logo / name */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 400,
              textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-cream)',
              marginBottom: 8,
            }}>
              Eminox
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(243,237,228,0.35)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Est. 1978 · Gainsborough, UK
            </div>
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }} aria-label="Footer navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'rgba(243,237,228,0.45)',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                className="footer-nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Certifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end' }}>
            {['ISO 9001', 'IATF 16949', 'EST Accredited'].map((cert) => (
              <div key={cert} style={{
                fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'rgba(243,237,228,0.3)',
                border: '1px solid rgba(255,255,255,0.08)', padding: '4px 10px',
              }}>
                {cert}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 28,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(243,237,228,0.25)', letterSpacing: '0.1em' }}>
            © {year} Hexadex Ltd t/a Eminox. All rights reserved. CRT® and SCRT® are registered trademarks of Johnson Matthey.
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'rgba(243,237,228,0.3)',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                className="footer-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-nav-link:hover { color: var(--color-cream) !important; }
        .footer-link:hover { color: rgba(243,237,228,0.6) !important; }
        @media (max-width: 900px) {
          .footer-top { grid-template-columns: 1fr !important; gap: 32px !important; }
          .footer-top nav { justify-content: flex-start !important; flex-wrap: wrap !important; }
          .footer-top > div:last-child { align-items: flex-start !important; flex-direction: row !important; flex-wrap: wrap !important; gap: 8px !important; }
        }
      `}</style>
    </footer>
  );
}
