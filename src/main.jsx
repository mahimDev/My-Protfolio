import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div
      className='font-josefin'
    //  className='bg-gradient-to-r from-[#1a1a1ae5] to-[#141414]'
    >
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,
)
