import React from 'react';
import { FiChevronUp } from 'react-icons/fi'
import { withRouter, Link } from 'react-router-dom';
import { Select } from 'antd';
import { MdClose } from 'react-icons/md';
import Footer from '../footer/footer';
import Modals from '../../modals/modals';
import { withNamespaces } from 'react-i18next';

class FooterCover extends React.Component {
  hideView = ['/products-services/', '/blog', '/contact-us', '/work-with-us', '/our-value/'];//VIstas en las que se oculta el footer
  darkIcon = ['/services', '/blog'];//VIstas en las que se muestra modo oscuro

  constructor(props) {
    super(props);
    this.state = {
      distModalVisible: false,
      moreInfoVisible: false,
      actualDist: [],
      distValue: 'co',
      isOpen: false
    };
    this.handleShowMoreInfo = this.handleShowMoreInfo.bind(this);
    this.showModalDist = this.showModalDist.bind(this)
  }

  footerToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
    setTimeout(() => {
      this.setState({ isOpen: false });
    }, 60000)
  }

  showModalDist = () => {
    this.setState({
      distModalVisible: !this.state.distModalVisible,
    });
  };

  handleShowMoreInfo = (e) => {
    e.preventDefault();
    this.setState({
      moreInfoVisible: !this.state.moreInfoVisible,
    });
  };

  render() {
    const { history, t } = this.props;
    const { isOpen, distModalVisible, moreInfoVisible, distValue, actualDist } = this.state;
    const { Option } = Select;
    const selectTab = history.location.pathname;
    const isFooterHidden = this.hideView.some(function (v) { return history.location.pathname.includes(v); });

    return (
      !isFooterHidden &&
      <div>
        <div className={`footer-cover ${isOpen && 'footer-cover-open'}`}>
          <div className="footer-cover-bkg" onClick={this.footerToggle}></div>
          <FiChevronUp onClick={this.footerToggle} />
          <nav className={`footer-cover-nav footer-cover-${selectTab.slice(1)}`}>
            <Link to="/blog"><span>{t('header.blog')}</span></Link>
            {false && <Link to="/"><span>CREATE YOUR OWN CHOCOLATE</span></Link>}
            <Link to='' onClick={e => { this.handleShowMoreInfo(e); this.footerToggle(); }}><span>{t('header.more-info')}</span></Link>
            <Link to="/contact-us"><span>{t('header.contact-us')}</span></Link>
          </nav>
        </div>
        <button className="btn-dist-footer" onClick={() => this.showModalDist()}>{t('buttons.find-distributor')}</button>
        <Modals visible={distModalVisible} modal={'distributors'} showModalDist={this.showModalDist} />
        {moreInfoVisible && <Footer mode='vertical' handleShowMoreInfo={this.handleShowMoreInfo} />}
      </div>
    );
  }
};

export default withNamespaces()(withRouter(FooterCover));
