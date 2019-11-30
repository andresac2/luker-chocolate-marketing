import React from 'react'
import ContactUs from '../../layout/contact-us/contact-us';

class Maquila extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsMoment: ['Dark', 'MILK', 'White'],
      hasSelected: false,
      itemsSelected: [],
      dosing: [{ description: 'CHIPS 0,125G', img: 'chips.png', selected: false },
      { description: 'DROPS 0,125g', img: 'drops-black.png', selected: false },
      { description: 'DROPS 0,5G', img: 'drops-white.png', selected: false },
      { description: 'DROPS 6g', img: 'drops-mixed.png', selected: false },
      { description: 'CHUNKS 1 to 10 cm', img: 'chunks.png', selected: false }],
      paning: [{ description: 'CACAO NIBS', img: 'cacao-nibs.png' }, { description: 'NIBS CLUSTERS', img: 'nibs-cluster.png' }, { description: 'QUINOA', img: 'quinoa.png' }, { description: 'GOLDEN BERRIES', img: 'golden-berries.png' }, { description: 'ESPRESSO BEANS', img: 'espresso-beans.png' }, { description: 'INSTANT COFFEE', img: 'instant-coffee.png' }],
      moulding: [{ description: 'BARS', img: 'moulding-bars.png' }, { description: 'SHAPES', img: 'moulding-shapes.png' }]
    }
  }
  selectProduct(product) {
    this.setState({ hasSelected: !this.state.hasSelected });
    /*  product.selected = !product.selected;
      if (this.state.itemsSelected.indexOf(product) < 0) {
        this.setState((state) => ({
          itemsSelected: state.itemsSelected.concat([product])
        }))
      } else {
        let array = [...this.state.itemsSelected]; // make a separate copy of the array
        let index = array.indexOf(product)
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({ itemsSelected: array });
        }
      }*/
  };

  render() {

    const altImg = 'img-example.svg';
    const { product } = this.props;
    const { itemsSelected, dosing, paning, moulding, hasSelected } = this.state;

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
        {hasSelected ?
          <div className={`maquila-product maquila-product-dmw`}>
            {['Dark', 'MILK', 'White'].map((item, i) =>
              <div key={i} className={`maquila-product-item maquila-product-item-dmw`} onClick={() => this.selectProduct([])}>
                {item}
              </div>)}
          </div>
          :
          <div className={`maquila-product maquila-product--${product.id}`}>
            {product.name === 'Dosing' && Object.keys(dosing).map((i) =>
              <div key={i} className={`maquila-product-item maquila-product-item--${dosing[i].selected && 'active'}`} onClick={() => this.selectProduct(dosing[i])}>
                <img src={require('../../../assets/img/' + (dosing[i].img ? dosing[i].img : altImg))} alt={dosing[i].id} />
                {dosing[i].description}
              </div>)}
            {product.name === 'Paning' && Object.keys(paning).map((i) =>
              <div key={i} className="maquila-product-item" onClick={() => this.selectProduct(paning[i])}>
                <img src={require('../../../assets/img/' + (paning[i].img ? paning[i].img : altImg))} alt={paning[i].id} />
                {paning[i].description}
              </div>)}
            {product.name === 'Moulding' && Object.keys(moulding).map((i) =>
              <div key={i} className="maquila-product-item" onClick={() => this.selectProduct(moulding[i])}>
                <img src={require('../../../assets/img/' + (moulding[i].img ? moulding[i].img : altImg))} alt={moulding[i].id} />
                {moulding[i].description}    </div>)}
          </div>}
        <ContactUs page='maquila' products={itemsSelected} />
      </div >
    );
  }
};


export default Maquila;