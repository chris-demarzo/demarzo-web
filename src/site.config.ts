/**
 * Single source of truth for business identity.
 *
 * To rename the business, change contact details, or adjust the service
 * area, edit this file only — every page reads from it.
 *
 * The production URL lives in astro.config.mjs (the `site` value).
 */
export const SITE = {
  /** Business name shown in the header, footer, and page titles. */
  name: 'DeMarzo Web',

  /** The person behind the business. */
  owner: 'Chris DeMarzo',

  /** Short positioning line used in the footer and meta descriptions. */
  tagline: 'Clear, fast websites for local service businesses',

  /** Geographic focus, written the way it should appear in copy. */
  serviceArea: 'Port St. Lucie & the Treasure Coast, Florida',

  /**
   * CONTACT BOUNDARY — this address is a placeholder.
   * Replace it with the real business inbox and set `emailPending` to
   * false before launch. While `emailPending` is true, the contact page
   * shows a clearly labeled "inbox being set up" notice.
   */
  email: 'quotes@demarzo-web.invalid',
  emailPending: true,

  /** Links to the demonstration project presented on the Work page. */
  demo: {
    name: 'Run PSL',
    liveUrl: 'https://run-psl.pages.dev',
    repoUrl: 'https://github.com/chris-demarzo/run-psl',
  },
} as const;
