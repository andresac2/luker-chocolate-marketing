import React from 'react';
import {
  Redirect,
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
import ScrollToTop from "./commons/scroll-to-top/scroll-to-top";
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

export default function BasicExample(props) {

  return (
    <div className="limit-width" >
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} changefreq='weekly' priority={1} />
        <Route path="/chocolate-process" component={() => <Flow serverProps={props.serverProps} />} />
        <Route path="/proceso-del-chocolate" component={() => <Flow serverProps={props.serverProps} />} />
        <Route path="/sustainability" component={Sustain} />
        <Route path="/sostenibilidad" component={Sustain} />
        <Route path="/products-services/:title/:item?" component={Services} />
        <Route path="/productos-servicios/:title/:item?" component={Services} />
        <Route path="/products-services" component={Solutions} />
        <Route path="/productos-servicios" component={Solutions} />
        <Route path="/our-clients" component={Customer} />
        <Route path="/nuestros-clientes" component={Customer} />
        <Route path="/ideas-trends" component={Ryd} />
        <Route path="/ideas-tendencias" component={Ryd} />
        <Route path="/our-value/:id" component={OurValue} />
        <Route path="/propuesta-valor/:id" component={OurValue} />
        <Route path="/our-value" component={ValuePropose} />
        <Route path="/propuesta-valor" component={ValuePropose} />
        <Route path="/blog/:category?/:article?" component={(matchProps) => <Blog {...matchProps} serverProps={props.serverProps} />} changefreq='daily' priority={1} />
        <Route path="/contact-us" component={WrappedContact} />
        <Route path="/contactanos" component={WrappedContact} />
        <Route path="/work-with-us" component={WrappedWorkWithUs} />
        <Route path="/trabaja-con-nosotros" component={WrappedWorkWithUs} />
        <Redirect from="/:en/blog/:article" to="/blog/under-the-tree/:article" />

        <Route component={Page404} />
      </Switch>
      <NavArrowRight />
      <NavArrowLeft />
      <FooterCover />
    </div>

  );
}
//<Route path="/about" component={About} />