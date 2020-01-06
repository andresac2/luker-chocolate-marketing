import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import item1 from '../../assets/img/unique-flavour.jpg'
import item2 from '../../assets/img/consistency-flavour.jpg'
import item3 from '../../assets/img/integrated-packaging.jpg'
import item4 from '../../assets/img/grano4.jpg'
import ImgCarrousel from '../../components/img-carrousel/img-carrousel';
import { withNamespaces } from 'react-i18next';

import { Link } from 'react-router-dom';
import FloatLogo from '../../components/layout/float-logo/float-logo';
import HelmetComponent from '../../commons/helmet/helmet';

function ValuePropose(props) {
  const { t } = props;
  return (
    <div className="value-propose-component">
      <HelmetComponent title="Luker Chocolate | Our value propose" />
      <div className="value-propose-component--expo">
        <div className="btn-dist">
          <Link to="/" className="logo"> <img src={logo} alt="Logo Luker" /></Link>
        </div>
        <FloatLogo btnText='dist' />
        <div className="value-propose-component--expo-pagraph">
          <h1>{t('value-propose.value-propose-title')}</h1>
          <p>{t('value-propose.value-propose-subtitle')}</p>
        </div>
      </div>
      <div className="value-propose-component--carrousel">
      </div>
      <div className="value-propose-component--item">
        <div className="value-propose-component--item-card">
          <img src={item1} alt="cacao" />
          <div className="value-propose-component--item-card-text">
            {t('value-propose.aroma-description')}
          </div>
          <div className="value-propose-component--item-card-hover">
            <p className='hide-resp'>{t('value-propose.aroma-description-hover')}</p>
            <p className="value-propose-component--item-card-hover-text">{t('value-propose.aroma-description')}</p>
            <Link to="/our-value/aroma">{t('buttons.learn-more').toUpperCase()}</Link>
          </div>
        </div>
        <div className="value-propose-component--item-card">
          <img src={item2} alt="cacao" />
          <div className="value-propose-component--item-card-text">
            {t('value-propose.flavour-description')}
          </div>
          <div className="value-propose-component--item-card-hover">
            <p className='hide-resp'>{t('value-propose.flavour-description-hover')}</p>
            <p className="value-propose-component--item-card-hover-text">{t('value-propose.flavour-description')}</p>
            <Link to="/our-value/flavour">{t('buttons.learn-more').toUpperCase()}</Link>
          </div>
        </div>
        <div className="value-propose-component--item-card">
          <img src={item3} alt="cacao" />
          <div className="value-propose-component--item-card-text">
            {t('value-propose.product-description')}
          </div>
          <div className="value-propose-component--item-card-hover">
            <p className='hide-resp'>{t('value-propose.product-description-hover')}</p>
            <p className="value-propose-component--item-card-hover-text">{t('value-propose.product-description')}</p>
            <Link to="/our-value/product">{t('buttons.learn-more').toUpperCase()}</Link>
          </div>
        </div>
        <div className="value-propose-component--item-card">
          <img src={item4} alt="cacao" />
          <div className="value-propose-component--item-card-text">
            {t('value-propose.social-description')}
          </div>
          <div className="value-propose-component--item-card-hover">
            <p className='hide-resp'>{t('value-propose.social-description-hover')}</p>
            <p className="value-propose-component--item-card-hover-text">{t('value-propose.social-description')}</p>
            <Link to="/our-value/social">{t('buttons.learn-more').toUpperCase()}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withNamespaces()(ValuePropose);