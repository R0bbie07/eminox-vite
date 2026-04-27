import { Layers, Filter, Wind, Shield, Zap, Globe } from 'lucide-react';
import { SERVICES } from '../data';
import SectionBadge from './SectionBadge';
import BlurText from './BlurText';
import Reveal from './Reveal';

const ICONS: Record<string, React.FC<{ size?: number; style?: React.CSSProperties }>> = { Layers, Filter, Wind, Shield, Zap, Globe };

export default function Technology() {
  return (
    <section id="technology" style={{ padding: 'var(--section-py) var(--section-px)', background: 'var(--color-ink)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <Reveal>
          <SectionBadge label="Technology" />
          <BlurText
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(40px, 6vw, 84px)',
              lineHeight: 1, textTransform: 'uppercase', letterSpacing: '0.005em', marginBottom: 20,
            }}
          >
            From DOC to full{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-cobalt)' }}>SCRT®.</em>
          </BlurText>
          <p style={{ fontSize: 16, color: 'rgba(243,237,228,0.65)', maxWidth: 560, lineHeight: 1.6, marginBottom: 80 }}>
            Five technologies. One certified system. Specified, manufactured and supported from Gainsborough.
          </p>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
          gap: 1,
          background: 'rgba(255,255,255,0.06)',
        }}>
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.title} delay={((i % 3) * 0.08)}>
                <div
                  className="glass glass-hover"
                  style={{ padding: '40px 36px', minHeight: 220, display: 'flex', flexDirection: 'column', gap: 20, transition: 'background 0.3s, border-color 0.3s' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <span style={{
                      fontFamily: 'var(--font-display)', fontSize: 44, color: 'var(--color-cobalt)',
                      fontWeight: 400, letterSpacing: '0.005em', textTransform: 'uppercase', lineHeight: 1,
                    }}>
                      {s.title}
                    </span>
                    {Icon && <Icon size={18} style={{ color: 'rgba(243,237,228,0.35)', marginTop: 6 }} />}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(243,237,228,0.65)' }}>{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
