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
            <h1>TITULO</h1>
            <h2>Introducción</h2>
          </div>
          <p>Para la navegación dentro de este wireframe se habilitó un flujo tipo de carrusel por lo cual para pasar de "sección en sección" tipo diapositiva se debe hacer clic en el área derecha o izquierda de la pantalla.</p>
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
