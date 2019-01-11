import { createContext } from 'react'

const AuthContext = createContext({
  isAuth: false,
  // tslint:disable-next-line:no-empty
  toggleAuth: () => {},
})

export const AuthProvider = AuthContext.Provider
export const AuthConsumer = AuthContext.Consumer
export default AuthContext
