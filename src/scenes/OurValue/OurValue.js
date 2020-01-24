import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import item1 from '../../assets/img/unique-flavour.jpg'
import item2 from '../../assets/img/consistency-flavour.jpg'
import item3 from '../../assets/img/integrated-packaging.jpg'
import item4 from '../../assets/img/grano4.jpg'

import { Link } from 'react-router-dom';
import OurAroma from '../../components/our-value/aroma/our-aroma';
import OurFlavour from '../../components/our-value/flavour/our-flavour';
import OurProduct from '../../components/our-value/product/our-product';
import OurSocial from '../../components/our-value/social/our-social';
import { withNamespaces } from 'react-i18next';

class OurValue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectTab: this.props.match.params.id,
    };
  }
  tabToggle(tab) {
    this.setState({ selectTab: tab });
  }

  render() {
    const { selectTab } = this.state;
    const { t } = this.props;

    return (
      <div className="our-value-component">
        <div className={`our-value-header our-value-header--${selectTab}`}>
          <div className="btn-dist">
            <Link to="/" className="logo"> <img src="/static/media/Lukerlogo.af6f7609.svg" alt="Logo Luker" /></Link>
            <Link to={t('routes.our-value')}>{t('buttons.back-to-value').toUpperCase()}</Link>
          </div>
          <h1>{t('value-propose.value-propose-title')}</h1>
        </div>
        <div className="our-value-navbar">
          <Link to={t('routes.our-value') + t('routes.aroma')} onClick={() => this.tabToggle('aroma')} className={`our-value-navbar-item our-value-navbar--${selectTab === 'aroma' && 'active'}`} >
            <img src={item1} alt="aroma" />
            <div className="our-value-navbar-card">
              <p>{t('value-propose.aroma-description')}</p>
            </div>
          </Link>
          <Link to={t('routes.our-value') + t('routes.flavour')} onClick={() => this.tabToggle('flavour')} className={`our-value-navbar-item our-value-navbar--${selectTab === 'flavour' && 'active'}`} >
            <img src={item2} alt="flavour" />
            <div className="our-value-navbar-card">
              <p>{t('value-propose.flavour-description')}</p>
            </div>
          </Link>
          <Link to={t('routes.our-value') + t('routes.product')} onClick={() => this.tabToggle('product')} className={`our-value-navbar-item our-value-navbar--${selectTab === 'product' && 'active'}`} >
            <img src={item3} alt="product" />
            <div className="our-value-navbar-card">
              <p>{t('value-propose.product-description')}</p>
            </div>
          </Link>
          <Link to={t('routes.our-value') + t('routes.social')} onClick={() => this.tabToggle('social')} className={`our-value-navbar-item our-value-navbar--${selectTab === 'social' && 'active'}`} >
            <img src={item4} alt="social" />
            <div className="our-value-navbar-card">
              <p>{t('value-propose.social-description')}</p>
            </div>
          </Link>
        </div>
        <div className="our-value-content">
          {selectTab === 'aroma' && <OurAroma />}
          {selectTab === 'flavour' && <OurFlavour />}
          {selectTab === 'product' && <OurProduct />}
          {selectTab === 'social' && <OurSocial />}
        </div>
        <div className="btn-back-sticky">
          <Link to={t('routes.our-value')}>{t('buttons.back-to-our-value').toUpperCase()}</Link>
        </div>
      </div>
    );
  }
};


export default withNamespaces()(OurValue);