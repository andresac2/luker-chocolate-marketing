import React from 'react'
import altImg from '../../assets/img/img-example.svg'
import back from '../../assets/img/back.svg'
import { Link } from 'react-router-dom';

class ProductServices extends React.Component {

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
    const { items, title } = this.props;

    return (
      <div className="product-services-component" >
        {!selectedProduct && <><h2 className="product-services-component-title">BRANDED CHOCOLATE PRODUCTS</h2>
          <div className="product-carrousel">
            <img className="btn-next-img" src={back} alt='left' onClick={() => this.reorderItems(products, 2, 0)} />
            {
              Object.keys(this.state.products).map(i =>
                <div key={i} className={`carr-item carr-item--${i == 1 && 'active'} carr-item--${products[i].id}`}>
                  <img src={require('../../assets/img/' + (products[i].img ? products[i].img : altImg))} alt='jaja' />
                  <h2>{products[i].name}</h2>
                </div>
              )
            }
            <img className="btn-next-img btn-next-img--right " src={back} alt='right' onClick={() => this.reorderItems(products, 0, 2)} />
          </div>
          <button className="btn-tobuy" onClick={() => this.selectProduct(1)} >FIND OUT MORE</button>
          <div className={`product-services-component--footer product-services-component--footer--${products[1].id}`}>
            {products[1].description}
          </div></>}
        {selectedProduct &&
          <div className="product-services-component--product">
            <h2>Chocolate {products[selectedProduct].name}</h2>
            <div className="product-services-component--product-data product-carrousel">
              <div className={`carr-item carr-item--${products[selectedProduct].id}`}>
                <img src={require('../../assets/img/' + (products[selectedProduct].img ? products[selectedProduct].img : altImg))} alt='jaja' />
              </div>
              <p>{products[selectedProduct].description}</p>
            </div>
            <h2 className="product-services-component-title">Customizable with your logo and branding</h2>
            <div> contentsvudghcdsajhgsadk
            </div>
          </div>}
      </div >
    );
  }
};


export default ProductServices;