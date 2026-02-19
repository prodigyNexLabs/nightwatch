export type ApiEnvelope<T> = {
  code?: string
  message?: string
  data?: T
  error?: string | Record<string, unknown>
}

export type ApiError = {
  message: string
  status?: number
  code?: string
}
