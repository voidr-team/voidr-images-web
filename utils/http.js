import axios from 'axios'

const COLABY_API_URL = process.env.NEXT_PUBLIC_COLABY_API_URL

const http = axios.create({
  baseURL: `${COLABY_API_URL}`,
})

export default http
