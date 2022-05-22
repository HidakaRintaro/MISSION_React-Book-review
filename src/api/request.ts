import axios, { AxiosRequestConfig } from 'axios'
import { errorResponse } from '~/types/errorResponse'
import { Response } from '~/types/response'
import { statusOk } from '~/utils/statusOk'

const apiBaseUrl = import.meta.env.VITE_API_URL
const responseDefault = { error: null, success: null }
const instance = axios.create({
  baseURL: apiBaseUrl,
  headers: { 'Content-Type': 'application/json' },
})

const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<Response<T>> => {
  const res = await instance.get(url, config)

  const result: Response<T> = responseDefault
  if (statusOk(res.status)) {
    result.success = res.data as T
  } else {
    result.error = res.data as errorResponse
  }
  return result
}

const post = async <T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<Response<T>> => {
  const res = await instance.post(url, data, config)

  const result: Response<T> = responseDefault
  if (statusOk(res.status)) {
    result.success = res.data as T
  } else {
    result.error = res.data as errorResponse
  }
  return result
}

const put = async <T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<Response<T>> => {
  const res = await instance.put(url, data, config)

  const result: Response<T> = responseDefault
  if (statusOk(res.status)) {
    result.success = res.data as T
  } else {
    result.error = res.data as errorResponse
  }
  return result
}

// eslint-disable-next-line no-underscore-dangle
const _delete = async <T>(url: string, config?: AxiosRequestConfig): Promise<Response<T>> => {
  const res = await instance.delete(url, config)

  const result: Response<T> = responseDefault
  if (statusOk(res.status)) {
    result.success = res.data as T
  } else {
    result.error = res.data as errorResponse
  }
  return result
}

export default {
  get,
  post,
  put,
  delete: _delete,
}
