import React from 'react'
import WrappedContactSide from '../../../layout/contact-side/contact-side';
import { TiArrowSortedUp } from 'react-icons/ti';
import Modals from '../../../modals/modals';
import i18n from '../../../../i18n';
import { withNamespaces } from 'react-i18next';

import { itemsOrigins as itemsOriginsEn } from '../../../../commons/data/data-en';
import { itemsOrigins as itemsOriginsEs } from '../../../../commons/data/data-es';

class Ingredient1906 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideFormContact: true,
      openProducts: false,
      infoProductsVisible: false,
      productSelected: [],
      itemsArauca: i18n.language === 'en' ? itemsOriginsEn : itemsOriginsEs
    }
    this.handleSetProductSelected = this.handleSetProductSelected.bind(this);
    this.handleShowFormContact = this.handleShowFormContact.bind(this);
    this.showModalDist = this.showModalDist.bind(this)
  }
  showModalDist = (product) => {
    this.setState({
      infoProductsVisible: !this.state.infoProductsVisible,
    });
    if (product) {
      console.log("prod: ", product);
      this.setState({
        productSelected: product,
      });
    }
  };

  productToggle(id, selected) {
    this.setState({
      itemsArauca: this.state.itemsArauca.map(el => (el.id === id ? { ...el, selected } : el))
    });
  };

  showProductToggle() {
    this.setState({ openProducts: !this.state.openProducts });
  };

  handleSetProductSelected(value) {
    this.productToggle(value.id, false);
  }

  handleShowFormContact(action) {
    this.setState({ hideFormContact: !action })
  }

  render() {
    const { data, t } = this.props;
    const { itemsArauca, hideFormContact, openProducts, infoProductsVisible, productSelected } = this.state;
    const altImg = 'img-example.svg';

    return (
      <div className={`i1906-component ${hideFormContact && 'i1906-component--hide-form'} `} style={{ overflow: hideFormContact ? '' : 'hidden' }}>
        <div className={`i1906-component--header ${openProducts ? 'i1906-component--header-img-open-product' : ''}`}>
          <h1>{data.subtitle}</h1>
          <h1>{data.name}</h1>
          <img src={require('../../../../assets/img/chocolate-ingredients/origins/origenes-line-up.png')} alt='Products Origins' />
        </div>
        <div className={`i1906-component--content ${openProducts ? 'i1906-component--content-open-product' : ''}`}>
          <h2>{t('products-services.single-origin').toUpperCase()}</h2>
          <p>{t('products-services.origins-text')}</p>
          <p className="i1906-component--content-specifications">{t('products-services.available-in')} {t('products-services.bag-box-origins')}<br /> {t('products-services.shelf-life-origins')}</p>
        </div>
        <div className={`i1906-component--contain-products-arrow ${openProducts ? 'i1906-component--contain-products-arrow-open' : ''}`} onClick={() => this.showProductToggle()}><span><TiArrowSortedUp /></span></div>
        <div className={`i1906-component--contain-products ${openProducts ? 'i1906-component--contain-products-open' : ''}`} >
          <button className={`i1906-component--products-btn-next`} disabled={itemsArauca.filter(item => item.selected).length <= 0} onClick={() => this.handleShowFormContact(true)}>{(itemsArauca.filter(item => item.selected).length <= 0) ? 'Choose your favorite products' : 'Next'}</button>
          <div className="i1906-component--products">
            {Object.keys(itemsArauca).map(i =>
              <div key={i} className={`i1906-component--products-item i1906-component--products-item-${itemsArauca[i].selected && 'active'}`} onClick={() => this.productToggle(itemsArauca[i].id, !itemsArauca[i].selected)}>
                <img src={require('../../../../assets/img/' + (itemsArauca[i].img ? itemsArauca[i].img : altImg))} alt={itemsArauca[i].description} />
                <h2>{t('products-services.luker-1906')}</h2>
                <p>{itemsArauca[i].description} {itemsArauca[i].cocoaContent}</p>
                <span onClick={() => this.showModalDist(itemsArauca[i])}>i</span>
              </div>)}
          </div>
        </div>
        <Modals visible={infoProductsVisible} modal={'info-product'} showModalDist={this.showModalDist} product={productSelected} title={t('products-services.single-origin-chocolates')} subtitle={t('products-services.luker-1906')} contentTitle={t('products-services.luker-1906')} />
        <WrappedContactSide page='ingredients' products={itemsArauca} handleSetProductSelected={this.handleSetProductSelected} handleShowFormContact={this.handleShowFormContact} />
      </div>
    );
  }
};

export default withNamespaces()(Ingredient1906);