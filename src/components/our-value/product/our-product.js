import React from 'react'
import i18n from '../../../i18n';
import { withNamespaces } from 'react-i18next';

import { itemsProducts as itemsProductsEn } from '../../../commons/data/data-en';
import { itemsProducts as itemsProductsEs } from '../../../commons/data/data-es';

class OurProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '0',
      items: i18n.language === 'en' ? itemsProductsEn : itemsProductsEs
    };
  }

  toggleItem(i) {
    (i === this.state.selectedItem) ? this.setState({ selectedItem: 0 }) : this.setState({ selectedItem: i });
  }

  render() {
    const { items, selectedItem } = this.state;
    const { t } = this.props;
    const altImg = 'img-example.svg';

    return (
      <div className="our-product-component" >
        <h1>{t('value-propose.product-title')}</h1>
        <p className="p-flavour p-flavour-border">{t('value-propose.product-text')}</p>
        <div className="our-product-component-cards">
          {Object.keys(items).map(i =>
            <div key={i} className={`our-product-component-card our-product-component-card-${selectedItem === i && 'active'}`} onClick={() => this.toggleItem(i)}>
              <img src={require('../../../assets/img/' + (items[i].img ? items[i].img : altImg))} alt={items[i].title} />
              <div className="our-product-component-card-cover"><p>{items[i].title}</p></div>
            </div>
          )}
        </div>
        <p className="p-flavour">{items[selectedItem].content}</p>
      </div >
    )
  }
}

export default withNamespaces()(OurProduct);