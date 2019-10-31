import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import cacao1 from '../../assets/img/roto-b.png'
import cacao2 from '../../assets/img/roto-c.png'
import cacao3 from '../../assets/img/roto-a.png'

import FlowTabs from '../../components/flow-cacao/flow-tabs/flow-tabs'

function Flow() {
  return (
    <div className="flow-component">
      <div className="flow-sidebar">
        <div className="cacao-link">
          <div className="cacao-link-content">
            <img src={cacao3} className="cacao-link-2" alt="Logo Luker" />
            <img src={cacao1} className="cacao-link-1" alt="Logo Luker" />
            <img src={cacao2} className="cacao-link-2" alt="Logo Luker" />
          </div>
        </div>
        <div className="flow-sidebar--dist">
          <img src={logo} className="logo" alt="Logo Luker" />
          <button onClick={() => console.log('hi')}> DISTRIBUIDORES </button>
        </div>
      </div>
      <div className="flow-navbar"><FlowTabs tabActive="cacao" /></div>
    </div>
  );
}

export default Flow;