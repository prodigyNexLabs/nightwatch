export const dartApiContracts = {
  source: {
    auth: 'api/lib/models/auth.dart',
    listings: 'api/lib/models/listing.dart',
    bookings: 'api/lib/models/booking.dart',
    hostProfile: 'api/lib/models/host_profile.dart',
    pages: 'api/lib/models/pages.dart',
  },
  endpoints: {
    hostLogin: '/admin/login',
    hostProfile: '/hosting/profile',
    updateHostProfile: '/hosting/update-hosting-profile',
    createListing: '/listings/create',
    updateListing: '/listings/update',
    deleteListing: '/listings/delete',
    listListingsPrimary: '/admin/listings',
    listListingsFallback: '/listings/all',
    hostNewRequests: '/bookings/host/new',
    hostRequestAction: '/bookings/host/action',
    userDetails: '/user/details',
    privacyPage: '/pages/privacy',
    termsPage: '/pages/terms',
    rentingTermsPage: '/pages/renting-terms',
    userTermsPage: '/pages/user-terms',
  },
} as const

export type DartApiContracts = typeof dartApiContracts
