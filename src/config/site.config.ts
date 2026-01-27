export type SocialLink = {
  label: string
  href: string
}

export type SiteConfig = {
  appName: string
  companyName: string
  supportEmail: string
  urls: {
    website: string
    dashboard: string
    pressKit: string
  }
  socials: SocialLink[]
  legal: {
    entityName: string
    entityType: string
    registrationRegion: string
    officeAddress: string
    dataContact: string
  }
  tagline: string
  summary: string
}

export const siteConfig: SiteConfig = {
  appName: 'Crozroad',
  companyName: 'ProdigyNexLabs',
  supportEmail: 'support@prodigynexlabs.com',
  urls: {
    website: 'https://crozroad.prodigynexlabs.com',
    dashboard: 'https://app.crozroad.prodigynexlabs.com',
    pressKit: 'https://crozroad.prodigynexlabs.com/contact',
  },
  socials: [
    { label: 'X', href: 'https://x.com/prodigynexlabs' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/prodigynexlabs' },
    { label: 'GitHub', href: 'https://github.com/ProdigyNexLabs' },
  ],
  legal: {
    entityName: 'ProdigyNexLabs',
    entityType: 'Urban technology studio',
    registrationRegion: 'Delaware, USA',
    officeAddress: '710 Market Street, Suite 200, Wilmington, DE',
    dataContact: 'privacy@prodigynexlabs.com',
  },
  tagline: 'Urban Access & Discovery OS',
  summary:
    'Crozroad is an app-first view of spaces, events, businesses, parking, and pitstops — keeping urban access clear and connected.',
}
