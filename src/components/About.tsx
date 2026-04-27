import { MapPin, FlaskConical, Users, CheckCircle } from 'lucide-react';
import { REASONS } from '../data';
import SectionBadge from './SectionBadge';
import BlurText from './BlurText';
import Reveal from './Reveal';

const ICON_MAP: Record<string, React.FC<{ size?: number; strokeWidth?: number }>> = {
  MapPin, FlaskConical, Users, CheckCircle,
};

export default function About() {
  return (
    <section id="about" style={{ padding: 'var(--section-py) var(--section-px)', background: 'hsl(0 0% 5%)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <Reveal>
            <SectionBadge label="Why Eminox" />
            <BlurText
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(40px, 5vw, 76px)',
                lineHeight: 1, textTransform: 'uppercase', letterSpacing: '0.005em', marginBottom: 24,
              }}
            >
              Forty-seven years.{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-cobalt)' }}>One obsession.</em>
            </BlurText>
            <p style={{ fontSize: 16, color: 'rgba(243,237,228,0.65)', maxWidth: 440, lineHeight: 1.7 }}>
              Founded in Lincoln in 1978. Employee-owned since 2024. Every system engineered,
              manufactured and certified from Gainsborough, Lincolnshire. We do one thing — exhaust
              aftertreatment — and have done it longer than any other UK company.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'rgba(255,255,255,0.06)' }}>
            {REASONS.map((r, i) => {
              const Icon = ICON_MAP[r.icon];
              return (
                <Reveal key={r.title} delay={i * 0.07}>
                  <div
                    className="glass glass-hover"
                    style={{ padding: '36px 32px', minHeight: 200, display: 'flex', flexDirection: 'column', gap: 16 }}
                  >
                    {Icon && <Icon size={20} strokeWidth={1.5} style={{ color: 'var(--color-cobalt)' }} />}
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 400,
                        textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 10,
                      }}>
                        {r.title}
                      </div>
                      <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(243,237,228,0.6)' }}>{r.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
