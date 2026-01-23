import { useQuery } from '@tanstack/react-query'
import { getFeaturedSignals } from '../services/api'

export const useFeaturedSignals = () =>
  useQuery({
    queryKey: ['featured-signals'],
    queryFn: getFeaturedSignals,
    staleTime: 1000 * 60 * 5,
  })
