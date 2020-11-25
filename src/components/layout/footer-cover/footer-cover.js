import React from 'react';
import { FiChevronUp } from 'react-icons/fi'
import { withRouter, Link } from 'react-router-dom';
import { Select } from 'antd';
import { MdClose } from 'react-icons/md';
import Footer from '../footer/footer';
import Modals from '../../modals/modals';
import i18n from '../../../i18n';
import { withNamespaces } from 'react-i18next';

class FooterCover extends React.Component {
  darkIcon = ['/blog'];//VIstas en las que se muestra modo oscuro

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
    }, 6000)
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
    const hideView = [i18n.t('routes.products-services') + '/', '/blog', i18n.t('routes.contact-us'), i18n.t('routes.work-with-us'), i18n.t('routes.our-value') + '/', '/productos-servicios/', '/propuesta-valor/'];//VIstas en las que se oculta el footer
    const { history, t } = this.props;
    const { isOpen, distModalVisible, moreInfoVisible, distValue, actualDist } = this.state;
    const { Option } = Select;
    const selectTab = history.location.pathname;
    const isFooterHidden = hideView.some(function (v) { return history.location.pathname.includes(v); });
    return (
      !isFooterHidden &&
      <div>
        <div className={`footer-cover ${isOpen && 'footer-cover-open'}`}>
          <div className="footer-cover-bkg" onClick={this.footerToggle}></div>
          <FiChevronUp onClick={this.footerToggle} />
          <nav className={`footer-cover-nav footer-cover-${selectTab.slice(1)}`}>
            {false && <Link to="/blog"><span>{t('header.blog')}</span></Link>}
            {false && <Link to="/"><span>CREATE YOUR OWN CHOCOLATE</span></Link>}
            {false && <Link to='' onClick={e => { this.handleShowMoreInfo(e); this.footerToggle(); }}><span>{t('header.more-info')}</span></Link>}
            <a href={t('routes.contact-us')} target="_self">
              <span>{t('header.contact-us')}</span>
            </a>
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
