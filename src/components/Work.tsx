import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionBadge from './SectionBadge';
import BlurText from './BlurText';
import Reveal from './Reveal';

const CASES = [
  { num: '01', slug: 'tfl',                 client: 'Transport for London', year: '2017—2020',    sector: 'On-road · Metropolitan bus',    headline: "We rebuilt the lungs of London's bus network.",       stats: [['5,000+','Buses'],['>65%','Share'],['£86.1m','Programme'],['90%','NOx cut']] },
  { num: '02', slug: 'first-group-scotland', client: 'First Group Scotland',  year: '2022—2023',    sector: 'On-road · LEZ compliance',      headline: "205 buses readied for Scotland's first LEZ rollout.", stats: [['205','Buses'],['4','Cities'],['LEZ','Compliant'],['Zero','Disruption']] },
  { num: '03', slug: 'porterbrook',          client: 'Porterbrook',           year: 'Ongoing',      sector: 'Rail · Diesel multiple unit',   headline: 'The first UK rail aftertreatment retrofit.',          stats: [['1st','UK rail'],['DMU','Class'],['ORR','Certified'],['2','Follow-ons']] },
  { num: '04', slug: 'international',        client: 'International',         year: '2008—2017',    sector: 'On-road · Global',              headline: '3,000 SCRT® systems across six markets.',             stats: [['~3,000','Systems'],['6','Markets'],['JM','Verified'],['EU','Certified']] },
  { num: '05', slug: 'power-generation',     client: 'Power Generation',      year: '2020—Present', sector: 'Stationary · MCPD',             headline: 'Genset retrofit without rip-and-replace.',            stats: [['40—560kW','Retrofit'],['MCPD','Directive'],['AMPS','Member'],['5MW','Capability']] },
];

export default function Work() {
  return (
    <section id="work" style={{ padding: 'var(--section-py) var(--section-px)', background: 'hsl(0 0% 5%)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <Reveal>
          <SectionBadge label="Selected work" />
          <BlurText
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(40px, 6vw, 88px)',
              lineHeight: 1, textTransform: 'uppercase', letterSpacing: '0.005em', marginBottom: 20,
            }}
          >
            Five programmes.{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-cobalt)' }}>Five proofs.</em>
          </BlurText>
          <p style={{ fontSize: 16, color: 'rgba(243,237,228,0.65)', maxWidth: 520, lineHeight: 1.6, marginBottom: 80 }}>
            From the £86.1m Transport for London retrofit to the Scottish LEZ programme.
          </p>
        </Reveal>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {CASES.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.04}>
              <Link to={`/work/${c.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <motion.div
                  whileHover={{ paddingLeft: 20, backgroundColor: 'rgba(255,255,255,0.02)' }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr 300px 44px',
                    gap: 40,
                    padding: '44px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                  className="work-row"
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 52, color: 'var(--color-cobalt)', lineHeight: 1, textTransform: 'uppercase' }}>
                    {c.num}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(243,237,228,0.45)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>
                      {c.client} · {c.year}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.5vw, 36px)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.005em', lineHeight: 1.1, marginBottom: 8 }}>
                      {c.headline}
                    </h3>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(243,237,228,0.4)', letterSpacing: '0.1em' }}>
                      {c.sector}
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, paddingLeft: 24, borderLeft: '1px solid rgba(255,255,255,0.1)' }} className="work-stats">
                    {c.stats.map(([v, l], j) => (
                      <div key={j}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--color-cream)', textTransform: 'uppercase', marginBottom: 2 }}>{v}</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(243,237,228,0.45)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{l}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-cobalt)', flexShrink: 0 }}>
                    <ArrowRight size={16} />
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div style={{ marginTop: 40, display: 'flex', justifyContent: 'flex-end' }}>
            <Link to="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(243,237,228,0.5)', textDecoration: 'none', transition: 'color 0.2s' }} className="see-all-link">
              View all case studies <ArrowRight size={12} />
            </Link>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .work-row { grid-template-columns: 60px 1fr 44px !important; gap: 16px !important; }
          .work-stats { display: none !important; }
        }
        .see-all-link:hover { color: var(--color-cream) !important; }
      `}</style>
    </section>
  );
}
