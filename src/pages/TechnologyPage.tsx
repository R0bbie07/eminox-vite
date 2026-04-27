import { Link } from 'react-router-dom';
import { Layers, Filter, Wind, Shield, Zap, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionBadge from '../components/SectionBadge';
import BlurText from '../components/BlurText';
import Reveal from '../components/Reveal';

const SERVICES = [
  { icon: Layers, title: 'SCRT®',     slug: 'scrt',       body: 'Selective Catalytic Reduction Trap. CRT® particulate capture combined with SCR NOx conversion. Upgrades Euro II to Euro VI equivalent. The flagship system — 11,000+ deployed with Johnson Matthey.' },
  { icon: Filter, title: 'CRT®',      slug: 'crt',        body: 'Continuously Regenerating Trap. The world\'s most widely deployed retrofit DPF. ~40,000 systems across Europe. Featured on BBC Tomorrow\'s World. Developed 1994 with Johnson Matthey.' },
  { icon: Wind,   title: 'SCR',       slug: 'scr',        body: 'Selective Catalytic Reduction. Urea-based NOx reduction for rail, marine, power generation and standalone on-road applications. Up to 95% NOx reduction.' },
  { icon: Shield, title: 'DPF',       slug: 'dpf',        body: 'Diesel Particulate Filter. Wall-flow filtration for OEM and retrofit applications. 90%+ PM reduction. Ceramex partner remanufacturing extends life.' },
  { icon: Zap,    title: 'DOC',       slug: 'doc',        body: 'Diesel Oxidation Catalyst. Foundation oxidation stage. Converts HC and CO. Up to 30% PM reduction standalone. The base layer beneath CRT® and SCRT®.' },
  { icon: Globe,  title: 'Alt Fuels', slug: 'alt-fuels',  body: 'Emissions solutions for hydrogen, CNG, LNG, ammonia and biofuel powertrains. Eminox New Ventures partners with Johnson Matthey, BP and Fulcrum BioEnergy.' },
];

export default function TechnologyPage() {
  return (
    <section style={{ padding: 'var(--section-py) var(--section-px)', paddingTop: 'calc(var(--section-py) + 64px)', background: 'var(--color-ink)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <Reveal>
          <SectionBadge label="Technology" />
          <BlurText style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(40px, 6vw, 84px)', lineHeight: 1, textTransform: 'uppercase', letterSpacing: '0.005em', marginBottom: 20 }}>
            From DOC to full{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-cobalt)' }}>SCRT®.</em>
          </BlurText>
          <p style={{ fontSize: 16, color: 'rgba(243,237,228,0.65)', maxWidth: 560, lineHeight: 1.6, marginBottom: 80 }}>
            Five technologies. One certified system. Specified, manufactured and supported from Gainsborough. Click any card for technical detail.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 1, background: 'rgba(255,255,255,0.06)' }}>
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <Link to={`/technology/${s.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <motion.div
                    className="glass"
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                    style={{ padding: '40px 36px', minHeight: 240, display: 'flex', flexDirection: 'column', gap: 20, cursor: 'pointer', height: '100%' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 44, color: 'var(--color-cobalt)', fontWeight: 400, letterSpacing: '0.005em', textTransform: 'uppercase', lineHeight: 1 }}>
                        {s.title}
                      </span>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <Icon size={16} style={{ color: 'rgba(243,237,228,0.3)' }} />
                        <ArrowRight size={14} style={{ color: 'rgba(80,120,255,0.5)' }} />
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
