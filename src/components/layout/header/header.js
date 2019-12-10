import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../../../assets/img/Lukerlogo.svg'
import { MdClose, MdMenu } from 'react-icons/md';
import { Select } from 'antd';

class Header extends React.Component {

  logoHidden = ['/ideas-trends', '/blog', '/value-proposition'];

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }
  menuToggle() {
    this.setState({ showMenu: !this.state.showMenu });
  }
  render() {
    const { history } = this.props;
    const { showMenu } = this.state;
    const { Option } = Select;
    const selectTab = history.location.pathname;
    const isLogoHidden = this.logoHidden.some(function (v) { return history.location.pathname.includes(v); });

    return (
      <div>
        <nav className={`header-component header-component-${selectTab.slice(1).split('/').shift()} header-component-${selectTab === '/' && 'intro'}`} onClick={() => this.menuToggle()} >
          <Link to="/" className={`selected-tab ${selectTab === '/' && 'intro'}`}>LUKER CHOCOLATE</Link>
          <Link to="/chocolate-process" className={`selected-tab ${selectTab === '/chocolate-process' && selectTab.slice(1)}`}>THE CHOCOLATE PROCESS</Link>
          <Link to="/sustainability" className={`selected-tab ${selectTab === '/sustainability' && selectTab.slice(1)}`}>SUSTAINABILITY</Link>
          <Link to="/products-services" className={`selected-tab ${(selectTab === '/products-services' || selectTab.slice(1).split('/').shift() === 'services') && 'products-services'}`}>PRODUCTS & SERVICES</Link>
          <Link to="/customer" className={`selected-tab ${selectTab === '/customer' && selectTab.slice(1)}`}>OUR CLIENTS</Link>
          <Link to="/ideas-trends" className={`selected-tab ${selectTab === '/ideas-trends' && selectTab.slice(1)}`}>IDEAS & TRENDS</Link>
          <Link to="/value-proposition" className={`selected-tab ${(selectTab === '/value-proposition' || selectTab.slice(1).split('/').shift() === 'our-value') && 'value-proposition'}`}>OUR VALUE PROPOSITION</Link>
        </nav>
        <div className={`header-component-responsive header-component-responsive-${showMenu && 'visible'} header-component-responsive-${selectTab.slice(1).split('/').shift()}`} >
          <div className={`header-logo header-logo-${showMenu && 'visible'}`}>
            {(!isLogoHidden || showMenu) && <Link to="/" className="logo"> <img src={logo} alt="Logo Luker" /></Link>}
            {showMenu && <Select defaultValue="en"  >
              <Option value="es">ES</Option>
              <Option value="en">EN</Option>
            </Select>}
            {(showMenu) ? <MdClose className={`btn-x`} onClick={() => this.menuToggle()} /> : <MdMenu className={`btn-x`} onClick={() => this.menuToggle()} />}
          </div>
          <nav className={`header-component-responsive--tabs header-component-responsive--tabs-${selectTab.slice(1).split('/').shift()} header-component-responsive--tabs-${showMenu && 'visible'}`} >
            <Link to="/" className={`selected-tab ${selectTab === '/' && 'intro'}`}><span>LUKER CHOCOLATE</span></Link>
            <Link to="/chocolate-process" className={`selected-tab ${selectTab === '/chocolate-process' && selectTab.slice(1)}`}><span>THE CHOCOLATE PROCESS</span></Link>
            <Link to="/sustainability" className={`selected-tab ${selectTab === '/sustainability' && selectTab.slice(1)}`}><span>SUSTAINABILITY</span></Link>
            <Link to="/products-services" className={`selected-tab ${(selectTab === '/products-services' || selectTab.slice(1).split('/').shift() === 'services') && 'products-services'}`}><span>PRODUCTS & SERVICES</span></Link>
            <Link to="/customer" className={`selected-tab ${selectTab === '/customer' && selectTab.slice(1)}`}><span>OUR CLIENTS</span></Link>
            <Link to="/ideas-trends" className={`selected-tab ${selectTab === '/ideas-trends' && selectTab.slice(1)}`}><span>IDEAS & TRENDS</span></Link>
            <Link to="/value-proposition" className={`selected-tab separator ${(selectTab === '/value-proposition' || selectTab.slice(1).split('/').shift() === 'our-value') && 'value-proposition'}`}><span>OUR VALUE PROPOSITION</span></Link>

            <Link to="/blog" className={`selected-tab selected-tab-responsive`} ><span>BLOG</span></Link>
            <Link to="/" className={`selected-tab selected-tab-responsive`} ><span>CREATE YOUR OWN CHOCOLATE</span></Link>
            <Link to="/" className={`selected-tab selected-tab-responsive`} ><span>MORE INFO</span></Link>
            <Link to="/contact-us" className={`selected-tab selected-tab-responsive`}><span>CONTACT US</span></Link>
          </nav>
        </div>
      </div>
    );
  }
};

export default withRouter(Header);
