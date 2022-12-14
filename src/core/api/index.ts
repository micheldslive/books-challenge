import axios, { AxiosRequestConfig } from 'axios'
import { parseCookies } from 'nookies'

const getAPIClient = (ctx?: { req: unknown } | null) => {
  const cookies = parseCookies(ctx)
  const baseURL = process.env.BASE_URL

  const api = axios.create({
    baseURL,
    headers: {
      Accept: 'application/json',
    },
  })

  api.interceptors.request.use((config: AxiosRequestConfig) => config)

  if (cookies)
    api.defaults.headers.common.Authorization = `Bearer ${cookies['@ioasys:token']}`

  return api
}

export const api = getAPIClient()
