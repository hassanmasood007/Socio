import { FunctionComponent, useState } from "react";
import classes from "./index.module.css";

const Options:FunctionComponent = () => {
    const [isBlue, setIsBlue] = useState(false); 
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter + 1);
    let   decrementCounter = () => setCounter(counter-1 < 0 ? 0 : counter-1);

    return(
        <div>
            <div className="bg=white">
                <div className={classes.fs14}>
                    <div className="d-flex flex-row">
                    <div className={classes.cursor}>
                        <div className="p-2"><i className="fa fa-thumbs-o-up"></i><span className="ml-1" 
                         onClick={() => {
                            incrementCounter();
                            setIsBlue(!isBlue);
                          }}
                         style={{ color: isBlue ? "blue" : "black" }}>Like</span>
                        </div>
                    </div>

                    <div className={classes.cursor}>
                        <div className="p-2"><i className="fa fa-thumbs-o-down"></i><span className="ml-1" onClick={decrementCounter}
                        >disLike</span>
                        </div>
                    </div>

                    <div className={classes.cursor}>
                        <div className="p-2"><i className="fa fa-comment"></i><span className="ml-1" 
                        >Comment</span>
                        </div>
                    </div>
                    <div className={classes.cursor}>
                        <div className="p-2"><i className="fa fa-share"></i><span className="ml-1">Share</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <small className="text-muted">-{counter} Likes</small>
            
        </div>
    )
}

export default Options;