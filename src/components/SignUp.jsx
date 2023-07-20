import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputBox from "./InputBox";
import SubmitButton from "./SubmitButton";
import FormLogo from "./FormLogo";
import FormSuccess from "./FormSuccess";
import { setJwtTokenInCookie } from "../authorization";
import Loading from "./Loading";
import FormError from "./FormError";
import api from "../api";

function SignUp({ authProp }) {
  const { token, setTokenValue } = authProp;
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [stage, setStage] = useState("normal");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    if (token !== null) setStage("success");
    else setStage("normal");
  }, [token]);

  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!name) {
      errors.name = "Username is required!";
    }
    if (!email) {
      errors.email = "Email is required!";
    } else if (!regex.test(email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!password) {
      errors.password = "Password is required";
      errors.confirmPassword = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be more than 8 characters";
      errors.confirmPassword = "Password must be more than 8 characters";
    } else if (confirmPassword !== password) {
      errors.password = "";
      errors.confirmPassword =
        "Confirm Password and Password should be the same.";
    }
    return errors;
  };

  const signUserUp = async () => {
    console.log("signUserUp is called");
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
      setJwtTokenInCookie(tokenValue, 7);
      setTokenValue(tokenValue);
    } catch (error) {
      console.error(error);
      const newError = {};
      if (error.response) {
        // The request was made and the server responded with a status code
        // console.log(error?.response?.data?.message); // Error response data from the server
        // console.log(error?.response?.status); // Status code of the response
        newError.message = error?.response?.data?.message;
        newError.status = error?.response?.status;
      } else {
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
      signUserUp();
    }
  };

  if (Object.keys(errorMessage).length != 0) {
    return <FormError errorMessage={errorMessage} />;
  } else if (stage === "waiting") {
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
    return <FormSuccess authProp={authProp} />;
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
              id="name"
              type="text"
              className="input__element"
              placeholder="Your Name"
              // ref={register}
              onChange={(event) => setName(event.target.value)}
            />
            {/* <label className="input__label" htmlFor={inputProp.id}>
              {inputProp.labelName}
            </label> */}
            <p className="from-error">{errors.name}</p>
          </div>

          <div className="input">
            <input
              id="email"
              type="eamil"
              className="input__element"
              placeholder="Your Email"
              // ref={register}
              onChange={(event) => setEmail(event.target.value)}
            />
            {/* <label className="input__label" htmlFor={inputProp.id}>
              {inputProp.labelName}
            </label> */}
            <p className="from-error">{errors.email}</p>
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
              // ref={register}
              onChange={(event) => setPassword(event.target.value)}
            />
            {/* <label className="input__label" htmlFor={inputProp.id}>
              {inputProp.labelName}
            </label> */}
            <p className="from-error">{errors.password}</p>
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
              // ref={register}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            {/* <label className="input__label" htmlFor={inputProp.id}>
              {inputProp.labelName}
            </label> */}
            <p className="from-error">{errors.confirmPassword}</p>
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
