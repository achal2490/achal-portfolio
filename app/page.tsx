const outcomes = [
  { value: "€500K", label: "annual analytics product revenue owned", trend: "up" },
  { value: "7%", label: "revenue growth contribution from new products", trend: "up" },
  { value: "80%", label: "adhoc reporting effort reduction", trend: "down", wide: true },
];

const companies = ["SiriusXM", "Munich Re", "PCH International", "AMCS", "Deloitte"];

const caseStudies = [
  {
    number: "01",
    tag: "Enterprise GenAI adoption",
    title: "Turning an AI pilot into a governed path to enterprise adoption",
    decision: "Create a repeatable operating model before expanding adoption.",
    copy: "Defined governance, best practices, SLAs, and the support model for Databricks Genie agents. Enabled initial adoption across Finance, Contact Centre, Marketing, and Content Strategy, then built a reusable dashboard to track usage, adoption, and feedback.",
    meta: ["4 initial business functions", "10+ early business users", "Reusable adoption dashboard"],
    challenge: "Business users needed faster access to trusted data without adding unmanaged AI risk.",
    strategy: "Create governance, support, SLAs, and best practices before scaling adoption.",
    execution: "Partnered with the Data Organization and four business functions to define and measure the operating model.",
    impact: "Enabled initial adoption across approximately 10 users and created a reusable measurement system.",
  },
  {
    number: "02",
    tag: "Enterprise commerce",
    title: "Giving Data and Analytics a clear voice in complex commerce change",
    decision: "Align data dependencies and success measures across a fragmented program.",
    copy: "Leads the Data Product and Analytics dimension of major commerce initiatives involving 10–15 teams and 30–40 cross-functional contributors across the US, UK, Ireland, and EMEA.",
    meta: ["30–40 cross-functional contributors", "4 regions", "Director-to-VP stakeholders"],
    challenge: "Complex commerce programs needed aligned data dependencies, instrumentation, and success measures.",
    strategy: "Give Data and Analytics a clear product voice across a fragmented program.",
    execution: "Coordinated requirements and decisions across product, engineering, finance, billing, analytics, and governance leaders.",
    impact: "Improved decision readiness across global commerce workstreams involving 10–15 teams.",
  },
  {
    number: "03",
    tag: "Commercial product growth",
    title: "Taking an analytics product from customer signal to global markets",
    decision: "Prioritize the highest-value customer needs and sequence expansion by market readiness.",
    copy: "Owned a €500K annual analytics product, continuously prioritized competing customer needs, and helped define pricing and go-to-market strategy for global customers across North America, LATAM, DACH/EMEA, and APAC.",
    meta: ["€500K annual revenue", "Global market strategy", "7% growth contribution"],
    challenge: "Global insurance customers needed analytics products that could scale across markets and use cases.",
    strategy: "Prioritize the highest-value customer needs and sequence expansion by market readiness.",
    execution: "Owned roadmap decisions, pricing input, vendor selection, and go-to-market planning with senior stakeholders.",
    impact: "Owned a €500K annual product and contributed to 7% revenue growth and 15% NPS improvement.",
  },
];

const principles = [
  { title: "Create clarity across functions", copy: "Align business, analytics, engineering, governance, and executive stakeholders around explicit outcomes and trade-offs." },
  { title: "Build reusable systems", copy: "Turn one-off delivery into standards, operating models, support processes, and measurement that can scale." },
  { title: "Connect adoption to value", copy: "Use evidence—from usage and feedback to revenue and market expansion—to guide prioritization and investment." },
];

const experience = [
  { years: "2025—Now", company: "SiriusXM", role: "Staff Data Product Manager", focus: "Enterprise AI adoption · Commerce data leadership · Product operating models" },
  { years: "2023—2025", company: "Munich Re Automation Solutions", role: "Data Product Manager", focus: "Commercial product ownership · Pricing & GTM · Global expansion" },
  { years: "2022—2023", company: "PCH International", role: "Product Manager", focus: "Fintech · Alternative lending · ESG analytics" },
  { years: "2019—2022", company: "AMCS Group", role: "Senior Business Analyst", focus: "Enterprise analytics · Requirements · Automation" },
];

const articles = [
  { number: "01", title: "Empathizing and Defining User Personas", summary: "Using research and generative AI to build and validate a grounded persona.", href: "https://www.linkedin.com/pulse/1-design-thinking-meets-ai-empathizing-defining-user-achal-gupta-dbqre/" },
  { number: "02", title: "Mapping User Journeys", summary: "Combining journey mapping with AI validation to sharpen the problem statement.", href: "https://www.linkedin.com/pulse/2-design-thinking-meets-ai-mapping-user-journeys-achal-gupta-tdi1e/" },
  { number: "03", title: "Ideation and Prioritization", summary: "Applying AI-supported ideation, story mapping, and MoSCoW prioritization.", href: "https://www.linkedin.com/pulse/3-design-thinking-meets-ai-ideation-using-story-mapping-achal-gupta-wfdee/" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Achal Gupta home">AG<span>.</span></a>
        <div className="navLinks">
          <a href="/achal-portfolio/">Home</a><a className="active" href="/achal-portfolio/lab">AI Lab</a><a href="/achal-portfolio/case-studies">Selected work</a><a href="/achal-portfolio/experience">Experience</a><a href="/achal-portfolio/writing">Writing</a>
          <a className="navCta" href="https://ie.linkedin.com/in/achal2490" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span />Staff Data Product Manager at SiriusXM</div>
        <h1>Turning Data &amp; AI strategy into products that scale—and outcomes that matter.</h1>
        <p className="heroCopy">Fourteen-plus years across product strategy, analytics, and engineering—connecting enterprise ambition to governed adoption, commercial outcomes, and global growth.</p>
        <div className="heroActions">
          <a className="primaryButton" href="/achal-portfolio/lab">Explore the AI Lab <span>↗</span></a><a className="textLink" href="mailto:achal2490@gmail.com">Discuss a leadership opportunity</a>
          <a className="textLink" href="/achal-gupta-executive-resume.pdf" download>Download executive résumé ↓</a>
        </div>
        <div className="metrics">{outcomes.map((o) => <article className={o.wide ? "wideMetric" : ""} key={o.value}><strong><i className={o.trend === "down" ? "trendDown" : "trendUp"}>{o.trend === "down" ? "↓" : "↑"}</i>{o.value}</strong><span>{o.label}</span></article>)}</div>
        <p className="scopeLine">Data-side leadership across global commerce programs involving <strong>10–15 teams</strong> and <strong>30–40 cross-functional contributors</strong>.</p>
      </section><section className="labPlaceholder" aria-labelledby="ai-lab-home"><div className="shell"><p className="sectionLabel light">AI Product Lab · Start here</p><h2 id="ai-lab-home">Practical AI product work, not just claims.</h2><p>Explore the current Underwriting IQ discovery project and the product artifacts I use to make AI opportunities testable, governed and measurable.</p><div className="footerLinks"><a href="/achal-portfolio/lab">Open the AI Lab <span>↗</span></a><a href="/achal-portfolio/underwriting-iq">View Underwriting IQ <span>↗</span></a></div></div></section><section className="companyBand" aria-label="Career experience">
        <div className="shell"><span className="companyLead">Experience across</span>{companies.map((company) => <span key={company}>{company}</span>)}</div>
      </section>

      <section className="work shell" id="impact">
        <div className="sectionHeading"><p className="sectionLabel">Selected impact</p><div><h2>Three examples of product judgment in action.</h2><p>Explore the detailed case studies behind my Data, AI, analytics, and commercialization work.</p></div></div>
        <div className="caseList">{caseStudies.map((item) => <article className="case" key={item.number}><div className="caseIndex">{item.number}</div><div className="caseBody"><p className="caseTag">{item.tag}</p><h3>{item.title}</h3><p className="decision">{item.copy}</p><ul>{item.meta.map((m) => <li key={m}>{m}</li>)}</ul></div></article>)}</div>
        <a className="textLink" href="/achal-portfolio/case-studies">View all case studies →</a>
      </section>
'      \n      <section className="leadership" id="leadership">
        <div className="shell"><div className="leadershipIntro"><p className="sectionLabel light">How I lead</p><div><h2>Influence built on clarity, systems, and evidence.</h2><p>My leadership approach for complex Data and AI product environments.</p></div></div><a className="lightLink" href="/achal-portfolio/leadership">Explore leadership approach →</a></div>
      </section>

'      <section className="toolkit"><div className="shell"><div className="sectionHeading compact"><p className="sectionLabel">Product toolkit</p><div><h2>Technical fluency with an operator&apos;s mindset.</h2><p>Comfortable moving from strategy and customer evidence to data requirements, governance, measurement, and delivery.</p></div></div><div className="toolGrid"><span>Databricks Genie AI</span><span>Azure data platforms</span><span>SQL &amp; data pipelines</span><span>Power BI &amp; KPI dashboards</span><span>Data governance &amp; SLAs</span><span>PRD / BRD development</span><span>Roadmaps &amp; prioritization</span><span>Pricing &amp; go-to-market</span></div></div></section>

'      <section className="experience" id="experience">
        <div className="shell"><div className="sectionHeading compact"><p className="sectionLabel">Experience</p><div><h2>Fourteen-plus years across data, analytics, and product.</h2><p>A career arc from engineering and BI to enterprise product leadership.</p></div></div><a className="textLink" href="/achal-portfolio/experience">View full experience →</a></div>
      </section>

''      <section className="writing" id="thinking">
        <div className="shell"><div className="writingIntro"><p className="sectionLabel">Writing</p><div><h2>Product judgment in the age of AI.</h2><p>Three essays on applying design thinking with AI.</p></div></div><a className="textLink" href="/achal-portfolio/writing">Read the article series →</a></div>
      </section>

'      <footer><div className="shell footerGrid"><p className="sectionLabel light">What&apos;s next</p><div><h2>Building the next generation of Data &amp; AI products.</h2><div className="footerLinks"><a href="mailto:achal2490@gmail.com">Discuss a leadership opportunity <span>↗</span></a><a href="/achal-gupta-executive-resume.pdf" download>Download executive profile <span>↓</span></a></div></div></div><div className="shell footerBottom"><span>Achal Gupta</span><span>Data · AI · Analytics Product Leadership</span><a href="https://ie.linkedin.com/in/achal2490" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>
    </main>
  );
}

