import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/home/home";

const BasicRoute = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
);

export default BasicRoute;
