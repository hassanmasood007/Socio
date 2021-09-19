import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

const AboutProfile:FunctionComponent = () => {
    return (
        <div className="card mb-3">
            <div className="card-header">
                <div className="card-actions float-right">
                    <div className="dropdown show">
                        <NavLink to="/Profile" data-toggle="dropdown" data-display="static">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal align-middle">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                        </NavLink>

                        <div className="dropdown-menu dropdown-menu-right">
                            <NavLink className="dropdown-item" to="/Profile">Action</NavLink>
                            <NavLink className="dropdown-item" to="/Profile">Another action</NavLink>
                            <NavLink className="dropdown-item" to="/Profile">Something else here</NavLink>
                        </div>
                    </div>
                </div>
                <h5 className="card-title mb-0">About</h5>
            </div>
            <div className="card-body">
                <ul className="list-unstyled mb-0">
                    <li className="mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home feather-sm mr-1">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg> Lives in <NavLink to="/Profile">Islamabad, PK</NavLink></li>
                    <li className="mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-briefcase feather-sm mr-1">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg> Works at <NavLink to="/Profile">GitHub</NavLink></li>
                    <li className="mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin feather-sm mr-1">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg> From <NavLink to="/Profile">Lahore</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default AboutProfile;