import { FunctionComponent } from "react";
import Activity from "../../Components/Profile/Activities";
import Posts from "../../Components/Profile/Posts";
import AboutProfile from "../../Components/Profile/ProfileCard/AboutProfile";
import Following from "../../Components/Profile/ProfileCard/Following";
import ProfileLogo from "../../Components/Profile/ProfileCard/ProfileLogo";

const Profile: FunctionComponent = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-xl-3 order-2 order-lg-1">
                        <ProfileLogo />
                        <AboutProfile />
                        <Following />
                    </div>
                    <div className="col-12 col-lg-8 col-xl-6 order-1 order-lg-2">
                        <Posts />
                    </div>
                    <div className="col-12 col-lg-12 col-xl-3 order-3 order-lg-3">
                        <Activity />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;