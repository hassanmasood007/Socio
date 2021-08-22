import classes from "./index.module.css"

import { FunctionComponent } from "react";

const Home:FunctionComponent = () => {
    return (
        <div className={classes.Wallpaper}>
            <header>
                <main className={classes.Description}>
                    <h1>
                        SOCIO
                    </h1>
                    <p className = "lead">
                       SOCIO is an American Pakistan technology company based in Islamabad, Capital Territory. It was founded in 2004 as TheSOCIO by HASSAN MASOOD, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes, roommates and students at Harvard College.
                    </p>
                </main>
            </header>

            <footer className="mt-auto text-center text-white-50">
                <p> &copy; 2021</p>
            </footer>
        </div>
    )
}

export default Home;