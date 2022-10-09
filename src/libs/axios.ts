// Package Imports
import axios, {AxiosError, AxiosResponse} from 'axios'
import {ServiceResponse} from '../models/serviceResponse'

export const axiosAgent = axios.create({
  baseURL: 'https://dev.bumper.co.uk/core',
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosAgent.interceptors.response.use(
  (response: AxiosResponse<any>) => response,
  async (error: AxiosError) => {
    switch (error.response?.status) {
      case 406:
        alert(
          'This part is left optional, normally I manage errors with a global error state. So this is a demo app no need to implement that logic. But if requested I can implement it in the project.'
        )
        alert('Some fields are not valid.')
        return error
      default:
        return error
    }
  }
)

const responseBody = (response: AxiosResponse) => response?.data
export const requests = {
  get: <T>(url: string, params?: {}): Promise<ServiceResponse<T>> =>
    axiosAgent.get(url, {params}).then(responseBody),
  post: <T>(url: string, body: {} = {}): Promise<ServiceResponse<T>> =>
    axiosAgent.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}): Promise<ServiceResponse<T>> =>
    axiosAgent.put(url, body).then(responseBody),
  patch: <T>(url: string, body: {}): Promise<ServiceResponse<T>> =>
    axiosAgent.patch(url, body).then(responseBody),
  del: <T>(url: string, body: {}): Promise<ServiceResponse<T>> =>
    axiosAgent.delete(url, {data: body}).then(responseBody),
}
