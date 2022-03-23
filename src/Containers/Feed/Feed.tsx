import { FunctionComponent } from "react";
import Post from "../../Components/Post/SimplePost/index";
import ImagePost from "../../Components/Post/ImagePost";
import Activity from "../../Components/Profile/Activities";
import AboutProfile from "../../Components/Profile/ProfileCard/AboutProfile";
import Following from "../../Components/Profile/ProfileCard/Following";
import Search from "../../Components/Search";

const Feed: FunctionComponent = () => {
  return (
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 order-2 order-lg-1">
              <Search />
              <AboutProfile />
              <Following />             
            </div>


            <div className="col-lg-8 col-xl-6 order-1 order-lg-2 mt-2 mb-3 pb-3">
              <Post />
              <div>
                <Post />
              </div>
              <div>
                <Post />
              </div>
              <div>
                <Post />
              </div>
              <div>
                <Post />
              </div>
              <div>
                <ImagePost />
              </div>
              <div>
                <ImagePost />
              </div> 
            </div>

            <div className="col-lg-12 col-xl-3 order-3 order-lg-3">
              <Activity />
      
            </div>
          </div>
        </div>
  )
}

export default Feed;
