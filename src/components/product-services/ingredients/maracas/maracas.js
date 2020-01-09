import React from 'react'
import WrappedContactSide from '../../../layout/contact-side/contact-side';
import { TiArrowSortedUp } from 'react-icons/ti';
import i18n from '../../../../i18n';
import { withNamespaces } from 'react-i18next';

import { itemsMaracas as itemsMaracasEn } from '../../../../commons/data/data-en';
import { itemsMaracas as itemsMaracasEs } from '../../../../commons/data/data-es';

class IngredientDragees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openProducts: false,
      hideFormContact: true,
      items: i18n.language === 'en' ? itemsMaracasEn : itemsMaracasEs
    };
    this.handleSetProductSelected = this.handleSetProductSelected.bind(this);
    this.handleShowFormContact = this.handleShowFormContact.bind(this)
  }

  productToggle(id, selected) {
    this.setState({
      items: this.state.items.map(el => (el.id === id ? { ...el, selected } : el))
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
    const { items, hideFormContact, openProducts } = this.state;
    const { t } = this.props;
    const altImg = 'img-example.svg';

    return (
      <div className={`dragees-component ${hideFormContact && 'dragees-component--hide-form'} `}>
        <div className="dragees-component--header">
          <h1>{t('products-services.maracas-first-title')}</h1>
          <h1>{t('products-services.maracas-second-title')}</h1>
        </div>
        <div className={`dragees-component--content ${openProducts ? 'dragees-component--content-open' : ''}`}>
          <p>{t('products-services.maracas-first-text')}</p>
          <p>{t('products-services.maracas-second-text')}</p>
        </div>
        <div className={`dragees-component--products-arrow ${openProducts ? 'dragees-component--products-arrow-open' : ''}`} onClick={() => this.showProductToggle()}><span><TiArrowSortedUp /></span></div>
        <div className={`dragees-component--products ${openProducts ? 'dragees-component--products-open' : ''}`}>
          <button className={`dragees-component--products-btn-next`} disabled={items.filter(item => item.selected).length <= 0} onClick={() => this.handleShowFormContact(true)}>{(items.filter(item => item.selected).length <= 0) ? t('buttons.choose-product') : t('buttons.next')}</button>
          {Object.keys(items).map(i =>
            <div key={i} className={`dragees-component--products-item dragees-component--products-item-${items[i].selected && 'active'}`} onClick={() => this.productToggle(items[i].id, !items[i].selected)}>
              <div className="dragees-component--products-item-img">
                <div className="dragees-component--products-item-img-container">
                  <img src={require('../../../../assets/img/' + (items[i].img ? items[i].img : altImg))} alt={items[i].description} />
                </div>
              </div>
              <div className="dragees-component--products-item-data">
                <h2>{items[i].description}</h2>
                <p>{items[i].content}</p>
                <span>{items[i].available}</span>
              </div>
            </div>)}
        </div>
        <WrappedContactSide page='maracas' products={items} handleSetProductSelected={this.handleSetProductSelected} handleShowFormContact={this.handleShowFormContact} />
      </div>
    );
  }
};


export default withNamespaces()(IngredientDragees);