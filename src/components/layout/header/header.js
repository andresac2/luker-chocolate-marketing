import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectTab: 'intro'
    };
  }

  headerToggle(tab) {
    console.log(tab);
    this.setState({ selectTab: tab });
  }

  render() {
    const { selectTab } = this.state;

    return (
      <nav className="header-component">
        <button onClick={() => this.headerToggle('intro')} className={`selected-tab ${selectTab === 'intro' && selectTab}`}>INTRODUCCIÓN</button>
        <button onClick={() => this.headerToggle('flow')} className={`selected-tab ${selectTab === 'flow' && selectTab}`}>FLOW CACAO</button>
        <button onClick={() => this.headerToggle('sosten')} className={`selected-tab ${selectTab === 'sosten' && selectTab}`}>SOSTENIBILIDAD</button>
        <button onClick={() => this.headerToggle('solution')} className={`selected-tab ${selectTab === 'solution' && selectTab}`}>SOLUCIONES</button>
        <button onClick={() => this.headerToggle('customer')} className={`selected-tab ${selectTab === 'customer' && selectTab}`}>CLIENTES</button>
        <button onClick={() => this.headerToggle('r')} className={`selected-tab ${selectTab === 'r' && selectTab}`}>R&D</button>
        <button onClick={() => this.headerToggle('propos')} className={`selected-tab ${selectTab === 'propos' && selectTab}`}>PROPUESTA DE VALOR</button>
      </nav>
    );
  }
};

export default Header;
