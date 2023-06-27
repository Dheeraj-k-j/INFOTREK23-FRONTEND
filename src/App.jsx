import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import Events from "./components/Events";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";


function App() {

  return (
    <>
      <Navbar/>
      {/* <LogIn/> */}
      <SignUp/>
      {/* <Events/> */}
      {/* <Hero/> */}
    </>
  );
}

export default App;
