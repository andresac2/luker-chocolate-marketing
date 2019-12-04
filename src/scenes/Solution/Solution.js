import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/Lukerlogo.svg'

function Solution() {

  return (
    <div className='solution-component'>
      <div className="solution-component--ingredient">
        <div className="btn-dist">
          <img src={logo} className="logo" alt="Logo Luker" />
          <button onClick={() => console.log('hi')}> FIND A DISTRIBUTOR </button>
        </div>
        <Link to="/services/ingredients" className="header-btn">
          INGREDIENTS
        </Link>
      </div>
      <div className="solution-component--maquila">
        <Link to="/services/maquila" className="header-btn">
          FINISHED CHOCOLATE PRODUCTS
            </Link>
      </div>
      <div className="solution-component--service">
        <Link to="/services/our-services" className="header-btn">
          OUR SERVICES
        </Link>
      </div>
    </div>
  );
}

export default Solution;