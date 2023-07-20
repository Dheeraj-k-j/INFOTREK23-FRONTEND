import { useState, useEffect } from "react";
import React from "react";
import { setJwtTokenInCookie } from "../authorization";
import InputBox from "./InputBox";
import SubmitButton from "./SubmitButton";
import FormLogo from "./FormLogo";
import { Link } from "react-router-dom";
import api from "../api";
import FormSuccess from "./FormSuccess";
import FormError from "./FormError";
import Loading from "./Loading";

function LogIn({ authProp }) {
  const { token, setTokenValue } = authProp;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [stage, setStage] = useState("normal");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState({});

  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      errors.email = "Email is required!";
    } else if (!regex.test(email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    }
    return errors;
  };

  useEffect(() => {
    if (token !== null) setStage("success");
    else setStage("normal");
  }, [token]);

  const logUserIn = async () => {
    setStage("waiting");
    try {
      const response = await api.post(
        "/users/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      const tokenValue = response?.data.token;
      setJwtTokenInCookie(tokenValue, 7);
      // console.log(getJwtTokenFromCookie());
      setTokenValue(tokenValue);
    } catch (error) {
      console.error(error);
      const newError = {};
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log(error?.response?.data?.message); // Error response data from the server
        console.log(error?.response?.status); // Status code of the response
        newError.message=error?.response?.data?.message;
        newError.status=error?.response?.status;
      } else{
        newError.message = "Something went wwrong try again after some time!";
      }
      setErrorMessage(newError);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length != 0) {
      setErrors(errors);
    } else {
      logUserIn();
    }
  };

  if (Object.keys(errorMessage).length != 0) {
    return <FormError errorMessage={errorMessage}/>
  }
  else if (stage === "waiting") {
    return (
      <div className="form-container">
        <form
          className="form bg-slate-800 bg-opacity-80 backdrop-blur"
          action="/"
          method="post"
        >
          <FormLogo />
          <Loading />
        </form>
      </div>
    );
  } else if (stage === "success") {
    return <FormSuccess />;
  } else {
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

          <div className="input">
            <input
              id="password"
              type="password"
              className="input__element"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <p className="from-error">{errors.password}</p>
          </div>

          <SubmitButton btnProp={{ text: "LOG IN" }} />
          <div className="altrnt-optn">
            <p>
              <Link to="/ForgetPassword" className="prmry-clr">
                Forget Password.{" "}
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
  }
}

export default LogIn;
