import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./scenes/Home/Home"
import Header from "./components/layout/header/header"

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
//<Route path="/about" component={About} />