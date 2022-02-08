import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import service from "../../services/bookstore";
import { useNavigate } from "react-router-dom";
import "./signup.scss";

function Signup() {
  const navigate = useNavigate();

  const [field, setField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",

    firstNameError: false,
    lastNameError: false,
    emailError: false,
    passwordError: false,
  });

  const changeField = (e) => {
    setField((previousvalues) => {
      return { ...previousvalues, [e.target.name]: e.target.value };
    });
  };

  const validation = () => {
    let isError = false;
    let firstNameError = field.email === "" ? true : false;
    let lastNameError = field.email === "" ? true : false;
    let emailError = field.email === "" ? true : false;
    let passwordError = field.password === "" ? true : false;

    setField((previousvalues) => {
      return {
        ...previousvalues,
        firstNameError: firstNameError,
        lastNameError: lastNameError,
        emailError: emailError,
        passwordError: passwordError,
      };
    });
    return (isError =
      field.emailError || field.passwordError || field.firstNameError || field.lastNameError);
  };

  const next = () => {
    let validated = validation();
    if (!validated) {
      let data = {
        firstName: field.firstName,
        lastName: field.lastName,
        email: field.email,
        password: field.password,
      };
      service
        .signup(data)
        .then((res) => {
          console.log(res);

          navigate("/");
        })
        .catch((res) => {});
    }
  };

 

  return (
    <div className="signup-form">
      <div>
        <TextField
          id="outlined-basic"
          name="firstName"
          label="firstName"
          variant="outlined"
          size="small"
          className="firstName"
          fullWidth
          autoFocus="true"
          helperText={field.firstNameError ? "firstName is required" : " "}
          error={field.firstNameError}
          onChange={(e) => {
            changeField(e);
          }}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          name="lastName"
          label="lastName"
          variant="outlined"
          size="small"
          className="lastName"
          fullWidth
          autoFocus="true"
          helperText={field.lastNameError ? "lastName is required" : " "}
          error={field.lastNameError}
          onChange={(e) => {
            changeField(e);
          }}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          name="email"
          label="Email"
          variant="outlined"
          size="small"
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
          size="small"
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
      <div className="signup-button" onClick={next}>
        <Button
          variant="contained"
          size="small"
          style={{ backgroundColor: "#C03A2B", width: "100%" }}
        >
          Register
        </Button>
      </div>
    </div>
  );
}

export default Signup;
