import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import service from "../../services/bookstore";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import "./signin.scss";

function Signin() {
    const navigate = useNavigate();
  const [field, setField] = useState({
    email: "",
    password: "",
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
    let emailError = field.email === "" ? true : false;
    let passwordError = field.password === "" ? true : false;

    setField((previousvalues) => {
      return { ...previousvalues, emailError: emailError, passwordError: passwordError };
    });
    return (isError = field.emailError || field.passwordError);
  };

  const next = () => {
    let validated = validation();
    if (!validated) {
      let data = {
        email: field.email,
        password: field.password,
      };
      service
        .signin(data)
        .then((res) => {
          console.log(res);
          localStorage.setItem("firstname", res.data.data.firstName);
          localStorage.setItem("lastname", res.data.data.lastName);
          localStorage.setItem("email", res.data.data.email);
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("userId", res.data.data.userId);
            navigate("/");
            
        })
        .catch((res) => {});
    }
  };

  return (
    <div className="login-form">
      <div>
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
      <div className="forgot" style={{  paddingLeft: "2rem",paddingBottom: "1rem" }}>Forgot Password?</div>
      <div className="loginButton" onClick={next}>
        <Button
          variant="contained"
          size="small"
          style={{ backgroundColor: "#C03A2B", width: "100%" }}
        >
          Login
        </Button>
      </div>
      <div className="or" st>OR</div>
      <div className="elsebutton" /* onClick={next} */>
        <Button variant="contained" size="small">
          Facebook
        </Button>
        <Button variant="contained" size="small" style={{ backgroundColor: "#E4E4E4",color:"black" }}>
          Google
        </Button>
      </div>
    </div>
  );
}

export default Signin;
