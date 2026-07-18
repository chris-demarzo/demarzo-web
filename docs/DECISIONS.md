# Decisions and open items

A running record of assumptions behind this site and decisions still open.
Update when anything here is resolved.

## Decided (2026-07-17)

| Decision | Choice | Notes |
|---|---|---|
| Business name | **Studio 772** (renamed 2026-07-17, was DeMarzo Web) | The 772 area code = the Treasure Coast; instantly local, modern-studio sound. Chosen after two candidate rounds with live RDAP domain checks and collision searches (Sailfish/Treasure Coast/Sandbar directions all had incumbent conflicts; Studio 772 came back clean). Centralized in `src/site.config.ts`. |
| Domain | studio772.com | **Purchased via Cloudflare Registrar 2026-07-17.** `site` in `astro.config.mjs` updated; Chris attaches it as the Pages custom domain (+ www) in the dashboard. |
| Repo/directory | `demarzo-web` (unchanged for now) | GitHub repo + Cloudflare Pages project keep the old name until after domain cutover — renaming mid-flight risks breaking the Pages git integration for zero user-facing gain. Revisit post-launch. |
| Niche & geography | Local service businesses, Port St. Lucie / Treasure Coast, FL | |
| Public pricing | Shown, with honest founding-client framing | Founding $1,200–$1,500; standard $1,800–$2,500; 50% deposit; two revision rounds. |
| Contact method | `mailto:` from `SITE.email` | Placeholder address until the business inbox exists. |
| Visual direction | Dark-first "proposal document, made visual" — deep blue-black, luminous teal, blueprint grid textures, ruler-tick underlines, Space Grotesk + Inter, mono spec accents | Zero client-side JS. Chosen 2026-07-17 over a light variant after side-by-side comparison; the light version is preserved on the `design/light` branch. |
| Run PSL framing | Owned demonstration project, explicitly labeled | Never described as client work; no invented metrics. |

## Assumptions (unvalidated — revisit)

- **Pricing is a working hypothesis**, not validated market pricing. The
  site presents the numbers as *my* quoted ranges, which is honest, but the
  ranges themselves may need adjustment after real conversations.
- **Care plan pricing** is intentionally unnumbered on the site ("details
  with your quote") because no figure has been decided.
- The "reply within one business day" commitment on the contact page is a
  service promise Chris must actually be able to keep.

## Open items (blockers before launch)

1. **Business email** — route decided 2026-07-17: **iCloud+ custom email
   domain** (Chris already pays for 2TB iCloud+; no new subscription).
   Chris adds studio772.com in iCloud settings + Apple's DNS records in
   Cloudflare, creates the address, sends/receives a test — then set
   `SITE.email` and flip `SITE.emailPending` to `false`. Note: do NOT
   enable Cloudflare Email Routing; its MX records conflict with iCloud's.
2. ~~**Domain**~~ — done 2026-07-17: studio772.com bought via Cloudflare
   Registrar; `site` updated in `astro.config.mjs`. Remaining: attach
   custom domain (+ www) to the Pages project.
3. **About-page personalization** — the copy is deliberately modest and
   generic about background; Chris should add any true, specific personal
   detail he wants public.
4. ~~**Cloudflare Pages deploy**~~ — done 2026-07-17. Chris connected the
   Git integration and production is live at https://demarzo-web.pages.dev
   with security headers, sitemap, custom 404, and CSP verified against the
   live deployment.

## Deferred by design (not gaps)

- Contact form with a backend/provider — mailto is the v1 boundary.
- Structured data (LocalBusiness JSON-LD) — deferred until there's a real
  business address and domain; publishing it without one would be
  premature or inaccurate.
- Analytics — none, and the privacy page promises to disclose before any
  are added.
- Color-scheme toggle — the v1 site uses one deliberate dark-first theme.
