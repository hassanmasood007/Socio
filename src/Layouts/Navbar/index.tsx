import { FunctionComponent, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../store/auth.context";

const Navbar: FunctionComponent = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          SOCIO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            {authCtx.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/Feed">
                  Feed
                </NavLink>
              </li>
            )}
            {authCtx.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/Profile">
                  Profile
                </NavLink>
              </li>
            )}
            {authCtx.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/Notification">
                  Notifications
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="navbar-nav">
            {!authCtx.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
            )}
            {!authCtx.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact
                </NavLink>
              </li>
            )}

            {!authCtx.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/Login">
                  Login
                </NavLink>
              </li>
            )}
            {!authCtx.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/Signup">
                  Sign up
                </NavLink>
              </li>
            )}

            {authCtx.isLoggedIn && (
              <li className="nav-item" onClick={logoutHandler}>
                <NavLink className="nav-link" to="/">
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
