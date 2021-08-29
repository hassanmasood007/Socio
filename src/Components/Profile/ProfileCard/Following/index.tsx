import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../Buttons/SubmitButton";

const Following: FunctionComponent = () => {
    return (
        <div>
                
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
                    <h5 className="card-title mb-0">Following</h5>
                </div>
                <div className="card-body">

                    <div className="media">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="56" height="56" className="rounded-circle mr-2" alt="Andrew Jones" />
                        <div className="media-body">
                            <p className="my-1"><strong>Andrew Jones</strong></p>
                            <NavLink to="/Profile">
                            <Button className="btn btn-sm btn-outline-primary" type="submit" name="submit" value="Unfollow"></Button>
                            </NavLink>
                        </div>
                    </div>

                    <hr className="my-2" />

                    <div className="media">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="56" height="56" className="rounded-circle mr-2" alt="John Smit" />
                        <div className="media-body">
                            <p className="my-1"><strong>John Smit</strong></p>
                            <NavLink to="/Profile">
                            <Button className="btn btn-sm btn-outline-primary" type="submit" name="submit" value="Unfollow"></Button>
                            </NavLink>
                        </div>
                    </div>

                    <hr className="my-2" />

                    <div className="media">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="56" height="56" className="rounded-circle mr-2" alt="Marie Salter" />
                        <div className="media-body">
                            <p className="my-1"><strong>Marie Salter</strong></p>
                            <NavLink to="/Profile">
                            <Button className="btn btn-sm btn-outline-primary" type="submit" name="submit" value="Unfollow"></Button>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Following;