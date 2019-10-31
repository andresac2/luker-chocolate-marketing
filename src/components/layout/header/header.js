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
        <Link to="/" onClick={() => this.headerToggle('/sosten')} className={`selected-tab ${selectTab === 'sosten' && selectTab.slice(1)}`}>SOSTENIBILIDAD</Link>
        <Link to="/" onClick={() => this.headerToggle('/solution')} className={`selected-tab ${selectTab === 'solution' && selectTab.slice(1)}`}>SOLUCIONES</Link>
        <Link to="/" onClick={() => this.headerToggle('/customer')} className={`selected-tab ${selectTab === 'customer' && selectTab.slice(1)}`}>CLIENTES</Link>
        <Link to="/" onClick={() => this.headerToggle('/r')} className={`selected-tab ${selectTab === 'r' && selectTab.slice(1)}`}>R&D</Link>
        <Link to="/" onClick={() => this.headerToggle('/propos')} className={`selected-tab ${selectTab === 'propos' && selectTab.slice(1)}`}>PROPUESTA DE VALOR</Link>
      </nav>
    );
  }
};

export default withRouter(Header);
