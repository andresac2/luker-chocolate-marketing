import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import item1 from '../../assets/img/unique-flavour.png'
import item2 from '../../assets/img/consistency-flavour.png'
import item3 from '../../assets/img/integrated-packaging.png'
import item4 from '../../assets/img/grano4.png'

import { Link } from 'react-router-dom';
import OurAroma from '../../components/our-value/aroma/our-aroma';
import OurFlavour from '../../components/our-value/flavour/our-flavour';
import OurProduct from '../../components/our-value/product/our-product';
import OurSocial from '../../components/our-value/social/our-social';

class OurValue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectTab: this.props.match.params.id,
    };
  }
  tabToggle(tab) {
    this.setState({ selectTab: tab });
  }

  render() {
    const { selectTab } = this.state;

    return (
      <div className="our-value-component">
        <div className={`our-value-header our-value-header--${selectTab}`}>
          <div className="btn-dist">
            <Link to="/" className="logo"> <img src={logo} alt="Logo Luker" /></Link>
            <Link to="/value-proposition">BACK TO VALUES</Link>
          </div>
          <h1>OUR VALUE PROPOSITION</h1>
        </div>
        <div className="our-value-navbar">
          <Link to="/our-value/aroma" onClick={() => this.tabToggle('aroma')} className={`our-value-navbar-item our-value-navbar--${selectTab === 'aroma' && 'active'}`} >
            <img src={item1} alt="aroma" />
            <div className="our-value-navbar-card">
              <p>DIFFERENTIATE YOUR PRODUCT WITH A UNIQUE FLAVOUR</p>
            </div>
          </Link>
          <Link to="/our-value/flavour" onClick={() => this.tabToggle('flavour')} className={`our-value-navbar-item our-value-navbar--${selectTab === 'flavour' && 'active'}`} >
            <img src={item2} alt="flavour" />
            <div className="our-value-navbar-card">
              <p>KEEP THE CONSISTENCY IN THE FLAVOUR AND GUARANTEE YOUR SUPPLY</p>
            </div>
          </Link>
          <Link to="/our-value/product" onClick={() => this.tabToggle('product')} className={`our-value-navbar-item our-value-navbar--${selectTab === 'product' && 'active'}`} >
            <img src={item3} alt="product" />
            <div className="our-value-navbar-card">
              <p>INTEGRATED SOLUTIONS FOR DESIGN, PRODUCTS, AND PACKAGING</p>
            </div>
          </Link>
          <Link to="/our-value/social" onClick={() => this.tabToggle('social')} className={`our-value-navbar-item our-value-navbar--${selectTab === 'social' && 'active'}`} >
            <img src={item4} alt="social" />
            <div className="our-value-navbar-card">
              <p>CONNECT YOUR BRAND AROUND SUSTAINABILITY</p>
            </div>
          </Link>
        </div>
        <div className="our-value-content">
          {selectTab === 'aroma' && <OurAroma />}
          {selectTab === 'flavour' && <OurFlavour />}
          {selectTab === 'product' && <OurProduct />}
          {selectTab === 'social' && <OurSocial />}
        </div>
      </div>
    );
  }
};


export default OurValue;