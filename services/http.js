import axios from 'axios'

const VOIDR_API_URL = process.env.NEXT_PUBLIC_VOIDR_API_URL

const http = axios.create({
  baseURL: `${VOIDR_API_URL}`,
})

export default http
