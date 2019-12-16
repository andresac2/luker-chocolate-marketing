import React from 'react'
import ContactSide from '../../layout/contact-side/contact-side';
import { Link } from 'react-router-dom';
import ProductServices from '../product-services';

class Maquila extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideFormContact: true,
      hasSelected: false,
      showMouldingOption: '',
      itemSelected: [],
      dosing: [{ description: 'CHIPS 0,125G', img: 'chips.png', selected: false },
      { description: 'DROPS 0,125g', img: 'drops-black.png', selected: false },
      { description: 'DROPS 0,5G', img: 'drops-white.png', selected: false },
      { description: 'DROPS 6g', img: 'drops-mixed.png', selected: false },
      { description: 'CHUNKS 1 to 10 cm', img: 'chunks.png', selected: false }],
      panning: [{ description: 'CACAO NIBS', img: 'cacao-nibs.jpg' }, { description: 'NIBS CLUSTERS', img: 'nibs-cluster.png' }, { description: 'QUINOA', img: 'quinoa.png' }, { description: 'GOLDEN BERRIES', img: 'golden-berries.png' }, { description: 'ESPRESSO BEANS', img: 'chocolate-ingredients/maracas/chocolate-covered-espresso-beans.jpg' }, { description: 'INSTANT COFFEE', img: 'chocolate-ingredients/maracas/chocolate-covered-instant-coffee.jpg' }],
      moulding: [{ description: 'BARS', img: 'moulding-bars.png' }, { description: 'SHAPES', img: 'moulding-shapes.png' }],
      mouldingBars: [{ description: 'LUKER MINIBARS 6G', img: 'moulding-minibars.png', selected: false },
      { description: 'SINGLE BAR 12G', img: 'moulding-single-bar.png', selected: false },
      { description: 'BOLD STICK 25G', img: 'moulding-bold-stick.png', selected: false },
      { description: 'BAR 50G', img: 'moulding-bar50.png', selected: false },
      { description: 'BAR 80G', img: 'moulding-bar80.png', selected: false },
      { description: 'BAR 100G', img: 'moulding-bar80.png', selected: false }
      ],
      mouldingShapes: [{ description: 'HEARTS 4G', img: 'moulding-heart.png', selected: false },
      { description: 'STICK 8G', img: 'moulding-stick.png', selected: false },
      { description: 'SEMICIRCLE 4G', img: 'moulding-semicircle.png', selected: false },
      { description: 'EGG 3G', img: 'moulding-egg.png', selected: false }
      ]
    };
    this.handleSetProductSelected = this.handleSetProductSelected.bind(this);
    this.handleShowFormContact = this.handleShowFormContact.bind(this)
  }

  selectProduct(product) {
    console.log(product);
    this.clearProducts();
    this.setState({ itemSelected: [] });

    if (product.description === 'BARS' || product.description === 'SHAPES') {
      this.setState({ hasSelected: true });
      this.setState(({ showMouldingOption: product.description.toLowerCase() }), () => { console.log('entro', this.state.showMouldingOption) });
    } else {
      if (this.state.itemSelected.length === 0) {
        this.setState({ hasSelected: true });
        this.setState({ showMouldingOption: '' });
        product.selected = !product.selected;
        this.setState(({
          itemSelected: [product]
        }), () => {
          console.log(this.state.itemSelected);
        })
      } else {
        this.setState({ showMouldingOption: '' });
        product.selected = false;
        this.setState({ itemSelected: [] });
      }
    }
  };

  addProduct(product) {
    this.setState({ hasSelected: !this.state.hasSelected });
    this.setState({ showMouldingOption: '' });
    //this.clearProducts();
    this.setState(({
      itemSelected: this.state.itemSelected.concat(product)
    }), () => {
      console.log(this.state.itemSelected);
    })
    this.handleShowFormContact(true);
  };

  clearProducts() {
    if (this.props.product.name === 'Dosing') {
      for (const i in this.state.dosing) {
        this.state.dosing[i].selected = false;
      }
    }
    if (this.props.product.name === 'Panning') {
      for (const i in this.state.panning) {
        this.state.panning[i].selected = false;
      }
    }
    if (this.props.product.name === 'Moulding') {
      for (const i in this.state.moulding) {
        this.state.moulding[i].selected = false;
      }
      for (const i in this.state.mouldingBars) {
        this.state.mouldingBars[i].selected = false;
      }
      for (const i in this.state.mouldingShapes) {
        this.state.mouldingShapes[i].selected = false;
      }
    }
  }


  handleSetProductSelected(value) {
    this.setState({ hasSelected: false });
    this.setState({ showMouldingOption: '' });
    this.clearProducts();
    this.setState({ itemSelected: [] });
  }

  handleShowFormContact(action) {
    this.setState({ hideFormContact: !action })
  }

  render() {

    const altImg = 'img-example.svg';
    const { product } = this.props;
    const { hideFormContact, itemSelected, dosing, panning, moulding, hasSelected, mouldingShapes, mouldingBars, showMouldingOption } = this.state;

    return (
      <div className={`maquila-component ${hideFormContact && 'maquila-component--hide-form'} `} >
        <div className="maquila-component-container">
          <h1 className="maquila-component-title-resp">BRANDED CHOCOLATE PRODUCTS</h1>
          <h2 className="maquila-component-title-h2">Chocolate {product.name}</h2>
          <div className="maquila-component--product-data ">
            <div className={`maquila-item maquila-item--${product.id}`}>
              <img src={require('../../../assets/img/' + (product.img ? product.img : altImg))} alt='jaja' />
            </div>
            <p>{product.description}</p>
          </div>
          <h2 className="maquila-component-title">Customizable with your logo and branding</h2>
          {hasSelected ?
            showMouldingOption ?
              <div className={`maquila-product`}>
                {showMouldingOption === 'bars' ?
                  Object.keys(mouldingBars).map((i) =>
                    <div key={i} className={`maquila-product-item maquila-product-item--${mouldingBars[i].selected && 'active'}`} onClick={() => this.selectProduct(mouldingBars[i])}>
                      <img src={require('../../../assets/img/' + mouldingBars[i].img)} alt={mouldingBars[i].description} />
                      {mouldingBars[i].description}
                    </div>) :
                  Object.keys(mouldingShapes).map((i) =>
                    <div key={i} className={`maquila-product-item maquila-product-item--${mouldingShapes[i].selected && 'active'}`} onClick={() => this.selectProduct(mouldingShapes[i])}>
                      <img src={require('../../../assets/img/' + mouldingShapes[i].img)} alt={mouldingShapes[i].description} />
                      {mouldingShapes[i].description}
                    </div>)}
              </div> :
              <div className={`maquila-product maquila-product-dmw`}>
                {['Dark', 'MILK', 'White'].map((item, i) =>
                  <div key={i} className={`maquila-product-item maquila-product-item-dmw`} onClick={() => this.addProduct(item)}>
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
              {product.name === 'Panning' && Object.keys(panning).map((i) =>
                <div key={i} className="maquila-product-item" onClick={() => this.selectProduct(panning[i])}>
                  <img src={require('../../../assets/img/' + (panning[i].img ? panning[i].img : altImg))} alt={panning[i].id} />
                  {panning[i].description}
                </div>)}
              {product.name === 'Moulding' && Object.keys(moulding).map((i) =>
                <div key={i} className="maquila-product-item" onClick={() => this.selectProduct(moulding[i])}>
                  <img src={require('../../../assets/img/' + (moulding[i].img ? moulding[i].img : altImg))} alt={moulding[i].id} />
                  {moulding[i].description}    </div>)}
            </div>}
        </div>
        <div className="btn-back-sticky">
          <Link to="/products-services/finished-chocolate-products">BACK TO PRODUCTS</Link>
        </div>
        <ContactSide page='maquila' products={itemSelected} handleSetProductSelected={this.handleSetProductSelected} handleShowFormContact={this.handleShowFormContact} />
      </div >
    );
  }
};


export default Maquila;