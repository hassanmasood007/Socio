import { FunctionComponent } from "react";
import classes from "./index.module.css"
import Button from "../../Buttons/SubmitButton";
import Input from "../../Buttons/Input";


const Form: FunctionComponent = () => {
    return (
        <div className={classes.box}>
            <form action="">
                <h3>Quick Contact</h3>
                <h6>Contact us today, and get reply with in 24 hours!</h6>

                <Input placeholder="Name" type="text" name="Username" />
                <Input placeholder="Email Address" type="email" name="Username" />


                <Input placeholder="Phone Number" type="text" name="Telephone" />
                <textarea placeholder="Type your Message Here...."  required></textarea>
                <Button className="btn btn-primary" name="submit" type="submit" value="Submit" />

            </form>
        </div >

    )
}

export default Form;
