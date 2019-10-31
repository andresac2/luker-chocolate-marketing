import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import cacao1 from '../../assets/img/roto-b.png'
import cacao2 from '../../assets/img/roto-c.png'

function Flow() {
  return (
    <div className="flow">
      <img src={logo} className="logo" alt="Logo Luker" />
      <div className="cacao-link">
        <img src={cacao1} className="cacao-link-1" alt="Logo Luker" />
        <img src={cacao2} className="cacao-link-2" alt="Logo Luker" />
      </div>
    </div>
  );
}

export default Flow;
