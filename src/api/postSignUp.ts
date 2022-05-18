import request from '~/api/request'
import { Response } from '~/types/response'

interface Res {
  token: string
}
export const postSignUp = (name: string, email: string, password: string): Promise<Response<Res>> =>
  request.post<Res>('/users', { name, email, password })
