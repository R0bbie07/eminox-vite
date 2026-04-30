import { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import SectionBadge from './SectionBadge';
import BlurText from './BlurText';
import Reveal from './Reveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', fleet: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
    color: 'var(--color-cream)', fontFamily: 'var(--font-body)', fontSize: 14, padding: '14px 16px',
    outline: 'none', transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'rgba(243,237,228,0.45)', display: 'block', marginBottom: 8,
  };

  return (
    <section id="contact" style={{ padding: 'var(--section-py) var(--section-px)', background: 'hsl(0 0% 5%)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80 }} className="contact-grid">
          <Reveal>
            <SectionBadge label="Contact" />
            <BlurText
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(36px, 4.5vw, 68px)',
                lineHeight: 1, textTransform: 'uppercase', letterSpacing: '0.005em', marginBottom: 32,
              }}
            >
              Talk to{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-cobalt)' }}>engineering.</em>
            </BlurText>
            <p style={{ fontSize: 15, color: 'rgba(243,237,228,0.6)', lineHeight: 1.7, maxWidth: 380, marginBottom: 56 }}>
              No gatekeepers. Your brief lands directly with the applications team in Gainsborough.
              Technical response within one working day.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { icon: MapPin, label: 'Address', value: 'Corringham Road Industrial Estate, Gainsborough, Lincolnshire, DN21 1QB' },
                { icon: Phone, label: 'Telephone', value: '+44 (0)1427 678 000' },
                { icon: Mail, label: 'Email', value: 'enquiries@eminox.com' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 36, height: 36, border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={14} style={{ color: 'var(--color-cobalt)' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(243,237,228,0.35)', marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 14, color: 'rgba(243,237,228,0.75)', lineHeight: 1.5 }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <div style={{
                border: '1px solid rgba(255,255,255,0.1)', padding: '80px 48px', textAlign: 'center',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
              }}>
                <div style={{ width: 48, height: 48, border: '1px solid var(--color-cobalt)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowRight size={20} style={{ color: 'var(--color-cobalt)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Brief received</h3>
                <p style={{ fontSize: 14, color: 'rgba(243,237,228,0.55)', maxWidth: 320, lineHeight: 1.65 }}>
                  A technical specialist will review your application and respond within one working day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label htmlFor="name" style={labelStyle}>Name</label>
                    <input id="name" name="name" required value={form.name} onChange={handleChange} style={inputStyle} className="contact-input" />
                  </div>
                  <div>
                    <label htmlFor="company" style={labelStyle}>Company</label>
                    <input id="company" name="company" required value={form.company} onChange={handleChange} style={inputStyle} className="contact-input" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} style={inputStyle} className="contact-input" />
                </div>
                <div>
                  <label htmlFor="fleet" style={labelStyle}>Fleet size / application</label>
                  <select id="fleet" name="fleet" value={form.fleet} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }} className="contact-input">
                    <option value="">Select…</option>
                    <option value="1-10">1–10 vehicles</option>
                    <option value="11-50">11–50 vehicles</option>
                    <option value="51-200">51–200 vehicles</option>
                    <option value="200+">200+ vehicles</option>
                    <option value="rail">Rail</option>
                    <option value="marine">Maritime</option>
                    <option value="power">Power generation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" style={labelStyle}>Brief</label>
                  <textarea
                    id="message" name="message" rows={5} value={form.message} onChange={handleChange}
                    placeholder="Current standard, target standard, vehicle types, compliance deadline..."
                    style={{ ...inputStyle, resize: 'vertical' }} className="contact-input"
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    background: 'var(--color-cobalt)', color: '#fff', border: 'none',
                    padding: '16px 32px', fontFamily: 'var(--font-mono)', fontSize: 11,
                    letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer',
                    transition: 'background 0.2s', width: '100%',
                  }}
                  className="contact-submit"
                >
                  Send brief <ArrowRight size={14} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>

      <style>{`
        .contact-input:focus { border-color: rgba(61,122,58,0.5) !important; }
        .contact-input::placeholder { color: rgba(243,237,228,0.2); }
        .contact-submit:hover { background: rgba(61,122,58,0.85) !important; }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
