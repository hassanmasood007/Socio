import { FunctionComponent } from "react";

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
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Contact">Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/Login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Signup">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;