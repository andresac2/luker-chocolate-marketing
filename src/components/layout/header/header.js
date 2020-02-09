import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../../../assets/img/Lukerlogo.svg'
import { MdClose, MdMenu } from 'react-icons/md';
import { Select } from 'antd';
import Footer from '../footer/footer';
import { withNamespaces } from 'react-i18next';
import i18n from '../../../i18n';
import SelectLanguage from '../../../commons/select-lng/select-lng';

class Header extends React.Component {

  logoHidden = [i18n.t('routes.ideas-trends'), i18n.t('routes.our-value'), '/blog'];

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
          {false && <Link to="/" className={`selected-tab ${selectTab === '/' && 'intro'}`}>{t('header.home')}</Link>}
          <Link to={t('routes.chocolate-process')} className={`selected-tab ${selectTab === t('routes.chocolate-process') && selectTab.slice(1)}`}>{t('header.chocolate-process')}</Link>
          <Link to={t('routes.sustainability')} className={`selected-tab ${selectTab === t('routes.sustainability') && selectTab.slice(1)}`}>{t('header.sustainability')}</Link>
          <Link to={t('routes.products-services')} className={`selected-tab ${(selectTab === t('routes.products-services') || selectTab.slice(1).split('/').shift() === 'services') && 'products-services'}`}>{t('header.products-services')}</Link>
          <Link to={t('routes.our-clients')} className={`selected-tab ${selectTab === t('routes.our-clients') && selectTab.slice(1)}`}>{t('header.our-clients')}</Link>
          <Link to={t('routes.ideas-trends')} className={`selected-tab ${selectTab === t('routes.ideas-trends') && selectTab.slice(1)}`}>{t('header.ideas-trends')}</Link>
          <Link to={t('routes.our-value')} className={`selected-tab ${(selectTab === t('routes.our-value') || selectTab.slice(1).split('/').shift() === 'our-value') && 'our-value'}`}>{t('header.our-value-proposition')}</Link>
          <Link to="/blog" className={`selected-tab blog-tab blog-tab-${selectTab.slice(1)} ${(selectTab === '/blog') && 'blog-tab-selected'}`}>{t('blog.blog-title')}</Link>
        </nav>
        <div className={`header-component-responsive header-component-responsive-${showMenu && 'visible'} header-component-responsive-${selectTab.slice(1).split('/').shift()}`} onClick={() => this.menuToggle()} >
          <div className={`header-logo header-logo-${showMenu && 'visible'}`}>
            {(!isLogoHidden || showMenu) && <Link to="/" className="logo"> <img src="/static/media/Lukerlogo.af6f7609.svg" alt="Logo Luker" /></Link>}
            {showMenu && <SelectLanguage />}
            {(showMenu) ? <MdClose className={`btn-x`} onClick={() => this.menuToggle()} /> : <MdMenu className={`btn-x`} onClick={() => this.menuToggle()} />}
          </div>
          <nav className={`header-component-responsive--tabs header-component-responsive--tabs-${selectTab.slice(1).split('/').shift()} header-component-responsive--tabs-${showMenu && 'visible'}`} >
            <Link to="/" className={`selected-tab ${selectTab === '/' && 'intro'}`}><span>{t('header.home')}</span></Link>
            <Link to={t('routes.chocolate-process')} className={`selected-tab ${selectTab === t('routes.chocolate-process') && selectTab.slice(1)}`}><span>{t('header.chocolate-process')}</span></Link>
            <Link to={t('routes.sustainability')} className={`selected-tab ${selectTab === t('routes.sustainability') && selectTab.slice(1)}`}><span>{t('header.sustainability')}</span></Link>
            <Link to={t('routes.products-services')} className={`selected-tab ${(selectTab === t('routes.products-services') || selectTab.slice(1).split('/').shift() === 'services') && 'products-services'}`}><span>{t('header.products-services')}</span></Link>
            <Link to={t('routes.our-clients')} className={`selected-tab ${selectTab === t('routes.our-clients') && selectTab.slice(1)}`}><span>{t('header.our-clients')}</span></Link>
            <Link to={t('routes.ideas-trends')} className={`selected-tab ${selectTab === t('routes.ideas-trends') && selectTab.slice(1)}`}><span>{t('header.ideas-trends')}</span></Link>
            <Link to={t('routes.our-value')} className={`selected-tab separator ${(selectTab === t('routes.our-value') || selectTab.slice(1).split('/').shift() === 'our-value') && 'our-value'}`}><span>{t('header.our-value-proposition')}</span></Link>

            <Link to="/blog" className={`selected-tab selected-tab-responsive ${selectTab === '/blog' && selectTab.slice(1)}`} ><span>{t('header.blog')}</span></Link>
            {/*<Link to="/" className={`selected-tab selected-tab-responsive`} ><span>CREATE YOUR OWN CHOCOLATE</span></Link>*/}
            <Link to="/" onClick={e => this.handleShowMoreInfo(e)} className={`selected-tab selected-tab-responsive`} ><span>{t('header.more-info')}</span></Link>
            <Link to={t('routes.contact-us')} className={`selected-tab selected-tab-responsive`}><span>{t('header.contact-us')}</span></Link>
          </nav>
        </div>
        {moreInfoVisible && <Footer mode='responsive' handleShowMoreInfo={this.handleShowMoreInfo} />}
      </div>
    );
  }
};

export default withNamespaces()(withRouter(Header));
