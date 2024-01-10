import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/routes'
import DefaultLayout from './layout/DefualtLayout'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/globalStyle'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DefaultLayout />
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
)
