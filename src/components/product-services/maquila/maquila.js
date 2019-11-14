import React from 'react'
import altImg from '../../../assets/img/img-example.svg'
import back from '../../../assets/img/back.svg'
import { Link } from 'react-router-dom';

class Maquila extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: '',
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

  selectProduct(n) {
    this.setState({ selectedProduct: n });
  }
  reorderItems(items, moveFromIndex, moveToIndex) {

    const movingItem = items[moveFromIndex];
    items.splice(moveFromIndex, 1);
    items.splice(moveToIndex, 0, movingItem);
    this.setState({ products: items });
  }
  render() {
    const { products, selectedProduct } = this.state;
    const { product } = this.props;

    return (
      <div className="maquila-component" >
        <h2>Chocolate {product.name}</h2>
        <div className="maquila-component--product-data ">
          <div className={`maquila-item maquila-item--${product.id}`}>
            <img src={require('../../../assets/img/' + (product.img ? product.img : altImg))} alt='jaja' />
          </div>
          <p>{product.description}</p>
        </div>
        <h2 className="maquila-component-title">Customizable with your logo and branding</h2>
        <div> contentsvudghcdsajhgsadk
        </div>
      </div >
    );
  }
};


export default Maquila;