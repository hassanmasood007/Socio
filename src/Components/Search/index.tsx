import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import classes from "./index.module.css"

const Search: FunctionComponent = () => {
    return (
        <div className="mt-2 mb-3 pb-3">
            <div className="text-center mt-3">
                <div className={classes.Container}>
                    <div className={classes.Elements}>
                        <input className={classes.Search} type="text" name="" placeholder="Type to search" />
                        <NavLink to="/Profile">
                            <i className="fa fa-search"></i>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Search;