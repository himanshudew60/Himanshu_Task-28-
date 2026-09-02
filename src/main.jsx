import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './component/dashboard/Dashboard.jsx'
import Payment from './component/payment/Payment.jsx'
const router = createBrowserRouter([
 {
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Dashboard/>
    },
    {
      path:'/payment',
      element:<Payment/>
    }
  ]

 }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
