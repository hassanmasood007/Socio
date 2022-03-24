import classes from "./index.module.css";
import Button from "../../../Components/Buttons/SubmitButton";
import Input from "../../../Components/Buttons/Input";

import { FunctionComponent, useContext } from "react";
import AuthContext from "../../../store/auth.context";

const SignUp: FunctionComponent = () => {
  const authCtx = useContext(AuthContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    authCtx.login();
  };
  return (
    <div className="">
      <form
        className={classes.box}
        action="index.html"
        onSubmit={submitHandler}
      >
        <h1>Sign Up</h1>
        <Input type="text" name=" " placeholder="Username" />
        <Input type="password" name=" " placeholder="Password" />
        <Input type="password" name=" " placeholder="Confirm Password" />
        <Input type="email" name=" " placeholder="Email" />
        <Button
          className="btn btn-primary"
          name="submit"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default SignUp;
