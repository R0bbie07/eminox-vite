import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { STATS } from '../data';
import Reveal from './Reveal';

function CountUp({ target, suffix = '' }: { target: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true });
  const raw = target.replace(/[^0-9.]/g, '');
  const prefix = target.replace(/[0-9,.]+.*/, '');
  const numericTarget = parseFloat(raw.replace(/,/g, ''));
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView || isNaN(numericTarget)) return;
    const controls = animate(mv, numericTarget, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [inView, numericTarget, mv]);

  const display = useTransform(mv, (v) => {
    if (isNaN(numericTarget)) return target;
    const formatted = v >= 1000
      ? Math.round(v).toLocaleString('en-GB')
      : Math.round(v).toString();
    return `${prefix}${formatted}${suffix}`;
  });

  if (isNaN(numericTarget)) {
    return <span ref={ref}>{target}{suffix}</span>;
  }

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
    </span>
  );
}

export default function Stats() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Array<{ x: number; y: number; vx: number; vy: number; r: number; a: number }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random(),
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(80,120,255,${p.a * 0.5})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(80,120,255,${(1 - dist / 100) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="stats"
      style={{ padding: 'var(--section-py) var(--section-px)', background: 'hsl(0 0% 3%)', position: 'relative', overflow: 'hidden' }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      />
      <div style={{ maxWidth: 1440, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'rgba(255,255,255,0.06)' }} className="stats-grid">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div
                className="glass"
                style={{ padding: '56px 40px', textAlign: 'center' }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 5vw, 80px)',
                  fontWeight: 400, color: 'var(--color-cream)', textTransform: 'uppercase',
                  lineHeight: 1, marginBottom: 12,
                }}>
                  <CountUp target={s.value} suffix={s.suffix} />
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(243,237,228,0.45)',
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                }}>
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
