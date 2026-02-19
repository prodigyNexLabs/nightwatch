import { env } from '../config/env'
import type { ApiEnvelope } from '../types/api'
import type {
  HostListing,
  HostProfileSettings,
  HostRequest,
  HostSession,
  HostUser,
  ListingStatus,
  NewListingInput,
} from '../types/host'
import { dartApiContracts } from './dartApiMapping'
import { getApiErrorMessage, http } from './http'

const API = dartApiContracts.endpoints

const fallbackHostUser: HostUser = {
  id: 1,
  email: 'host@crozroad.com',
  firstName: 'Crozroad',
  lastName: 'Host',
  isStaff: true,
  hostingStatus: 'ACTIVE',
}

const fallbackHostProfile: HostProfileSettings = {
  displayName: 'Crozroad Host Team',
  businessName: 'Crozroad Spaces Network',
  phone: '+1 302 555 0199',
  city: 'Wilmington',
  timezone: 'America/New_York',
  supportEmail: 'support@crozroad.com',
  instantBooking: true,
}

const fallbackListings: HostListing[] = [
  {
    id: 'listing-nova-yard',
    title: 'Nova Yard Studio Hall',
    description: 'Modular industrial studio with drive-in loading and acoustic treatment.',
    city: 'Wilmington',
    addressLine: 'Riverfront district, Building 8',
    pricePerHour: 145,
    capacity: 80,
    status: 'active',
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'listing-atlas-floor',
    title: 'Atlas Production Floor',
    description: 'High-ceiling floorplate for production shoots and product launches.',
    city: 'Philadelphia',
    addressLine: 'Old City, Dock Street 21',
    pricePerHour: 190,
    capacity: 120,
    status: 'paused',
    updatedAt: new Date().toISOString(),
  },
]

const fallbackRequests: HostRequest[] = [
  {
    id: 'booking-rq-001',
    listingId: 'listing-nova-yard',
    listingTitle: 'Nova Yard Studio Hall',
    guestName: 'Lena Carter',
    attendees: 42,
    startsAt: new Date(Date.now() + 1000 * 60 * 60 * 26).toISOString(),
    endsAt: new Date(Date.now() + 1000 * 60 * 60 * 30).toISOString(),
    totalAmount: 580,
    notes: 'Audio rehearsal plus camera blocking.',
    status: 'pending',
  },
  {
    id: 'booking-rq-002',
    listingId: 'listing-atlas-floor',
    listingTitle: 'Atlas Production Floor',
    guestName: 'Jordan Knight',
    attendees: 16,
    startsAt: new Date(Date.now() + 1000 * 60 * 60 * 52).toISOString(),
    endsAt: new Date(Date.now() + 1000 * 60 * 60 * 56).toISOString(),
    totalAmount: 420,
    notes: 'Brand content day with static light rig.',
    status: 'pending',
  },
]

const isApiEnabled = Boolean(env.API_BASE_URL)

const unwrapEnvelope = <T>(value: ApiEnvelope<T> | T): T => {
  if (typeof value === 'object' && value !== null && 'data' in value) {
    const envelope = value as ApiEnvelope<T>
    if (envelope.data !== undefined) {
      return envelope.data
    }
  }

  return value as T
}

const mapHostUser = (raw: Record<string, unknown>): HostUser => ({
  id: typeof raw.id === 'number' ? raw.id : undefined,
  email: typeof raw.email === 'string' ? raw.email : undefined,
  firstName: typeof raw.first_name === 'string' ? raw.first_name : undefined,
  lastName: typeof raw.last_name === 'string' ? raw.last_name : undefined,
  isStaff: raw.is_staff === true,
  hostingStatus:
    typeof raw.hosting_status === 'string'
      ? raw.hosting_status
      : typeof raw.hostingStatus === 'string'
        ? raw.hostingStatus
        : undefined,
})

const mapListingStatus = (raw: Record<string, unknown>): ListingStatus => {
  if (raw.is_active === false) return 'paused'
  if (raw.is_verified === false) return 'draft'
  return 'active'
}

const mapListing = (raw: Record<string, unknown>): HostListing => {
  const address =
    typeof raw.address === 'object' && raw.address !== null
      ? (raw.address as Record<string, unknown>)
      : null

  const pricing =
    typeof raw.pricing === 'object' && raw.pricing !== null
      ? (raw.pricing as Record<string, unknown>)
      : null

  return {
    id: typeof raw.id === 'string' ? raw.id : `listing-${Math.random().toString(16).slice(2)}`,
    title: typeof raw.title === 'string' ? raw.title : 'Untitled listing',
    description: typeof raw.description === 'string' ? raw.description : 'No description provided.',
    city:
      (address && typeof address.city === 'string' && address.city) ||
      (address && typeof address.state === 'string' && address.state) ||
      'Unknown city',
    addressLine:
      (address && typeof address.line_1 === 'string' && address.line_1) ||
      (address && typeof address.street === 'string' && address.street) ||
      (address && typeof address.formatted_address === 'string' && address.formatted_address) ||
      'Address not specified',
    pricePerHour:
      (pricing && typeof pricing.hourly === 'number' && pricing.hourly) ||
      (typeof raw.hourly_rate === 'number' && raw.hourly_rate) ||
      0,
    capacity:
      (typeof raw.capacity === 'number' && raw.capacity) ||
      (typeof raw.max_people === 'number' && raw.max_people) ||
      1,
    status: mapListingStatus(raw),
    updatedAt:
      typeof raw.updated_at === 'string' ? raw.updated_at : new Date().toISOString(),
  }
}

const mapRequestStatus = (value: unknown): 'pending' | 'accepted' | 'rejected' => {
  const normalized = typeof value === 'string' ? value.toLowerCase() : ''

  if (normalized.includes('accept') || normalized === 'confirmed') return 'accepted'
  if (normalized.includes('reject') || normalized.includes('decline')) return 'rejected'
  return 'pending'
}

const mapRequest = (raw: Record<string, unknown>): HostRequest => {
  const space =
    typeof raw.space === 'object' && raw.space !== null ? (raw.space as Record<string, unknown>) : null
  const user =
    typeof raw.user === 'object' && raw.user !== null ? (raw.user as Record<string, unknown>) : null

  const guestNameFromUser = [user?.first_name, user?.last_name]
    .filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
    .join(' ')

  return {
    id: typeof raw.id === 'string' ? raw.id : `booking-${Math.random().toString(16).slice(2)}`,
    listingId:
      (space && typeof space.id === 'string' && space.id) ||
      (typeof raw.space_id === 'string' && raw.space_id) ||
      'unknown-listing',
    listingTitle:
      (space && typeof space.title === 'string' && space.title) ||
      (typeof raw.space_name === 'string' && raw.space_name) ||
      'Untitled listing',
    guestName:
      guestNameFromUser ||
      (typeof raw.user_name === 'string' && raw.user_name) ||
      (typeof raw.guest_name === 'string' && raw.guest_name) ||
      'Guest',
    attendees:
      (typeof raw.attendees === 'number' && raw.attendees) ||
      (typeof raw.people_count === 'number' && raw.people_count) ||
      1,
    startsAt:
      (typeof raw.start_time === 'string' && raw.start_time) ||
      new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
    endsAt:
      (typeof raw.end_time === 'string' && raw.end_time) ||
      new Date(Date.now() + 1000 * 60 * 60 * 27).toISOString(),
    totalAmount:
      (typeof raw.total_amount === 'number' && raw.total_amount) ||
      (typeof raw.price_total === 'number' && raw.price_total) ||
      0,
    notes: typeof raw.notes === 'string' ? raw.notes : undefined,
    status: mapRequestStatus(raw.status),
  }
}

export const loginHost = async (username: string, password: string): Promise<HostSession> => {
  if (!isApiEnabled) {
    return {
      tokenType: 'Bearer',
      accessToken: 'demo-host-access-token',
      refreshToken: 'demo-host-refresh-token',
      expiresIn: 3600,
      refreshExpiresIn: 604800,
    }
  }

  try {
    const response = await http.post<ApiEnvelope<Record<string, unknown>>>(API.hostLogin, {
      username,
      password,
    })

    const payload = unwrapEnvelope<Record<string, unknown>>(response.data)
    const access = typeof payload.access === 'string' ? payload.access : ''

    if (!access) {
      throw new Error('Login succeeded but no access token was returned.')
    }

    return {
      tokenType: typeof payload.token_type === 'string' ? payload.token_type : 'Bearer',
      accessToken: access,
      refreshToken: typeof payload.refresh === 'string' ? payload.refresh : undefined,
      expiresIn: typeof payload.expires_in === 'number' ? payload.expires_in : undefined,
      refreshExpiresIn:
        typeof payload.refresh_expires_in === 'number' ? payload.refresh_expires_in : undefined,
    }
  } catch (error) {
    throw new Error(getApiErrorMessage(error))
  }
}

export const fetchCurrentHostUser = async (): Promise<HostUser> => {
  if (!isApiEnabled) {
    return fallbackHostUser
  }

  try {
    const response = await http.get<ApiEnvelope<Record<string, unknown>>>(API.userDetails)
    const payload = unwrapEnvelope<Record<string, unknown>>(response.data)
    return mapHostUser(payload)
  } catch {
    return fallbackHostUser
  }
}

export const fetchHostProfileSettings = async (): Promise<HostProfileSettings> => {
  if (!isApiEnabled) {
    return fallbackHostProfile
  }

  try {
    const response = await http.get<ApiEnvelope<Record<string, unknown>>>(API.hostProfile)
    const payload = unwrapEnvelope<Record<string, unknown>>(response.data)

    return {
      displayName:
        (typeof payload.display_name === 'string' && payload.display_name) ||
        (typeof payload.name === 'string' && payload.name) ||
        fallbackHostProfile.displayName,
      businessName:
        (typeof payload.business_name === 'string' && payload.business_name) ||
        fallbackHostProfile.businessName,
      phone: (typeof payload.phone === 'string' && payload.phone) || fallbackHostProfile.phone,
      city: (typeof payload.city === 'string' && payload.city) || fallbackHostProfile.city,
      timezone:
        (typeof payload.timezone === 'string' && payload.timezone) || fallbackHostProfile.timezone,
      supportEmail:
        (typeof payload.support_email === 'string' && payload.support_email) ||
        (typeof payload.email === 'string' && payload.email) ||
        fallbackHostProfile.supportEmail,
      instantBooking:
        typeof payload.instant_booking === 'boolean'
          ? payload.instant_booking
          : fallbackHostProfile.instantBooking,
    }
  } catch {
    return fallbackHostProfile
  }
}

export const updateHostProfileSettings = async (
  settings: HostProfileSettings,
): Promise<HostProfileSettings> => {
  if (!isApiEnabled) {
    return settings
  }

  try {
    const formData = new FormData()
    formData.append(
      'meta',
      JSON.stringify({
        display_name: settings.displayName,
        business_name: settings.businessName,
        phone: settings.phone,
        city: settings.city,
        timezone: settings.timezone,
        support_email: settings.supportEmail,
        instant_booking: settings.instantBooking,
      }),
    )

    await http.post(API.updateHostProfile, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return settings
  } catch (error) {
    throw new Error(getApiErrorMessage(error))
  }
}

export const fetchHostListings = async (): Promise<HostListing[]> => {
  if (!isApiEnabled) {
    return fallbackListings
  }

  try {
    const primary = await http.get<ApiEnvelope<Record<string, unknown>[]>>(API.listListingsPrimary, {
      params: { limit: 50 },
    })

    const payload = unwrapEnvelope<Record<string, unknown>[]>(primary.data)
    if (Array.isArray(payload) && payload.length > 0) {
      return payload.map(mapListing)
    }
  } catch {
    // Fall through to fallback endpoint.
  }

  try {
    const fallback = await http.get<ApiEnvelope<Record<string, unknown>[]>>(API.listListingsFallback, {
      params: { limit: 50 },
    })

    const payload = unwrapEnvelope<Record<string, unknown>[]>(fallback.data)
    if (Array.isArray(payload) && payload.length > 0) {
      return payload.map(mapListing)
    }
  } catch {
    return fallbackListings
  }

  return fallbackListings
}

export const createHostListing = async (
  input: NewListingInput,
  hostId?: number,
): Promise<HostListing> => {
  const draftListing: HostListing = {
    id: `local-${Math.random().toString(16).slice(2)}`,
    title: input.title,
    description: input.description,
    city: input.city,
    addressLine: input.addressLine,
    pricePerHour: input.pricePerHour,
    capacity: input.capacity,
    status: 'draft',
    updatedAt: new Date().toISOString(),
  }

  if (!isApiEnabled) {
    return draftListing
  }

  try {
    const response = await http.post<ApiEnvelope<Record<string, unknown>>>(API.createListing, {
      host: hostId,
      title: input.title,
      description: input.description,
      address: {
        city: input.city,
        street: input.addressLine,
        latitude: input.latitude,
        longitude: input.longitude,
      },
      is_active: false,
      is_verified: false,
      hourly_rate: input.pricePerHour,
      capacity: input.capacity,
    })

    const payload = unwrapEnvelope<Record<string, unknown>>(response.data)
    return mapListing(payload)
  } catch (error) {
    throw new Error(getApiErrorMessage(error))
  }
}

export const updateHostListingStatus = async (
  listingId: string,
  status: ListingStatus,
): Promise<void> => {
  if (!isApiEnabled) {
    return
  }

  try {
    await http.post(
      API.updateListing,
      {
        is_active: status === 'active',
        is_verified: status !== 'draft',
      },
      {
        params: { id: listingId },
      },
    )
  } catch (error) {
    throw new Error(getApiErrorMessage(error))
  }
}

export const fetchHostIncomingRequests = async (): Promise<HostRequest[]> => {
  if (!isApiEnabled) {
    return fallbackRequests
  }

  try {
    const response = await http.get<ApiEnvelope<Record<string, unknown>[]>>(API.hostNewRequests, {
      params: { limit: 50 },
    })

    const payload = unwrapEnvelope<Record<string, unknown>[]>(response.data)

    if (!Array.isArray(payload) || payload.length === 0) {
      return []
    }

    return payload.map(mapRequest)
  } catch {
    return fallbackRequests
  }
}

export const respondToHostRequest = async (
  bookingId: string,
  action: 'accept' | 'decline',
  reason?: string,
): Promise<void> => {
  if (!isApiEnabled) {
    return
  }

  try {
    await http.post(API.hostRequestAction, {
      booking_id: bookingId,
      action,
      reason,
    })
  } catch (error) {
    throw new Error(getApiErrorMessage(error))
  }
}
