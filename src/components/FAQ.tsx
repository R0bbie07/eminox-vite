import * as Accordion from '@radix-ui/react-accordion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import SectionBadge from './SectionBadge';
import BlurText from './BlurText';
import Reveal from './Reveal';

export default function FAQ() {
  const [open, setOpen] = useState<string>('');

  return (
    <section id="faq" style={{ padding: 'var(--section-py) var(--section-px)', background: 'var(--color-ink)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 100, alignItems: 'start' }} className="faq-grid">
          <Reveal>
            <SectionBadge label="FAQ" />
            <BlurText
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(36px, 4.5vw, 68px)',
                lineHeight: 1, textTransform: 'uppercase', letterSpacing: '0.005em', marginBottom: 20,
              }}
            >
              Common{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-cobalt)' }}>questions.</em>
            </BlurText>
            <p style={{ fontSize: 14, color: 'rgba(243,237,228,0.55)', lineHeight: 1.7, maxWidth: 320 }}>
              Technical questions answered by the engineers who build the systems.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Accordion.Root
              type="single"
              collapsible
              value={open}
              onValueChange={setOpen}
              style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
            >
              {FAQ_ITEMS.map((item, i) => (
                <Accordion.Item
                  key={i}
                  value={String(i)}
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <Accordion.Trigger
                    style={{
                      width: '100%', padding: '24px 0', display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between', gap: 16, background: 'none', border: 'none',
                      cursor: 'pointer', textAlign: 'left',
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-display)', fontSize: 'clamp(15px, 1.6vw, 20px)',
                      fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.02em',
                      color: open === String(i) ? 'var(--color-cobalt)' : 'var(--color-cream)',
                      lineHeight: 1.2, transition: 'color 0.2s',
                    }}>
                      {item.q}
                    </span>
                    <span style={{
                      flexShrink: 0, width: 28, height: 28, border: '1px solid rgba(255,255,255,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--color-cobalt)',
                    }}>
                      {open === String(i) ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </Accordion.Trigger>
                  <Accordion.Content
                    style={{ overflow: 'hidden' }}
                    className="faq-content"
                  >
                    <p style={{
                      fontSize: 14, lineHeight: 1.75, color: 'rgba(243,237,228,0.65)',
                      paddingBottom: 24, paddingRight: 44,
                    }}>
                      {item.a}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Reveal>
        </div>
      </div>

      <style>{`
        .faq-grid {
          align-items: start;
        }
        .faq-content[data-state="open"] {
          animation: accordionDown 0.3s ease;
        }
        .faq-content[data-state="closed"] {
          animation: accordionUp 0.3s ease;
        }
        @keyframes accordionDown {
          from { height: 0; opacity: 0; }
          to { height: var(--radix-accordion-content-height); opacity: 1; }
        }
        @keyframes accordionUp {
          from { height: var(--radix-accordion-content-height); opacity: 1; }
          to { height: 0; opacity: 0; }
        }
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
