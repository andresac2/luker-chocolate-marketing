import React from 'react'
import ContactUs from '../../layout/contact-us/contact-us';

class Maquila extends React.Component {

  render() {

    const altImg = 'img-example.svg';
    const dosing = [{ name: 'CHIPS 0,125G', img: 'chips.png' },
    { name: 'DROPS 0,125g', img: 'drops-black.png' },
    { name: 'DROPS 0,5G', img: 'drops-white.png' },
    { name: 'DROPS 6g', img: 'drops-mixed.png' },
    { name: 'CHUNKS 1 to ,10 cm', img: 'chunks.png' }];
    const paning = [{ name: 'CACAO NIBS', img: 'cacao-nibs.png' }, { name: 'NIBS CLUSTERS', img: 'nibs-cluster.png' }, { name: 'QUINOA', img: 'quinoa.png' }, { name: 'GOLDEN BERRIES', img: 'golden-berries.png' }, { name: 'ESPRESSO BEANS', img: 'espresso-beans.png' }, { name: 'INSTANT COFFEE', img: 'instant-coffee.png' }];
    const moulding = [{ name: 'BARS', img: 'moulding-bars.png' }, { name: 'SHAPES', img: 'moulding-shapes.png' }];
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
        <div className={`maquila-product maquila-product--${product.id}`}>
          {product.name === 'Dosing' && Object.keys(dosing).map((i) =>
            <div key={i} className="maquila-product-item">
              <img src={require('../../../assets/img/' + (dosing[i].img ? dosing[i].img : altImg))} alt={dosing[i].id} />
              {dosing[i].name}
            </div>)}
          {product.name === 'Paning' && Object.keys(paning).map((i) =>
            <div key={i} className="maquila-product-item">
              <img src={require('../../../assets/img/' + (paning[i].img ? paning[i].img : altImg))} alt={paning[i].id} />
              {paning[i].name}
            </div>)}
          {product.name === 'Moulding' && Object.keys(moulding).map((i) =>
            <div key={i} className="maquila-product-item">
              <img src={require('../../../assets/img/' + (moulding[i].img ? moulding[i].img : altImg))} alt={moulding[i].id} />
              {moulding[i].name}    </div>)}
        </div>
        <ContactUs page='maquila' products={[]} />
      </div >
    );
  }
};


export default Maquila;