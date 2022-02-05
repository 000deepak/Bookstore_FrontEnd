import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import service from "../../services/bookstore";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./signup.scss";

function Signup() {
  //   const navigate = useNavigate();

  const [field, setField] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNumber: "",
    
    fullNameError: false,
    emailError: false,
    passwordError: false,
    mobileNumberError: false,
  });

  const changeField = (e) => {
    setField((previousvalues) => {
      return { ...previousvalues, [e.target.name]: e.target.value };
    });
  };

  const validation = () => {
    let isError = false;
    let fullNameError = field.email === "" ? true : false;
    let emailError = field.email === "" ? true : false;
    let passwordError = field.password === "" ? true : false;
    let mobileNumberError = field.email === "" ? true : false;

    setField((previousvalues) => {
      return {
        ...previousvalues,
        fullNameError: fullNameError,
        emailError: emailError,
        passwordError: passwordError,
        mobileNumberError: mobileNumberError,
      };
    });
    return (isError =
      field.emailError || field.passwordError || field.fullNameError || field.mobileNumberError);
  };

  const next = () => {
    let validated = validation();
    if (!validated) {
      let data = {
        "fullName": field.fullName,
        "email": field.email,
        "password": field.password,
        "mobileNumber": field.mobileNumber,
      };
      service
        .signup(data)
        .then((res) => {
          console.log(res);
    
          //   navigate("/");
        })
        .catch((res) => {});
    }
  };

  return (
    <div className="signup-form">
          <div >
        <TextField
          id="outlined-basic"
          name="fullName"
          label="fullName"
          variant="outlined"
          size="medium"
          className="fullName"
          fullWidth
          autoFocus="true"
          helperText={
            field.fullNameError ? "fullName is required" : " "
          }
          error={field.fullNameError}
          onChange={(e) => {
            changeField(e);
          }}
        />
      </div>
      <div >
        <TextField
          id="outlined-basic"
          name="mobileNumber"
          label="mobileNumber"
          variant="outlined"
          size="medium"
          className="mobileNumber"
          fullWidth
          autoFocus="true"
          helperText={
            field.mobileNumber? "Mobile Number is required" : " "
          }
          error={field.mobileNumber}
          onChange={(e) => {
            changeField(e);
          }}
        />
      </div>
      <div >
        <TextField
          id="outlined-basic"
          name="email"
          label="Email"
          variant="outlined"
          size="medium"
          className="email"
          fullWidth
          autoFocus="true"
          helperText={
            field.emailError ? "email is required" : " You can use letters,numbers & periods"
          }
          error={field.emailError}
          onChange={(e) => {
            changeField(e);
          }}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          name="password"
          label="password"
          variant="outlined"
          size="medium"
          className="email"
          fullWidth
          type="password"
          helperText={field.passwordError ? "Password is required" : " "}
          error={field.passwordError}
          onChange={(e) => {
            changeField(e);
          }}
        />
      </div>
  
    </div>
  );
}

export default Signup;
