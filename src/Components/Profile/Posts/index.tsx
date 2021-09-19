import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import Options from "../../Options";
import classes from "./index.module.css"

const Posts: FunctionComponent = () => {
    return (
        <div className={classes.main}>
            <ul className={classes.cards}>
                <li className={classes.cardsItem}>
                    <div className="card mt-2 mb-3 pb-3">
                        <div className="card-body h-100">
                            <div className="media">
                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="56" height="56" className="rounded-circle mr-3" alt="Kathy Davis" />
                                <div className="media-body">
                                    <small className="float-right text-navy">5m ago</small>
                                    <p className="mb-2"><strong>Wonder Women</strong></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, numquam. Minima, quibusdam? Accusantium blanditiis ipsum deleniti maiores quis eligendi. Doloribus eius temporibus repudiandae quam quaerat? Sit voluptatem labore necessitatibus eius.</p>

                                    <div className="row no-gutters mt-1">
                                        <div className="col-6">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="img-fluid pr-1" alt="Unsplash" />
                                        </div>
                                        <div className="col-6">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="img-fluid pl-1" alt="Unsplash" />
                                        </div>
                                    </div>
                                    <Options />

                                    <div className="media mt-3">
                                        <NavLink className="pr-2" to="/Profile">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="36" height="36" className="rounded-circle mr-2" alt="Marie Salter" />
                                        </NavLink>
                                        <div className="media-body">
                                            <p className="text-muted">
                                                <strong>Marie Salter</strong>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quis enim dignissimos? Nulla tempore, voluptatum dolore reprehenderit asperiores quia nobis culpa, debitis alias minima commodi laudantium corrupti sed iste possimus!
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <hr />
                            <div className="media">
                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="56" height="56" className="rounded-circle mr-3" alt="Andrew Jones" />
                                <div className="media-body">
                                    <small className="float-right text-navy mb-4">30m ago</small>
                                    <p className="mb-2"><strong>Andrew Jones</strong></p>
                                    <p className="m-1">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus vitae aperiam, ea fugit architecto ipsum quia eum incidunt quisquam doloremque, libero tempore nihil quo porro, saepe qui molestias perferendis!
                                    </p>
                                    <Options />
                                </div>
                            </div>

                            <hr />
                            <div className="media">
                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="56" height="56" className="rounded-circle mr-3" alt="John Smith" />
                                <div className="media-body">
                                    <small className="float-right text-navy">3h ago</small>
                                    <p className="mb-2"><strong>John Smith</strong></p>

                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="img-fluid" alt="Unsplash" />
                                    <Options />

                                    <div className="media mt-3">
                                        <NavLink className="pr-2" to="/Profile">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="36" height="36" className="rounded-circle mr-2" alt="Marie Salter" />
                                        </NavLink>
                                        <div className="media-body">
                                            <p className="text-muted">
                                                <strong>Marie Salter</strong>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nulla voluptatibus tenetur consequatur recusandae aliquid, ullam cum aperiam reiciendis non impedit doloribus placeat adipisci soluta optio esse quo nobis hic.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            <div className="media">
                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="56" height="56" className="rounded-circle mr-3" alt="Kathy Davis" />
                                <div className="media-body">
                                    <small className="float-right text-navy">4h ago</small>
                                    <p className="mb-2"><strong>Kathy Davis</strong></p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque consequuntur, ipsa reiciendis unde architecto veniam cumque sit fugiat voluptate magnam officia quis quibusdam, ipsam hic laboriosam iure accusamus soluta.
                                    </p>
                                    <small className="text-muted">Today 4:21 pm</small>
                                    <Options />


                                </div>
                            </div>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    )
}

export default Posts;