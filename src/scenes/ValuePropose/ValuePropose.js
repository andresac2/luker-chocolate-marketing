import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import item1 from '../../assets/img/cacao2.png'
import item2 from '../../assets/img/cacao1.png'
import item3 from '../../assets/img/pote3.png'
import item4 from '../../assets/img/grano4.png'


function ValuePropose() {
  return (
    <div className="value-propose-component">
      <div className="value-propose-component--expo">
        <div className="btn-dist">
          <img src={logo} className="logo" alt="Logo Luker" />
          <button onClick={() => console.log('hi')}> DISTRIBUIDORES </button>
        </div>
        <h1>Nuestra oferta única</h1>
        <p>Prometemos darte un chocolate con un sabor único y superior, hecho en el origen y apoyando siempre el desarrollo ambiental, económico y social de los orígenes de nuestro cacao.</p>
      </div>
      <div className="value-propose-component--carrousel">
        <h2>PRODUCTOS DESARROLLADOS</h2>
      </div>
      <div className="value-propose-component--item">
        <div className="value-propose-component--item-card">
          <img src={item1} alt="cacao" />
          <div className="value-propose-component--item-card-text">
            DALE UN SABOR ÚNICO A TUS PRODUCTOS
          </div>
          <div className="value-propose-component--item-card-hover">Trabajamos solo con Cacao Fino de Aroma</div>
        </div>
        <div className="value-propose-component--item-card">
          <img src={item2} alt="cacao" />
          <div className="value-propose-component--item-card-text">
            MANTÉN LA CONSISTENCIA Y GARANTIZA TU ABASTECIMIENTO
          </div>
          <div className="value-propose-component--item-card-hover">Queremos que tengas siempre el mejor producto</div>
        </div>
        <div className="value-propose-component--item-card">
          <img src={item3} alt="cacao" />
          <div className="value-propose-component--item-card-text">
            SOLUCIÓN INTEGRADA DE DISEÑO DE PRODUCTO Y EMPAQUE
          </div>
          <div className="value-propose-component--item-card-hover">Tus necesidades se convierten en nuestro reto</div>
        </div>
        <div className="value-propose-component--item-card">
          <img src={item4} alt="cacao" />
          <div className="value-propose-component--item-card-text">
            CONECTA TU MARCA CON UN PROPÓSITO
          </div>
          <div className="value-propose-component--item-card-hover">Te invitamos a participar en iniciativas de valor Compartido con impacto social y sostenible</div>
        </div>
      </div>
    </div>
  );
}

export default ValuePropose;