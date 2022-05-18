import request from '~/api/request'
import { Response } from '~/types/response'
import { paths } from '~/api/schema'

const path = '/users' as const

type Req = paths[typeof path]['post']['parameters']['body']['body']
type Res = paths[typeof path]['post']['responses']['200']['schema']

export const postSignUp = (name: string, email: string, password: string): Promise<Response<Res>> => {
  const requestBody: Req = {
    name,
    email,
    password,
  }
  return request.post<Res>('/users', requestBody)
}
