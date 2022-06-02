import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'

// Este es un Functional component normal

export const PrivateRoute = ({ children }) => {
  //children es lo que está dentro de <PrivateRoute> (en el archivo AppRouter.js)
  const { user } = useContext(AuthContext)
  const { pathname, search } = useLocation()

  localStorage.setItem('lastPath', pathname + search) // Guarda la ruta en el localStorage para que al loguearse, se redirija a la última ruta visitada

  return user.logged ? children : <Navigate to="/login" />
}
