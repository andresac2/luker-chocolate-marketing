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
          name: 'Paning',
          id: 'dragee',
          description: 'We use the panning method for making our delicious chocolate covered dragees. Chocolate is slowly poured over dierent centers; can be dried fruits, cereals, coee beans, among other bite-size treats, creating a thin coating over them.'
        },
        {
          img: 'cocoa-dosing.png',
          name: 'Dosing',
          id: 'dosing',
          description: 'Through a pump-driven chocolate depositor,we have the capacity to make chips, drops and chunks. Playing with the dosage we can offer dierent sizes of these products.'
        }, {
          img: 'cocoa-bars.png',
          name: 'Moulding',
          id: 'bar',
          description: 'We carry seven diﬀerent existing molds. By combining manual and machine production, we can implement very speciﬁc packaging requirements. Below is a selection of our molds and packaging options.'
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
          <img className="btn-next-img" src={back} alt='left' onClick={() => this.reorderItems(products, 2, 0)} />
          {
            Object.keys(this.state.products).map(i =>
              <div key={i} className={`carr-item carr-item--${i == 1 && 'active'} carr-item--${products[i].id}`}>
                <img src={require('../../../assets/img/' + (products[i].img ? products[i].img : altImg))} alt='jaja' />
                <h2>{products[i].name}</h2>
              </div>
            )
          }
          <img className="btn-next-img btn-next-img--right " src={back} alt='right' onClick={() => this.reorderItems(products, 0, 2)} />
        </div>
        <Link className="btn-tobuy" to="/solution">FIND OUT MORE</Link>
        <div className={`maquila-component--footer maquila-component--footer--${products[1].id}`}>
          {products[1].description}
        </div>
      </div >
    );
  }
};


export default Maquila;