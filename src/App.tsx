import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FunctionComponent } from "react";


import Navbar from "./Layouts/Navbar";
import Contact from "./Containers/Contact/index";
import About from "./Containers/About";
import Profile from "./Containers/Profile";
import Signup from "./Containers/user/Signup"
import Home from "./Layouts/Home";
import Login from "./Containers/user/Login";
import Feed from "./Containers/Feed/Feed";
import Notification from "./Containers/Notification";


const App:FunctionComponent = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path={"Contact, About, Feed, Profile, Signup, Login, Notification , /"} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Feed" component={Feed} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Notification" component={Notification} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
