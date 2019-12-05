import React from 'react'
import WrappedContactUs from '../../../layout/contact-us/contact-us';

class Ingredient1906 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsArauca: [{
        id: 1,
        img: 'p-arauca.png',
        description: 'ARAUCA 70%',
        selected: false
      },
      {
        id: 2,
        img: 'p-tumaco.png',
        description: 'TUMACO 65%',
        selected: false
      },
      {
        id: 3,
        img: 'p-peru.png',
        description: 'PERU 72%',
        selected: false
      },
      {
        id: 4,
        img: 'p-santander.png',
        description: 'SANTANDER 65%',
        selected: false
      },
      {
        id: 5,
        img: 'p-huila.png',
        description: 'HUILA 65%',
        selected: false
      }
      ]
    };
    this.handleSetProductSelected = this.handleSetProductSelected.bind(this)
  }

  productToggle(id, selected) {
    this.setState({
      itemsArauca: this.state.itemsArauca.map(el => (el.id === id ? { ...el, selected } : el))
    });
  };


  handleSetProductSelected(value) {
    this.productToggle(value, false);
  }

  render() {
    const { data } = this.props;
    const { itemsArauca } = this.state;
    const altImg = 'img-example.svg';

    return (
      <div className="i1906-component">
        <div className="i1906-component--header">
          <h1>{data.subtitle}</h1>
          <h1>{data.name}</h1>
          <img src={require('../../../../assets/img/lukerproducts.png')} alt='jaja' />
        </div>
        <div className="i1906-component--content">
          <h2>UNIQUE ORIGIN</h2>
          <p>CasaLuker 1906, SANTANDER, HUILA, TUMACO and ARAUCA. Four Colombian Origin Chocolates with flavours that reflect the country’s geographic and cultural diversity. Santander cocoa is cultivated in the Andes; Tumaco, in the tropical forests of the Pacific Coast and Huila cocoa is typical of the region’s deep valleys. In Arauca, cocoa grows in wild landscapes between the snow-capped mountains and valleys of the Orinoco. Mountains, forests and valleys: CasaLuker 1906, the chocolate with an inimitable flavour of the land that it grows in.</p>
        </div>
        <div className="i1906-component--products">
          {Object.keys(itemsArauca).map(i =>
            <div key={i} className={`i1906-component--products-item i1906-component--products-item-${itemsArauca[i].selected && 'active'}`} onClick={() => this.productToggle(itemsArauca[i].id, !itemsArauca[i].selected)}>
              <img src={require('../../../../assets/img/' + (itemsArauca[i].img ? itemsArauca[i].img : altImg))} alt='jaja' />
              <span>i</span>
              <h2>CasaLuker 1906</h2>
              <p>{itemsArauca[i].description}</p>
            </div>)}
        </div>
        <WrappedContactUs page='ingredients' products={itemsArauca} handleSetProductSelected={this.handleSetProductSelected} />
      </div>
    );
  }
};

export default Ingredient1906;