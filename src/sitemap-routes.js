import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";

export default function SiteRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" changefreq='weekly' priority={1} />
        <Route path="/chocolate-process" />
        <Route path="/proceso-del-chocolate" />
        <Route path="/sustainability" />
        <Route path="/sostenibilidad" />
        <Route path="/products-services/:title/:item?" />
        <Route path="/productos-servicios/:title/:item?" />
        <Route path="/products-services" />
        <Route path="/productos-servicios" />
        <Route path="/our-clients" />
        <Route path="/nuestros-clientes" />
        <Route path="/ideas-trends" />
        <Route path="/ideas-tendencias" />
        <Route path="/our-value/:id" />
        <Route path="/propuesta-valor/:id" />
        <Route path="/our-value" />
        <Route path="/propuesta-valor" />
        <Route path="/blog/:category?/:article?" changefreq='daily' priority={1} />
        <Route path="/contact-us" />
        <Route path="/contactanos" />
        <Route path="/work-with-us" />
        <Route path="/trabaja-con-nosotros" />
        <Redirect from="/:en/blog/:article" to="/blog/under-the-tree/:article" />
      </Switch>
    </Router>
  );
}
//<Route path="/about" component={About} />