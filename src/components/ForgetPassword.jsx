import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormLogo from "./FormLogo";
import SubmitButton from "./SubmitButton";
import Loading from "./Loading";

const ForgetPassword = ({ authProp }) => {
  const [email, setEmail] = useState();
  const [errors, setErrors] = useState({});
  const [stage, setStage] = useState("forget");
  const [errorMessage, setErrorMessage] = useState({});

  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      errors.email = "Email is required!";
    } else if (!regex.test(email)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };

  const logUserIn = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length != 0) {
      setErrors(errors);
    } else {
      setStage("waiting");
      // logUserIn();
    }
  };

  if (stage == "forget") {
    return (
      <div className="form-container">
        <form
          onSubmit={handleSubmit}
          className="form bg-slate-800 bg-opacity-80 backdrop-blur"
          action="/"
          method="post"
        >
          <FormLogo />

          <div className="input">
            <input
              id="email"
              type="eamil"
              className="input__element"
              placeholder="Your Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <p className="from-error">{errors.email}</p>
          </div>

          <SubmitButton btnProp={{ text: "RESET PASSWORD" }} />
          <div className="altrnt-optn">
            <p>
              <Link to="/LogIn" className="prmry-clr">
                Log In
              </Link>
            </p>
            <p>
              <Link to="/SignUp" className="prmry-clr">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  } else if (stage === "waiting") {
    return (
      <div className="form-container">
        <form
          className="form bg-slate-800 bg-opacity-80 backdrop-blur"
          action="/"
          method="post"
        >
          <FormLogo />
          <Loading/>
        </form>
      </div>
    );
  }
};

export default ForgetPassword;
