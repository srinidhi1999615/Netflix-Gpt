import React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom' 
import Signin from './Signin'
const Body = () => {
    const appStore=createBrowserRouter([
        {
            path:"/",
            element:<Signin/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
  return (
    <div>
      <RouterProvider router={appStore}/>
    </div>
  )
}

export default Body
