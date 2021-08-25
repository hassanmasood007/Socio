import { FunctionComponent } from "react";
import classes from "./index.module.css"
import Button from "../../../Components/Buttons/SubmitButton";
import Input from "../../../Components/Buttons/Input";

const Login: FunctionComponent = () => {
    return (
        <div className="" >
            <form className={classes.box} >
                <h1>Log In</h1>
                <Input type="text" name="Username" placeholder="Username" />
                <Input type="password" name="Password" placeholder="Password" /> 
                <Button className="btn btn-primary" type="submit" name="submit" value="Submit"></Button>
            </form>
            {/* <Link to={{
                pathname: '',
                state: [{ id: 1, name: 'Ford', color: 'red' }]
            }}> </Link> */}
        </div>
    )
}

export default Login;
