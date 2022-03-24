import React, { FunctionComponent, useContext } from "react";
import classes from "./index.module.css";
import Button from "../../../Components/Buttons/SubmitButton";
import Input from "../../../Components/Buttons/Input";
import AuthContext from "../../../store/auth.context";

const Login: FunctionComponent = () => {
  const authCtx = useContext(AuthContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    authCtx.login();
  };
  return (
    <form className={classes.box} onSubmit={submitHandler}>
      <h1>Log In</h1>
      <Input type="text" name="Username" placeholder="Username" />
      <Input type="password" name="Password" placeholder="Password" />
      <Button
        className="btn btn-primary"
        type="submit"
        name="submit"
        value="Submit"
      ></Button>
    </form>
  );
};

export default Login;
