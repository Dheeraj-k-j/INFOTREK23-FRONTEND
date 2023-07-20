import React, { useEffect } from "react";
import FormLogo from "./FormLogo";
import { useNavigate } from "react-router-dom";

const FormSuccess = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/Events");
    }, 5000); // Delay of 5000 milliseconds (5 seconds)

    return () => {
      clearTimeout(timeoutId); // Clear the timeout if the component unmounts before the delay expires
    };
  }, [navigate]);

  return (
    <div className="form-container">
      <form
        className="form bg-slate-800 bg-opacity-80 backdrop-blur"
        action="/"
        method="post"
      >
        <FormLogo />
        <div className="center-container">
          <h3 className="normal-h3 scndry-clr">SUCCESS</h3>
          <p className="prmry-clr">
            You have signed in successfully. You are being redirected to the events page where you can regiter for events.
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormSuccess;
