
import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'

import { Link } from 'react-router-dom';
import Maquila from '../../components/product-services/maquila/maquila';
import Footer from '../../components/layout/footer/footer';
import ProductServices from '../../components/product-services/product-services';

class ProductsServices extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectTab: this.props.match.params.title,
    };
  }
  tabToggle(tab) {
    this.setState({ selectTab: tab });
  }

  render() {
    const { selectTab } = this.state;
    const products = [
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
    return (
      <div className="services-component">
        <div className={`services-header services-header--${selectTab}`}>
          <div className="btn-dist">
            <img src={logo} className="logo" alt="Logo Luker" />
            <Link to="/solution">DISTRIBUTORS</Link>
            <Link to="/solution">BACK TO SERVICES</Link>
          </div>
          <h1>{(selectTab === 'maquila') ? 'FINISHED CHOCOLATE PRODUCTS' : (selectTab === 'ingredients') ? 'CHOCOLATE INGREDIENTS' : 'OUR SERVICES'}</h1>
        </div>
        <div className="services-content">
          {(selectTab === 'our-services') ? <Maquila /> : <ProductServices items={products, 'lala'} />}
        </div>
        <Footer />
      </div>
    );
  }
};


export default ProductsServices;