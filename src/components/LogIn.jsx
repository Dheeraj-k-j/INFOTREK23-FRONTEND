import { useState, useEffect } from "react";
import React from "react";
import { setJwtTokenInCookie } from "../authorization";
import InputBox from "./InputBox";
import SubmitButton from "./SubmitButton";
import FormLogo from "./FormLogo";
import { Link } from "react-router-dom";
import api from "../api";
import SuccessPage from "./SuccessPage";

function LogIn({ authProp }) {
  const { token, setTokenValue } = authProp;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [stage, setStage] = useState("normal");

  useEffect(() => {
    if (token !== null) setStage("success");
    else setStage("normal");
  }, [token]);

  const logUserIn = async (event) => {
    event.preventDefault();
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
      const tokenValue = response?.data.token;
      setJwtTokenInCookie(tokenValue, 7);
      // console.log(getJwtTokenFromCookie());
      setTokenValue(tokenValue);
    } catch (error) {
      setStage("error");
      console.log(error.response);
    }
  };

  if (stage === "waiting") {
    return <div>Waiting!...</div>;
  } else if (stage === "error") {
    return <div>Error</div>;
  } else if (stage === "success") {
    return <SuccessPage authProp={authProp} />;
  } else {
    return (
      <div className="form-container">
        <form
          onSubmit={logUserIn}
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
            </div>
            <div className="input">
            <input
              id="password"
              type="password"
              className="input__element"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
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
