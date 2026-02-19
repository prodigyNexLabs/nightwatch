export type SocialLink = {
  label: string
  href: string
}

export type SiteConfig = {
  platformName: string
  parentCompany: string
  parentWebsite: string
  supportEmail: string
  legalEmail: string
  headquarters: string
  appSummary: string
  hostSummary: string
  socials: SocialLink[]
  parentCompanyEmail: string
}

export const siteConfig: SiteConfig = {
  platformName: 'Crozroad',
  parentCompany: 'ProdigyNexLabs',
  parentWebsite: 'https://prodigynexlabs.com',
  parentCompanyEmail: 'contact@prodigynexlabs.com',
  supportEmail: 'support@crozroad.com',
  legalEmail: 'legal@crozroad.com',
  headquarters: 'Crozroad Pvt Ltd, Ernakulam District, Kerala, India',
  appSummary:
    'Crozroad brings together local spaces, parking, nearby activities, host tools, and community collaboration into one platform. Available on iOS and Android.',
  hostSummary:
    'The host web app helps providers manage listings, handle requests, and maintain profile readiness for trusted local operations.',
  socials: [
    { label: 'Crozroad', href: 'https://www.crozroad.com' },
  ],
}
