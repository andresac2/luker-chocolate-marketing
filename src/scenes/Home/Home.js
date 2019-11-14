import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import cacao1 from '../../assets/img/roto-b.png'
import cacao2 from '../../assets/img/roto-c.png'

function Home() {
  return (
    <div className="home">
      <img src={logo} className="logo" alt="Logo Luker" />
      <div className="home-content">
        <div className="intro">
          <div className="intro-title">
            <h1>113 YEARS</h1>
            <h2>OF TRADITION</h2>
          </div>
          <p>We are a family company with over 110 years of tradition built on a dream, where chocolate is the source of inspiration and the opportunity to transform communities. We provide unique chocolate as an ingredient for other food companies and we manufacture finished products for other brands</p>
        </div>
        <div className="dist">
          <div className="dist-text">
            <h2>CREA TU PROPIO CHOCOLATE</h2>
            <button onClick={() => console.log('hi')}> DISTRIBUIDORES </button>
          </div>
        </div>
        <div className="cacao-link">
          <img src={cacao1} className="cacao-link-1" alt="Logo Luker" />
          <img src={cacao2} className="cacao-link-2" alt="Logo Luker" />
        </div>
      </div>
    </div>
  );
}

export default Home;
