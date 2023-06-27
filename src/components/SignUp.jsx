import React from "react";
import InputBox from "./InputBox";
import SubmitButton from "./SubmitButton";
import FormLogo from "./FormLogo";

function SignUp() {
  return (
    <div className="form-container">
      <form
        className="form bg-slate-800 bg-opacity-80 backdrop-blur"
        action=""
        method="post"
      >
        <FormLogo />
        <InputBox
          inputProp={{ id: "name", type: "text", labelName: "Your Name" }}
        />
        <InputBox
          inputProp={{ id: "email", type: "email", labelName: "Your Email" }}
        />
        <InputBox
          inputProp={{ id: "pasword", type: "pasword", labelName: "Password" }}
        />
        <InputBox
          inputProp={{
            id: "confirmPasword",
            type: "pasword",
            labelName: "Confirm Pasword",
          }}
        />
        <SubmitButton btnProp={{ text: "SIGN UP" }} />
      </form>
    </div>
  );
}

export default SignUp;
