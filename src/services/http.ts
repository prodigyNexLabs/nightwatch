import axios, { AxiosError } from 'axios'
import { env } from '../config/env'
import { useHostAuthStore } from '../store/useHostAuthStore'

export const http = axios.create({
  baseURL: env.API_BASE_URL || undefined,
  timeout: 20_000,
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.request.use((config) => {
  const { session } = useHostAuthStore.getState()
  if (session?.accessToken) {
    const tokenType = session.tokenType || 'Bearer'
    config.headers.Authorization = `${tokenType} ${session.accessToken}`
  }
  return config
})

export const getApiErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    const responseData = error.response?.data

    if (typeof responseData?.error === 'string') {
      return responseData.error
    }

    if (typeof responseData?.message === 'string') {
      return responseData.message
    }

    return error.message || 'Unexpected API error.'
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'Unexpected error.'
}
