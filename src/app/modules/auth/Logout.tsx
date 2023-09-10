import {useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import {useAuth} from './core/Auth'
// import { useLogoutUserMutation } from '../../service/user_api'

export function Logout() {
  // const [logoutUser,{isSuccess}]=useLogoutUserMutation()
  const {logout} = useAuth()
  useEffect(() => {
    // logoutUser({})
      logout()
      document.location.reload()
    
  }, [logout])

  return (
      <Navigate to='/auth/login' />
  )
}
