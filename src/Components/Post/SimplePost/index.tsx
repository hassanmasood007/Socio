import { FunctionComponent } from "react";
import classes from "./index.module.css"

const Post: FunctionComponent = () => {
  return (
    <div className={classes.body}>
      <div className="">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className={classes.commentContainer}>
                <div className="d-flex flex-column">
                  <div className="bg-white">
                    <div className="flex-row d-flex">
                      <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/wonder-woman-et00040458-15-03-2021-01-43-28.jpg"
                        alt="img"  width="40" className="rounded-circle" />
                      <div className="d-flex flex-column justify-content-start ml-2">
                        <div className={classes.name}>
                          <span className="d-block font-weight-bold">Wonder Women</span>
                        </div>

                        <div className={classes.date}>
                          <span className="text-black-50">Public - 09Jun, 2021</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="commentText">
                        <p>Wonder Woman is a superheroine appearing in American comic books published by DC Comics.
                          The character is a founding member of the Justice League. The character first appeared in All Star
                          Comics #8 published October 21, 1941 with her first feature in Sensation Comics
                          #1 in January 1942. The Wonder Woman title has been published by DC Comics almost continuously ever
                          since. In her homeland, the island nation of Themyscira, her official title is Princess Diana of
                          Themyscira. When blending into the society outside of her homeland, she sometimes adopts her civilian
                          identity Diana Prince</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg=white">
                    <div className={classes.fs14}>
                      <div className="d-flex flex-row">
                        <div className={classes.cursor}>
                          <div className="p-2"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Like</span>
                          </div>
                        </div>
                        <div className={classes.cursor}>
                          <div className="p-2"><i className="fa fa-comment"></i><span className="ml-1">Comment</span>
                          </div>
                        </div>
                        <div className={classes.cursor}>
                          <div className="p-2"><i className="fa fa-share"></i><span className="ml-1">Share</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Post;
