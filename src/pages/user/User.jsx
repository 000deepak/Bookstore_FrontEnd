import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import service from "../../services/bookstore";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import shopping from "../../assets/2766594@2x.png";
import Signin from "../../components/signin/Signin";
import Signup from "../../components/signup/Signup";

import "./user.scss";

function User() {
  const [login, setLogin] = useState(true);

  let handleSwitch = () => {
    if (login) setLogin(false);
    else setLogin(true);
  };

  return (
    <div>
      <div className="mainpage">
        <div className="content">
          <div className="image">
            <img
              className="mainLogo"
              src={shopping}
              alt="this is logo"
              style={{ width: "245px", height: "245px" }}
            ></img>
          </div>

          <div className="formContainer">
            <div className="switch">
              <div className="sign" onClick={handleSwitch}>
                Signin
              </div>
              <div className="sign" onClick={handleSwitch}>
                Signup
              </div>
            </div>
            <div className="include-form">{login ? <Signin /> : <Signup />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
