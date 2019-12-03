import React from 'react';
import { Carousel } from 'antd';
import cacao from '../../../assets/img/cacaoOpen.png'
import granjeros from '../../../assets/img//granjeroCar.png'
import abastecimiento from '../../../assets/img/abastecimiento-car.png'
import procesamiento from '../../../assets/img/procesoCar.png'
import coberturas from '../../../assets/img/coberturaCar.png'
import producto from '../../../assets/img/productoCar.png'
import back from '../../../assets/img/back.svg'

class FlowTabs extends React.Component {

  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this)
    this.state = {
      selectTab: 'cacao',
      statusOpened: false
    };
  }

  tabToggle(tab) {
    this.setState({ selectTab: tab });
  }

  handleCheck(status, aside) {
    if (status && aside === 'rigth') {
      this.setState({ statusOpened: !status })
    } else if (!status && aside == 'left') {
      this.setState({ statusOpened: !status })
    }
  }

  render() {
    const { selectTab, statusOpened } = this.state;

    return (
      <div className="flow-tabs">
        <div className={`flow-content-component flow-content-component--${selectTab}`}>
          <div className={`flow-content-component--text ${statusOpened ? 'opened' : 'close'}`} onClick={() => { this.handleCheck(statusOpened, 'left') }} >
            <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</div>
            <div className="arrow-back">
              <img src={back} />
            </div>
          </div>
          <div className={`flow-content-component--slider ${!statusOpened ? 'opened' : 'close'}`} onClick={() => { this.handleCheck(statusOpened, 'rigth') }} >
            <div className="arrow-back">
              <img className="back-rotate" src={back} />
            </div>
            <Carousel autoplay>
              {[...Array(4)].map(i => {
                return <div key={i}>
                  {selectTab === 'cacao' && <img src={cacao} alt={selectTab} key={1} />}
                  {selectTab === 'granjeros' && <img src={granjeros} alt={selectTab} key={2} />}
                  {selectTab === 'abastecimiento' && <img src={abastecimiento} alt={selectTab} key={3} />}
                  {selectTab === 'procesamiento' && <img src={procesamiento} alt={selectTab} key={4} />}
                  {selectTab === 'coberturas' && <img src={coberturas} alt={selectTab} key={5} />}
                  {selectTab === 'producto' && <img src={producto} alt={selectTab} key={6} />}
                </div>
              })}
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
      </div >
    );
  }
};

export default FlowTabs;
