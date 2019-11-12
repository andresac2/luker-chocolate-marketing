import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import item1 from '../../assets/img/cacao2.png'
import item2 from '../../assets/img/cacao1.png'
import item3 from '../../assets/img/pote3.png'
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
            <img src={logo} className="logo" alt="Logo Luker" />
            <Link to="/value-propose">BACK TO VALUES</Link>
          </div>
          <h1>OUR VALUE PROPOSITION</h1>
        </div>
        <div className="our-value-navbar">
          <Link to="/our-value/aroma" onClick={() => this.tabToggle('aroma')} className={`our-value-navbar--${selectTab === 'aroma' && 'active'}`} ><img src={item1} alt="aroma" /></Link>
          <Link to="/our-value/flavour" onClick={() => this.tabToggle('flavour')} className={`our-value-navbar--${selectTab === 'flavour' && 'active'}`} ><img src={item2} alt="flavour" /></Link>
          <Link to="/our-value/product" onClick={() => this.tabToggle('product')} className={`our-value-navbar--${selectTab === 'product' && 'active'}`} ><img src={item3} alt="product" /></Link>
          <Link to="/our-value/social" onClick={() => this.tabToggle('social')} className={`our-value-navbar--${selectTab === 'social' && 'active'}`} ><img src={item4} alt="social" /></Link>
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