import axios from 'axios'
import { env } from '../config/env'

export const http = axios.create({
  baseURL: env.API_BASE_URL || undefined,
  timeout: 12_000,
  headers: {
    'Content-Type': 'application/json',
  },
})
