import { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from './components/LandingPage'
import Events from "./components/Events";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

function App() {

  return (
    <>

      <Navbar/>
      {/* <LogIn/> */}
      {/* <SignUp/> */}
      {/* <Events/> */}
      <LandingPage/>
    </>
  );
}

export default App;
