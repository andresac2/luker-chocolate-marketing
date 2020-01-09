import React from 'react'
import WrappedContactSide from '../../../layout/contact-side/contact-side';
import Modals from '../../../modals/modals';
import i18n from '../../../../i18n';
import { withNamespaces } from 'react-i18next';

import { itemsCacao as itemsCacaoEn } from '../../../../commons/data/data-en';
import { itemsCacao as itemsCacaoEs } from '../../../../commons/data/data-es';

class IngredientCacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideFormContact: true,
      openProducts: false,
      infoProductsVisible: false,
      productSelected: [],
      itemsHeader: i18n.language === 'en' ? itemsCacaoEn : itemsCacaoEs,
      itemsSelected: [],
      itemsShowed: [],
    };
    this.handleSetProductSelected = this.handleSetProductSelected.bind(this);
    this.handleShowFormContact = this.handleShowFormContact.bind(this)
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
  componentDidMount() {
    this.changeItems(this.state.itemsHeader[1].items, this.state.itemsHeader[1].id);
  }
  handleShowFormContact(action) {
    this.setState({ hideFormContact: !action })
  }

  selectProduct(product) {
    console.log(product)
    product.selected = !product.selected;
    if (this.state.itemsSelected.indexOf(product) < 0) {
      this.setState((state) => ({
        itemsSelected: state.itemsSelected.concat([product])
      }))
    } else {
      let array = [...this.state.itemsSelected]; // make a separate copy of the array
      let index = array.indexOf(product)
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ itemsSelected: array });
      }
    }
  };

  reorderItems(items, moveFromIndex, moveToIndex) {
    const movingItem = items[moveFromIndex];
    items.splice(moveFromIndex, 1);
    items.splice(moveToIndex, 0, movingItem);
    this.setState({ itemsHeader: items });
  }

  changeItems(item, name) {
    const itemSelected = this.state.itemsHeader.findIndex(i => i.id === name);
    this.setState({ itemsShowed: item });
    this.reorderItems(this.state.itemsHeader, 1, itemSelected);
  };

  handleSetProductSelected(value) {
    this.selectProduct(value);
  }

  render() {
    const { data, t } = this.props;
    const { itemsSelected, itemsShowed, itemsHeader, hideFormContact, infoProductsVisible, productSelected } = this.state;
    const altImg = 'img-example.svg';
    return (
      <div className={`cacao-component ${hideFormContact && 'cacao-component--hide-form'} `}>
        <div className="cacao-component--header">
          <h1>{t('products-services.the-best')}</h1>
          <h1>{t('products-services.ingredients')}</h1>
          <div className="cacao-component--header-img">
            {Object.keys(itemsHeader).map(i =>
              <img src={require('../../../../assets/img/' + (itemsHeader[i].img ? itemsHeader[i].img : altImg))} alt={itemsHeader[i].title} key={i} />
            )}
          </div>
        </div>
        <div className="cacao-component--content">
          <p>{data.description}</p>
          <p className="cacao-component--content-specifications">{t('products-services.available-in')} {t('products-services.bag-box-cacao')}<br /> {t('products-services.shelf-life-cacao')}</p>
        </div>
        <div className="cacao-component-tabs">
          <button className={`cacao-component-tabs-btn-next`} disabled={itemsSelected.length <= 0} onClick={() => this.handleShowFormContact(true)}>{(itemsSelected.length <= 0) ? t('buttons.choose-product') : t('buttons.next')}</button>
          <div className="cacao-component-tabs-header">
            {Object.keys(itemsHeader).map(i =>
              <div key={i} onClick={() => this.changeItems(itemsHeader[i].items, itemsHeader[i].id)}>{itemsHeader[i].title}</div>
            )}
          </div>
          <div className="cacao-component-tabs-products">
            {
              Object.keys(itemsShowed).map(i =>
                <div key={i} className={`cacao-component-tabs-products-item cacao-component-tabs-products-item-${itemsShowed[i].selected && 'active'}`} onClick={() => this.selectProduct(itemsShowed[i])}>
                  <img src={require('../../../../assets/img/' + (itemsShowed[i].img ? itemsShowed[i].img : altImg))} alt={itemsShowed[i].description[0]} />
                  <span onClick={() => this.showModalDist(itemsShowed[i])}>i</span>
                  <h2>{t('products-services.casaluker-cacao')}</h2>
                  <p>{itemsShowed[i].description} {itemsShowed[i].cocoaContent}</p>
                  {itemsShowed[i].milkContent && <p>{t('products-services.milk')} {itemsShowed[i].milkContent}</p>}
                </div>)}
          </div>
        </div>
        <Modals visible={infoProductsVisible} modal={'info-product'} showModalDist={this.showModalDist} product={productSelected} title={t('products-services.the-best').toUpperCase() + ' ' + t('products-services.ingredients').toUpperCase()} subtitle={itemsHeader[1].title.toUpperCase()} contentTitle={t('products-services.casaluker-cacao')} />
        <WrappedContactSide page='cacao' products={itemsSelected} handleSetProductSelected={this.handleSetProductSelected} handleShowFormContact={this.handleShowFormContact} />
      </div>
    );
  }
};
export default withNamespaces()(IngredientCacao);