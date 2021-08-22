import { FunctionComponent } from "react";
import classes from "./index.module.css"


const Login:FunctionComponent = () => {
    return (
        <div className="" >
            <form className={classes.box} action="index.html" >
                <h1>Sign Up</h1>
                <input type="text" name=" " placeholder="Username" />
                <input type="password" name=" " placeholder="Password" />
                <input type="password" name=" " placeholder="Confirm Password" />
                <input type="email" name=" " placeholder="Email" />
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            </form>
        </div>
    )
}

export default Login;
