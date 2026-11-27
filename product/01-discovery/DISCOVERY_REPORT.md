# Underwriting IQ — Phase 1 Product Discovery Report

**Status:** Internal discovery complete  
**Next phase:** Opportunity Assessment and Business Case  
**Evidence basis:** Three retrospective discovery sessions with one domain expert, grounded in firsthand professional experience  
**Evidence boundary:** This is not three independent customer interviews, market validation, product-market fit evidence or a measured experiment.

## 1. Executive summary

Underwriting IQ explores a product that proactively discovers recurring patterns within manually referred life insurance applications and prepares evidence-backed rule-improvement proposals for underwriting expert review.

The product is not intended to replace an automated underwriting engine, existing BI dashboards or human underwriting experts. The core opportunity is to make optimisation discovery more scalable and more frequent using data insurers and underwriting technology providers already possess.

The first discovery phase changed the product boundary in an important way: detailed manual underwriting notes, evidence-collection history and decision rationale were not part of the described analytical dataset. A responsible MVP therefore cannot claim to explain why an underwriter made a decision. It can identify associations between application responses, referral rules, final decisions and ratings, then surface evidence and uncertainty for expert review.

## 2. Discovery methodology

The evidence came from three structured retrospective sessions with one domain expert who had firsthand experience of life insurance underwriting automation and analytics. The sessions covered:

1. Existing workflow and a historical optimisation example.
2. Customer needs, data feasibility and governance.
3. Data limitations, product experience and commercial context.

The findings are classified as:

- **Firsthand professional evidence:** directly recalled experience from the described environment.
- **Domain insight:** interpretation of industry workflow and constraints.
- **Product hypothesis:** a proposition that requires independent customer validation.
- **Commercial hypothesis:** a possible business model, not a validated buying decision.
- **Technical feasibility assumption:** a capability requiring data or engineering validation.
- **Synthetic illustration:** future public demo material created independently.
- **Independently validated research:** not yet completed.
- **Measured experimental result:** not yet available for Underwriting IQ.

## 3. Working problem statement

Life insurers seek to increase straight-through processing (STP) to reduce underwriting costs, accelerate application processing and allow specialist underwriters to focus on complex cases.

Mature automated underwriting platforms capture application data, rule execution and final underwriting outcomes. However, many insurers lack dedicated analytical resources to independently discover opportunities to expand automated coverage. Identifying these opportunities relies on resource-intensive investigations involving customer success teams, analytics experts and underwriting subject matter experts. Optimisation exercises may therefore happen infrequently, leaving potentially valuable rule-improvement opportunities undiscovered.

The product problem is to provide a scalable, accessible mechanism for discovering recurring manual referral patterns, identifying possible rule-coverage gaps and preparing evidence-backed proposals that can be assessed against insurer-specific underwriting philosophy.

This problem statement is technology-agnostic. Agentic AI must be compared with deterministic workflows, conventional analytics and simpler AI approaches.

## 4. Existing workflow and anonymised example

The described optimisation exercise was initiated jointly by a software provider's customer success team, an analytics expert, the life insurer's Chief Underwriter and the insurer's underwriting team.

The existing platform provided Tableau analytics, but many insurers needed specialist support to turn dashboards into actionable investigations. In the anonymised example, analysis identified a recurring recreational activity associated with manual referrals. Historical manual outcomes showed a repeatable rating pattern, while the questionnaire and rules lacked specific coverage for that activity. An approved questionnaire and rule amendment subsequently enabled qualifying applications to receive automated decisions.

The original example is insurer-specific. This public report intentionally excludes the activity name, premium loading, customer identity, rule definition, applicant data, referral volume and measured STP magnitude.

## 5. Current-state workflow

1. Customer Success initiates an optimisation exercise.
2. Analytics experts and insurer stakeholders review existing dashboards.
3. Teams identify rules associated with high manual-referral volume.
4. Analysts investigate underlying application responses.
5. Recurring patterns within referral populations are identified.
6. Final manual decisions and ratings are analysed.
7. Potential questionnaire or rule-coverage gaps are prepared.
8. Candidates are assessed for potential STP uplift and underwriting-philosophy alignment.
9. The Chief Underwriter approves or rejects the proposal.
10. Approved changes follow existing implementation, exhaustive testing, phased rollout and monitoring processes.

**Primary pain points:** large-data investigation effort, specialist dependence, multiple workshops, difficulty connecting patterns to rule coverage, limited simulation and infrequent optimisation.

Some hand-offs and severity rankings are preliminary product-management assessments, not customer-reported survey results.

## 6. Proposed future-state workflow

1. Scheduled or on-demand discovery is initiated.
2. Historical manual referrals and high-volume cohorts are analysed.
3. Recurring application-response patterns are surfaced.
4. Final decisions and ratings are associated with the patterns.
5. Existing rules and questionnaire configuration are investigated.
6. Possible missing, incomplete or overly broad coverage is identified.
7. Exceptions, evidence limitations and policy constraints are surfaced.
8. Potential STP impact is simulated only where technically feasible.
9. A prioritised optimisation backlog is generated.
10. The Chief Underwriter validates or rejects proposals.
11. Existing rule implementation, testing, release and monitoring processes continue.

This is a conceptual product hypothesis, not an implemented capability.

## 7. Stakeholders and personas

| Role | Relationship to product | Need or authority |
|---|---|---|
| Chief Underwriter | Decision authority | Evidence, exceptions, philosophy alignment and final approval |
| Underwriting Manager | Primary-user hypothesis | Accessible insights into recurring referral scenarios |
| Underwriting Analytics Expert | Investigation partner | Efficient pattern, outcome and rule analysis |
| Customer Success Manager | Champion hypothesis | Repeatable customer optimisation and value reviews |
| Underwriting Rules Specialist | Implementation stakeholder | Applicable logic, dependencies and testable proposals |
| Product and Commercial Leadership | Investment stakeholder | Product value, differentiation and monetisation evidence |
| QA, Release and Data Governance | Technical stakeholders | Validation, access, security and release assurance |

The economic buyer and primary user remain hypotheses requiring independent research.

## 8. Jobs to Be Done

- **Chief Underwriter:** When evaluating automation opportunities, understand evidence and policy alignment so appropriate changes can be approved.
- **Underwriting Manager:** When reviewing manual workload, identify recurring scenarios that could potentially be automated.
- **Analytics Expert:** When investigating referrals, efficiently connect patterns to final decisions and ratings.
- **Customer Success Manager:** When conducting customer reviews, identify measurable optimisation opportunities.
- **Rules Specialist:** When evaluating a proposal, understand evidence, logic and potential impact so an approved change can be implemented safely.

## 9. Opportunity Solution Tree

**Desired outcome:** Increase STP through validated underwriting rule improvements.

### Opportunity: discover more automation opportunities

Candidate solutions: automated referral analysis, semantic pattern discovery, outcome analysis and rule-coverage gap identification.

### Opportunity: reduce investigation effort

Candidate solutions: guided investigations, evidence summaries, prioritised backlog, scheduled discovery and on-demand investigations.

### Opportunity: increase confidence

Candidate solutions: grounding, numerical checks, appropriate abstention, philosophy constraints, expert review and audit trail.

The tree describes options to evaluate; it does not establish that an agentic architecture is required.

## 10. Data feasibility and evidence limitations

### Described as available

- Application data captured by the underwriting platform.
- Rule execution and referral information.
- Final underwriting decision and rating.
- Existing underwriting rule definitions within the described software environment.

### Not described as available

- Detailed manual underwriting notes.
- Evidence-collection history.
- Full decision rationale.
- A structured or machine-readable underwriting philosophy.
- Historical executable rule versions and replay infrastructure.

Therefore Underwriting IQ may identify repeatable associations, but it must not conclude why an underwriter decided, whether additional evidence was collected, whether a rating was attributable to a factor, whether a historical pattern is actuarially safe or whether it aligns with current policy.

## 11. Underwriting philosophy as a gate

The objective is not to maximise STP blindly. Candidate opportunities should eventually be assessed against:

- Potential STP uplift.
- Evidence quality and limitations.
- Documented underwriting-philosophy constraints.
- Relevant exceptions.
- Implementation complexity.
- Required expert validation.

Conceptual policy states are **aligned**, **not aligned** and **insufficient information**. Unknown alignment must lead to expert clarification, not an invented policy conclusion. The Chief Underwriter remains the final decision authority.

## 12. Product experience hypotheses

Two modes should eventually be evaluated:

- **Scheduled autonomous discovery:** periodic analysis, opportunity backlog and stakeholder notification. Quarterly cadence is a hypothesis.
- **On-demand investigation:** user-selected referral, product or rule investigation with evidence review.

Both modes could reuse analytical capabilities, but neither is implemented.

## 13. Commercial ecosystem hypotheses

### Underwriting technology providers

Potential value: additional intelligence revenue, differentiation, scalable customer success and greater value from existing analytics.

### Life insurance companies

Potential value: more frequent optimisation, reduced specialist workload, greater value from existing data and approved STP improvements.

The leading commercial hypothesis is B2B2B: an intelligence capability embedded in an underwriting technology provider's platform and licensed to insurers. Alternatives to evaluate include a premium analytics tier, standalone AI add-on and managed optimisation service. No pricing, willingness-to-pay or revenue forecast has been validated.

## 14. Measurement framework

### Direct product outcomes

- Expert-validated opportunities discovered.
- Potential STP uplift associated with validated opportunities.
- Time to discover an actionable opportunity.
- Specialist hours per investigation.
- Investigation frequency.
- Proposal acceptance for further development.

### Future AI evaluation metrics

- Opportunity discovery precision and recall.
- Evidence grounding.
- Numerical accuracy.
- Appropriate abstention.
- Unsupported recommendation rate.
- Simulation accuracy and latency.
- Cost per investigation.
- Unauthorised rule changes: zero.

These are proposed measures, not measured results.

## 15. Assumptions requiring validation

- Quarterly optimisation is valuable enough to change behaviour.
- Underwriters will trust AI-generated proposals.
- Customers will pay separately for the capability.
- Underwriting philosophy can be configured usefully.
- Final decisions and ratings provide sufficient signal for reliable discovery.
- Historical rule replay is feasible.
- Agentic orchestration provides incremental value over simpler alternatives.
- Findings generalise across the life insurance market.

## 16. Independent customer validation plan

Planned participants include Chief Underwriters, Underwriting Managers, Analytics Specialists, Customer Success Managers and Product or Commercial Leaders.

Research should explore actual past optimisation behaviour, investigation pain, data availability, policy configuration, trust, preferred workflow modes, adoption barriers and willingness to pay. Interviews must use non-leading questions and must not be represented as completed until conducted.

## 17. Phase 1 exit assessment

**Complete for portfolio progression:**

- Domain and business context.
- Retrospective discovery.
- Initial segmentation.
- Persona and stakeholder mapping.
- Jobs to Be Done.
- Current and proposed workflow mapping.
- Pain-point analysis.
- Opportunity Solution Tree.
- Initial data-feasibility assessment.
- Assumptions register.
- Decision log and discovery synthesis.

**Outstanding:**

- Independent customer interviews.
- Market and competitor research.
- Willingness-to-pay validation.
- Technical feasibility experiments.
- Policy-configuration validation.
- Historical simulation validation.
- AI architecture comparison.

**Decision gate:** proceed to Phase 2 — Opportunity Assessment and Business Case. This is not approval for full-scale engineering investment.

## 18. Product-management learnings

- Discovery before solution selection prevented an idealised data architecture.
- Jobs to Be Done separated the needs of decision authority, primary user, investigator and champion.
- Workflow mapping exposed specialist coordination as the core product opportunity.
- Assumption mapping separated firsthand evidence from commercial and technical hypotheses.
- The data limitation changed what the product can responsibly recommend.
- Multi-agent architecture must earn its place through comparative evaluation.
- Public publication requires explicit confidentiality and evidence review at each milestone.
