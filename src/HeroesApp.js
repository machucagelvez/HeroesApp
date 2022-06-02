import { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

// Punto de ingreso de la App
const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false } // Si hay un usuario en el localStorage, lo devuelve, sino, devuelve un objeto con logged: false
}

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init) //Inicialmente user: {logged: false}

  // Cuando el usuario cambia, se guarda el usuario en el localStorage:
  useEffect(() => {
    if (!user) return

    localStorage.setItem('user', JSON.stringify(user)) //El localStorage guarda un string, por eso se usa JSON.stringify
  }, [user])

  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
      <AppRouter />
    </AuthContext.Provider>
  )
}
