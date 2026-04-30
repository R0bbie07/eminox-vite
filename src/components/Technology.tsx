import { Layers, Filter, Wind, Shield, Zap, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES } from '../data';
import SectionBadge from './SectionBadge';
import BlurText from './BlurText';
import Reveal from './Reveal';

const ICONS: Record<string, React.FC<{ size?: number; style?: React.CSSProperties }>> = { Layers, Filter, Wind, Shield, Zap, Globe };
const SLUGS: Record<string, string> = {
  'SCRT®': 'scrt', 'CRT®': 'crt', 'SCR': 'scr',
  'DPF': 'dpf', 'DOC': 'doc', 'Alt Fuels': 'alt-fuels',
};

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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 1, background: 'rgba(255,255,255,0.06)' }}>
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            const slug = SLUGS[s.title];
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <Link to={`/technology/${slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <motion.div
                    className="glass"
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                    style={{ padding: '40px 36px', minHeight: 220, display: 'flex', flexDirection: 'column', gap: 20, cursor: 'pointer', height: '100%' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 44, color: 'var(--color-cobalt)', fontWeight: 400, letterSpacing: '0.005em', textTransform: 'uppercase', lineHeight: 1 }}>
                        {s.title}
                      </span>
                      <div style={{ display: 'flex', gap: 8 }}>
                        {Icon && <Icon size={16} style={{ color: 'rgba(243,237,228,0.3)' }} />}
                        <ArrowRight size={14} style={{ color: 'rgba(27,79,216,0.5)', marginTop: 2 }} />
                      </div>
                    </div>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(243,237,228,0.65)', flex: 1 }}>{s.body}</p>
                  </motion.div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
