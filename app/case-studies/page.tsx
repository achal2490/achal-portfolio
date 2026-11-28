export const dynamic = 'force-static';
const cases = [
  {
    number: "01", company: "SiriusXM", label: "Enterprise conversational analytics using Databricks Genie",
    title: "From AI Experiment to Enterprise Analytics Capability",
    tags: "Enterprise AI · Conversational Analytics · Data Products · Governance",
    challenge: "Marketing analysts were repeatedly servicing similar requests after email campaigns. Campaign managers wanted to understand opens, clicks, conversions and performance across customer segments, but each new filter or follow-up question required another analyst interaction.",
    did: "Selected email campaign analytics as the initial use case and helped build a Databricks Genie experience over an existing curated dataset. Demonstrated the capability across the organization and identified related opportunities in approximately 4–5 business teams, including Marketing, Finance, Contact Center and Listening. Worked across Engineering, Analytics, Data Governance, Data Operations and Privacy on reusable practices, support expectations, service levels and adoption measurement.",
    decision: "Treat conversational analytics as an enterprise capability rather than a collection of isolated demos, investing in governance, support and measurement alongside individual use cases.",
    outcome: "The initial marketing use case evolved into a reusable enterprise AI capability spanning approximately 4–5 business teams. Quantitative productivity and adoption outcomes are being measured separately.",
    principle: "Enterprise AI scales when experimentation becomes a governed, supported and measurable capability."
  },
  {
    number: "02", company: "Munich Re Automation Solutions", label: "Insight Plus direct data access",
    title: "From Dashboards to Data as a Product",
    tags: "0-to-1 Product · Data Products · Commercialization · Pricing · Customer Discovery",
    challenge: "Customers repeatedly exported data from a mature Tableau-based analytics product into Excel and other systems for executive reporting, their own analytics and machine-learning experimentation. The opportunity was to provide value from the trusted data beneath the dashboards.",
    did: "Conducted approximately seven customer interviews and combined the findings with recurring Customer Success feedback. Proposed Insight Plus, a premium tier combining the existing analytics experience with Direct Data Access. Worked with Commercial, Legal, Architecture and Security on pricing, commercialization and a secure technical approach. Initially focused on APAC.",
    decision: "Package Direct Data Access as a premium tier so it expanded the value of the core analytics product instead of substituting for it.",
    outcome: "At the time of departure, the team had worked with two pilot customers and one customer was live following launch. The product remained at an early commercial stage.",
    principle: "Customer workarounds often reveal a larger product opportunity. Packaging determines whether that opportunity complements or weakens the existing business."
  },
  {
    number: "03", company: "Munich Re Automation Solutions", label: "Roadmap decisions across a global insurer customer base",
    title: "Prioritizing a Global Insurance Analytics Product",
    tags: "Product Strategy · Global Roadmap · Prioritization · AI · Executive Influence",
    challenge: "Managed the roadmap for an insurance analytics product serving 50+ insurers across North America, Europe, the Middle East and Asia. Regional needs differed while Customer Success brought customer-specific requests and engineering and data-science capacity remained finite.",
    did: "Used a value-versus-effort approach considering customer reach, customer value, commercial context, strategic alignment, scalability and engineering effort. Presented recommendations to the VP of Data and worked with Customer Success to manage difficult decisions.",
    decision: "Recommended prioritizing globally reusable AI capabilities over Japanese localization requested by one APAC customer, given the limited global reuse at that point.",
    outcome: "Directed constrained capacity toward reusable global capabilities while balancing regional demands and longer-term product direction. This is presented as a prioritization decision, not a quantified business impact.",
    principle: "Product strategy means deciding which good ideas should not receive resources right now."
  },
  {
    number: "04", company: "PCH International", label: "Alternative working-capital lending using operational data",
    title: "Turning Supply Chain Data into a Financial Product",
    tags: "0-to-1 Product · Fintech · Alternative Data · ESG · Business Model Innovation",
    challenge: "Consumer-product companies can need significant working capital before seasonal demand. PCH’s supply-chain role provided operational information across manufacturing, inventory, shipments, suppliers and sustainability that could support a new financial proposition.",
    did: "Worked within the Fintech organization on a proposition using supply-chain information to support financing risk assessment. Started with an intentionally manual customer journey: a landing page, customer financing requirements, manual follow-up, risk assessment and proposition shaping. In parallel, explored how sustainability and supply-chain data could support ESG-linked financing.",
    decision: "Keep people in the process initially so the team could validate demand and learn how financing and risk assessment worked before committing heavily to automation.",
    outcome: "Moved the proposition from concept into an early customer-facing MVP designed to maximize learning, not a claim of a scaled or automated lending platform.",
    principle: "Proprietary data can create more than better analysis. It can make an entirely new product possible."
  },
  {
    number: "05", company: "AMCS", label: "Analytics delivery, people leadership and predictive analytics exploration",
    title: "From BI Developer to Product and Team Leader",
    tags: "People Leadership · Product Ownership · Analytics · Delivery · Machine Learning",
    challenge: "Joined as a hands-on BI Developer building enterprise reporting with Microsoft SSRS. Over time, the challenge became balancing customer-specific reporting requests with reusable capabilities in the standard product.",
    did: "As Team Lead, managed approximately six people through one-to-ones, team development and morale support. Took responsibility for sprint ceremonies, retrospectives, velocity and delivery reporting when the Scrum Master left, then assumed Product Owner work including user stories, backlog management, prioritization and release coordination. Participated in hiring 2–3 BI developers and a Data Architect. Explored predictive analytics concepts with Azure Machine Learning using the use case ‘Predicting if invoice will be delayed or not.’",
    decision: "Protect the reusable product roadmap while creating a clearer route for customer-specific work. In the predictive analytics exploration, test a concrete invoice-delay use case rather than discuss machine learning only in the abstract.",
    outcome: "Progressed from technical execution into product and people leadership while helping the analytics capability move toward data access and predictive analytics exploration. The historical material does not establish production deployment or measured model performance.",
    principle: "My transition into product management began when the central question changed from how to build the work to what the team should build, why it mattered and where capacity should go."
  }
];

const artifactLabels = {
  '01': ['Operating model', ['Governance', 'Support + SLA', 'Adoption telemetry']],
  '02': ['Product ladder', ['Trusted data', 'Direct access', 'Premium value']],
  '03': ['Prioritization lens', ['Reach', 'Strategic fit', 'Reusable value']],
  '04': ['Learning loop', ['Manual journey', 'Customer signal', 'Next experiment']],
  '05': ['Leadership arc', ['Build', 'Own', 'Lead']],
};

function Artifact({ number }: { number: string }) {
  const [label, items] = artifactLabels[number as keyof typeof artifactLabels];
  return <div className="artifact"><span>{label}</span><div>{items.map((item, index) => <span className="artifactStep" key={item}><b>{item}</b>{index < items.length - 1 && <i>→</i>}</span>)}</div><small>Illustrative product artifact · not a production system diagram</small></div>;
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="detailBlock"><h3>{label}</h3><p>{children}</p></div>;
}

export default function CaseStudiesPage() {
  return <main>
    <nav className="nav shell" aria-label="Primary navigation"><a className="brand" href="/achal-portfolio/" aria-label="Achal Gupta home">AG<span>.</span></a><div className="navLinks"><a href="/achal-portfolio/">Home</a><a href="/achal-portfolio/lab">AI Lab</a><a href="/achal-portfolio/case-studies" className="active">Case studies</a><a href="/achal-portfolio/experience">Work experience</a><a className="navCta" href="https://ie.linkedin.com/in/achal2490" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></nav>
    <header className="caseHero shell"><p className="sectionLabel">Portfolio case studies</p><h1>Product judgment across Data, AI, analytics and commercialization.</h1><p>Five professional case studies showing how I frame problems, make trade-offs, work through constraints and build products that are usable, supportable and commercially coherent.</p></header>
    <section className="caseStudyList shell">{cases.map((item) => <article className="fullCase" key={item.number}><div className="fullCaseTop"><span>{item.number}</span><div><p className="caseTag">{item.company} · {item.label}</p><h2>{item.title}</h2><p className="fullTags">{item.tags}</p></div></div><Artifact number={item.number} /><div className="detailGrid"><Detail label="Challenge">{item.challenge}</Detail><Detail label="What I did">{item.did}</Detail><Detail label="Key decision">{item.decision}</Detail><Detail label="Outcome">{item.outcome}</Detail></div><div className="principle"><span>Product principle</span><p>{item.principle}</p></div></article>)}</section>
    <section className="labPlaceholder"><div className="shell"><p className="sectionLabel light">Independent AI Product Lab</p><h2>Underwriting IQ: discovery before engineering.</h2><p>Phase 1 documents an evidence-boundary-first approach to proactive underwriting rule discovery. It is an independent product case study, not professional employment or a production enterprise deployment.</p><a className="lightLink" href="/achal-portfolio/underwriting-iq">Read the Phase 1 case study →</a></div></section>
    <style>{`.artifact{margin:28px 0;padding:22px;background:#ebe6da;border-left:4px solid #67821f}.artifact>span{display:block;color:#73807d;font-size:10px;text-transform:uppercase;letter-spacing:.12em;font-weight:800}.artifact>div{display:flex;align-items:center;gap:12px;margin:18px 0;flex-wrap:wrap}.artifactStep{display:flex;align-items:center;gap:12px}.artifact b{padding:12px 14px;background:#102624;color:#d9ff63;font-size:13px}.artifact i{color:#67821f;font-style:normal;font-size:20px}.artifact small{color:#73807d;font-size:11px}@media(max-width:600px){.artifact>div{display:grid;grid-template-columns:1fr}.artifact i{text-align:center;transform:rotate(90deg)}}`}</style>
    <footer><div className="shell footerBottom"><span>Achal Gupta</span><span>Data · AI · Analytics Product Leadership</span><a href="/achal-portfolio/">Back to portfolio ↑</a></div></footer>
  </main>;
}

