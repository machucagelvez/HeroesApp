import { useNavigate } from 'react-router-dom'

// Vista para hacer login en la app
export const LoginScreen = () => {
  const navigate = useNavigate() // Hook de 'react-router-dom' para hacer enlaces y redirecciones
  const handleLogin = () => {
    navigate('/marvel', { replace: true }) //replace indica si remplaza el historial con la ruta del primer argumento
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
