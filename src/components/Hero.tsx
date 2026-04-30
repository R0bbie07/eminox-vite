import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import OrbitalSVG from './OrbitalSVG';
import { PARTNERS } from '../data';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const orbitalRotate  = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const orbitalOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.12]);
  const textY          = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{ position: 'relative', height: '200vh', background: 'var(--color-ink)' }}
    >
      {/* Crosshatch grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.05,
          backgroundImage: 'linear-gradient(rgba(243,237,228,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(243,237,228,.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Sticky content */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

        {/* Orbital diagram — wrapper controls size/position on mobile via CSS */}
        <div className="orbital-wrap" aria-hidden="true">
          <motion.div
            style={{
              width: '100%', height: '100%',
              rotate: orbitalRotate, opacity: orbitalOpacity,
              willChange: 'transform, opacity',
            }}
          >
            <OrbitalSVG />
          </motion.div>
        </div>

        {/* Text */}
        <motion.div
          style={{ position: 'relative', zIndex: 2, maxWidth: 1440, margin: '0 auto', padding: '0 var(--section-px)', width: '100%', y: textY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-cobalt)', display: 'block' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(243,237,228,0.5)' }}>
              Engineered emission control
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(52px, 10vw, 160px)',
              lineHeight: 0.96,
              letterSpacing: '0.005em',
              textTransform: 'uppercase',
              marginBottom: 40,
            }}
          >
            The{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-cobalt)', position: 'relative', display: 'inline-block' }}>
              Emission
              <span aria-hidden="true" style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: 3, background: 'var(--color-cobalt)', borderRadius: 1, opacity: 0.7 }} />
            </em>
            {' '}Engine
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            style={{ maxWidth: 480 }}
          >
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(243,237,228,0.7)', marginBottom: 36 }}>
              Fleet operators are facing tighter emission zones, older assets, and shrinking compliance windows. Eminox engineers the systems that turn Euro II into Euro VI — for road, rail, marine and power generation.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a
                href="#work"
                style={{
                  padding: '13px 28px', background: 'var(--color-cobalt)', fontSize: 13,
                  letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 2,
                  transition: 'background 0.2s', fontWeight: 500,
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-cobalt-hi)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-cobalt)')}
              >
                See the work
              </a>
              <a
                href="#technology"
                style={{
                  padding: '13px 28px', border: '1px solid rgba(243,237,228,0.22)', fontSize: 13,
                  letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 2,
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(243,237,228,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(243,237,228,0.22)'; }}
              >
                How it works
              </a>
            </div>
          </motion.div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hero-partners"
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(243,237,228,0.35)', marginBottom: 16 }}>
              Trusted by
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {PARTNERS.map(p => (
                <span key={p} style={{ fontSize: 13, color: 'rgba(243,237,228,0.45)', letterSpacing: '0.04em' }}>{p}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, rgba(243,237,228,0.4))', margin: '0 auto' }}
          />
        </motion.div>
      </div>
      <style>{`
        .hero-partners {
          margin-top: 64px;
        }
        .orbital-wrap {
          position: absolute;
          right: -4%;
          top: 50%;
          transform: translateY(-50%);
          width: 680px;
          height: 680px;
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .orbital-wrap {
            width: 320px;
            height: 320px;
            right: -15%;
            top: auto;
            bottom: 8%;
            transform: none;
            opacity: 0.18;
          }
          .hero-partners {
            margin-top: 48px;
          }
        }
      `}</style>
    </section>
  );
}
