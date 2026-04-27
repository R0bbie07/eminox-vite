import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TIMELINE } from '../data';
import SectionBadge from './SectionBadge';
import BlurText from './BlurText';
import Reveal from './Reveal';

export default function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: trackRef });
  const lineWidth = useTransform(scrollXProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="timeline" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)', background: 'var(--color-ink)', overflow: 'hidden' }}>
      <div style={{ padding: '0 var(--section-px)', maxWidth: 1440, margin: '0 auto' }}>
        <Reveal>
          <SectionBadge label="History" />
          <BlurText
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(40px, 5.5vw, 80px)',
              lineHeight: 1, textTransform: 'uppercase', letterSpacing: '0.005em', marginBottom: 20,
            }}
          >
            1978 to{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-cobalt)' }}>today.</em>
          </BlurText>
          <p style={{ fontSize: 16, color: 'rgba(243,237,228,0.65)', maxWidth: 480, lineHeight: 1.6, marginBottom: 56 }}>
            Forty-seven years of engineering history. From thirty bus exhausts in Lincoln to
            11,000+ SCRT® systems across six continents.
          </p>
        </Reveal>
      </div>

      {/* Scroll line indicator */}
      <div style={{ padding: '0 var(--section-px)', marginBottom: 32 }}>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', position: 'relative', maxWidth: 1440, margin: '0 auto' }}>
          <motion.div
            style={{ height: '100%', background: 'var(--color-cobalt)', width: lineWidth }}
          />
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          paddingLeft: 'var(--section-px)' as string,
          paddingRight: 'var(--section-px)' as string,
          paddingBottom: 24,
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
        className="timeline-track"
      >
        {TIMELINE.map((entry, i) => (
          <motion.div
            key={entry.year}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: Math.min(i * 0.04, 0.3), ease: [0.16, 1, 0.3, 1] }}
            style={{
              flexShrink: 0,
              width: 280,
              scrollSnapAlign: 'start',
              background: 'var(--color-ink)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              cursor: 'default',
              transition: 'border-color 0.25s, background 0.25s',
            }}
            className="timeline-card"
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.15)' }}
          >
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 56, color: 'var(--color-cobalt)',
              lineHeight: 1, textTransform: 'uppercase', fontWeight: 400,
            }}>
              {entry.year}
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(243,237,228,0.4)',
                letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8,
              }}>
                {entry.tag}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 400,
                textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 10, lineHeight: 1.1,
              }}>
                {entry.title}
              </h3>
              <p style={{ fontSize: 12, lineHeight: 1.7, color: 'rgba(243,237,228,0.55)' }}>{entry.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .timeline-track::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
