import classes from "./index.module.css"
import Button from "../../../Components/Buttons/SubmitButton";
import Input from "../../../Components/Buttons/Input";

import { FunctionComponent } from "react";

const SignUp:FunctionComponent = () => {
    return (
        <div className="" >
            <form className={classes.box} action="index.html" >
                <h1>Sign Up</h1>
                <Input type="text" name=" " placeholder="Username" />
                <Input type="password" name=" " placeholder="Password" />
                <Input type="password" name=" " placeholder="Confirm Password" />
                <Input type="email" name=" " placeholder="Email" />
                <Button className="btn btn-primary" name="submit" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SignUp;
