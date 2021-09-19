import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Components/Buttons/SubmitButton";
import classes from "./index.module.css"

const About: FunctionComponent = () => {
  return (
    <div className={classes.box}>
        <form >
          <p>
            <h6>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum maiores id autem, nobis nisi officiis
              sequi cupiditate nulla voluptates exercitationem a ex deserunt impedit rerum nostrum expedita?
              Dignissimos, impedit architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum maiores
              id autem, nobis nisi officiis sequi cupiditate nulla voluptates exercitationem a ex deserunt impedit rerum
              nostrum expedita. Illum maiores
              id autem, nobis nisi officiis sequi cupiditate nulla voluptates exercitationem a ex deserunt impedit rerum
              nostrum expedita
            </h6>
          </p>

          <NavLink className="nav-link" to="/Login">
            <Button className="btn btn-primary" type="submit" name="submit" value="Get Started" />
          </NavLink>
        </form>
    </div>
  )
}

export default About;
