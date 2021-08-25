import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import classes from "./index.module.css"

const About: FunctionComponent = () => {
  return (
    <div>
      <form className={classes.box} >
            <p>
              <h6>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum maiores id autem, nobis nisi officiis 
                sequi cupiditate nulla voluptates exercitationem a ex deserunt impedit rerum nostrum expedita? 
                Dignissimos, impedit architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum maiores
                id autem, nobis nisi officiis sequi cupiditate nulla voluptates exercitationem a ex deserunt impedit rerum 
                nostrum expedita? Dignissimos, impedit architecto.
              </h6>
            </p>

            <NavLink className="mt-2 btn btn-primary" to="/Login">Get Started</NavLink>
        </form>
    </div>
  )
}

export default About;
