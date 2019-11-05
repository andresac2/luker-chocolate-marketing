import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/Lukerlogo.svg'

function Solution() {

  return (
    <div className='solution-component'>
      <div className="solution-component--service">
        <Link to="/solution" className="header-btn">
          SERVICIOS
        </Link>
        <div className="btn-dist">
          <img src={logo} className="logo" alt="Logo Luker" />
          <button onClick={() => console.log('hi')}> DISTRIBUIDORES </button>
        </div>
      </div>
      <div className="solution-component--maquila">
        <Link to="/solution" className="header-btn">
          MAQUILA
            </Link>
      </div>
      <div className="solution-component--ingredient">
        <Link to="/solution" className="header-btn">
          INGREDIENTES
            </Link>
      </div>
    </div>
  );
}

export default Solution;