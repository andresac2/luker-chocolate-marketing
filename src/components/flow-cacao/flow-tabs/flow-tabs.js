import React from 'react';

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
    const { tabActive } = this.props;

    return (
      <div className={`flow-tab flow-tab--${selectTab}`}>
        <div onClick={() => this.tabToggle('cacao')} className={`flow-tab-item flow-tab-item--cacao flow-tab-item--${selectTab === 'cacao' && 'active'}`}><span>CACAO FINO DE AROMA</span></div>
        <div onClick={() => this.tabToggle('granjeros')} className={`flow-tab-item flow-tab-item--granjeros flow-tab-item--${selectTab === 'granjeros' && 'active'}`}><span>GRANJEROS</span></div>
        <div onClick={() => this.tabToggle('abastecimiento')} className={`flow-tab-item flow-tab-item--abastecimiento flow-tab-item--${selectTab === 'abastecimiento' && 'active'}`}><span>ABASTECIMIENTO</span></div>
        <div onClick={() => this.tabToggle('procesamiento')} className={`flow-tab-item flow-tab-item--procesamiento flow-tab-item--${selectTab === 'procesamiento' && 'active'}`}><span>PROCESAMIENTO</span></div>
        <div onClick={() => this.tabToggle('coberturas')} className={`flow-tab-item flow-tab-item--coberturas flow-tab-item--${selectTab === 'coberturas' && 'active'}`}><span>COBERTURAS</span></div>
        <div onClick={() => this.tabToggle('producto')} className={`flow-tab-item flow-tab-item--producto flow-tab-item--${selectTab === 'producto' && 'active'}`}><span>PRODUCTO FINAL</span></div>
      </div>
    );
  }
};

export default FlowTabs;
