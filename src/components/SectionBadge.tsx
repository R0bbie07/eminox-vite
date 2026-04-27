export default function SectionBadge({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-cobalt)', display: 'block', flexShrink: 0 }} />
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(243,237,228,0.5)' }}>
        {label}
      </span>
    </div>
  );
}
