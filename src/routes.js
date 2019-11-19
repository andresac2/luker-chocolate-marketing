import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./scenes/Home/Home"
import Flow from "./scenes/Flow/Flow"
import Sustain from "./scenes/Sustain/Sustain"
import Header from "./components/layout/header/header"
import FooterCover from "./components/layout/footer-cover/footer-cover"
import Solutions from "./scenes/Solution/Solution";
import Customer from "./scenes/Customer/Customer";
import Ryd from "./scenes/Ryd/Ryd";
import ValuePropose from "./scenes/ValuePropose/ValuePropose";
import OurValue from "./scenes/OurValue/OurValue";
import Services from "./scenes/ProductsServices/ProductsServices";
import Blog from "./scenes/Blog/Blog";

export default function BasicExample() {
  return (
    <Router className="limit-width">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/flow" component={Flow} />
        <Route path="/sustain" component={Sustain} />
        <Route path="/solution" component={Solutions} />
        <Route path="/services/:title" component={Services} />
        <Route path="/customer" component={Customer} />
        <Route path="/ryd" component={Ryd} />
        <Route path="/value-propose" component={ValuePropose} />
        <Route path="/our-value/:id" component={OurValue} />
        <Route path="/blog/:category?" component={Blog} />
      </Switch>
      <FooterCover />
    </Router>
  );
}
//<Route path="/about" component={About} />