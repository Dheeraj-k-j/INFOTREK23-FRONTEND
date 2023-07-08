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
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);