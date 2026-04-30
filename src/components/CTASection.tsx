import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

export default function CTASection() {
  return (
    <section
      style={{
        padding: 'var(--section-py) var(--section-px)',
        background: 'var(--color-cobalt)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Diagonal texture */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, opacity: 0.06,
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(255,255,255,0.8) 0px,
            rgba(255,255,255,0.8) 1px,
            transparent 1px,
            transparent 16px
          )`,
        }}
      />

      <div style={{ maxWidth: 1440, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }} className="cta-inner">
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 400,
                fontSize: 'clamp(40px, 5.5vw, 88px)',
                lineHeight: 1, textTransform: 'uppercase', letterSpacing: '0.005em',
                color: '#fff', marginBottom: 20,
              }}>
                Eminox.{' '}
                <em style={{ fontStyle: 'italic' }}>Engineered for the work that still needs doing.</em>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', maxWidth: 540, lineHeight: 1.65 }}>
                Send us your brief. Fleet size, current standard, target standard, deadline.
                A technical specialist responds within one working day.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
              <a
                href="#contact"
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  background: '#fff', color: 'var(--color-cobalt)',
                  padding: '16px 32px', fontFamily: 'var(--font-mono)', fontSize: 11,
                  letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none',
                  whiteSpace: 'nowrap', transition: 'opacity 0.2s',
                }}
                className="cta-primary"
              >
                Send brief <ArrowRight size={14} />
              </a>
              <a
                href="tel:+441427678000"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  border: '1px solid rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.85)',
                  padding: '14px 32px', fontFamily: 'var(--font-mono)', fontSize: 11,
                  letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none',
                  whiteSpace: 'nowrap', transition: 'border-color 0.2s',
                }}
                className="cta-secondary"
              >
                +44 1427 678 000
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .cta-primary:hover { opacity: 0.9; }
        .cta-secondary:hover { border-color: rgba(255,255,255,0.8) !important; }
        @media (max-width: 900px) {
          .cta-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
