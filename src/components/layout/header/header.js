import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../../../assets/img/Lukerlogo.svg'
import { MdClose, MdMenu } from 'react-icons/md';
import { Select } from 'antd';

class Header extends React.Component {

  logoHidden = ['/value-propose', '/ryd'];

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
    const { history } = this.props;
    const { selectTab, showMenu } = this.state;
    const { Option } = Select;

    const isLogoHidden = this.logoHidden.includes(history.location.pathname);

    return (
      <div>
        <nav className={`header-component header-component-${selectTab === '/' && 'intro'}`} onClick={() => this.menuToggle()} >
          <Link to="/" onClick={() => this.headerToggle('/')} className={`selected-tab ${selectTab === '/' && 'intro'}`}>LUKER CHOCOLATE</Link>
          <Link to="/flow" onClick={() => this.headerToggle('/flow')} className={`selected-tab ${selectTab === '/flow' && selectTab.slice(1)}`}>THE CHOCOLATE PROCESS</Link>
          <Link to="/sustain" onClick={() => this.headerToggle('/sustain')} className={`selected-tab ${selectTab === '/sustain' && selectTab.slice(1)}`}>SUSTAINABILITY</Link>
          <Link to="/solution" onClick={() => this.headerToggle('/solution')} className={`selected-tab ${(selectTab === '/solution' || selectTab.slice(1).split('/').shift() === 'services') && 'solution'}`}>PRODUCTS & SERVICES</Link>
          <Link to="/customer" onClick={() => this.headerToggle('/customer')} className={`selected-tab ${selectTab === '/customer' && selectTab.slice(1)}`}>OUR CLIENTS</Link>
          <Link to="/ryd" onClick={() => this.headerToggle('/ryd')} className={`selected-tab ${selectTab === '/ryd' && selectTab.slice(1)}`}>IDEAS & TRENDS</Link>
          <Link to="/value-propose" onClick={() => this.headerToggle('/value-propose')} className={`selected-tab ${(selectTab === '/value-propose' || selectTab.slice(1).split('/').shift() === 'our-value') && 'value-propose'}`}>OUR VALUE PROPOSITION</Link>
        </nav>
        <div className={`header-component-responsive header-component-responsive-${showMenu && 'visible'} header-component-responsive-${selectTab.slice(1).split('/').shift()}`} onClick={() => this.menuToggle()} >
          <div className={`header-logo header-logo-${showMenu && 'visible'}`}>

            { !isLogoHidden && <img src={logo} className="logo" alt="Logo Luker" /> }

            {showMenu && <Select defaultValue="es" >
              <Option value="es">ES</Option>
              <Option value="en">EN</Option>
            </Select>}
            {(showMenu) ? <MdClose className={`btn-x`} onClick={() => this.menuToggle()} /> : <MdMenu className={`btn-x`} onClick={() => this.menuToggle()} />}
          </div>
          <nav className={`header-component-responsive--tabs header-component-responsive--tabs-${selectTab.slice(1).split('/').shift()} header-component-responsive--tabs-${showMenu && 'visible'}`} >
            <Link to="/" onClick={() => this.headerToggle('/')} className={`selected-tab ${selectTab === '/' && 'intro'}`}><span>LUKER CHOCOLATE</span></Link>
            <Link to="/flow" onClick={() => this.headerToggle('/flow')} className={`selected-tab ${selectTab === '/flow' && selectTab.slice(1)}`}><span>THE CHOCOLATE PROCESS</span></Link>
            <Link to="/sustain" onClick={() => this.headerToggle('/sustain')} className={`selected-tab ${selectTab === '/sustain' && selectTab.slice(1)}`}><span>SUSTAINABILITY</span></Link>
            <Link to="/solution" onClick={() => this.headerToggle('/solution')} className={`selected-tab ${(selectTab === '/solution' || selectTab.slice(1).split('/').shift() === 'services') && 'solution'}`}><span>PRODUCTS & SERVICES</span></Link>
            <Link to="/customer" onClick={() => this.headerToggle('/customer')} className={`selected-tab ${selectTab === '/customer' && selectTab.slice(1)}`}><span>OUR CLIENTS</span></Link>
            <Link to="/ryd" onClick={() => this.headerToggle('/ryd')} className={`selected-tab ${selectTab === '/ryd' && selectTab.slice(1)}`}><span>IDEAS & TRENDS</span></Link>
            <Link to="/value-propose" onClick={() => this.headerToggle('/value-propose')} className={`selected-tab separator ${(selectTab === '/value-propose' || selectTab.slice(1).split('/').shift() === 'our-value') && 'value-propose'}`}><span>OUR VALUE PROPOSITION</span></Link>

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
