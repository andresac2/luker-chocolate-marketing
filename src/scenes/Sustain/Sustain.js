import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import model1 from '../../assets/img/arauca-river.png'
import model2 from '../../assets/img/costal-luker.png'
import model3 from '../../assets/img/grano-luker.png'
import model4 from '../../assets/img/train-luker.png'

import FlowTabs from '../../components/flow-cacao/flow-tabs/flow-tabs'

function Sustain() {
  return (
    <div className="sustain-component">
      <div className="sustain-sidebar">
        <div className="sustain-sidebar--dist">
          <img src={logo} className="logo" alt="Logo Luker" />
          <button onClick={() => console.log('hi')}> DISTRIBUIDORES </button>
        </div>
        <div className="sustain-sidebar--text">
          <h1>SOSTENIBILIDAD</h1>
          <p>En Luker Chocolate vemos la sostenibilidad como una herramienta para perdurar en el tiempo de manera responsable, siendo motores de transformación económica, social y ambiental. Estamos comprometidos con generar mayor bienestar en todos los actores de la cadena de valor, desde quienes cultivan el grano de cacao hasta nuestros clientes.</p>
          <p>Nuestra apuesta en la cadena de valor es integrarla, humanizarla y por último cerrarla con estrategias de valor compartido con nuestros clientes y aliados. Sabemos que necesitamos determinación para transformar las regiones cacaoteras, ya que el cacao en Colombia es producido por aproximadamente 38 mil familias que en el pasado fueron víctimas del conflicto armado del país y que cuentan con índices multidimensionales de pobreza muy bajos. Por eso, centramos nuestros esfuerzos en contribuir al cambio en estas regiones para que la calidad de vida de los agricultores y las comunidades mejores.</p>
        </div>
      </div>
      <div className="sustain-content">
        <div className="sustain-content-model">
          <p>Hemos desarrollado dos modelos para enfrentar este reto:</p>
          <div className="sustain-content-contain-img">
            <div className="card-image">
              <img src={model1} className="logo" alt="Logo Luker" />
              <p>MODELO CON PEQUEÑOS AGRICULTORES</p>
            </div>
            <div className="card-image">
              <img src={model2} className="logo" alt="Logo Luker" />
              <p>MODELO CULTIVOS EMPRESARIALES ANCLA</p>
            </div>
          </div>
        </div>
        <div className="sustain-content-model">
          <h1>GRANJA LUKER</h1>
          <div className="sustain-content-contain-img">
            <div className="card-image">
              <img src={model3} className="logo" alt="Logo Luker" />
              <p>INVESTIGACIÓN</p>
            </div>
            <div className="card-image">
              <img src={model4} className="logo" alt="Logo Luker" />
              <p>ENTRENAMIENTO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sustain;