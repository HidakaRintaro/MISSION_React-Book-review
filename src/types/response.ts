import { errorResponse } from '~/types/errorResponse'

export interface Response<T> {
  error: errorResponse | null
  success: T | null
}
