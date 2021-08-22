import { FunctionComponent } from "react";
import classes from "./index.module.css"

const Login: FunctionComponent = () => {
    return (
        <div className="" >
            <form className={classes.box} >
                <h1>Log In</h1>
                <input type="text" name=" " placeholder="Username" />
                <input type="password" name=" " placeholder="Password" />
                {/* <input type="submit" name=" " value="Log In" /> */}
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            </form>
            {/* <Link to={{
                pathname: '',
                state: [{ id: 1, name: 'Ford', color: 'red' }]
            }}> </Link> */}
        </div>
    )
}

export default Login;
