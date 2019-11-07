import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectTab: this.props.location.pathname
    };
  }

  headerToggle(tab) {
    this.setState({ selectTab: tab });
  }
  render() {
    const { selectTab } = this.state;

    return (
      <nav className={`header-component header-component-${selectTab.slice(1)}`}>
        <Link to="/" onClick={() => this.headerToggle('/')} className={`selected-tab ${selectTab === '/' && 'intro'}`}>INTRODUCCIÓN</Link>
        <Link to="/flow" onClick={() => this.headerToggle('/flow')} className={`selected-tab ${selectTab === '/flow' && selectTab.slice(1)}`}>FLOW CACAO</Link>
        <Link to="/sustain" onClick={() => this.headerToggle('/sustain')} className={`selected-tab ${selectTab === '/sustain' && selectTab.slice(1)}`}>SOSTENIBILIDAD</Link>
        <Link to="/solution" onClick={() => this.headerToggle('/solution')} className={`selected-tab ${selectTab === '/solution' && selectTab.slice(1)}`}>SOLUCIONES</Link>
        <Link to="/customer" onClick={() => this.headerToggle('/customer')} className={`selected-tab ${selectTab === '/customer' && selectTab.slice(1)}`}>CLIENTES</Link>
        <Link to="/ryd" onClick={() => this.headerToggle('/ryd')} className={`selected-tab ${selectTab === '/ryd' && selectTab.slice(1)}`}>R&D</Link>
        <Link to="/value-propose" onClick={() => this.headerToggle('/value-propose')} className={`selected-tab ${selectTab === '/value-propose' && selectTab.slice(1)}`}>PROPUESTA DE VALOR</Link>
      </nav>
    );
  }
};

export default withRouter(Header);
