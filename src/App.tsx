import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FunctionComponent } from "react";
import Navbar from "./Layouts/Navbar/Navbar";
import Contact from "./Containers/Contact/Contact";
import About from "./Containers/About/About";
import Profile from "./Containers/Profile/Profile";
import SignUp from "./Containers/user/SignUp/SignUp";
import Home from "./Layouts/Home/home";
import Login from "./Containers/user/Login/Login";


const App:FunctionComponent = () => {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/Contact"><Contact /></Route>
          <Route path="/About"><About /></Route>
          <Route path="/Profile"><Profile /></Route>
          <Route path="/Signup"><SignUp /></Route>
          <Route path="/Login"><Login /></Route>
        </Switch>
      </BrowserRouter>
      <Home />
    </div>
  );
};

export default App;
