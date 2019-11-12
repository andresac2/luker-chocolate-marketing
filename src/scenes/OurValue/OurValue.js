import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import cacao1 from '../../assets/img/roto-b.png'
import cacao2 from '../../assets/img/roto-c.png'
import cacao3 from '../../assets/img/roto-a.png'

import { Link } from 'react-router-dom';

function OurValue() {
  return (
    <div className="our-value-component">
      <div className="btn-dist">
        <img src={logo} className="logo" alt="Logo Luker" />
        <Link to="/value-propose">BACK TO VALUES</Link>
      </div>
      <h2>hola</h2>
    </div>
  );
}

export default OurValue;