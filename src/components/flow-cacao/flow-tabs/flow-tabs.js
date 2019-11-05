import React from 'react';
import { Carousel } from 'antd';
import cacaoEx from '../../../assets/img/cacaoOpen.png'
import cacaoEx2 from '../../../assets/img/product-cover.png'

class FlowTabs extends React.Component {

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
      <div className="flow-tabs">
        <div className={`flow-content-component`}>
          <div className="flow-content-component--text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet, orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ametorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ametorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</div>
          <div className="flow-content-component--slider">
            <Carousel autoplay>
              <div>
                <img src={cacaoEx} className="cacao-link-2" alt="Logo Luker" />
              </div>
              <div>
                <img src={cacaoEx2} className="cacao-link-2" alt="Logo Luker" />
              </div>
              <div>
                <img src={cacaoEx} className="cacao-link-2" alt="Logo Luker" />
              </div>
              <div>
                <img src={cacaoEx2} className="cacao-link-2" alt="Logo Luker" />
              </div>
            </Carousel>
          </div>
        </div>
        <div className={`flow-tab flow-tab--${selectTab}`}>
          <div onClick={() => this.tabToggle('cacao')} className={`flow-tab-item flow-tab-item--cacao flow-tab-item--${selectTab === 'cacao' && 'active'}`}><span>CACAO FINO DE AROMA</span></div>
          <div onClick={() => this.tabToggle('granjeros')} className={`flow-tab-item flow-tab-item--granjeros flow-tab-item--${selectTab === 'granjeros' && 'active'}`}><span>GRANJEROS</span></div>
          <div onClick={() => this.tabToggle('abastecimiento')} className={`flow-tab-item flow-tab-item--abastecimiento flow-tab-item--${selectTab === 'abastecimiento' && 'active'}`}><span>ABASTECIMIENTO</span></div>
          <div onClick={() => this.tabToggle('procesamiento')} className={`flow-tab-item flow-tab-item--procesamiento flow-tab-item--${selectTab === 'procesamiento' && 'active'}`}><span>PROCESAMIENTO</span></div>
          <div onClick={() => this.tabToggle('coberturas')} className={`flow-tab-item flow-tab-item--coberturas flow-tab-item--${selectTab === 'coberturas' && 'active'}`}><span>COBERTURAS</span></div>
          <div onClick={() => this.tabToggle('producto')} className={`flow-tab-item flow-tab-item--producto flow-tab-item--${selectTab === 'producto' && 'active'}`}><span>PRODUCTO FINAL</span></div>
        </div>
      </div>
    );
  }
};

export default FlowTabs;
