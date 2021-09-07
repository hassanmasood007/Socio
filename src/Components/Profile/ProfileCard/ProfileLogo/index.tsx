import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../Buttons/SubmitButton";

const ProfileLogo:FunctionComponent = () => {
    return(
        <div>
            <div className="card mt-2 mb-3 pb-3">
                <div className="card-body text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Kathy Davis" className="img-fluid rounded-circle mb-2" width="128" height="128" />
                    <h4 className="card-title mb-0">Hassan Masood</h4>
                    <div className="text-muted mb-2">Front-end Developer</div>
                    <div>
                        <NavLink to="/Profile">
                            <Button className="btn btn-primary btn-sm m-1 col-12" type="submit" name="submit" value="Follow" />
                            <Button className="btn btn-primary btn-sm m-1 col-12" type="submit" name="submit" value="Message" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfileLogo;