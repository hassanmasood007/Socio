import { FunctionComponent} from "react";
import Options from "../../Options";


const ImagePost: FunctionComponent = () => { 
  return (
    <div>
      <div className="card mt-2 mb-3">
        <div className="card-body h-100">
          <div className="media">
            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="56" height="56" className="rounded-circle mr-3" alt="Kathy Davis" />
            <div className="media-body">
              <small className="float-right text-navy">5m ago</small>
              <p className="mb-2"><strong>Wonder Women</strong></p>
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
        </div>
      </div>
    </div>
  )
}

export default ImagePost;
