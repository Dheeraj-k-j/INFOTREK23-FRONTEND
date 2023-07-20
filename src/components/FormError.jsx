import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormLogo from "./FormLogo";

const FormError = ({ errorMessage }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 8000); // Delay of 5000 milliseconds (5 seconds)

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
          <h3 className="normal-h3 scndry-clr">ERROR</h3>
          <p className="prmry-clr">{errorMessage?.message}</p>
          <p className="prmry-clr">
            Status : {errorMessage?.status}
          </p>
          <p className="normal-txt scndry-clr">
            You are being redirected to Home page. Try again after some time.
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormError;
