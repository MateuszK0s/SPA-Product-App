import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ProductProvider from './components/providers/ProductProvider'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3} >
    <ProductProvider>
      <App />
    </ProductProvider>
    </SnackbarProvider>
  </React.StrictMode>
)
