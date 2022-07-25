import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { selectUser } from "./componets/userSlice";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(selectUser)
  console.log(user);
  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;