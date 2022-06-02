import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

// Vista para hacer login en la app
export const LoginScreen = () => {
  const navigate = useNavigate() // Hook de 'react-router-dom' para hacer enlaces y redirecciones
  const { dispatch } = useContext(AuthContext) // Contexto de autenticación

  const handleLogin = () => {
    const action = {
      type: types.login, // Tipo de acción que se va a ejecutar en authReducer
      payload: {
        name: 'Omara Portuondo',
      },
    }

    dispatch(action) // Ejecuta la acción en authReducer
    const lastPath = localStorage.getItem('lastPath') || '/marvel' // Obtiene la ruta de la última visita del usuario
    navigate(lastPath, { replace: true }) //replace indica si remplaza el historial con la ruta del primer argumento
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}
