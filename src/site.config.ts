/**
 * Central site configuration for SmallNestDecor.
 *
 * Analytics / verification values are read from environment variables at
 * build time. Use the PUBLIC_* names (Astro convention); the legacy
 * NEXT_PUBLIC_* names are also honoured so the same env set works if the
 * project is ever ported. Nothing is rendered when a value is unset.
 *
 * Cloudflare Pages: set these under Settings → Environment variables.
 */
const env = import.meta.env as Record<string, string | undefined>;

export const siteConfig = {
  name: 'SmallNestDecor',
  tagline: 'Small spaces, beautifully lived in.',
  url: 'https://smallnestdecor.com',
  description:
    'Small apartment decor, paint colors and storage ideas for renters and small-space lovers.',
  email: 'hello@smallnestdecor.com',
  logo: '/images/logo.svg',
  publisher: {
    name: 'SmallNestDecor',
    authorName: 'SmallNestDecor Editors',
    authorBio:
      'The SmallNestDecor Editors curate and test decor, paint and storage ideas made specifically for small apartments and first small homes.',
  },
  analytics: {
    gaId: env.PUBLIC_GA_ID ?? env.NEXT_PUBLIC_GA_ID,
    gscVerification:
      env.PUBLIC_GSC_VERIFICATION ?? env.NEXT_PUBLIC_GSC_VERIFICATION,
    pinterestVerification:
      env.PUBLIC_PINTEREST_VERIFICATION ??
      env.NEXT_PUBLIC_PINTEREST_VERIFICATION,
  },
  /**
   * Ad-network readiness. When `enabled` is false (default) nothing ad
   * related renders anywhere — no scripts, no placeholder boxes.
   * When a network is onboarded: set `enabled: true` and paste the
   * network loader into `headScript`; AdSlot components will reserve
   * fixed-height space in their positions.
   */
  ads: {
    enabled: false,
    headScript: '',
  },
} as const;

export type SiteConfig = typeof siteConfig;
