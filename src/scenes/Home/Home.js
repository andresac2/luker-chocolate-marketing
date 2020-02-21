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
  async UpdateData() {
    const response = await fetch(window.location.href + '/upgradation');
    return await response.json();
  }
  componentDidMount() {
    this.UpdateData();
  }

  render() {
    const { distModalVisible } = this.state;
    const { t } = this.props;
    const logoUtz = t('home.logo-utz') !== false ? t('home.logo-utz') : "https://www.back.lukerchocolate.com/wp-content/uploads/2020/01/UTZ.png";
    const logoSedex = t('home.logo-sedex') !== false ? t('home.logo-sedex') : "https://www.back.lukerchocolate.com/wp-content/uploads/2020/01/Sedex-Member.png";
    const logoGmo = t('home.logo-gmo') !== false ? t('home.logo-gmo') : "https://www.back.lukerchocolate.com/wp-content/uploads/2020/01/Non-GMO.png";
    const logoKosher = t('home.logo-kosher') !== false ? t('home.logo-kosher') : "https://www.back.lukerchocolate.com/wp-content/uploads/2020/01/OU-Kosher.png";

    return (
      <div className="home">
        <HelmetComponent title={t('home.titulo_seo')} keywords={t('home.keywords')} titleOg={t('home.titulo_protocolo_opengraph')} description={t('home.meta_descripcion')} descriptionOg={t('home.descripcion_opengraph')} cover={t('home.imagen_open_graph.url')} />
        <div className="home-logo">
          <Link to="/" className="logo"> <img src="/static/media/Lukerlogo.af6f7609.svg" alt="Logo Luker" /></Link>
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
        <div className="home-logos">
          <img src={logoUtz} alt="Logo utz" />
          <img src={logoSedex} alt="Logo sedex" />
          <img src={logoGmo} alt="Logo gmo" />
          <img src={logoKosher} alt="Logo kosher" />
        </div>
        <Modals visible={distModalVisible} modal={'distributors'} showModalDist={this.showModalDist} />
      </div>
    );
  }
}

export default withNamespaces()(Home);
