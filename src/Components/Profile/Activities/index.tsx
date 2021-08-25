import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Buttons/SubmitButton";

const Activity: FunctionComponent = () => {
    return (
        <div>
            <div className="card mt-2 mb-3 pb-3">
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
                    <h5 className="card-title mb-0">Activities</h5>
                </div>
                <div className="card-body h-100">

                    <div className="media">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="36" height="36" className="rounded-circle mr-2" alt="Kathy Davis" />
                        <div className="media-body">
                            <small className="float-right text-navy">5m ago</small>
                            <strong>Kathy Davis</strong> started following <strong>Marie Salter</strong>

                            <small className="text-muted">Today 7:51 pm</small>

                        </div>
                    </div>

                    <hr />
                    <div className="media">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="36" height="36" className="rounded-circle mr-2" alt="Andrew Jones" />
                        <div className="media-body">
                            <small className="float-right text-navy">30m ago</small>
                            <strong>Andrew Jones</strong> posted something on <strong>Marie Salter</strong>'s timeline

                            <small className="text-muted">Today 7:21 pm</small>

                            <div className="border text-sm text-muted p-2 mt-1">
                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam..
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="media">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="36" height="36" className="rounded-circle mr-2" alt="Marie Salter" />
                        <div className="media-body">
                            <small className="float-right text-navy">1h ago</small>
                            <strong>Marie Salter</strong> posted a new blog


                            <small className="text-muted">Today 6:35 pm</small>
                        </div>
                    </div>

                    <hr />
                    <div className="media">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="36" height="36" className="rounded-circle mr-2" alt="John Smith" />
                        <div className="media-body">
                            <small className="float-right text-navy">3h ago</small>
                            <strong>John Smith</strong> posted two photos on <strong>Marie Salter</strong>'s timeline

                            <small className="text-muted">Today 5:12 pm</small>

                            <div className="row no-gutters mt-1">
                                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="img-fluid pr-2" alt="Unsplash" />
                                </div>
                                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="img-fluid pr-2" alt="Unsplash" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="media">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="36" height="36" className="rounded-circle mr-2" alt="Marie Salter" />
                        <div className="media-body">
                            <small className="float-right text-navy">1d ago</small>
                            <strong>Marie Salter</strong> posted a new blog

                            <small className="text-muted">Yesterday 2:43 pm</small>
                        </div>
                    </div>

                    <hr />
                    <div className="media">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="36" height="36" className="rounded-circle mr-2" alt="Andrew Jones" />
                        <div className="media-body">
                            <small className="float-right text-navy">1d ago</small>
                            <strong>Andrew Jones</strong> started following <strong>Marie Salter</strong>

                            <small className="text-muted">Yesterdag 1:51 pm</small>
                        </div>
                    </div>
                    <hr />
                    <NavLink to="/Feed" >
                    <Button className="btn btn-primary btn-sm btn-block" type="submit" name="submit" value="Load More"></Button>
                    </NavLink>
                </div>
            </div>




        </div>

    )
}

export default Activity;