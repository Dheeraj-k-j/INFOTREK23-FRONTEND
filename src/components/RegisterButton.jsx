import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import Loading from "./Loading";

const RegisterButton = ({ btnProp }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [state, setState] = useState(null);

  const { token, user } = btnProp.authProp;
  const eventId = btnProp.id;

  const registerEvent = async () => {
    setState("waiting");
    try {
      const response = await api.post(
        `/users/${user._id}`,
        {
          eventId:eventId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      setIsRegistered(true);
      setState(null);
    } catch (error) {
      console.error(
        "Error fetching the registration api! try again after some time.",
        error
      );
      setState("error");
    }
  };

  useEffect(() => {
    // console.log(token, user, eventId);
    // console.log(user?.registeredEvent);
    if (!!token) {
      setIsLoggedIn(true);
      // If Token exist 100% user exist
      for (let i = 0; i < user.registeredEvent.length; i++) {
        if (user.registeredEvent[i] == eventId) {
          setIsRegistered(true);
          // break;
        }
      }
    }
  }, [token]);

  if(state == "error"){
    return <div>Error</div>;
  } else if (state == "waiting") {
    return <Loading/>
  } else if (isRegistered) {
    return (
      <button disabled={true} className="primary-button">
        REGISTERED
      </button>
    );
  } else if (isLoggedIn) {
    return <button onClick={() => registerEvent()} className="primary-button">REGISTER NOW</button>;
  } else {
    return (
      <Link to="/SignUp">
        <button className="primary-button">REGISTER NOW</button>
      </Link>
    );
  }
};

export default RegisterButton;
