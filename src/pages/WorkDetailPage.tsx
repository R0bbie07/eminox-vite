import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { BusVisual, ScotlandVisual, RailVisual, GlobalVisual, PowerVisual } from '../components/Visuals';

const CASES = {
  tfl: {
    num: '01',
    client: 'Transport for London',
    year: '2017—2020',
    sector: 'On-road · Metropolitan bus',
    headline: "We rebuilt the lungs of London's bus network.",
    heroTitle: 'Transport for London',
    heroAccent: '£86.1m',
    eyebrow: 'Case study 01 · On-road',
    subtitle: 'The largest single bus retrofit programme in the UK. Eminox supplied 65%+ of all systems, delivering 90% NOx reduction across approximately 5,000 buses in live London operation.',
    visual: <BusVisual />,
    stats: [['5,000+','Buses upgraded'],['65%+','Programme share'],['£86.1m','Programme value'],['90%','NOx cut']],
    sections: [
      {
        label: 'The challenge',
        body: `Transport for London launched the largest bus retrofit programme in UK history to meet the Mayor's Ultra Low Emission Zone targets. The fleet — predominantly Euro II and Euro III — needed to meet Euro VI equivalent NOx and PM standards without engine replacement. The scale was unprecedented: thousands of buses across multiple operators, in live service, to a fixed compliance deadline.`,
      },
      {
        label: 'Our solution',
        body: `Eminox deployed the SCRT® system — our flagship Selective Catalytic Reduction Trap, co-developed with Johnson Matthey. The SCRT® combines a continuously regenerating particulate filter (CRT®) with a selective catalytic reduction (SCR) stage, reducing NOx by up to 90% and PM by 90%+ in a single unit. Our Gainsborough facility supplied and supported over 65% of all systems in the programme. Every installation was measured in real London operation, not just on a dyno.`,
      },
      {
        label: 'The outcome',
        body: `The TfL programme delivered 80%+ NOx reduction in measured on-street performance — exceeding the specification. Approximately 5,000 buses were upgraded to Euro VI equivalent. The programme ran from 2017 to 2020 and remains the defining proof-point for large-scale diesel retrofit in the UK. Eminox was commended by TfL for delivery, technical performance and supply chain reliability throughout.`,
      },
      {
        label: 'Technical specification',
        body: `System: SCRT® (Selective Catalytic Reduction Trap) co-developed with Johnson Matthey. PM reduction: 90%+. NOx reduction: up to 90%. AdBlue dosing: integrated closed-loop system. Certification: Euro VI equivalent, Energy Saving Trust accredited. Manufacturing: IATF 16949 certified, Gainsborough. All systems measured post-installation in live London road operation.`,
      },
    ],
  },
  'first-group-scotland': {
    num: '02',
    client: 'First Group Scotland',
    year: '2022—2023',
    sector: 'On-road · LEZ compliance',
    headline: "205 buses readied for Scotland's first LEZ rollout.",
    heroTitle: 'First Group Scotland',
    heroAccent: 'LEZ',
    eyebrow: 'Case study 02 · On-road',
    subtitle: '205 buses retrofitted across Edinburgh, Dundee, Aberdeen and Glasgow ahead of Scotland\'s February 2023 LEZ deadline — with zero service disruption.',
    visual: <ScotlandVisual />,
    stats: [['205','Buses'],['4','Cities'],['LEZ','Compliant'],['Zero','Disruption']],
    sections: [
      {
        label: 'The challenge',
        body: `Scotland introduced its first Low Emission Zones in four cities simultaneously — Edinburgh, Dundee, Aberdeen and Glasgow. First Group Scotland needed 205 buses to achieve LEZ compliance by February 2023. The window was tight, the fleet was mixed, and any service disruption would directly impact the travelling public.`,
      },
      {
        label: 'Our solution',
        body: `Eminox specified, supplied and supported the retrofit across all 205 vehicles. Each bus received the SCRT® system, bringing the existing Euro III fleet to Euro VI equivalent in both NOx and PM. Our applications engineering team managed scheduling to ensure no bus was off-road longer than required, and our field support team coordinated directly with First Group's depot teams across all four cities.`,
      },
      {
        label: 'The outcome',
        body: `All 205 buses achieved LEZ compliance ahead of the February deadline. Zero service disruption was recorded across the programme. First Group Scotland Engineering Projects Manager Michael Campbell noted: "Eminox's combination of experience, engineering expertise and partnership approach mean this significant project was delivered on time."`,
      },
      {
        label: 'Technical specification',
        body: `System: SCRT® (Selective Catalytic Reduction Trap). Vehicles: Euro III bus fleet. Upgrade: Euro VI NOx and PM equivalent. Cities: Edinburgh, Dundee, Aberdeen, Glasgow. Regulation: Scottish Low Emission Zone. Timeline: 2022–2023. Support: field-based installation and commissioning coordination.`,
      },
    ],
  },
  porterbrook: {
    num: '03',
    client: 'Porterbrook',
    year: 'Ongoing',
    sector: 'Rail · Diesel multiple unit',
    headline: 'The first UK rail aftertreatment retrofit.',
    heroTitle: 'Porterbrook',
    heroAccent: 'Rail first.',
    eyebrow: 'Case study 03 · Rail',
    subtitle: 'Eminox created the UK rail aftertreatment retrofit category — designing, certifying and deploying the first ORR-approved system for diesel multiple units.',
    visual: <RailVisual />,
    stats: [['1st','UK rail'],['DMU','Class'],['ORR','Certified'],['2','Follow-ons']],
    sections: [
      {
        label: 'The challenge',
        body: `The UK rail sector had no established pathway for diesel aftertreatment retrofit. Unlike on-road vehicles, rail aftertreatment systems must meet Office of Rail and Road (ORR) certification, operate under extreme vibration and thermal cycling, and fit within the tight envelope constraints of existing DMU classes. Porterbrook approached Eminox to develop and certify the UK's first such system.`,
      },
      {
        label: 'Our solution',
        body: `Eminox engineered a bespoke aftertreatment system for Porterbrook's diesel multiple unit fleet. The system was designed for the specific vibration profile, thermal duty cycle and under-vehicle envelope of the DMU class. It was submitted to the ORR certification process — a first for this category — and achieved full approval. The system is now in service and generating operational data for further rail programmes.`,
      },
      {
        label: 'The outcome',
        body: `The Porterbrook programme established Eminox as the credible UK rail aftertreatment partner — a category that Eminox effectively created. Two follow-on rail programmes have since been commissioned. The programme is ongoing, with Eminox providing long-term technical support and compliance monitoring.`,
      },
      {
        label: 'Technical specification',
        body: `System: Rail-optimised SCR/SCRT® with enhanced vibration resistance and rail-specific thermal management. Certification: ORR (Office of Rail and Road) approved. Application: Diesel Multiple Unit (DMU). Scope: system design, manufacture, certification support and ongoing service. Status: Ongoing.`,
      },
    ],
  },
  international: {
    num: '04',
    client: 'International',
    year: '2008—2017',
    sector: 'On-road · Global',
    headline: '3,000 SCRT® systems across six markets.',
    heroTitle: 'International',
    heroAccent: '6 markets.',
    eyebrow: 'Case study 04 · Global',
    subtitle: 'From 2008 to 2017, Eminox deployed approximately 3,000 SCRT® systems across six international markets — all Johnson Matthey verified and EU certified.',
    visual: <GlobalVisual />,
    stats: [['~3,000','Systems'],['6','Markets'],['JM','Verified'],['EU','Certified']],
    sections: [
      {
        label: 'The challenge',
        body: `As Euro V and early Euro VI standards took effect across multiple markets, fleet operators and governments outside the UK required proven retrofit solutions. The challenge was scaling Eminox's SCRT® system across different vehicle types, regulatory frameworks and market requirements — from mainland Europe to international deployments — while maintaining the Johnson Matthey-verified performance specification.`,
      },
      {
        label: 'Our solution',
        body: `Eminox leveraged its SCRT® platform — co-developed with Johnson Matthey — to address requirements across six international markets. Each deployment was Johnson Matthey verified and EU certified. The Gainsborough manufacturing facility scaled supply while maintaining IATF 16949 quality standards throughout. Market-specific variants were engineered where regulatory or physical requirements differed.`,
      },
      {
        label: 'The outcome',
        body: `Approximately 3,000 SCRT® systems were deployed across six markets between 2008 and 2017. All systems carried Johnson Matthey verification and EU certification. The international programme established Eminox's SCRT® as a globally validated technology and informed the specification for the subsequent TfL programme — the largest single deployment.`,
      },
      {
        label: 'Technical specification',
        body: `System: SCRT® (Selective Catalytic Reduction Trap), Johnson Matthey co-developed. Verification: Johnson Matthey. Certification: EU emission standards. Scale: ~3,000 systems. Markets: 6 international. Period: 2008–2017. Manufacturing: Gainsborough, IATF 16949.`,
      },
    ],
  },
  'power-generation': {
    num: '05',
    client: 'Power Generation',
    year: '2020—Present',
    sector: 'Stationary · MCPD',
    headline: 'Genset retrofit without rip-and-replace.',
    heroTitle: 'Power generation',
    heroAccent: 'MCPD.',
    eyebrow: 'Case study 05 · Stationary',
    subtitle: 'Eminox delivers MCPD-compliant aftertreatment for stationary diesel gensets from 40kW to 560kW — without requiring engine replacement.',
    visual: <PowerVisual />,
    stats: [['40—560kW','Retrofit range'],['MCPD','Directive'],['AMPS','Member'],['5MW','Capability']],
    sections: [
      {
        label: 'The challenge',
        body: `The Medium Combustion Plant Directive (MCPD) imposed new NOx and PM limits on stationary diesel generators. Operators of standby, prime and CHP gensets faced compliance deadlines without wanting to replace functional generating plant. The requirement was for a retrofit aftertreatment system that could meet MCPD limits without modifying the engine or requiring major plant room modifications.`,
      },
      {
        label: 'Our solution',
        body: `Eminox's stationary aftertreatment range covers diesel gensets from 40kW to 560kW — addressing the majority of MCPD-regulated plant. The system integrates into existing flue arrangements with minimal modification. AdBlue dosing, catalyst selection and control system integration are all handled by Eminox's applications team. Energy Saving Trust accreditation confirms compliance for key UK funding schemes.`,
      },
      {
        label: 'The outcome',
        body: `Eminox is now a recognised MCPD compliance partner for data centres, hospitals, utilities and commercial property operators. The company holds AMPS (Association of Manufacturers and Suppliers of Power Generating Systems) membership and EST accreditation. Total stationary capability extends to 5MW. New Ventures work with Johnson Matthey, BP and Fulcrum BioEnergy is extending the range to hydrogen and biofuel powertrains.`,
      },
      {
        label: 'Technical specification',
        body: `System: SCR / SCRT® stationary variant. Range: 40kW–560kW per unit, 5MW aggregate. Regulation: MCPD (Medium Combustion Plant Directive). Accreditation: Energy Saving Trust, AMPS member. Applications: standby, prime, CHP, data centre, hospital, utility. Status: ongoing from 2020.`,
      },
    ],
  },
};

export default function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const c = CASES[slug as keyof typeof CASES];
  if (!c) return <Navigate to="/work" replace />;

  return (
    <>
      <PageHero
        back="/work"
        backLabel="All case studies"
        eyebrow={c.eyebrow}
        title={c.heroTitle}
        titleAccent={c.heroAccent}
        subtitle={c.subtitle}
        visual={c.visual}
      />

      {/* Stats bar */}
      <div style={{ background: 'hsl(0 0% 3%)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 var(--section-px)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} className="case-stats">
          {c.stats.map(([v, l], i) => (
            <div key={i} style={{ padding: '40px 0', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingLeft: i > 0 ? 32 : 0 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, textTransform: 'uppercase', color: 'var(--color-cream)', lineHeight: 1, marginBottom: 6 }}>{v}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(243,237,228,0.4)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content sections */}
      <section style={{ padding: 'var(--section-py) var(--section-px)', background: 'var(--color-ink)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)' }} className="case-sections">
            {c.sections.map((s, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{ background: 'var(--color-ink)', padding: '48px 40px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--color-cobalt)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 16 }}>
                    {String(i + 1).padStart(2, '0')} / {s.label}
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(243,237,228,0.7)' }}>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .case-stats { grid-template-columns: 1fr 1fr !important; }
          .case-sections { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
