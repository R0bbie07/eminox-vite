import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  back: string;
  backLabel: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  visual: React.ReactNode;
}

export default function PageHero({ back, backLabel, eyebrow, title, titleAccent, subtitle, visual }: PageHeroProps) {
  return (
    <section style={{ background: 'var(--color-ink)', minHeight: '80vh', paddingTop: 120, paddingBottom: 0, display: 'flex', flexDirection: 'column' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 var(--section-px)', width: '100%', flex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to={back} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(243,237,228,0.4)', marginBottom: 48, transition: 'color 0.2s' }} className="back-link">
            <ArrowLeft size={12} /> {backLabel}
          </Link>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', paddingBottom: 80 }} className="page-hero-grid">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-cobalt)', display: 'block' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(243,237,228,0.45)' }}>{eyebrow}</span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(40px, 5.5vw, 84px)', lineHeight: 1, textTransform: 'uppercase', letterSpacing: '0.005em', marginBottom: 24 }}>
                {title}{' '}
                {titleAccent && <em style={{ fontStyle: 'italic', color: 'var(--color-cobalt)' }}>{titleAccent}</em>}
              </h1>
              {subtitle && <p style={{ fontSize: 16, color: 'rgba(243,237,228,0.65)', lineHeight: 1.7, maxWidth: 480 }}>{subtitle}</p>}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            {visual}
          </motion.div>
        </div>
      </div>

      <style>{`
        .back-link:hover { color: var(--color-cream) !important; }
        @media (max-width: 768px) {
          .page-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
