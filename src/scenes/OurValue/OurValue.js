import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import cacao1 from '../../assets/img/roto-b.png'
import cacao2 from '../../assets/img/roto-c.png'
import cacao3 from '../../assets/img/roto-a.png'

import { Link } from 'react-router-dom';

class OurValue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectTab: this.props.match.params.id,
    };
  }

  render() {
    const { selectTab } = this.state;

    return (
      <div className="our-value-component">
        <div className="our-value-header">
          <div className="btn-dist">
            <img src={logo} className="logo" alt="Logo Luker" />
            <Link to="/value-propose">BACK TO VALUES</Link>
          </div>
        </div>
        <div className="our-value-navbar"></div>
        <div className="our-value-content">
          <h1> {selectTab}</h1>
        </div>
      </div>
    );
  }
};


export default OurValue;