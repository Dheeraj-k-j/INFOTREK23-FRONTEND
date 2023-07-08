import { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from './components/LandingPage'
import Events from "./components/Events";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
