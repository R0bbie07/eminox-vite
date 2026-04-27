import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import SectionBadge from './SectionBadge';
import BlurText from './BlurText';
import Reveal from './Reveal';

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / perPage);
  const visible = TESTIMONIALS.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="testimonials" style={{ padding: 'var(--section-py) var(--section-px)', background: 'hsl(0 0% 5%)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
          <Reveal>
            <SectionBadge label="Testimonials" />
            <BlurText
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(36px, 5vw, 72px)',
                lineHeight: 1, textTransform: 'uppercase', letterSpacing: '0.005em',
              }}
            >
              What they{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-cobalt)' }}>say.</em>
            </BlurText>
          </Reveal>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous testimonials"
              style={{
                width: 44, height: 44, border: '1px solid rgba(255,255,255,0.15)',
                background: 'transparent', color: 'var(--color-cream)', cursor: page === 0 ? 'not-allowed' : 'pointer',
                opacity: page === 0 ? 0.3 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.2s, opacity 0.2s',
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              aria-label="Next testimonials"
              style={{
                width: 44, height: 44, border: '1px solid rgba(255,255,255,0.15)',
                background: 'transparent', color: 'var(--color-cream)', cursor: page === totalPages - 1 ? 'not-allowed' : 'pointer',
                opacity: page === totalPages - 1 ? 0.3 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.2s, opacity 0.2s',
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(255,255,255,0.06)' }}
            className="testimonials-grid"
          >
            {visible.map((t) => (
              <div
                key={t.name}
                className="glass glass-hover"
                style={{ padding: '44px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 32 }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(18px, 2vw, 26px)',
                  fontWeight: 400, lineHeight: 1.4, color: 'var(--color-cream)',
                }}>
                  "{t.quote}"
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 400,
                    textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--color-cream)',
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(243,237,228,0.4)',
                    letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4,
                  }}>
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div style={{ display: 'flex', gap: 6, marginTop: 32, justifyContent: 'center' }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
              style={{
                width: i === page ? 24 : 6, height: 6, borderRadius: 3,
                background: i === page ? 'var(--color-cobalt)' : 'rgba(255,255,255,0.2)',
                border: 'none', cursor: 'pointer', transition: 'width 0.3s, background 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
