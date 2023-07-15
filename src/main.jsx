// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import {LandingPage, SignUp} from './components'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'

// const appRoute = createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     children:[
//       {
//         path:'/',
//         element:<LandingPage/>,
//       },
//       {
//         path:'/SignUp',
//         element:<SignUp/>,
//       }
//     ]
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider appRoute={appRoute}/>
//   </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)