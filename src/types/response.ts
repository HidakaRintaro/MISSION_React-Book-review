import { errorResponse } from '~/types/errorResponse'

export interface Response<T> {
  isError: boolean
  error: errorResponse | null
  success: T | null
}
