
import './app.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/home/Home'
import About from './components/About/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Layout from './components/Layout'
import NotFound from './notfound/NotFound'




let routers=createBrowserRouter(
  [
{
    path:'', element:<Layout/> ,children:[
      {index:true ,element:<Home/>},
      {path:'about' ,element:<About/>},
      {path:'portfolio' ,element:<Portfolio/>},
      {path:'contact' ,element:<Contact/>},
      {path:'*' ,element:<NotFound/>}
    ]

}  ]
)
 
export function App() {


  return (
    <>
      
      <RouterProvider router={routers}></RouterProvider>

    </>
  )
}
