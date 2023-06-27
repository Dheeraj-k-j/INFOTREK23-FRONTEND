import React from "react";
import InputBox from "./InputBox";
import SubmitButton from "./SubmitButton";
import FormLogo from "./FormLogo";

function LogIn() {
  return (
    <div className="form-container">
      <form
        className="form bg-slate-800 bg-opacity-80 backdrop-blur"
        action=""
        method="post"
      >
        <FormLogo />
        <InputBox
          inputProp={{ id: "email", type: "email", labelName: "Your Email" }}
        />
        <InputBox
          inputProp={{ id: "pasword", type: "pasword", labelName: "Password" }}
        />
        <SubmitButton btnProp={{ text: "LOG IN" }} />
      </form>
    </div>
  );
}

export default LogIn;
