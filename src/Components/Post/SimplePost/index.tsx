import { FunctionComponent } from "react";
import Options from "../../Options";
import classes from "./index.module.css"


const Post: FunctionComponent = () => {
  return (
    // <div>
    //   <div className="card mt-0 mb-3">
    //     <div className="card-body h-100">
    //       <div className="media">
    //         <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="56" height="56" className="rounded-circle mr-3" alt="Kathy Davis" />
    //         <div className="media-body">
    //           <small className="float-right text-navy">5m ago</small>
    //           <p className="mb-2"><strong>Wonder Women</strong></p>

    //             <p>Wonder Woman is a superheroine appearing in American comic books published by DC Comics.
    //               The character is a founding member of the Justice League. The character first appeared in All Star
    //              Comics #8 published October 21, 1941 with her first feature in Sensation Comics
    //              #1 in January 1942. The Wonder Woman title has been published by DC Comics almost continuously ever
    //               since. In her homeland, the island nation of Themyscira, her official title is Princess Diana of
    //               Themyscira. When blending into the society outside of her homeland, she sometimes adopts her civilian sidentity Diana Prince</p>
    //           <Options />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="card">
    <div className={classes.main}>
      <ul className={classes.cards}>
        <li className={classes.cardsItem}>
            <div className="media">
              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="56" height="56" className="rounded-circle mr-3" alt="Kathy Davis" />
              <div className="media-body">

                <small className="float-right text-navy">5m ago</small>
                  <strong>Wonder Women</strong>
                  <p >Wonder Woman is a superheroine appearing in American comic books published by DC Comics.
                    The character is a founding member of the Justice League. The character first appeared in All Star
                    Comics #8 published October 21, 1941 with her first feature in Sensation Comics
                    #1 in January 1942. The Wonder Woman title has been published by DC Comics almost continuously ever
                    since. In her homeland, the island nation of Themyscira, her official title is Princess Diana of
                    Themyscira. When blending into the society outside of her homeland, she sometimes adopts her civilian sidentity Diana Prince</p>
                  <Options />
                </div>
              </div>
        </li>
      </ul>

    </div>
    </div>
  )
}

export default Post;
