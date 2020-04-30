import React from 'react'
import ContactSide from '../../layout/contact-side/contact-side';
import { ReactComponent as Back } from "../../../assets/img/back.svg"
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import i18n from '../../../i18n';
import { T } from 'antd/lib/upload/utils';

import { designProcess as designProcessEn, itemsOurServices as itemsOurServicesEn } from '../../../commons/data/data-en';
import { designProcess as designProcessEs, itemsOurServices as itemsOurServicesEs } from '../../../commons/data/data-es';
import { getDesignProcess, getDesignProcessEs, getItemsOurServices, getItemsOurServicesEs } from '../../../commons/services/api';
import { Spin } from 'antd';



// back
// const Back = React.createClass({
//   getDefaultProps() {
//     return {
//       classNames: 'btn-next-img'
//     };
//   },
//   render() {
//     return (
//       <svg width="30" height="112" viewBox="0 0 30 112" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M5.14001 5.5L24.51 56.5L5.14001 106.26" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
//       </svg>
//     )
//   }
// });


class OurServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dpSelected: 0,
      designProcess: '',
      items: ''
    }
  }

  carrAction(direction) {
    let n = 0;
    if (direction === 'l' && this.state.dpSelected !== 0) {
      n = -1;
    }
    if (direction === 'r' && this.state.dpSelected !== this.state.designProcess.length - 1) {
      n = 1;
    }
    this.setState({ dpSelected: this.state.dpSelected + n });
  };

  async getDesignProcessData() {
    let arrItems = [];
    if (i18n.language === 'en') {
      getDesignProcess().then(data =>
        data.map((e, i) => {
          arrItems.push(e.acf.title);
        })).then(data =>
          this.setState({ designProcess: arrItems })
        )
    } else {
      getDesignProcessEs().then(data =>
        data.map((e, i) => {
          arrItems.push(e.acf.title);
        })).then(data =>
          this.setState({ designProcess: arrItems })
        )
    }
  }

  async getItemsOurServicesData() {
    let arrItems = [];
    if (i18n.language === 'en') {
      getItemsOurServices().then(data =>
        data.map((e, i) => {
          arrItems.push(e.acf);
        })).then(data =>
          this.setState({ items: arrItems })
        )
    } else {
      getItemsOurServicesEs().then(data =>
        data.map((e, i) => {
          arrItems.push(e.acf);
        })).then(data =>
          this.setState({ items: arrItems })
        )
    }
  }

  componentDidMount() {
    this.getDesignProcessData();
    this.getItemsOurServicesData();
  }

  render() {

    const altImg = 'img-example.svg';
    const { dpSelected, designProcess, items } = this.state;
    const { t } = this.props;
    console.log("dpSelected", dpSelected)
    console.log("designProcess", designProcess)
    console.log("items", items)
    return (
      <div className="our-services-component" >
        <h2>{t('products-services.this-how-works')}</h2>
        {items ? <div className="our-services-component-process">
          {Object.keys(items).map(i =>
            <div key={i} className={`card-image`}>
              <img src={require('../../../assets/img/' + (items[i].img ? items[i].img : altImg))} alt={items[i].title} />
              <p>{items[i].title}</p>
            </div>)}
        </div> : <Spin size="large" />
        }
        <div className="our-services-component--header">
          <h1>{t('products-services.services-first-title')}</h1>
          <h1>{t('products-services.services-second-title')}</h1>
          <p>{t('products-services.services-first-subtitle')} <br /> {t('products-services.services-second-subtitle')}</p>
        </div>
        <div className="our-services-component-contain-carr">
          {/* <Back className={`btn-next-img btn-next-img-left ${dpSelected === 0 && 'btn-inactive'}`} onClick={() => this.carrAction('l')} /> */}
          <div className="our-services-component-contain-carr--items" >
            <p>{designProcess[dpSelected]}</p>
          </div>
          {/* <Back className={`btn-next-img ${dpSelected === designProcess.length - 1 && 'btn-inactive'}`} onClick={() => this.carrAction('r')} /> */}
        </div>
        <div className="btn-back-sticky">
          <Link to={t('routes.products-services')}>{t('buttons.back-to-solutions').toUpperCase()}</Link>
        </div>
        <ContactSide page='service' products={[]} />
      </div >
    );
  }
};
export default withNamespaces()(OurServices);