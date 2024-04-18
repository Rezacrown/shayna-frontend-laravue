import axios from 'axios'
import { config } from './index'

const instance = axios.create({
  baseURL: `${config.baseUrl}/api`
})

export const fetching = instance
