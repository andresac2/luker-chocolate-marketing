import React from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import i18n from '../../../i18n';
import { withNamespaces } from 'react-i18next';

import { itemsAroma as itemsAromaEn } from '../../../commons/data/data-en';
import { itemsAroma as itemsAromaEs } from '../../../commons/data/data-es';

class OurAroma extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 0,
      items: i18n.language === 'en' ? itemsAromaEn : itemsAromaEs
    };
  }
  carrAction(direction) {
    let n = 0;
    if (direction === 'l' && this.state.selectedItem !== 0) {
      n = -1;
    }
    if (direction === 'r' && this.state.selectedItem !== this.state.selectedItem.length - 1) {
      n = 1;
    }
    this.setState({ selectedItem: this.state.selectedItem + n });
  };
  render() {
    const { items, selectedItem } = this.state;
    const { t } = this.props;
    return (
      <div className="our-aroma-component" >
        <h1>{t('value-propose.aroma-title')}</h1>
        <p>{t('value-propose.aroma-first-text')}</p>
        <div className="our-aroma-component--separator">
          <FiChevronLeft className={`our-aroma-component--separator-btn ${selectedItem === 0 && 'btn-inactive'}`} onClick={() => this.carrAction('l')} />
          <FiChevronRight className={`our-aroma-component--separator-btn our-aroma-component--separator-btn--right ${selectedItem === items.length - 1 && 'btn-inactive'}`} onClick={() => this.carrAction('r')} />
          <h2>
            {items[selectedItem]}
          </h2>
        </div>
        <p>{t('value-propose.aroma-second-text')}</p>
      </div >
    )
  }
}

export default withNamespaces()(OurAroma);