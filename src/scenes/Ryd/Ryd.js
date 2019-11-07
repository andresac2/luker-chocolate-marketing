import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import cacao1 from '../../assets/img/roto-b.png'
import cacao2 from '../../assets/img/roto-c.png'
import cacao3 from '../../assets/img/roto-a.png'

class Ryd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectTab: 'cacao'
    };
  }

  tabToggle(tab) {
    this.setState({ selectTab: tab });
  }

  render() {
    const { selectTab } = this.state;

    return (
      <div className="ryd-component">
        <div className="btn-dist">
          <img src={logo} className="logo" alt="Logo Luker" />
          <button onClick={() => console.log('hi')}> DISTRIBUIDORES </button>
        </div>
        <div className={`ryd-tab ryd-tab--${selectTab}`}>
          <div onClick={() => this.tabToggle('abastecimiento')} className={`ryd-tab-item ryd-tab-item--abastecimiento ryd-tab-item--${selectTab === 'abastecimiento' && 'active'}`}><span>ABASTECIMIENTO</span></div>
          <div onClick={() => this.tabToggle('procesamiento')} className={`ryd-tab-item ryd-tab-item--procesamiento ryd-tab-item--${selectTab === 'procesamiento' && 'active'}`}><span>PROCESAMIENTO</span></div>
          <div onClick={() => this.tabToggle('coberturas')} className={`ryd-tab-item ryd-tab-item--coberturas ryd-tab-item--${selectTab === 'coberturas' && 'active'}`}><span>COBERTURAS</span></div>
          <div onClick={() => this.tabToggle('producto')} className={`ryd-tab-item ryd-tab-item--producto ryd-tab-item--${selectTab === 'producto' && 'active'}`}><span>PRODUCTO FINAL</span></div>
        </div>
      </div>
    );
  }
}

export default Ryd;