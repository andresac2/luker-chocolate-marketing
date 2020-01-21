import React from 'react';
import { Link } from 'react-router-dom';

import doisy from '../../assets/img/Doisy&Dam.jpg'
import royce from '../../assets/img/royce.jpg'
//import fifthDim from '../../assets/img/5thdimensions.jpg'
//import laceys from '../../assets/img/Lacy\'s New.png'
//import lyra from '../../assets/img/lyra_eshop.jpg'
//import paul from '../../assets/img/PAUL LAFAYET_Creme.png'
import pots from '../../assets/img/pots&co.jpg'
import dengel from '../../assets/img/dengel.jpg'
import york from '../../assets/img/york.jpg'

//import frFlag from '../../assets/img/fr-flag.png'
import usFlag from '../../assets/img/us-flag.png'
import dkFlag from '../../assets/img/dk-flag.png'
import ukFlag from '../../assets/img/uk-flag.png'
import jpFlag from '../../assets/img/jp-flag.png'
import FloatLogo from '../../components/layout/float-logo/float-logo';
import HelmetComponent from '../../commons/helmet/helmet';
import { withNamespaces } from 'react-i18next';


function Customer(props) {
  const { t } = props;
  return (
    <div className='customer-component'>
      <HelmetComponent title="Luker Chocolate | Our clients" />
      <div className="customer-component--header">
        <h1>{t('header.our-clients').toUpperCase()}</h1>
        <FloatLogo btnText='dist' />
      </div>
      <div className="customer-component--content">
        <Link to={'/blog' + t('routes.our-clients') + '/pots-co'}>
          <img src={pots} alt="Pots&co" />
          <h2>POTS & CO</h2>
          <img src={ukFlag} alt="United kingdom flag" className="flag-badge" />
        </Link>
        <Link to={'/blog' + t('routes.our-clients') + '/doisy-dam'}>
          <img src={doisy} alt="Doisy & Dam" />
          <h2>DOISY & DAM</h2>
          <img src={ukFlag} alt="United kingdom flag" className="flag-badge" />
        </Link>
        <Link to={'/blog' + t('routes.our-clients') + '/royce'}>
          <img src={royce} alt="Royce" />
          <h2>ROYCE'</h2>
          <img src={jpFlag} alt="Japan flag" className="flag-badge" />
        </Link>
        <Link to={'/blog' + t('routes.our-clients') + '/york-cocoa-house'}>
          <img src={york} alt="York Cocoa House" />
          <h2>YORK COCOA HOUSE</h2>
          <img src={usFlag} alt="United states flag" className="flag-badge" />
        </Link>
      </div>
    </div>
  );
}

export default withNamespaces()(Customer);