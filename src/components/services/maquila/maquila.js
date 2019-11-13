import React from 'react'
import altImg from '../../../assets/img/img-example.svg'
import back from '../../../assets/img/back.svg'
import { Link } from 'react-router-dom';

class Maquila extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          img: 'cocoa-grageas.png',
          name: 'Chocolate dragees',
          id: 'dragee',
          description: 'Chocolate bars are the second best-selling product in the world within the chocolate category. Luker Chocolate bars have premium ingredients with unique origins and flavours.'
        },
        {
          img: 'cocoa-powder.png',
          name: 'Cocoa powder',
          id: 'powder',
          description: 'Our sugar and cholesterol-free cocoa powder is made with the best quality fine or flavour cocoa beans. It’s perfect to make delicious hot chocolate or recipes with chocolaty combinations. It can also be used as an ingredient to flavor ice cream, cakes, desserts, and ganache.'
        }, {
          img: 'cocoa-bars.png',
          name: 'chocolate bars',
          id: 'bar',
          description: 'Chocolate bars are the second best-selling product in the world within the chocolate category. Luker Chocolate bars have premium ingredients with unique origins and flavours.'
        }]
    };
  }

  itemToggle(tab) {
    (tab === this.state.selectTab) ? this.setState({ selectTab: '' }) : this.setState({ selectTab: tab });
  }

  reorderItems(items, moveFromIndex, moveToIndex) {

    const movingItem = items[moveFromIndex];
    items.splice(moveFromIndex, 1);
    items.splice(moveToIndex, 0, movingItem);
    this.setState({ products: items });
  }
  render() {
    const { products } = this.state;

    return (
      <div className="maquila-component" >
        <h2 className="maquila-component-title">BRANDED CHOCOLATE PRODUCTS</h2>
        <div className="product-carrousel">
          <img className="btn-next-img" src={back} alt='left' onClick={() => this.reorderItems(products, 0, 2)} />
          {
            Object.keys(this.state.products).map(i =>
              <div key={i} className={`carr-item carr-item--${i == 1 && 'active'} carr-item--${products[i].id}`}>
                <img src={require('../../../assets/img/' + (products[i].img ? products[i].img : altImg))} alt='jaja' />
                <h2>{products[i].name}</h2>
              </div>
            )
          }
          <img className="btn-next-img btn-next-img--right " src={back} alt='right' onClick={() => this.reorderItems(products, 2, 0)} />
        </div>
        <Link className="btn-tobuy" to="/solution">CUSTOMIZABLE WITH YOUR LOGO</Link>
        <div className={`maquila-component--footer maquila-component--footer--${products[1].id}`}>
          {products[1].description}
        </div>
      </div >
    );
  }
};


export default Maquila;