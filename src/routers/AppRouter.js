import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

// Ruta para el login
// Esta es el enrutamiento inicial, debe tener el <BrowserRouter>, los demás, si existen, no lo deben tener
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<LoginScreen />} /> */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            // <PrivateRoute> Verifica si el usuario está autenticado redirige a <DashboardRoutes />, si no lo está, redirige a login:
            // <DashboardRoutes /> es un children de <PrivateRoute>
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
        {/* <Route path="/*" element={<DashboardRoutes />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
