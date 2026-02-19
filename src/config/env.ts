type EnvConfig = {
  API_BASE_URL: string
  API_DOMAIN: string
  API_VERSION: string
  MODE: string
  IS_PROD: boolean
}

const cleanDomain = (import.meta.env.VITE_API_DOMAIN ?? '').replace(/\/$/, '')
const apiVersion = import.meta.env.VITE_API_VERSION ?? 'v1'
const explicitBase = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/$/, '')

const computedBase = cleanDomain ? `${cleanDomain}/api/${apiVersion}` : ''

export const env: EnvConfig = {
  API_BASE_URL: explicitBase || computedBase,
  API_DOMAIN: cleanDomain,
  API_VERSION: apiVersion,
  MODE: import.meta.env.MODE,
  IS_PROD: import.meta.env.PROD,
}
