import React from 'react'
import WrappedContactSide from '../../../layout/contact-side/contact-side';
import { TiArrowSortedUp } from 'react-icons/ti';

class Ingredient1906 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideFormContact: true,
      openProducts: false,
      itemsArauca: [{
        id: 1,
        img: 'p-tumaco.png',
        description: 'DARK TUMACO 65%',
        selected: false
      }, {
        id: 2,
        img: 'p-tumaco-85.png',
        description: 'EXTRA DARK TUMACO 85%',
        selected: false
      },
      {
        id: 3,
        img: 'p-huila-65.png',
        description: 'DARK HUILA 65%',
        selected: false
      }, {
        id: 4,
        img: 'p-huila-70.png',
        description: 'DARK HUILA 70%',
        selected: false
      },
      {
        id: 5,
        img: 'p-santander-65.png',
        description: 'DARK SANTANDER 65%',
        selected: false
      },
      {
        id: 6,
        img: 'p-sanmartin-72.png',
        description: 'DARK SAN MARTIN 72%',
        selected: false
      },
      {
        id: 7,
        img: 'p-arauca-55.png',
        description: 'MILK ARAUCA 55%',
        selected: false
      }
      ]
    };
    this.handleSetProductSelected = this.handleSetProductSelected.bind(this);
    this.handleShowFormContact = this.handleShowFormContact.bind(this)

  }

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
    const { data } = this.props;
    const { itemsArauca, hideFormContact, openProducts } = this.state;
    const altImg = 'img-example.svg';

    return (
      <div className={`i1906-component ${hideFormContact && 'i1906-component--hide-form'} `} style={{ overflow: hideFormContact ? '' : 'hidden' }}>
        <div className={`i1906-component--header ${openProducts ? 'i1906-component--header-img-open-product' : ''}`}>
          <h1>{data.subtitle}</h1>
          <h1>{data.name}</h1>
          <img src={require('../../../../assets/img/chocolate-ingredients/origins/origenes-line-up.png')} alt='Products Origins' />
        </div>
        <div className={`i1906-component--content ${openProducts ? 'i1906-component--content-open-product' : ''}`}>
          <h2>SINGLE ORIGIN</h2>
          <p>Luker 1906, SANTANDER, HUILA, TUMACO and ARAUCA. Four Colombian Origin Chocolates with flavours that reflect the country’s geographic and cultural diversity. Santander cocoa is cultivated in the Andes; Tumaco, in the tropical forests of the Pacific Coast and Huila cocoa is typical of the region’s deep valleys. In Arauca, cocoa grows in wild landscapes between the snow-capped mountains and valleys of the Orinoco. Mountains, forests and valleys: Luker 1906, the chocolate with an inimitable flavour of the land that it grows in.</p>
          <p className="i1906-component--content-specifications">Available in: 2,5 bag or 20kg box<br /> Shelf life: Dark 24 months, Milk 18 months & White 14 months.</p>
        </div>
        <div className={`i1906-component--contain-products-arrow ${openProducts ? 'i1906-component--contain-products-arrow-open' : ''}`} onClick={() => this.showProductToggle()}><span><TiArrowSortedUp /></span></div>
        <div className={`i1906-component--contain-products ${openProducts ? 'i1906-component--contain-products-open' : ''}`} >
          <button className={`i1906-component--products-btn-next`} disabled={itemsArauca.filter(item => item.selected).length <= 0} onClick={() => this.handleShowFormContact(true)}>{(itemsArauca.filter(item => item.selected).length <= 0) ? 'Choose your favorite products' : 'Next'}</button>
          <div className="i1906-component--products">
            {Object.keys(itemsArauca).map(i =>
              <div key={i} className={`i1906-component--products-item i1906-component--products-item-${itemsArauca[i].selected && 'active'}`} onClick={() => this.productToggle(itemsArauca[i].id, !itemsArauca[i].selected)}>
                <img src={require('../../../../assets/img/' + (itemsArauca[i].img ? itemsArauca[i].img : altImg))} alt={itemsArauca[i].description} />
                <h2>Luker 1906</h2>
                <span>i</span>
                <p>{itemsArauca[i].description}</p>
              </div>)}
          </div>
        </div>
        <WrappedContactSide page='ingredients' products={itemsArauca} handleSetProductSelected={this.handleSetProductSelected} handleShowFormContact={this.handleShowFormContact} />
      </div>
    );
  }
};

export default Ingredient1906;