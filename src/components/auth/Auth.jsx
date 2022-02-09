import React from "react";
// import { Redirect } from "react-router-dom";
import { Navigate, Route } from "react-router-dom";

function Protected(props) {
  var auth = localStorage.getItem("token");
  return <div>{auth ? props.element : <Navigate to={{ pathname: "/user" }} />}</div>;
}

export default Protected;
