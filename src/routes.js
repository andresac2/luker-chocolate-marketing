import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./scenes/Home/Home"
import Moment from "./scenes/Moment/Moment"
import Header from "./components/layout/header/header"
import FooterCover from "./components/layout/footer-cover/footer-cover"

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/moment" component={Moment} />
        </Switch>
        <FooterCover />
      </div>
    </Router>
  );
}
//<Route path="/about" component={About} />