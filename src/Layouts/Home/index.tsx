import classes from "./index.module.css";

import { FunctionComponent } from "react";

const Home: FunctionComponent = () => {
  return (
    <div className={classes.Wallpaper}>
      <header>
        <main className={classes.Description}>
          <h2>SOCIO</h2>
          <p className={classes.body}>
            SOCIO is an American Pakistan technology company based in Islamabad,
            Capital Territory. It was founded in 2004 as TheSOCIO by HASSAN
            MASOOD, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and
            Chris Hughes, roommates and students at Harvard College.
          </p>
        </main>
      </header>

      <footer className=" text-center text-white-50">
        <p> &copy; 2022</p>
      </footer>
    </div>
  );
};

export default Home;
