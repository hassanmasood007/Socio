import { FunctionComponent } from "react";
import classes from "./index.module.css"



const Form: FunctionComponent = () => {
    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <div className={classes.contact}>
                    <form action="">
                        <h3>Quick Contact</h3>
                        <h4>Contact us today, and get reply with in 24 hours!</h4>
                        <div className={classes.fieldset}>
                            <fieldset>
                                <input placeholder="Your name" type="text" tabIndex={1} required autoFocus />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Email Address" type="email" tabIndex={2} required />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Phone Number" type="tel" tabIndex={3} required />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Web Site starts with http://" type="url" tabIndex={4} required />
                            </fieldset>
                            <fieldset>
                                <textarea placeholder="Type your Message Here...." tabIndex={5} required></textarea>
                            </fieldset>
                            <fieldset>
                                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                            </fieldset>
                        </div>

                    </form>
                </div>

            </div>
        </div>

    )
}

export default Form;
