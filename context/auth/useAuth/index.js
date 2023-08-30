import { useContext } from 'react'
import { AuthContext } from '../AuthProvider'

export default function useAuth() {
  const authProps = useContext(AuthContext) || {
    user: {},
  }
  return authProps
}
