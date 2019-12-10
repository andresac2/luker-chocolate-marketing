import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import item1 from '../../assets/img/unique-flavour.png'
import item2 from '../../assets/img/consistency-flavour.png'
import item3 from '../../assets/img/integrated-packaging.png'
import item4 from '../../assets/img/grano4.png'
import ImgCarrousel from '../../components/img-carrousel/img-carrousel';

import { Link } from 'react-router-dom';
import FloatLogo from '../../components/layout/float-logo/float-logo';

function ValuePropose() {
  return (
    <div className="value-propose-component">
      <div className="value-propose-component--expo">
        <div className="btn-dist">
          <Link to="/" className="logo"> <img src={logo} alt="Logo Luker" /></Link>
        </div>
        <FloatLogo btnText='dist' />
        <div className="value-propose-component--expo-pagraph">
          <h1>OUR VALUE PROPOSITION</h1>
          <p>We promise to offer chocolate with unique and superior flavour and that supports the environmental, economic, and social development of the origins of its cocoa beans.</p>
        </div>
      </div>
      <div className="value-propose-component--carrousel">
      </div>
      <div className="value-propose-component--item">
        <div className="value-propose-component--item-card">
          <img src={item1} alt="cacao" />
          <div className="value-propose-component--item-card-text">
            DIFFERENTIATE YOUR PRODUCT WITH A UNIQUE FLAVOUR
          </div>
          <div className="value-propose-component--item-card-hover">
            <p>We work exclusively with Cacao Fino de Aroma</p>
            <Link to="/our-value/aroma">LEARN MORE</Link>
          </div>
        </div>
        <div className="value-propose-component--item-card">
          <img src={item2} alt="cacao" />
          <div className="value-propose-component--item-card-text">
            KEEP THE CONSISTENCY IN THE FLAVOUR AND GUARANTEE YOUR SUPPLY
          </div>
          <div className="value-propose-component--item-card-hover">
            <p>We want you to always have the best product</p>
            <Link to="/our-value/flavour">LEARN MORE</Link>
          </div>
        </div>
        <div className="value-propose-component--item-card">
          <img src={item3} alt="cacao" />
          <div className="value-propose-component--item-card-text">
            INTEGRATED SOLUTIONS FOR DESIGN, PRODUCTS, AND PACKAGING
          </div>
          <div className="value-propose-component--item-card-hover">
            <p>Your needs become our challenge</p>
            <Link to="/our-value/product">LEARN MORE</Link>
          </div>
        </div>
        <div className="value-propose-component--item-card">
          <img src={item4} alt="cacao" />
          <div className="value-propose-component--item-card-text">
            CONNECT YOUR BRAND AROUND SUSTAINABILITY
          </div>
          <div className="value-propose-component--item-card-hover">
            <p>We encourage you to participate in shared value sustainable initiatives that have a social impact</p>
            <Link to="/our-value/social">LEARN MORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValuePropose;