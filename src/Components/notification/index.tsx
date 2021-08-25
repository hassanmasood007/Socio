import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import classes from "./index.module.css"

const Notify :FunctionComponent = () => {
  return (
    <div className={classes.body}>
    <NavLink className="nav-link" to="/Feed">
      <div className="">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className={classes.commentContainer}>
                <div className="d-flex flex-column">
                  <div className="bg-white">
                    <div className="flex-row d-flex"> 
                      <img src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="img" width="50" height="50" className="rounded-circle" />
                        
                      <div className="ml-3 p-2">
                        <div className={classes.name}>
                            <span className=""><b>Hassan Masood</b> Liked your photo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </NavLink>
    </div>
  )
}

export default Notify;
