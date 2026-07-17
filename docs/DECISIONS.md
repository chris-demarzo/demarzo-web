# Decisions and open items

A running record of assumptions behind this site and decisions still open.
Update when anything here is resolved.

## Decided (2026-07-17)

| Decision | Choice | Notes |
|---|---|---|
| Business name | DeMarzo Web | Centralized in `src/site.config.ts`; renaming is a one-line edit. |
| Repo/directory | `demarzo-web` | GitHub repos can be renamed later with automatic redirects. |
| Niche & geography | Local service businesses, Port St. Lucie / Treasure Coast, FL | |
| Public pricing | Shown, with honest founding-client framing | Founding $1,200–$1,500; standard $1,800–$2,500; 50% deposit; two revision rounds. |
| Contact method | `mailto:` from `SITE.email` | Placeholder address until the business inbox exists. |
| Visual direction | "Well-set proposal document" — cool near-white, ink, deep teal, Space Grotesk + Inter, hairline rules, mono spec accents | Zero client-side JS. |
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

1. **Business email** — create the real inbox, set `SITE.email`, flip
   `SITE.emailPending` to `false`.
2. **Domain** — none purchased. First deploy targets
   `demarzo-web.pages.dev`; update `site` in `astro.config.mjs` when a
   domain is connected.
3. **About-page personalization** — the copy is deliberately modest and
   generic about background; Chris should add any true, specific personal
   detail he wants public.
4. **GitHub push + Cloudflare Pages deploy** — both are approval-gated and
   have not been performed.

## Deferred by design (not gaps)

- Contact form with a backend/provider — mailto is the v1 boundary.
- Structured data (LocalBusiness JSON-LD) — deferred until there's a real
  business address and domain; publishing it without one would be
  premature or inaccurate.
- Analytics — none, and the privacy page promises to disclose before any
  are added.
- Dark mode — single deliberate light theme for v1.
