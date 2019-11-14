
import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'

import { Link } from 'react-router-dom';
import Maquila from '../../components/services/maquila/maquila';
import Ingredients from '../../components/services/ingredients/ingredients';
import Footer from '../../components/layout/footer/footer';

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
          <h1>{(selectTab === 'maquila') ? 'FINISHED CHOCOLATE PRODUCTS' : (selectTab === 'ingredients') ? 'CHOCOLATE INGREDIENTS' : 'OUR SERVICES'}</h1>
        </div>
        <div className="services-content">
          {selectTab === 'maquila' && <Maquila />}
          {selectTab === 'ingredients' && <Ingredients />}
        </div>
        <Footer />
      </div>
    );
  }
};


export default Services;