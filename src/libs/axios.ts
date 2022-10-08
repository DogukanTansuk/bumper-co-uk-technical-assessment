// Package Imports
import axios, {AxiosResponse} from 'axios'
import {ServiceResponse} from '../models/serviceResponse'

export const axiosAgent = axios.create({
  baseURL: 'http://localhost:7000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

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
