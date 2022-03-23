import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../Buttons/SubmitButton";

const ProfileLogo:FunctionComponent = () => {
    return(
        <div>
            <div className="card mt-2 mb-3 pb-3">
                <div className="card-body text-center">
                    <img src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Kathy Davis" className="rounded-circle mr-3" width="158" height="158" />
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