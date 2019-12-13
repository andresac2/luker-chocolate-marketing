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
import WrappedContact from "./components/layout/contact/contact";
import Page404 from "./components/layout/page404/page404";
import NavArrowRight from "./components/layout/nav-arrows/nav-arrow-right";
import NavArrowLeft from "./components/layout/nav-arrows/nav-arrow-left";
import WrappedWorkWithUs from "./components/layout/work-with-us/work-with-us";

export default function BasicExample() {
  return (
    <Router className="limit-width">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chocolate-process" component={Flow} />
        <Route path="/sustainability" component={Sustain} />
        <Route path="/products-services/:title/:item?" component={Services} />
        <Route path="/products-services" component={Solutions} />
        <Route path="/our-clients" component={Customer} />
        <Route path="/ideas-trends" component={Ryd} />
        <Route path="/our-value/:id" component={OurValue} />
        <Route path="/our-value" component={ValuePropose} />
        <Route path="/blog/:category?/:article?" component={Blog} />
        <Route path="/contact-us" component={WrappedContact} />
        <Route path="/work-with-us" component={WrappedWorkWithUs} />

        <Route component={Page404} />
      </Switch>
      <NavArrowRight />
      <NavArrowLeft />
      <FooterCover />
    </Router>
  );
}
//<Route path="/about" component={About} />