/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import router from './components/Router/Router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <RouterProvider router={router} future={{ v7_startTransition: true }}>
   </RouterProvider>
  
  </StrictMode>,
)
