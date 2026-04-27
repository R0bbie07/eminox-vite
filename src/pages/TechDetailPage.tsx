import { useParams, Navigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { SCRTVisual, TechGenericVisual } from '../components/Visuals';

const TECH = {
  scrt: {
    title: 'SCRT®',
    eyebrow: 'Technology · Flagship system',
    headline: 'Selective Catalytic Reduction Trap',
    heroAccent: 'SCRT®',
    subtitle: 'The complete diesel aftertreatment solution. CRT® particulate capture combined with SCR NOx conversion. Upgrades Euro II to Euro VI equivalent. 11,000+ deployed.',
    visual: <SCRTVisual />,
    stats: [['90%+','PM reduction'],['90%','NOx reduction'],['11,000+','Deployed'],['JM','Verified']],
    sections: [
      { label: 'What it does', body: 'SCRT® is the combination of CRT® (Continuously Regenerating Trap) and SCR (Selective Catalytic Reduction) in a single integrated system. The CRT® stage uses platinum-group catalyst chemistry to convert diesel particulate matter (PM) into carbon dioxide and water. The SCR stage converts nitrogen oxides (NOx) using urea (AdBlue) as a reductant. The result is up to 90% PM reduction and up to 90% NOx reduction simultaneously — upgrading a Euro II or Euro III vehicle to Euro VI equivalent.' },
      { label: 'How it works', body: 'Exhaust gas first passes through a diesel oxidation catalyst (DOC) which converts hydrocarbons and CO. It then enters the diesel particulate filter (DPF), where PM is captured. The catalyst coating on the DPF uses NO₂ to continuously regenerate — passively, without the high-temperature regeneration events that damage conventional filters. The gas then enters the SCR catalyst, where injected AdBlue is thermally decomposed to ammonia, which reduces NOx to nitrogen and water.' },
      { label: 'Johnson Matthey', body: 'SCRT® was co-developed with Johnson Matthey — the world\'s leading catalyst chemistry company — and both the CRT® and SCRT® systems carry their registered trademark. The catalyst chemistry is licensed exclusively to Eminox for UK and selected international markets. This partnership, established in the 1990s, gives Eminox access to the most advanced platinum-group metal catalyst formulations available.' },
      { label: 'Applications', body: 'On-road: bus, coach, HGV, LCV. Rail: diesel multiple units, locomotives (bespoke design). Stationary: diesel generators, CHP (40kW–560kW). Marine: workboats, offshore support (bespoke). The SCRT® system has been certified under Euro VI equivalent, MCPD, LEZ, ULEZ, and Clean Air Zone (CAZ) regulations. All installations are measured post-fit in real-world operation.' },
    ],
  },
  crt: {
    title: 'CRT®',
    eyebrow: 'Technology · Particulate filtration',
    headline: 'Continuously Regenerating Trap',
    heroAccent: 'CRT®',
    subtitle: 'The world\'s most widely deployed diesel particulate filter retrofit. ~40,000 systems across Europe. Featured on BBC Tomorrow\'s World. Developed in 1994 with Johnson Matthey.',
    visual: <TechGenericVisual label="CRT®" />,
    stats: [['~40,000','Deployed'],['90%+','PM reduction'],['1994','Developed'],['JM','Co-developed']],
    sections: [
      { label: 'What it does', body: 'CRT® (Continuously Regenerating Trap) is a diesel particulate filter that passively regenerates using NO₂ from the engine exhaust — eliminating the need for high-temperature active regeneration. It achieves 90%+ PM reduction without any active control system. The continuous regeneration mechanism makes it highly reliable in urban duty cycles where active DPFs can struggle.' },
      { label: 'How it works', body: 'The CRT® consists of a diesel oxidation catalyst (DOC) upstream of a wall-flow ceramic filter. The DOC converts exhaust NO to NO₂. The elevated NO₂ concentration then oxidises the soot accumulated in the downstream filter continuously during normal operation — as long as the exhaust temperature is above approximately 250°C and sufficient NO₂ is available. No active intervention required.' },
      { label: 'History', body: 'CRT® was developed by Johnson Matthey in collaboration with Eminox in 1994. It was featured on BBC Tomorrow\'s World the same year — an early indicator of its significance. The system went on to be deployed in approximately 40,000 units across Europe, establishing the model for passive diesel particulate filtration that would later be incorporated into OEM designs.' },
      { label: 'Applications', body: 'Bus and coach retrofit. Urban HGV and LCV. Ports, airports and rail depots (stationary diesel plant). The CRT® is approved for use in Low Emission Zones, Clean Air Zones and the London ULEZ. It is the PM filtration stage in the SCRT® system and the foundation technology from which all Eminox aftertreatment systems are developed.' },
    ],
  },
  scr: {
    title: 'SCR',
    eyebrow: 'Technology · NOx reduction',
    headline: 'Selective Catalytic Reduction',
    heroAccent: 'SCR',
    subtitle: 'Urea-based NOx reduction for rail, marine, power generation and standalone on-road applications. Up to 95% NOx reduction.',
    visual: <TechGenericVisual label="SCR" color="rgba(120,200,255,0.7)" />,
    stats: [['95%','NOx reduction'],['AdBlue','Reductant'],['Multi-sector','Applications'],['ORR','Rail certified']],
    sections: [
      { label: 'What it does', body: 'SCR (Selective Catalytic Reduction) converts nitrogen oxides (NOx) in diesel exhaust into harmless nitrogen and water, using urea (commercially known as AdBlue) as the reductant. It achieves up to 95% NOx reduction as a standalone system, making it suitable for applications where PM is already controlled at source or where only NOx compliance is required.' },
      { label: 'How it works', body: 'Aqueous urea solution is injected into the exhaust stream upstream of the SCR catalyst. The heat of the exhaust decomposes the urea into ammonia. In the catalyst, the ammonia reacts with NOx (a mixture of NO and NO₂) to produce nitrogen (N₂) and water (H₂O). Eminox\'s closed-loop dosing control system manages AdBlue injection rate based on exhaust temperature, flow and NOx sensor feedback.' },
      { label: 'Standalone applications', body: 'Where the CRT®/SCRT® combination is not required, SCR can be applied as a standalone system. This is common in: rail (where PM is managed separately), marine (IMO Tier III, ECA compliance), power generation (MCPD compliance, large gensets), and certain on-road applications where vehicles meet PM limits but require additional NOx reduction.' },
      { label: 'Rail certification', body: 'Eminox\'s SCR system for diesel multiple units has been submitted to and certified by the Office of Rail and Road (ORR) — the first such certification in the UK. The rail variant features enhanced vibration resistance, IP-rated enclosures for under-vehicle mounting, and integration with the train\'s existing control systems. The Porterbrook programme used this technology.' },
    ],
  },
  dpf: {
    title: 'DPF',
    eyebrow: 'Technology · Particulate filtration',
    headline: 'Diesel Particulate Filter',
    heroAccent: 'DPF',
    subtitle: 'Wall-flow filtration for OEM and retrofit applications. 90%+ PM reduction. Ceramex partner remanufacturing extends life and protects fleet residual value.',
    visual: <TechGenericVisual label="DPF" color="rgba(243,200,80,0.7)" />,
    stats: [['90%+','PM reduction'],['Wall-flow','Filtration'],['Ceramex','Partner'],['OEM + Retrofit','Applications']],
    sections: [
      { label: 'What it does', body: 'DPF (Diesel Particulate Filter) is a wall-flow ceramic filter that captures particulate matter (soot) from diesel exhaust. It provides 90%+ PM reduction and is the core filtration element in both CRT® and SCRT® systems. Eminox supplies DPF solutions for both OEM integration and retrofit applications across bus, HGV, rail and stationary diesel plant.' },
      { label: 'Ceramex partnership', body: 'Eminox is a partner of Ceramex — the specialist in DPF cleaning and remanufacturing. Through this partnership, fleet operators can extend the life of their Eminox DPF rather than replacing it at end-of-life. Ceramex\'s thermal and ultrasonic cleaning processes restore filter performance to near-new specification, protecting the residual value of the DPF asset and reducing whole-life cost.' },
      { label: 'OEM and retrofit', body: 'Eminox supplies DPF solutions for both OEM integration (new vehicle applications, typically for vehicle manufacturers requiring a certified aftertreatment solution) and retrofit (existing fleet upgrades for regulatory compliance). The retrofit product range covers Euro I to Euro VI engine standards. Custom designs are available for non-standard applications including marine, power generation and construction.' },
      { label: 'Maintenance', body: 'DPF performance is monitored through differential pressure measurement. Eminox provides DPF monitoring guidance and service interval recommendations for all systems supplied. For fleets running SCRT® or CRT® systems, the passive regeneration mechanism reduces forced regeneration events — extending filter life and reducing maintenance costs compared to active DPF systems.' },
    ],
  },
  doc: {
    title: 'DOC',
    eyebrow: 'Technology · Oxidation',
    headline: 'Diesel Oxidation Catalyst',
    heroAccent: 'DOC',
    subtitle: 'Foundation oxidation stage. Converts hydrocarbons and CO into water and CO₂. Up to 30% PM reduction as standalone. Foundation layer beneath CRT® and SCRT®.',
    visual: <TechGenericVisual label="DOC" color="rgba(243,160,80,0.7)" />,
    stats: [['30%','PM reduction (standalone)'],['HC + CO','Converted'],['Foundation','Layer'],['Low pressure','Drop']],
    sections: [
      { label: 'What it does', body: 'DOC (Diesel Oxidation Catalyst) is a flow-through catalyst that converts hydrocarbons (HC), carbon monoxide (CO) and the soluble organic fraction (SOF) of diesel particulate matter into carbon dioxide (CO₂) and water (H₂O). As a standalone system it delivers up to 30% PM reduction. Its primary function in the SCRT® and CRT® systems is to convert NO to NO₂ — creating the NO₂-rich exhaust stream needed for passive DPF regeneration.' },
      { label: 'In system context', body: 'The DOC is always the first element in the Eminox aftertreatment system. In CRT® and SCRT® configurations, it performs two functions: oxidation of hydrocarbons and CO, and conversion of NO to NO₂. The elevated NO₂ from the DOC is what enables the downstream DPF to continuously regenerate without active intervention. Without the DOC stage, passive regeneration is not reliable.' },
      { label: 'Standalone applications', body: 'In applications where full PM or NOx compliance is not required, DOC can be applied as a standalone system. This is common in older off-road equipment, inland waterway vessels and industrial plant where regulatory requirements are less stringent but some emission reduction is required. DOC-only systems are lower cost and simpler to install than multi-stage systems.' },
      { label: 'Specification', body: 'Eminox DOC substrates are platinum-group metal washcoated on ceramic or metallic monoliths. Cell density, channel geometry and PGM loading are selected by the applications team based on engine duty cycle, exhaust temperature and target performance. Low pressure drop design minimises back-pressure impact on engine performance.' },
    ],
  },
  'alt-fuels': {
    title: 'Alt Fuels',
    eyebrow: 'Technology · New ventures',
    headline: 'Alternative Fuels',
    heroAccent: 'Net zero.',
    subtitle: 'Emissions solutions for hydrogen, CNG, LNG, ammonia and biofuel powertrains. Eminox New Ventures partners with Johnson Matthey, BP and Fulcrum BioEnergy.',
    visual: <TechGenericVisual label="ALT" color="rgba(80,200,120,0.7)" />,
    stats: [['H₂ + CNG','LNG · NH₃'],['JM + BP','Partners'],['Fulcrum','BioEnergy'],['Net zero','Pathway']],
    sections: [
      { label: 'The transition', body: 'Eminox New Ventures is the group\'s dedicated alternative fuels and net-zero emissions business. As fleet operators transition from diesel to hydrogen, CNG, LNG, ammonia and biofuel powertrains, new aftertreatment and emissions management challenges emerge. Eminox is working with its established technology partners — Johnson Matthey, BP and Fulcrum BioEnergy — to develop the solutions required for these new powertrains.' },
      { label: 'Hydrogen', body: 'Hydrogen combustion engines produce NOx at levels requiring aftertreatment. Eminox is developing SCR solutions optimised for the exhaust temperature profiles and NOx composition of hydrogen engines — which differ from diesel. Lean NOx traps (LNT) and ammonia-free SCR formulations are under evaluation for hydrogen bus and HGV applications.' },
      { label: 'CNG and LNG', body: 'Compressed and liquefied natural gas engines require three-way catalyst (TWC) systems rather than diesel-specific DOC/DPF/SCR. Eminox supplies TWC aftertreatment for CNG bus and HGV applications, with custom packaging for both OEM and retrofit. LNG cold-start emission management is an active development area.' },
      { label: 'Biofuels', body: 'Eminox is working with Fulcrum BioEnergy on aftertreatment solutions for biofuel-derived synthetic fuels. Hydrotreated vegetable oil (HVO) and synthetic diesel can be used in existing diesel engines with minimal modification, but fuel composition variations require catalyst formulation adjustment. Eminox\'s applications team characterises the emission profile of each fuel and selects the appropriate catalyst solution.' },
    ],
  },
};

export default function TechDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const t = TECH[slug as keyof typeof TECH];
  if (!t) return <Navigate to="/technology" replace />;

  return (
    <>
      <PageHero
        back="/technology"
        backLabel="All technologies"
        eyebrow={t.eyebrow}
        title={t.headline}
        titleAccent={t.heroAccent}
        subtitle={t.subtitle}
        visual={t.visual}
      />

      {/* Stats bar */}
      <div style={{ background: 'hsl(0 0% 3%)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 var(--section-px)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} className="tech-stats">
          {t.stats.map(([v, l], i) => (
            <div key={i} style={{ padding: '40px 0', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingLeft: i > 0 ? 32 : 0 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 400, textTransform: 'uppercase', color: 'var(--color-cobalt)', lineHeight: 1, marginBottom: 6 }}>{v}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(243,237,228,0.4)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content sections */}
      <section style={{ padding: 'var(--section-py) var(--section-px)', background: 'var(--color-ink)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)' }} className="tech-sections">
            {t.sections.map((s, i) => (
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
          .tech-stats { grid-template-columns: 1fr 1fr !important; }
          .tech-sections { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
