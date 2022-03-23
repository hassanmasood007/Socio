import { FunctionComponent } from "react";
import Options from "../../Options";
import classes from "./index.module.css";


const ImagePost: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <ul className={classes.cards}>
        <li className={classes.cardsItem}>
          <div className="media">
            <img src="https://i.pinimg.com/564x/f2/9a/85/f29a85b01260d7a4f477b8e4646e94b4.jpg" width="56" height="56" className="rounded-circle mr-3" alt="Kathy Davis" />
            <div className="media-body">
              <small className="float-right text-navy">5m ago</small>
              <p className="mb-2"><strong>Uchiha</strong></p>
              <p>The Uchiha Clan (うちは一族, Uchiha Ichizoku) is one of the four noble clans of Konohagakure,
                reputed to be the village's strongest because of their Sharingan and natural battle prowess.
                After helping found Konoha decades ago, the Uchiha grew increasingly isolated from the village's
                affairs, culminating in most of their deaths during the Uchiha Clan Downfall. Few Uchiha now survive
                into the present day.</p>

              <div className="row no-gutters mt-1 mb-2">
                <div className="col-6">
                  <img src="https://wallpaperaccess.com/full/132749.jpg" className="img-fluid pr-1" alt="Unsplash" />
                </div>
                <div className="col-6">
                  <img src="https://i.pinimg.com/originals/e6/85/72/e68572a301f07a591edf37d934928eed.jpg" className="img-fluid pl-1" alt="Unsplash" />
                </div>
              </div>


              <Options />
            </div>
          </div>
        </li>
      </ul>
      <hr />
    </div>

  )
}

export default ImagePost;
