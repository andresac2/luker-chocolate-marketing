import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import cacao1 from '../../assets/img/roto-b.png'
import cacao2 from '../../assets/img/roto-c.png'
import { MdClose } from 'react-icons/md';
import { Select } from 'antd';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distModalVisible: false
    };
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
          <img src={logo} className="logo" alt="Logo Luker" />
          <Select defaultValue="es" >
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
            <p>We are a family company with over 110 years of tradition built on a dream, where chocolate is the source of inspiration and the opportunity to transform communities. We provide unique chocolate as an ingredient for other food companies and we manufacture finished products for other brands</p>
          </div>
          <div className="dist">
            <div className="dist-text">
              <h2>CREA TU PROPIO CHOCOLATE</h2>
              <button onClick={() => this.showModalDist()}> DISTRIBUIDORES </button>
            </div>
          </div>
          <div className="cacao-link">
            <img src={cacao1} className="cacao-link-1" alt="Logo Luker" />
            <img src={cacao2} className="cacao-link-2" alt="Logo Luker" />
          </div>
        </div>
        <button className="btn-dist-respo" onClick={() => this.showModalDist()}> DISTRIBUIDORES </button>

        <div className={`modal-dist modal-dist-${distModalVisible && 'visible'}`}>
          <div className="modal-dist-bkg" onClick={() => this.showModalDist()}></div>
          <div className="modal-dist-modal">
            <MdClose className="btn-x" onClick={() => this.showModalDist()} />
            <div className="modal-dist-modal-dist">
              <div className="modal-dist-modal-dist-header">
                <h2>Distributors</h2>
                <Select size='small' defaultValue="ca" style={{ width: 150 }} >
                  <Option value="ca">Canadá</Option>
                  <Option value="uk">Inglaterra</Option>
                  <Option value="co">Colombia</Option>
                </Select>
              </div>
              <div className="modal-dist-modal-dist-cards">
                <div className={`modal-dist-modal-dist-cards-card modal-dist-modal-dist-cards-card--active`}>
                  <h2>CHOCOLATE ALIMENTS</h2>
                  <p><span>Address:</span> Vancouver, Columbia Británica</p>
                  <p><span>Phone:</span> 778 895 6549</p>
                  <p><span>Web:</span> http://chocolatealiments.com/</p>
                  <p><span>E-mail:</span> @chocolatealiments.ca</p>
                </div>
                <div className={`modal-dist-modal-dist-cards-card`}>
                  <h2>Distributors</h2>
                  <p><span>Address:</span> Vancouver, Columbia Británica</p>
                  <p><span>Phone:</span> 778 895 6549</p>
                  <p><span>Web:</span> http://chocolatealiments.com/</p>
                  <p><span>E-mail:</span> @chocolatealiments.ca</p>
                </div>
              </div>
            </div>
            <div className="modal-dist-modal-map">
              <img src={require('../../assets/img/map-dist.png')} alt='map distirbuidores' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
