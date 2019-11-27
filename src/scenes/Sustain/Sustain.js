import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import panel from '../../assets/img/sustain-panel.png'
import back from '../../assets/img/back.svg'


class Sustain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstItem: 0,
      items: [{
        img: 'costal-luker.png',
        title: 'Jobs',
        content: 'We are committed to small-scale farmers, which is why we have established a network of alliances with over 50 cocoa growers associations allowing us to guarantee the purchase of the entire harvest of each association, helping to create the maximum value possible for the farmers and their families. We buy directly from 65 associations and more than 7500 Colombian families. We’ve also trained around 30.000 farmers in Luker Farm and built 10 centralized milling facilities in Tumaco and have 1 currently under construction in Huila.'
      },
      {
        img: 'arauca-river.png',
        title: 'SMALL-SCALE FARMERS',
        content: 'We are committed to small-scale farmers, which is why we have established a network of alliances with over 50 cocoa growers associations allowing us to guarantee the purchase of the entire harvest of each association, helping to create the maximum value possible for the farmers and their families. We buy directly from 65 associations and more than 7500 Colombian families. We’ve also trained around 30.000 farmers in Luker Farm and built 10 centralized milling facilities in Tumaco and have 1 currently under construction in Huila.'
      },
      {
        img: 'cocoa-tree.png',
        title: 'Community',
        content: 'We are committed to small-scale farmers, which is why we have established a network of alliances with over 50 cocoa growers associations allowing us to guarantee the purchase of the entire harvest of each association, helping to create the maximum value possible for the farmers and their families. We buy directly from 65 associations and more than 7500 Colombian families. We’ve also trained around 30.000 farmers in Luker Farm and built 10 centralized milling facilities in Tumaco and have 1 currently under construction in Huila.'
      },
      {
        img: 'enviromental.png',
        title: 'Enviromental',
        content: 'We are committed to small-scale farmers, which is why we have established a network of alliances with over 50 cocoa growers associations allowing us to guarantee the purchase of the entire harvest of each association, helping to create the maximum value possible for the farmers and their families. We buy directly from 65 associations and more than 7500 Colombian families. We’ve also trained around 30.000 farmers in Luker Farm and built 10 centralized milling facilities in Tumaco and have 1 currently under construction in Huila.'
      },
      {
        img: 'cocoa-forest.png',
        title: 'cocoa forest',
        content: 'We are committed to small-scale farmers, which is why we have established a network of alliances with over 50 cocoa growers associations allowing us to guarantee the purchase of the entire harvest of each association, helping to create the maximum value possible for the farmers and their families. We buy directly from 65 associations and more than 7500 Colombian families. We’ve also trained around 30.000 farmers in Luker Farm and built 10 centralized milling facilities in Tumaco and have 1 currently under construction in Huila.'
      }]
    };
  }

  carrAction(fi) {
    if (fi === 'l' && this.state.firstItem !== 0) {
      this.setState({ firstItem: this.state.firstItem - 1 });
    }
    if (fi === 'r' && this.state.firstItem + 1 < this.state.items.length - 1) {
      this.setState({ firstItem: this.state.firstItem + 1 });
    }
    if (!isNaN(fi)) {
      this.setState({ firstItem: fi * 2 });
    }
  }

  render() {
    const { items, firstItem } = this.state;
    const altImg = 'img-example.svg';

    return (
      <div className="sustain-component">
        <div className="sustain-sidebar">
          <div className="sustain-sidebar--dist">
            <img src={logo} className="logo" alt="Logo Luker" />
            <button onClick={() => console.log('hi')}> DISTRIBUIDORES </button>
          </div>
          <div className="sustain-sidebar--text">
            <h1>SOSTENIBILIDAD</h1>
            <div className="sustain-sidebar--text-content">
              <p>En Luker Chocolate vemos la sostenibilidad como una herramienta para perdurar en el tiempo de manera responsable, siendo motores de transformación económica, social y ambiental. Estamos comprometidos con generar mayor bienestar en todos los actores de la cadena de valor, desde quienes cultivan el grano de cacao hasta nuestros clientes.</p>
              <p>Nuestra apuesta en la cadena de valor es integrarla, humanizarla y por último cerrarla con estrategias de valor compartido con nuestros clientes y aliados. Sabemos que necesitamos determinación para transformar las regiones cacaoteras, ya que el cacao en Colombia es producido por aproximadamente 38 mil familias que en el pasado fueron víctimas del conflicto armado del país y que cuentan con índices multidimensionales de pobreza muy bajos. Por eso, centramos nuestros esfuerzos en contribuir al cambio en estas regiones para que la calidad de vida de los agricultores y las comunidades mejores.</p>
            </div>
            <button onClick={() => console.log('hi')}> GET FULL REPORT </button>
          </div>
        </div>
        <div className="sustain-content">
          <div className="sustain-content-model">
            <h1>Impact</h1>
            <div className="sustain-content-contain-carr">
              <img className="btn-next-img btn-next-img-left" src={back} alt='left' onClick={() => this.carrAction('l')} />
              <div className="sustain-content-contain-carr--items" >
                {Object.keys(items).map(i =>
                  <div key={i} className={`card-image ${firstItem > i && 'item-action--l'}`}>
                    <img src={require('../../assets/img/' + (items[i].img ? items[i].img : altImg))} alt={items[i].title} />
                    <p>{items[i].title}</p>
                  </div>)}
              </div>
              <img className="btn-next-img" src={back} alt='left' onClick={() => this.carrAction('r')} />
            </div>
            <div className="sustain-content-contain-carr--dots">
              {[...Array(Math.floor(items.length / 2))].map((_, i) =>
                <span key={i} className={`${(i * 2 === firstItem || i * 2 + 1 === firstItem) && 'dots-active'}`} onClick={() => this.carrAction(i)} ></span>
              )}
            </div>
          </div>
          <div className="sustain-content-model">
            <h1>We go beyond</h1>
            <div className="sustain-content-model--panel">
              <img src={panel} alt="Panel" />
              <button onClick={() => console.log('hi')}> GET FULL REPORT </button>
            </div>
          </div>
        </div>
      </div >
    );
  }
};

export default Sustain;