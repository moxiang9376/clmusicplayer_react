import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/home/home";
import MusicList from "./views/musicList/musicList";
import Tabbar from "./component/tabbar/tabbar";
import HeadNav from "./component/headNav/headNav";
import AudioPlayer from "./component/audioPlayer/audioPlayer"

const BasicRoute = () => (
  <Router>
    <HeadNav></HeadNav>
    <Route exact path="/" component={Home} />
    <Route exact path="/musicList" component={MusicList} />
    <AudioPlayer></AudioPlayer>
    <Tabbar></Tabbar>
  </Router>
);

export default BasicRoute;
