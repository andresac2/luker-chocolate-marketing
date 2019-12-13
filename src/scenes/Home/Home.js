import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import cacao1 from '../../assets/img/roto-b.png'
import cacao2 from '../../assets/img/roto-c.png'
import { MdClose } from 'react-icons/md';
import { Select } from 'antd';
import { Link } from 'react-router-dom';
import Modals from '../../components/modals/modals';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distModalVisible: false
    };
    this.showModalDist = this.showModalDist.bind(this)
  }

  searchToggle() {
    this.setState({ searchOpen: !this.state.searchOpen });
  }

  showModalDist = () => {
    this.setState({
      distModalVisible: !this.state.distModalVisible,
    });
  };

  render() {
    const { distModalVisible } = this.state;
    const { Option } = Select;

    return (
      <div className="home">
        <div className="home-logo">
          <Link to="/" className="logo"> <img src={logo} alt="Logo Luker" /></Link>
          <Select defaultValue="en"  >
            <Option value="es">ES</Option>
            <Option value="en">EN</Option>
          </Select>
        </div>
        <div className="home-content">
          <div className="intro">
            <div className="intro-title">
              <h1>113 YEARS</h1>
              <h2>OF TRADITION</h2>
            </div>
            <p>We are a family company with over 110 years of tradition built on a dream, where chocolate is the source of inspiration and the opportunity to transform communities. We provide unique chocolate as an ingredient for other food companies and we manufacture finished products for other brands.</p>
          </div>
          <div className="dist">
            <div className="dist-text">
              <h2>CREATE YOUR OWN CHOCOLATE</h2>
              <button onClick={() => this.showModalDist()}>FIND A DISTRIBUTOR</button>
            </div>
          </div>
        </div>
        <div className="cacao-link">
          <div className="cacao-link-content">
            <Link to="/" onClick={() => console.log('aroma')}>
              <img src={cacao1} className="cacao-link-1" alt="Logo Luker" />
              <img src={cacao2} className="cacao-link-2" alt="Logo Luker" />
            </Link>
          </div>
        </div>
        <Modals visible={distModalVisible} modal={'distributors'} showModalDist={this.showModalDist} />
      </div>
    );
  }
}

export default Home;
