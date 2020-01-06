import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/Lukerlogo.svg'
import FloatLogo from '../../components/layout/float-logo/float-logo';
import HelmetComponent from '../../commons/helmet/helmet';
import { withNamespaces } from 'react-i18next';

function Solution(props) {
  const { t } = props;
  return (
    <div className='solution-component'>
      <HelmetComponent title="Luker Chocolate | Products & services" />
      <FloatLogo btnText='dist' />
      <Link to="/products-services/ingredients" className="solution-component--ingredient">
        <div className="header-btn">
          {t('products-services.ingredients')}
      </div>
      </Link>
      <Link to="/products-services/finished-chocolate-products" className="solution-component--maquila">
        <div className="header-btn">
          {t('products-services.finished-chocolate-products')}
      </div>
      </Link>
      <Link to="/products-services/our-services" className="solution-component--service">
        <div className="header-btn">
          {t('products-services.our-services')}
      </div>
      </Link>
    </div>
  );
}

export default withNamespaces()(Solution);