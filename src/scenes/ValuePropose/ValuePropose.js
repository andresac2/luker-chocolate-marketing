import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import item1 from '../../assets/img/cacao2.png'
import item2 from '../../assets/img/cacao1.png'
import item3 from '../../assets/img/pote3.png'
import item4 from '../../assets/img/grano4.png'
import ImgCarrousel from '../../components/img-carrousel/img-carrousel';

import { Link } from 'react-router-dom';

function ValuePropose() {
  return (
    <div className="value-propose-component">
      <div className="value-propose-component--expo">
        <div className="btn-dist">
          <img src={logo} className="logo" alt="Logo Luker" />
          <button onClick={() => console.log('hi')}> DISTRIBUIDORES </button>
        </div>
        <div className="value-propose-component--expo-pagraph">
          <h1>Nuestra oferta única</h1>
          <p>Prometemos darte un chocolate con un sabor único y superior, hecho en el origen y apoyando siempre el desarrollo ambiental, económico y social de los orígenes de nuestro cacao.</p>
        </div>
      </div>
      <div className="value-propose-component--carrousel">
        <h2>PRODUCTOS DESARROLLADOS</h2>
        <ImgCarrousel />
      </div>
      <div className="value-propose-component--item">
        <div className="value-propose-component--item-card">
          <img src={item1} alt="cacao" />
          <div className="value-propose-component--item-card-text">
            DALE UN SABOR ÚNICO A TUS PRODUCTOS
          </div>
          <div className="value-propose-component--item-card-hover">
            <p>Trabajamos solo con Cacao Fino de Aroma</p>
            <Link to="/our-value/aroma">CONOCE MÁS</Link>
          </div>
        </div>
        <div className="value-propose-component--item-card">
          <img src={item2} alt="cacao" />
          <div className="value-propose-component--item-card-text">
            MANTÉN LA CONSISTENCIA Y GARANTIZA TU ABASTECIMIENTO
          </div>
          <div className="value-propose-component--item-card-hover">
            <p>Queremos que tengas siempre el mejor producto</p>
            <Link to="/our-value/flavour">CONOCE MÁS</Link>
          </div>
        </div>
        <div className="value-propose-component--item-card">
          <img src={item3} alt="cacao" />
          <div className="value-propose-component--item-card-text">
            SOLUCIÓN INTEGRADA DE DISEÑO DE PRODUCTO Y EMPAQUE
          </div>
          <div className="value-propose-component--item-card-hover">
            <p>Tus necesidades se convierten en nuestro reto</p>
            <Link to="/our-value/product">CONOCE MÁS</Link>
          </div>
        </div>
        <div className="value-propose-component--item-card">
          <img src={item4} alt="cacao" />
          <div className="value-propose-component--item-card-text">
            CONECTA TU MARCA CON UN PROPÓSITO
          </div>
          <div className="value-propose-component--item-card-hover">
            <p>Te invitamos a participar en iniciativas de valor Compartido con impacto social y sostenible</p>
            <Link to="/our-value/social">CONOCE MÁS</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValuePropose;