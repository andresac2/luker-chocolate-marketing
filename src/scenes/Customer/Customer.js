import React from 'react';
import { Link } from 'react-router-dom';

import doisy from '../../assets/img/Doisy&Dam.jpg'
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
import FloatLogo from '../../components/layout/float-logo/float-logo';


function Customer() {

  return (
    <div className='customer-component'>
      <div className="customer-component--header">
        <h1>OUR CLIENTS</h1>
        <FloatLogo btnText='dist' />
      </div>
      <div className="customer-component--content">
        <Link to='/blog/our-clients/pots-co'>
          <img src={pots} alt="Pots&co" />
          <h2>POTS & CO</h2>
          <img src={ukFlag} alt="" className="flag-badge" />
        </Link>
        <Link to='/blog/our-clients/doisy-dam'>
          <img src={doisy} alt="Doisy & Dam" />
          <h2>DOISY & DAM</h2>
          <img src={ukFlag} alt="" className="flag-badge" />
        </Link>
        <Link to='/blog/our-clients/dengel-shokolade'>
          <img src={dengel} alt="" />
          <h2>DENGEL SHOKOLADE</h2>
          <img src={dkFlag} alt="" className="flag-badge" />
        </Link>
        <Link to='/blog/our-clients/york-cocoa-house'>
          <img src={york} alt="" />
          <h2>YORK COCOA HOUSE</h2>
          <img src={usFlag} alt="" className="flag-badge" />
        </Link>
      </div>
    </div>
  );
}

export default Customer;