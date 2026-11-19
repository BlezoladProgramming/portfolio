# BLEZOLAD / The Workshop

A **fresh portfolio experience**, not a reskin of the November 15 version. This rebuild introduces a persistent navigation rail, interactive engineering workbench, selectable case dossiers, a problem-first service desk, documentary case studies, and purposeful CSS motion. It retains the previous blue + navy direction.

**Public identity:** BLEZOLAD · Full Stack Web Developer · 2+ years of experience.

**Status:** A complete **implementation working copy**. Static source tests and CSS/TSX syntax parsing passed on 17 November 2026. Full Next.js install/build, visual cross-browser tests, contact-provider delivery and deployment are not verified here. Do not promote as production-ready yet.

## Quick start

Use a new copy, not the live portfolio folder. On the owner's Intel Mac with Node installed through nvm:

```sh
node -v                    # verify Node 20.9+; Node 22 preferred
npm -v
npm install                # creates/updates package-lock.json
npm run dev
```

Open http://localhost:3000. This rebuild does not depend on an animation package or 3D renderer.

After dependency installation:

```sh
npm run test
npm run lint
npm run typecheck
npm run build
npm audit
```

Record the outputs. **Commit the generated `package-lock.json`** after resolving dependency/version issues; then change CI to `npm ci` for repeatable builds. The ZIP does not contain a lockfile because the build environment could not access the npm registry to generate a trustworthy one.

## Explore the visual direction without Next.js

`docs/static-preview.html` is an **offline, non-interactive HTML mockup** of the main homepage design. It is useful for quickly viewing the concept in a browser before installing dependencies. It is **not the running Next.js application**. Open the HTML file locally and use the actual Next server for real interactions.

## Page map

| Route | Purpose |
|---|---|
| `/` | Split-cover + interactive workbench, project explorer, service desk, process |
| `/work` | Alphabetical/curated project archive in a readable list |
| `/work/[slug]` | Case-file documents with current evidence and limitations |
| `/services` | Service-selection interaction and deliverables |
| `/about` | Personal introduction, skills by competency, working philosophy |
| `/contact` | Direct email/WhatsApp or optionally configured form |
| `/privacy` | Contact handling information |
| `/sitemap.xml`, `/robots.txt` | Search metadata routes |
| Missing routes | Designed 404 |

## Structure

- `app/` – Next.js App Router, global CSS, routes and SEO.
- `components/SiteChrome.tsx` – persistent desktop rail, accessible mobile overlay menu.
- `components/StudioScene.tsx` – the tabbed engineering workbench (illustrative graphic).
- `components/ProjectExplorer.tsx` – interactive project selection, never fake screenshots.
- `components/ServiceSelector.tsx` – business-first service selection.
- `components/MotionController.tsx` – progressive-enhancement IntersectionObserver reveals.
- `content/` – typed factual project/service/profile data reused from reviewed planning baseline.
- `lib/contact.ts` – payload checks; `app/api/contact/route.ts` – optional server-side mail handler.
- `tests/` – repeatable structural and source-invariant checks.
- `docs/` – design, evidence, preview, QA log and preserved prior source.

## Contact setup and security gate

The direct `mailto:` and WhatsApp links work without an email API. **The form is intentionally hidden until configured**, rather than showing a submit button that always fails.

If you choose Resend:
1. Verify a sending domain you control with the provider.
2. Set environment variables privately on the host: `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`.
3. Add an effective hosted rate limit/bot-protection solution and test its failure behaviour. The included honeypot and Origin validation are **not a substitute for rate limiting**.
4. Only then set `CONTACT_FORM_ENABLED=true`. Test a real send/receive, malformed payload, delivery failure and spam path before release.
5. Keep credentials out of code, source control, screenshots and the public bundle.

See `.env.example` (placeholders only). If sender security is incomplete, leave the form disabled and rely on the direct contact links.

## Assets & editorial honesty

Project dossier graphics are clearly labelled as **editorial, not screenshots**. They must not be presented as proof that the products are finished. Replace/add authentic approved screenshots with accurate captions when available. Current descriptions preserve real status distinctions: Cinevex in development, Mini-B2B paused, OIMS review pending, 3D tutorial-based. No fake client names, results or testimonials.

See `docs/CONTENT_AND_ASSETS_NEEDED.md` for the exact materials to supply and `docs/VERIFICATION.md` for current evidence/remaining gates.

## Deployment

1. Finish dependency install and patched-version security review.
2. Run all automated and manual quality gates.
3. Populate real approved work evidence; confirm public identity, actual contact links, final domain, and privacy notice.
4. Test `npm run build` and browser interactions at 320/360/375/390/768/1024/1440/1920 widths.
5. Deploy a Vercel **preview**, validate, then request owner approval before production.
6. Retain a rollback deployment; do not overwrite the current live site during experimentation.
