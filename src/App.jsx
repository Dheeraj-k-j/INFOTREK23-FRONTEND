import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Events from "./components/Events";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUsSummary";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { getJwtTokenFromCookie, removeJwtTokenFromCookie } from "./authorization";
import api from "./api"
import "./index.css";

function App() {
  const [token, setToken] = useState(getJwtTokenFromCookie());
  const [user, setUser] = useState(null);

  const setTokenValue = (val) => {
    setToken(val);
  };

  const setUserValue = (user) => {
    setUser(user);
  };

  useEffect( () => {
    const tokenValue = getJwtTokenFromCookie();
    if (!!tokenValue) {

      const fetchUser = async (tokenValue) => {
        try {
          const response = await api.get(
            "/users/mydata",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenValue}`,
              },
            }
          );
          const user = response?.data?.data?.user;
          console.log(user);
          setUserValue(user);
        } catch (error) {
          console.error("Error fetching the authentication api using this token log in again");
          removeJwtTokenFromCookie();
          setTokenValue(null);
          setUserValue(null);
          return null;
        }
      };

      fetchUser(tokenValue);
    } else {
      removeJwtTokenFromCookie();
      setTokenValue(null);
      setUserValue(null);
    }
    console.log("App.jsx component rerender");
  }, [token]);

  return (
    <BrowserRouter>
      <Navbar authProp={{ token: token, setTokenValue: setTokenValue }} />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            index
            element={
              <LandingPage
                authProp={{ token: token, setTokenValue: setTokenValue }}
              />
            }
          />
          <Route
            path="/SignUp"
            element={
              <SignUp
                authProp={{ token: token, setTokenValue: setTokenValue }}
              />
            }
          />
          <Route
            path="/LogIn"
            element={
              <LogIn
                authProp={{ token: token, setTokenValue: setTokenValue }}
              />
            }
          />
          <Route path="/Events" element={<Events />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
