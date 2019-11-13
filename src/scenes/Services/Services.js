
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
import Maquila from '../../components/services/maquila/maquila';
import Ingredients from '../../components/services/ingredients/ingredients';

class Services extends React.Component {

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

    return (
      <div className="services-component">
        <div className={`services-header services-header--${selectTab}`}>
          <div className="btn-dist">
            <img src={logo} className="logo" alt="Logo Luker" />
            <Link to="/solution">DISTRIBUTORS</Link>
            <Link to="/solution">BACK TO SERVICES</Link>
          </div>
          <h1>{selectTab}</h1>
        </div>
        <div className="services-content">
          {selectTab === 'maquila' && <Maquila />}
          {selectTab === 'ingredients' && <Ingredients />}
        </div>
      </div>
    );
  }
};


export default Services;