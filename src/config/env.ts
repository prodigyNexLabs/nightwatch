type EnvConfig = {
  API_BASE_URL: string
  MODE: string
  IS_PROD: boolean
}

export const env: EnvConfig = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL ?? '',
  MODE: import.meta.env.MODE,
  IS_PROD: import.meta.env.PROD,
}
