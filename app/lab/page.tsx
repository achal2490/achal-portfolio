'use client';

import { useMemo, useState } from 'react';

const dimensions = [['Groundedness','Does the agent answer from approved data and cite its source?'],['Task success','Can a user complete the intended workflow with minimal intervention?'],['Safety','Does the agent refuse unsafe, unauthorized or ambiguous requests?'],['Operations','Are ownership, SLA, escalation and feedback loops explicit?']];

export default function LabPage() {
  const [scores, setScores] = useState([4, 3, 4, 3]);
  const [active, setActive] = useState('placeholder');
  const average = useMemo(() => (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1), [scores]);

  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="/achal-portfolio/">AG<span>.</span></a>
        <div className="navLinks"><a href="/achal-portfolio/">Home</a><a href="/achal-portfolio/">Home</a>
          <a href="/achal-portfolio/case-studies">Case studies</a>
          <a href="/achal-portfolio/experience">Experience</a>
          <a href="/achal-portfolio/leadership">Leadership</a>
          <a href="/achal-portfolio/writing">Writing</a><a href="/achal-portfolio/lab">AI Lab</a>
          <a className="navCta" href="https://ie.linkedin.com/in/achal2490" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </nav>

      <header className="subHero darkHero">
        <div className="shell">
          <p className="sectionLabel light">AI Product Lab</p>
          <h1>Artifacts that make product judgment visible.</h1>
          <p>Small, inspectable tools and operating models for turning Data and AI opportunities into governed products.</p>
          <p className="targetRole">Professional evidence is separated from independent concepts.</p>
        </div>
      </header>

      <section className="iqCard shell"><div><p className="sectionLabel">Independent project · In progress</p><h2>Underwriting IQ</h2><p>Agentic intelligence for automated life insurance underwriting—an end-to-end product discovery and governance case study.</p></div><a className="primaryButton" href="/achal-portfolio/underwriting-iq">Open project <span>↗</span></a></section>

      <section className="labPage shell">
        <div className="labTabs" role="tablist" aria-label="AI product artifacts"><button className={active === 'placeholder' ? 'labTab active' : 'labTab'} onClick={() => setActive('placeholder')}>Workflow demo · coming soon</button>
          <button className={active === 'scorecard' ? 'labTab active' : 'labTab'} onClick={() => setActive('scorecard')}>Agent evaluation scorecard</button>
          <button className={active === 'opportunity' ? 'labTab active' : 'labTab'} onClick={() => setActive('opportunity')}>Opportunity canvas</button>
        </div>

        {active === 'placeholder' && (
          <article className="labArtifact"><p className="sectionLabel">Placeholder · not built yet</p><h2>Interactive agentic workflow</h2><p className="labLead">A practical demo will be added here once the Underwriting IQ workflow, synthetic data and evaluation approach are built and tested.</p><div className="labCallout"><b>Planned scope</b><span>Show a referral-pattern investigation from input data to evidence summary, uncertainty, human review and a proposed next action. This is a future artifact, not a completed product.</span></div></article>
        )}

        {active === 'scorecard' && (
          <article className="labArtifact">
            <div className="labArtifactHeader"><div><p className="sectionLabel">Independent framework</p><h2>Agent Evaluation Scorecard</h2><p>Use this before expanding an agent beyond a pilot. Adjust the sliders to see how product readiness changes.</p></div><div className="labScore"><strong>{average}</strong><span>/ 5 readiness</span></div></div>
            <div className="labRows">{dimensions.map(([name, prompt], i) => <label className="labRow" key={name}><span><b>{name}</b><small>{prompt}</small></span><input type="range" min="1" max="5" value={scores[i]} onChange={e => setScores(scores.map((s, j) => j === i ? Number(e.target.value) : s))} /><strong>{scores[i]}</strong></label>)}</div>
            <div className="labCallout"><b>Decision rule</b><span>Do not scale on model quality alone. Require evidence across user value, governance, and operating readiness.</span></div>
          </article>
        )}

        {active === 'opportunity' && (
          <article className="labArtifact">
            <p className="sectionLabel">Independent concept</p>
            <h2>Agent opportunity canvas</h2>
            <p className="labLead">A lightweight discovery artifact for deciding whether a workflow deserves an agent, automation, or a conventional product experience.</p>
            <div className="labGrid">{[['User problem', 'What decision or task is slow, repetitive, or hard to navigate?'], ['Data readiness', 'Which trusted sources, permissions, and freshness guarantees are required?'], ['Human role', 'Where must a person review, approve, or override the agent?'], ['Value signal', 'Which measurable behavior would prove the workflow is improving?']].map((x, i) => <div className="labCard" key={x[0]}><span>0{i + 1}</span><h3>{x[0]}</h3><p>{x[1]}</p></div>)}</div>
            <div className="labCallout"><b>How to use it</b><span>Write one sentence for each card, then compare the opportunity against a non-agent alternative before committing to build.</span></div>
          </article>
        )}
      </section>

      <footer><div className="shell footerBottom"><span>Achal Gupta</span><span>Data · AI · Analytics Product Leadership</span><a href="/achal-portfolio/">Back to portfolio ↑</a></div></footer>

      <style>{`
        .labPage{padding:70px 0 110px}.demoControls{display:flex;gap:16px;flex-wrap:wrap;margin-top:30px}.demoControls label{display:grid;gap:7px;color:var(--muted);font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.demoControls select{min-width:220px;border:1px solid var(--line);background:#f5f1e8;color:var(--ink);padding:12px;font:inherit;font-size:13px}.demoResult{display:grid;grid-template-columns:1.6fr 1fr;gap:30px;margin-top:34px;padding:28px;background:#e8efd0;border:1px solid var(--line)}.demoResult h3{margin:10px 0;font-size:28px;letter-spacing:-.03em}.demoResult p{margin:0}.demoStats{display:grid;gap:12px;align-content:center}.demoStats span{padding:12px;background:#f5f1e8;color:var(--muted);font-size:12px}.demoStats b{display:block;color:var(--ink);font-size:20px}.demoSteps{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px}.demoSteps span{border:1px solid var(--line);border-radius:99px;padding:8px 12px;color:#7d8987;font-size:11px;font-weight:800}.demoSteps .done{background:var(--ink);color:var(--lime)}.labTabs{display:flex;gap:10px;flex-wrap:wrap;border-bottom:1px solid var(--line);padding-bottom:16px}.labTab{border:1px solid var(--line);background:transparent;color:var(--ink);border-radius:99px;padding:11px 16px;font:inherit;font-size:12px;font-weight:800;cursor:pointer}.labTab.active,.labTab:hover{background:var(--ink);color:white}.labArtifact{padding:48px 0}.labArtifactHeader{display:flex;justify-content:space-between;gap:40px;align-items:flex-start}.labArtifact h2{margin:10px 0 12px;font-size:clamp(34px,4vw,52px);letter-spacing:-.04em}.labArtifact p{max-width:760px;color:var(--muted);font-size:16px;line-height:1.6}.labLead{font-size:19px!important}.labScore{min-width:150px;padding:20px;background:var(--ink);color:white}.labScore strong{display:block;color:var(--lime);font-size:48px;line-height:1}.labScore span{font-size:11px;color:#b7c5c2}.labRows{margin-top:34px;border-top:1px solid var(--line)}.labRow{display:grid;grid-template-columns:1.5fr 2fr 30px;gap:24px;align-items:center;padding:21px 0;border-bottom:1px solid var(--line)}.labRow span{display:grid;gap:5px}.labRow b{font-size:15px}.labRow small{color:var(--muted);font-size:12px;line-height:1.4}.labRow input{accent-color:#67821f}.labRow>strong{font-size:20px}.labGrid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--line);margin-top:34px;border:1px solid var(--line)}.labCard{background:#f5f1e8;padding:26px}.labCard span{color:#7d8987;font-size:11px}.labCard h3{margin:18px 0 8px;font-size:20px}.labCard p{margin:0;font-size:14px}.labCallout{margin-top:34px;padding:22px;background:#e5e0d5;display:flex;gap:22px;align-items:flex-start}.labCallout b{font-size:11px;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap}.labCallout span{color:var(--muted);font-size:14px;line-height:1.5}@media(max-width:800px){.demoResult{grid-template-columns:1fr}.labArtifactHeader{display:grid}.labRow{grid-template-columns:1fr;gap:12px}.labGrid{grid-template-columns:1fr}.labCallout{display:grid;gap:8px}}
      `}</style>
    </main>
  );
}
