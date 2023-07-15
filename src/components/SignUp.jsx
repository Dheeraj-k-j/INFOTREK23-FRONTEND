import React, { useState } from "react";
import InputBox from "./InputBox";
import SubmitButton from "./SubmitButton";
import FormLogo from "./FormLogo";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const createUser = async (e) => {
    const response = await fetch("http://127.0.0.1:8080/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, confirmPassword }),
    });

    const responseData = await response.json();
    const { status, token, data } = responseData;
    console.log(status, token, data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the extracted data
    console.log("First Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("confirmPassword:", confirmPassword);

    createUser();
  };

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
      </form>
    </div>
  );
}

export default SignUp;
