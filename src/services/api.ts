import { env } from '../config/env'
import { http } from './http'

export type FeaturedSignal = {
  id: string
  title: string
  category: 'Parking' | 'Street Commerce' | 'Live Event'
  location: string
  window: string
  detail: string
}

const fallbackSignals: FeaturedSignal[] = [
  {
    id: 'signal-park-01',
    title: 'Peak-hour garage availability spike',
    category: 'Parking',
    location: 'Midtown Core',
    window: 'Today • 4:30 PM - 6:00 PM',
    detail: 'Predicted 18% availability lift across five partner garages.',
  },
  {
    id: 'signal-vendor-02',
    title: 'High-footfall street vendor corridor',
    category: 'Street Commerce',
    location: 'Arts District',
    window: 'Today • 5:00 PM - 9:00 PM',
    detail: 'Live vendor density is up 22% with commuter spillover.',
  },
  {
    id: 'signal-event-03',
    title: 'Live event surge routing window',
    category: 'Live Event',
    location: 'Riverside Arena',
    window: 'Tomorrow • 6:00 PM - 10:30 PM',
    detail: 'Real-time ingress paths optimized for three transit hubs.',
  },
]

export const getFeaturedSignals = async (): Promise<FeaturedSignal[]> => {
  if (!env.API_BASE_URL) {
    return Promise.resolve(fallbackSignals)
  }

  const { data } = await http.get<FeaturedSignal[]>('/signals/featured')
  return data
}
