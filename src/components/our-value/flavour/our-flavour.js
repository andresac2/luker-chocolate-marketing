import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

import i18n from '../../../i18n';
import { withNamespaces } from 'react-i18next';

import { itemsFlavour as itemsFlavourEn } from '../../../commons/data/data-en';
import { itemsFlavour as itemsFlavourEs } from '../../../commons/data/data-es';

class OurFlavour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedItem: '0',
      items: i18n.language === 'en' ? itemsFlavourEn : itemsFlavourEs
    };
  }

  toggleItem(i) {
    (i === this.state.openedItem) ? this.setState({ openedItem: 99 }) : this.setState({ openedItem: i });
  }

  render() {
    const { items, openedItem } = this.state;
    const { t } = this.props;
    const altImg = 'img-example.svg';

    return (
      <div className="our-flavour-component" >
        <h1>{t('value-propose.flavour-title')}</h1>
        <div className="our-flavour-component-cards">
          {Object.keys(items).map(i =>
            <div key={i} className={`our-flavour-component-card our-flavour-component-card--${openedItem !== 99 && 'open'} our-flavour-component-card--${openedItem === i && 'opened'}`}>
              {openedItem !== i && <img src={(items[i].img ? items[i].img : altImg)} alt={items[i].title} key={i} />}
              {(openedItem !== i) ?
                <div className={`our-flavour-component-card--header`}>
                  <p>{items[i].title}</p>
                </div> :
                <div className={`our-flavour-component-card--data`}>
                  <div className="our-flavour-component-card--data-text">
                    <h2>{items[i].title}</h2>
                    <div className="our-flavour-component-card--data-text-content">
                      <p>{items[i].content}</p>
                    </div>
                  </div>
                  <div className="our-flavour-component-card--data-img">
                    <img src={(items[i].img ? items[i].img : altImg)} alt={items[i].title} key={i} />
                  </div>
                </div>
              }
              <FiChevronDown onClick={() => this.toggleItem(i)} className="value-svg" />
            </div>
          )}
        </div>
      </div >
    )
  }
}
export default withNamespaces()(OurFlavour);