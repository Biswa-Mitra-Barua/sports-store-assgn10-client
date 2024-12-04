import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './AuthProvider/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider routes={<RouterProvider router={router}></RouterProvider>}>
    </AuthProvider>
  </StrictMode>,
)
