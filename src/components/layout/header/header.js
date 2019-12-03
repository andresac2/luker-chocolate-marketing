import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../../../assets/img/Lukerlogo.svg'
import { MdClose, MdMenu } from 'react-icons/md';
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
  }
  render() {
    const { selectTab, showMenu } = this.state;
    const { Option } = Select;

    return (
      <div>
        <nav className={`header-component header-component-${selectTab === '/' && 'intro'}`} onClick={() => this.menuToggle()} >
          <Link to="/" onClick={() => this.headerToggle('/')} className={`selected-tab ${selectTab === '/' && 'intro'}`}>INTRODUCCIÓN</Link>
          <Link to="/flow" onClick={() => this.headerToggle('/flow')} className={`selected-tab ${selectTab === '/flow' && selectTab.slice(1)}`}>FLOW CACAO</Link>
          <Link to="/sustain" onClick={() => this.headerToggle('/sustain')} className={`selected-tab ${selectTab === '/sustain' && selectTab.slice(1)}`}>SOSTENIBILIDAD</Link>
          <Link to="/solution" onClick={() => this.headerToggle('/solution')} className={`selected-tab ${(selectTab === '/solution' || selectTab.slice(1).split('/').shift() === 'services') && 'solution'}`}>PRODUCTOS & SERVICIOS</Link>
          <Link to="/customer" onClick={() => this.headerToggle('/customer')} className={`selected-tab ${selectTab === '/customer' && selectTab.slice(1)}`}>CLIENTES</Link>
          <Link to="/ryd" onClick={() => this.headerToggle('/ryd')} className={`selected-tab ${selectTab === '/ryd' && selectTab.slice(1)}`}>R&D</Link>
          <Link to="/value-propose" onClick={() => this.headerToggle('/value-propose')} className={`selected-tab ${(selectTab === '/value-propose' || selectTab.slice(1).split('/').shift() === 'our-value') && 'value-propose'}`}>PROPUESTA DE VALOR</Link>
        </nav>
        <div className={`header-component-responsive header-component-responsive-${showMenu && 'visible'} header-component-responsive-${selectTab.slice(1).split('/').shift()}`} onClick={() => this.menuToggle()} >
          <div className={`header-logo header-logo-${showMenu && 'visible'}`}>
            <img src={logo} className="logo" alt="Logo Luker" />
            {!showMenu && <Select defaultValue="es" >
              <Option value="es">ES</Option>
              <Option value="en">EN</Option>
            </Select>}
            {(showMenu) ? <MdClose className={`btn-x`} onClick={() => this.menuToggle()} /> : <MdMenu className={`btn-x`} onClick={() => this.menuToggle()} />}
          </div>
          <nav className={`header-component-responsive--tabs  header-component-responsive--tabs-${showMenu && 'visible'}`} >
            <Link to="/" onClick={() => this.headerToggle('/')} className={`selected-tab ${selectTab === '/' && 'intro'}`}><span>INTRODUCCIÓN</span></Link>
            <Link to="/flow" onClick={() => this.headerToggle('/flow')} className={`selected-tab ${selectTab === '/flow' && selectTab.slice(1)}`}><span>FLOW CACAO</span></Link>
            <Link to="/sustain" onClick={() => this.headerToggle('/sustain')} className={`selected-tab ${selectTab === '/sustain' && selectTab.slice(1)}`}><span>SOSTENIBILIDAD</span></Link>
            <Link to="/solution" onClick={() => this.headerToggle('/solution')} className={`selected-tab ${(selectTab === '/solution' || selectTab.slice(1).split('/').shift() === 'services') && 'solution'}`}><span>PRODUCTOS & SERVICIOS</span></Link>
            <Link to="/customer" onClick={() => this.headerToggle('/customer')} className={`selected-tab ${selectTab === '/customer' && selectTab.slice(1)}`}><span>CLIENTES</span></Link>
            <Link to="/ryd" onClick={() => this.headerToggle('/ryd')} className={`selected-tab ${selectTab === '/ryd' && selectTab.slice(1)}`}><span>R&D</span></Link>
            <Link to="/value-propose" onClick={() => this.headerToggle('/value-propose')} className={`selected-tab separator ${(selectTab === '/value-propose' || selectTab.slice(1).split('/').shift() === 'our-value') && 'value-propose'}`}><span>PROPUESTA DE VALOR</span></Link>

            <Link to="/blog" onClick={() => this.headerToggle('/')} className={`selected-tab selected-tab-responsive`} ><span>BLOG</span></Link>
            <Link to="/" onClick={() => this.headerToggle('/')} className={`selected-tab selected-tab-responsive`} ><span>Crea tu chocolate</span></Link>
            <Link to="/contact-us" onClick={() => this.headerToggle('/')} className={`selected-tab selected-tab-responsive`}><span>Escríbenos</span></Link>
            <Link to="/" onClick={() => this.headerToggle('/')} className={`selected-tab selected-tab-responsive`} ><span>Más información</span></Link>
          </nav>
        </div>
      </div>
    );
  }
};

export default withRouter(Header);
