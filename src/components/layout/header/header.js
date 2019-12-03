import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../../../assets/img/Lukerlogo.svg'
import { MdClose } from 'react-icons/md';
import { Select } from 'antd';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectTab: this.props.location.pathname,
      showMenu: false
    };
  }

  headerToggle(tab) {
    this.setState({ selectTab: tab });
  }
  menuToggle() {
    this.setState({ showMenu: !this.state.showMenu });
    console.log('hola' + this.state.showMenu);
  }
  render() {
    const { selectTab, showMenu } = this.state;
    const { Option } = Select;

    return (
      <nav className={`header-component header-component-${selectTab.slice(1).split('/').shift()} header-component-${showMenu && 'visible'}`} onClick={() => this.menuToggle()} >
        <MdClose className="btn-x" onClick={() => this.menuToggle()} />
        <div className={`home-logo`}>
          <img src={logo} className="logo" alt="Logo Luker" />
          <Select defaultValue="es" >
            <Option value="es">ES</Option>
            <Option value="en">EN</Option>
          </Select>
        </div>
        <Link to="/" onClick={() => this.headerToggle('/')} className={`selected-tab ${selectTab === '/' && 'intro'}`}>INTRODUCCIÓN</Link>
        <Link to="/flow" onClick={() => this.headerToggle('/flow')} className={`selected-tab ${selectTab === '/flow' && selectTab.slice(1)}`}>FLOW CACAO</Link>
        <Link to="/sustain" onClick={() => this.headerToggle('/sustain')} className={`selected-tab ${selectTab === '/sustain' && selectTab.slice(1)}`}>SOSTENIBILIDAD</Link>
        <Link to="/solution" onClick={() => this.headerToggle('/solution')} className={`selected-tab ${(selectTab === '/solution' || selectTab.slice(1).split('/').shift() === 'services') && 'solution'}`}>PRODUCTOS & SERVICIOS</Link>
        <Link to="/customer" onClick={() => this.headerToggle('/customer')} className={`selected-tab ${selectTab === '/customer' && selectTab.slice(1)}`}>CLIENTES</Link>
        <Link to="/ryd" onClick={() => this.headerToggle('/ryd')} className={`selected-tab ${selectTab === '/ryd' && selectTab.slice(1)}`}>R&D</Link>
        <Link to="/value-propose" onClick={() => this.headerToggle('/value-propose')} className={`selected-tab ${(selectTab === '/value-propose' || selectTab.slice(1).split('/').shift() === 'our-value') && 'value-propose'}`}>PROPUESTA DE VALOR</Link>

        <Link to="/blog" onClick={() => this.headerToggle('/')} className={`selected-tab`} >BLOG</Link>
        <Link to="/" onClick={() => this.headerToggle('/')} className={`selected-tab`} >Crea tu chocolate</Link>
        <Link to="/contact-us" onClick={() => this.headerToggle('/')} className={`selected-tab`}>Escríbenos</Link>
        <Link to="/" onClick={() => this.headerToggle('/')} className={`selected-tab`} >Más información</Link>
      </nav>
    );
  }
};

export default withRouter(Header);
