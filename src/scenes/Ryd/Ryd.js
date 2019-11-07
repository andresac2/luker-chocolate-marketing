import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import cacao1 from '../../assets/img/roto-b.png'
import cacao2 from '../../assets/img/roto-c.png'
import cacao3 from '../../assets/img/roto-a.png'

class Ryd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectTab: ''
    };
  }

  tabToggle(tab) {
    (tab === this.state.selectTab) ? this.setState({ selectTab: '' }) : this.setState({ selectTab: tab });
  }

  render() {
    const { selectTab } = this.state;

    return (
      <div className="ryd-component">
        {!selectTab &&
          <div className="btn-dist">
            <img src={logo} className="logo" alt="Logo Luker" />
            <button onClick={() => console.log('hi')}> DISTRIBUIDORES </button>
            <h2>{selectTab}</h2>
          </div>}
        <div className={`ryd-tab ryd-tab--${selectTab}`}>
          <div onClick={() => this.tabToggle('experience')} className={`ryd-tab-item ryd-tab-item--experience ryd-tab-item--${selectTab === 'experience' && 'active'}`}><span>EXPERIENCE MORE</span></div>
          <div onClick={() => this.tabToggle('ethical')} className={`ryd-tab-item ryd-tab-item--ethical ryd-tab-item--${selectTab === 'ethical' && 'active'}`}><span>ETHICAL LIVING</span></div>
          <div onClick={() => this.tabToggle('premium')} className={`ryd-tab-item ryd-tab-item--premium ryd-tab-item--${selectTab === 'premium' && 'active'}`}><span>PREMIUMIZATION</span></div>
          <div onClick={() => this.tabToggle('healthy')} className={`ryd-tab-item ryd-tab-item--healthy ryd-tab-item--${selectTab === 'healthy' && 'active'}`}><span>HEALTHY LIVING</span></div>
        </div>
      </div>
    );
  }
}

export default Ryd;