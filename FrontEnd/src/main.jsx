import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <App />
  </StrictMode>,
)
