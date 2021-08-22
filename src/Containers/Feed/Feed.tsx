import { FunctionComponent } from "react";
import Post from "../../Components/Post/SimplePost/index";
import ImagePost from "../../Components/Post/ImagePost";

const Feed: FunctionComponent = () => {
  return (
    <div>
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
  )
}

export default Feed;
