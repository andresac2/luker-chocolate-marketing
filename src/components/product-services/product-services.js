import React from 'react'
import altImg from '../../assets/img/img-example.svg'
import back from '../../assets/img/back.svg'
import { Link } from 'react-router-dom';
import Maquila from './maquila/maquila';
import { IoIosClose } from "react-icons/io";


class ProductServices extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: '2'
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
    const { selectedProduct } = this.state;
    const { items, title } = this.props;

    return (
      <div className="product-services-component" >
        {!selectedProduct && <><h2 className="product-services-component-title"> {title}</h2>
          <div className="product-carrousel">
            <img className="btn-next-img" src={back} alt='left' onClick={() => this.reorderItems(items, 2, 0)} />
            {
              Object.keys(items).map(i =>
                <div key={i} className={`carr-item carr-item--${i == 1 && 'active'} carr-item--${items[i].id}`}>
                  <img src={require('../../assets/img/' + (items[i].img ? items[i].img : altImg))} alt='jaja' />
                  <h2>{items[i].name}</h2>
                </div>
              )
            }
            <img className="btn-next-img btn-next-img--right " src={back} alt='right' onClick={() => this.reorderItems(items, 0, 2)} />
          </div>
          <button className="btn-tobuy" onClick={() => this.selectProduct(1)} >FIND OUT MORE</button>
          <div className={`product-services-component--footer product-services-component--footer--${items[1].id}`}>
            {items[1].description}
          </div></>}
        {selectedProduct &&
          <div className="product-services-component--product">
            <IoIosClose className="btn-close" onClick={() => this.selectProduct('')} />
            <Maquila product={items[1]} />
          </div>}
      </div >
    );
  }
};


export default ProductServices;