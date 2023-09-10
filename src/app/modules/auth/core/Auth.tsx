import {
  FC,
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react'
import {LayoutSplashScreen} from '../../../../_metronic/layout/core'
import {AuthModel, UserModel} from './_models'
import * as authHelper from './AuthHelpers'
// import {getUserByToken} from './_requests'
import {WithChildren} from '../../../../_metronic/helpers'
import { useCheckAuthMutation,useLogoutUserMutation } from '../../../service/user_api'

type AuthContextProps = {
  auth: AuthModel | undefined
  saveAuth: (auth: AuthModel | undefined) => void
  currentUser: UserModel | undefined
  setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>
  logout: () => void
}

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  logout: () => {},
}

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider: FC<WithChildren> = ({children}) => {
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth())
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>()
  const [logoutUser,{isSuccess}]=useLogoutUserMutation()

  const saveAuth = (auth: AuthModel | undefined) => {
    setAuth(auth)
    
    console.log(auth)
    if (auth) {
      authHelper.setAuth(auth)
    } else {
      authHelper.removeAuth()
    }
  }

  useEffect(()=>{
    console.log("logging out")
    if(isSuccess){
    saveAuth(undefined)
    setCurrentUser(undefined)
    }
    
  },[isSuccess])
  const logout = () => {
    logoutUser({})
  }

  return (
    <AuthContext.Provider value={{auth, saveAuth, currentUser, setCurrentUser, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

const AuthInit: FC<WithChildren> = ({children}) => {
  const [checkAuth,{data,isLoading,isError,error,isSuccess}]=useCheckAuthMutation()
  const {auth, logout, setCurrentUser} = useAuth()
  const didRequest = useRef(false)
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
  
  useEffect(()=>{
    checkAuth({})
  },[])
 
  useEffect(() => {
    console.log('chekauth')
    console.log(auth)
  //    if(isLoading){
  //   setShowSplashScreen(true)
  // }
    // const requestUser = async (apiToken: string) => {
    //   console.log(apiToken)
    //   console.log("api token")
    //   try {
    //     if (!didRequest.current) {
    //       const {data} = await getUserByToken(apiToken)
          if (isSuccess) {
            setCurrentUser(data.user)
            setShowSplashScreen(false)
          }
    //     }
    //   } catch (error) {
    //     console.error(error)
        if (isError) {
          logout()
          setShowSplashScreen(false)
        }
    //   } finally {
        // 
    //   }

    //   return () => (didRequest.current = true)
    // }

    // if (auth && auth.api_token) {
    //   requestUser(auth.api_token)
    // } else {
    //   logout()
    //   setShowSplashScreen(false)
    // }
    // eslint-disable-next-line
  }, [isError,isSuccess,isLoading])

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>
}

export {AuthProvider, AuthInit, useAuth}
