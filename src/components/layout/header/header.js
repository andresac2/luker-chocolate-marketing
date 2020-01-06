import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../../../assets/img/Lukerlogo.svg'
import { MdClose, MdMenu } from 'react-icons/md';
import { Select } from 'antd';
import Footer from '../footer/footer';
import { withNamespaces } from 'react-i18next';

class Header extends React.Component {

  logoHidden = ['/ideas-trends', '/blog', '/our-value'];

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      moreInfoVisible: false
    };
    this.handleShowMoreInfo = this.handleShowMoreInfo.bind(this);
  }

  menuToggle() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  componentDidMount() {
    if (this.props.location.pathname === '/')
      setTimeout(() => {
        console.log(this.props.location.pathname)
        this.menuToggle();
      }, 2000);
  }
  handleShowMoreInfo = (e) => {
    e.preventDefault();
    this.setState({
      moreInfoVisible: !this.state.moreInfoVisible,
    });
  };

  render() {
    const { history, t } = this.props;
    const { showMenu, moreInfoVisible } = this.state;
    const { Option } = Select;
    const selectTab = history.location.pathname;
    const isLogoHidden = history.location.pathname.includes('/our-value/') ? false : this.logoHidden.some(function (v) { return history.location.pathname.includes(v); });

    return (
      <div>
        <nav className={`header-component header-component-${selectTab.slice(1).split('/').shift()} header-component-${selectTab === '/' && 'intro'}`} onClick={() => this.menuToggle()} >
          <Link to="/" className={`selected-tab ${selectTab === '/' && 'intro'}`}>{t('header.home')}</Link>
          <Link to="/chocolate-process" className={`selected-tab ${selectTab === '/chocolate-process' && selectTab.slice(1)}`}>{t('header.chocolate-process')}</Link>
          <Link to="/sustainability" className={`selected-tab ${selectTab === '/sustainability' && selectTab.slice(1)}`}>{t('header.sustainability')}</Link>
          <Link to="/products-services" className={`selected-tab ${(selectTab === '/products-services' || selectTab.slice(1).split('/').shift() === 'services') && 'products-services'}`}>{t('header.products-services')}</Link>
          <Link to="/our-clients" className={`selected-tab ${selectTab === '/our-clients' && selectTab.slice(1)}`}>{t('header.our-clients')}</Link>
          <Link to="/ideas-trends" className={`selected-tab ${selectTab === '/ideas-trends' && selectTab.slice(1)}`}>{t('header.ideas-trends')}</Link>
          <Link to="/our-value" className={`selected-tab ${(selectTab === '/our-value' || selectTab.slice(1).split('/').shift() === 'our-value') && 'our-value'}`}>{t('header.our-value-proposition')}</Link>
        </nav>
        <div className={`header-component-responsive header-component-responsive-${showMenu && 'visible'} header-component-responsive-${selectTab.slice(1).split('/').shift()}`} onClick={() => this.menuToggle()} >
          <div className={`header-logo header-logo-${showMenu && 'visible'}`}>
            {(!isLogoHidden || showMenu) && <Link to="/" className="logo"> <img src={logo} alt="Logo Luker" /></Link>}
            {showMenu && <Select defaultValue="en"  >
              <Option value="es">ES</Option>
              <Option value="en">EN</Option>
            </Select>}
            {(showMenu) ? <MdClose className={`btn-x`} onClick={() => this.menuToggle()} /> : <MdMenu className={`btn-x`} onClick={() => this.menuToggle()} />}
          </div>
          <nav className={`header-component-responsive--tabs header-component-responsive--tabs-${selectTab.slice(1).split('/').shift()} header-component-responsive--tabs-${showMenu && 'visible'}`} >
            <Link to="/" className={`selected-tab ${selectTab === '/' && 'intro'}`}><span>{t('header.home')}</span></Link>
            <Link to="/chocolate-process" className={`selected-tab ${selectTab === '/chocolate-process' && selectTab.slice(1)}`}><span>{t('header.chocolate-process')}</span></Link>
            <Link to="/sustainability" className={`selected-tab ${selectTab === '/sustainability' && selectTab.slice(1)}`}><span>{t('header.sustainability')}</span></Link>
            <Link to="/products-services" className={`selected-tab ${(selectTab === '/products-services' || selectTab.slice(1).split('/').shift() === 'services') && 'products-services'}`}><span>{t('header.products-services')}</span></Link>
            <Link to="/our-clients" className={`selected-tab ${selectTab === '/our-clients' && selectTab.slice(1)}`}><span>{t('header.our-clients')}</span></Link>
            <Link to="/ideas-trends" className={`selected-tab ${selectTab === '/ideas-trends' && selectTab.slice(1)}`}><span>{t('header.ideas-trends')}</span></Link>
            <Link to="/our-value" className={`selected-tab separator ${(selectTab === '/our-value' || selectTab.slice(1).split('/').shift() === 'our-value') && 'our-value'}`}><span>{t('header.our-value-proposition')}</span></Link>

            <Link to="/blog" className={`selected-tab selected-tab-responsive ${selectTab === '/blog' && selectTab.slice(1)}`} ><span>{t('header.blog')}</span></Link>
            {/*<Link to="/" className={`selected-tab selected-tab-responsive`} ><span>CREATE YOUR OWN CHOCOLATE</span></Link>*/}
            <Link to="/" onClick={e => this.handleShowMoreInfo(e)} className={`selected-tab selected-tab-responsive`} ><span>{t('header.more-info')}</span></Link>
            <Link to="/contact-us" className={`selected-tab selected-tab-responsive`}><span>{t('header.contact-us')}</span></Link>
          </nav>
        </div>
        {moreInfoVisible && <Footer mode='responsive' handleShowMoreInfo={this.handleShowMoreInfo} />}
      </div>
    );
  }
};

export default withNamespaces()(withRouter(Header));
