# Portfolio project instructions

- Keep professional evidence, domain insight, hypotheses, synthetic illustrations and measured results explicitly labelled.
- Do not fabricate customer interviews, market validation, metrics, pricing or production outcomes.
- Do not publish applicant data, insurer identifiers, proprietary rules, premium loadings or confidential employer information.
- Keep Underwriting IQ in this repository only as a sanitised public case study and portfolio navigation entry point. Detailed product work belongs in the independent `underwriting-iq` repository.
- Do not push or deploy changes without explicit user approval.

## Mandatory post-change verification

After every code or content change, complete these checks before reporting the work as complete:

1. Inspect every affected route's source and confirm the intended change is present.
2. Check shared components, layouts and page-level overrides for conflicting or duplicated behaviour.
3. Verify all affected internal and external links, including route prefixes used by GitHub Pages.
4. Check the rendered page for every affected route, not only the source files.
5. Confirm the deployment workflow has completed successfully for the exact commit containing the change.
6. Distinguish clearly between source verification, build verification, deployment verification and live rendered-page verification.
7. If deployment is pending, failed, cancelled or not rendered in a browser, do not claim the live change is complete. Report the exact verification limit.
8. For shared navigation, compare the complete navigation structure across every route, allowing only the active-state styling to differ.
9. Before final reporting, run a regression check for 404s, missing navigation items, duplicate controls and stale route-specific markup.
