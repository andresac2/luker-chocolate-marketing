import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import cacao1 from '../../assets/img/roto-b.png'
import cacao2 from '../../assets/img/roto-c.png'
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';

import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Modals from '../../components/modals/modals';
import HelmetComponent from '../../commons/helmet/helmet';
import SelectLanguage from '../../commons/select-lng/select-lng';

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
  _handleChange(lng) {
    console.log("language", lng)
    i18n.changeLanguage(lng);
  }

  render() {
    const { distModalVisible } = this.state;
    const { t } = this.props;

    return (
      <div className="home">
        <HelmetComponent title="Luker Chocolate | Cacao Fino de Aroma" />
        <div className="home-logo">
          <Link to="/" className="logo"> <img src={logo} alt="Logo Luker" /></Link>
          <SelectLanguage />
        </div>
        <div className="home-content">
          <div className="intro">
            <div className="intro-title">
              <h1>{t('home.home-years')}</h1>
              <h2>{t('home.home-tradition')}</h2>
            </div>
            <p>{t('home.home-description')}</p>
          </div>
          <div className="dist">
            <div className="dist-text">
              <h2>{t('home.create-own-chocolate')}</h2>
              <button onClick={() => this.showModalDist()}>{t('buttons.find-distributor')}</button>
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

export default withNamespaces()(Home);
