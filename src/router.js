import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Home from "./views/home/home";
import Tabbar from "./component/tabbar/tabbar";
import MusicList from "./views/musicList/musicList";

const BasicRoute = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/musicList" component={MusicList} />
    <Tabbar></Tabbar>
  </Router>
);

export default BasicRoute;
