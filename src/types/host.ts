export type HostUser = {
  id?: number
  email?: string
  firstName?: string
  lastName?: string
  isStaff?: boolean
  hostingStatus?: string
}

export type HostSession = {
  tokenType: string
  accessToken: string
  refreshToken?: string
  expiresIn?: number
  refreshExpiresIn?: number
}

export type ListingStatus = 'active' | 'paused' | 'draft'

export type HostListing = {
  id: string
  title: string
  description: string
  city: string
  addressLine: string
  pricePerHour: number
  capacity: number
  status: ListingStatus
  updatedAt: string
}

export type NewListingInput = {
  title: string
  description: string
  city: string
  addressLine: string
  latitude?: number
  longitude?: number
  pricePerHour: number
  capacity: number
}

export type HostRequestStatus = 'pending' | 'accepted' | 'rejected'

export type HostRequest = {
  id: string
  listingId: string
  listingTitle: string
  guestName: string
  attendees: number
  startsAt: string
  endsAt: string
  totalAmount: number
  notes?: string
  status: HostRequestStatus
}

export type HostProfileSettings = {
  displayName: string
  businessName: string
  phone: string
  city: string
  timezone: string
  supportEmail: string
  instantBooking: boolean
}
