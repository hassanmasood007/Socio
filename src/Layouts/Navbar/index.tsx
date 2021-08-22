import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

const Navbar:FunctionComponent = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    {/* <img src="../../assets/images/logo.JPG" alt="" width="30" height="24" className="d-inline-block align-text-top"></img> */}
                    SOCIO</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Feed">Feed</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Notifications">Notifications</NavLink>
                        </li>
                    </ul>
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link"  to='/About' >About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Signup">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Logout">Log Out</NavLink>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar;