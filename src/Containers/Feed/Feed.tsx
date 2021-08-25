import { FunctionComponent } from "react";
import Post from "../../Components/Post/SimplePost/index";
import ImagePost from "../../Components/Post/ImagePost";
import ProfileCard from "../../Components/Profile/ProfileCard";
import Activity from "../../Components/Profile/Activities";

const Feed: FunctionComponent = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 col-xl-3 order-2 order-lg-1">
              <ProfileCard />                
            </div>

            <div className="col-12 col-lg-8 col-xl-6 order-1 order-lg-2 mt-2 mb-3 pb-3">
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

            <div className="col-12 col-lg-12 col-xl-3 order-3 order-lg-3">
              <Activity />
      
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Feed;
