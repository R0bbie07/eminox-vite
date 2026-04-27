import { PROCESS_STEPS } from '../data';
import SectionBadge from './SectionBadge';
import BlurText from './BlurText';
import Reveal from './Reveal';

export default function Process() {
  return (
    <section id="process" style={{ padding: 'var(--section-py) var(--section-px)', background: 'var(--color-ink)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <Reveal>
          <SectionBadge label="How it works" />
          <BlurText
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(40px, 5.5vw, 80px)',
              lineHeight: 1, textTransform: 'uppercase', letterSpacing: '0.005em', marginBottom: 20,
            }}
          >
            Brief to{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-cobalt)' }}>compliant.</em>
          </BlurText>
          <p style={{ fontSize: 16, color: 'rgba(243,237,228,0.65)', maxWidth: 500, lineHeight: 1.6, marginBottom: 80 }}>
            No call centres. No gatekeepers. A technical specialist responds within one working day.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'rgba(255,255,255,0.06)' }} className="process-grid">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.09}>
              <div
                className="glass glass-hover"
                style={{ padding: '44px 36px', minHeight: 280, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 80, color: 'rgba(255,255,255,0.06)',
                  lineHeight: 1, userSelect: 'none', marginBottom: 24,
                }}>
                  {step.n}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--color-cobalt)',
                    letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12,
                  }}>
                    Step {step.n}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400,
                    textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: 14, lineHeight: 1.1,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(243,237,228,0.6)' }}>{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
