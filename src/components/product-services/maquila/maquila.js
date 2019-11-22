import React from 'react'
import ContactUs from '../../layout/contact-us/contact-us';

class Maquila extends React.Component {

  render() {

    const altImg = 'img-example.svg';
    const dosing = ['CHIPS 0,125G', 'DROPS 0,125g', 'DROPS 0,5G', 'DROPS 6g', 'CHUNKS 1 to 10 cm'];
    const paning = ['CACAO NIBS', 'NIBS CLUSTERS', 'QUINOA', 'GOLDEN BERRIES', 'ESPRESSO BEANS', 'INSTANT COFFEE'];
    const moulding = ['BARS', 'SHAPES'];
    const product = {
      img: 'cocoa-grageas.png',
      name: 'Paning',
      id: 'dragee',
      description: 'We use the panning method for making our delicious chocolate covered dragees. Chocolate is slowly poured over dierent centers; can be dried fruits, cereals, coee beans, among other bite-size treats, creating a thin coating over them.'
    };

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
        <div className={`maquila-product maquila-product--${product.id}`}>
          {product.name === 'Dosing' && dosing.map((item, i) =>
            <div key={i} className="maquila-product-item">{item}
            </div>)}
          {product.name === 'Paning' && paning.map((item, i) =>
            <div key={i} className="maquila-product-item">{item}
            </div>)}
          {product.name === 'Moulding' && moulding.map((item, i) =>
            <div key={i} className="maquila-product-item">{item}    </div>)}
        </div>
        <ContactUs page='maquila' products={[]} />
      </div >
    );
  }
};


export default Maquila;