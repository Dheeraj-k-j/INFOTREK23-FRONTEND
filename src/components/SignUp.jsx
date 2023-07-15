import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputBox from "./InputBox";
import SubmitButton from "./SubmitButton";
import FormLogo from "./FormLogo";
import SuccessPage from "./SuccessPage";
import { setJwtTokenInCookie } from "../authorization";
import api from "../api"

function SignUp({ authProp }) {
  const { token, setTokenValue } = authProp;
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [stage, setStage] = useState("normal");

  useEffect(() => {
    if (token !== null) setStage("success");
    else setStage("normal");
  }, [token]);

  const signUserUp = async (event) => {
    event.preventDefault();
    setStage("waiting");
    try {
      const response = await api.post(
        "/users/signup",
        {
          name,
          email,
          password,
          confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const tokenValue = response?.data.token;
      console.log(tokenValue);
      setJwtTokenInCookie(tokenValue, 7);
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
          onSubmit={signUserUp}
          className="form bg-slate-800 bg-opacity-80 backdrop-blur"
          action="/"
          method="post"
        >
          <FormLogo />

          <div className="input">
            <input
              id="name"
              type="text"
              className="input__element"
              placeholder="Your Name"
              onChange={(event) => setName(event.target.value)}
            />
            {/* <label className="input__label" htmlFor={inputProp.id}>
              {inputProp.labelName}
            </label> */}
          </div>

          <div className="input">
            <input
              id="email"
              type="eamil"
              className="input__element"
              placeholder="Your Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            {/* <label className="input__label" htmlFor={inputProp.id}>
              {inputProp.labelName}
            </label> */}
          </div>
          {/* <InputBox
            inputProp={{ id: "email", type: "email", labelName: "Your Email" }}
          /> */}

          <div className="input">
            <input
              id="password"
              type="password"
              className="input__element"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            {/* <label className="input__label" htmlFor={inputProp.id}>
              {inputProp.labelName}
            </label> */}
          </div>

          {/* <InputBox
            inputProp={{ id: "pasword", type: "pasword", labelName: "Password" }}
          /> */}

          <div className="input">
            <input
              id="Confirm Password"
              type="password"
              className="input__element"
              placeholder="Confirm Password"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            {/* <label className="input__label" htmlFor={inputProp.id}>
              {inputProp.labelName}
            </label> */}
          </div>
          {/* <InputBox
            inputProp={{
              id: "confirmPasword",
              type: "pasword",
              labelName: "Confirm Pasword",
            }}
          /> */}
          <SubmitButton btnProp={{ text: "SIGN UP" }} />
          <div className="altrnt-optn">
            <p>Already have an account.</p>
            <p>
              <Link to="/LogIn" className="prmry-clr">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
