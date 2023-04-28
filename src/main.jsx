import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router'
import { ContextProvider } from './context/Context'
import { router } from './routes/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } >
      <ContextProvider>
        <App />
      </ContextProvider>
    </RouterProvider>
  </React.StrictMode>,
)
