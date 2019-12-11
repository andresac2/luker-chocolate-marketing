import React from 'react';
import { FiChevronUp } from 'react-icons/fi'
import { withRouter, Link } from 'react-router-dom';
import { Select } from 'antd';
import { MdClose } from 'react-icons/md';
import Footer from '../footer/footer';

class FooterCover extends React.Component {
  hideView = ['/services', '/blog', '/contact-us'];//VIstas en las que se oculta el footer
  darkIcon = ['/services', '/blog'];//VIstas en las que se muestra modo oscuro

  constructor(props) {
    super(props);
    this.state = {
      distModalVisible: false,
      moreInfoVisible: false,
      actualDist: [],
      distValue: 'co',
      isOpen: false
    };
    this.handleShowMoreInfo = this.handleShowMoreInfo.bind(this);
  }

  distributors = [
    {
      country: 'ar',
      company: 'TRADING ARGENTINA SRL',
      address: 'Espronceda 632, B1712JUC Castelar, Buenos Aires, Argentina',
      phone: '+54 (11) 4661- 6533',
      fax: '+54 (11) 4664- 6581',
      web: 'www.tradar.com.ar',
      email: 'gabriel@tradar.ar',
      urlMap: 'https://goo.gl/maps/QKNeKVfP2VpWbGfi6',
      selected: false
    },
    {
      country: 'au',
      company: 'CAMPANIA ALIMENTARI',
      address: '25-31 Industrial Avenue, Thomastown VIC 3074, Australia',
      phone: '+61 3 9359 2799',
      fax: '+61 3 9359 0990',
      web: 'www.campania.com.au',
      email: 'paul@campania.com.au',
      urlMap: 'https://goo.gl/maps/VTAohNeTgHxkMiM57',
      selected: false
    },
    {
      country: 'bh',
      company: 'THE BAKING PRODUCT W.L.L',
      address: 'Building 450, Road 1109 Tubli, Baréin',
      phone: '00 973 17 77 3388',
      fax: '00 973 17 93 1313',
      web: 'http://thebakingproduct.com/',
      email: 'info@thebakingproduct.com',
      urlMap: 'https://goo.gl/maps/Di88Zjn77UYZhH9Z9',
      selected: false
    },
    {
      country: 'be',
      company: 'LUKER CHOCOLATE EUROPA',
      address: ' Kortrijkse Steenweg 1132, 9051 Gent, Bélgica',
      phone: '+32 (0) 9 245 04 60',
      fax: '+32 (0) 9 245 04 62',
      web: 'www.cacaofinodearoma.com',
      email: 'casalukereu@casaluker.com.co',
      urlMap: 'https://goo.gl/maps/G6WJ2BGt7FPQCpzK9',
      selected: false
    },
    {
      country: 'br',
      company: 'EMULZINT – LINHA ORQUESTRA',
      address: 'Av. Arquimedes, 50 - Distrito Industrial - Jundiaí',
      phone: '(11) 2152-6878',
      fax: '',
      web: 'www.emulzint.com.br',
      email: 'mailto:Bruna.Rogerio@emulzint.com.br',
      urlMap: 'https://goo.gl/maps/PbEq4AJM2vcm5DAQ6',
      selected: false
    },
    {
      country: 'ca',
      company: 'CHOCOLATE ALIMENTS',
      address: 'Vancouver, Columbia Británica, Canadá',
      phone: '778 895 6549',
      fax: '',
      web: 'http://chocolatealiments.com/',
      email: 'mailto:terry@chocolatealiments.ca',
      urlMap: 'https://goo.gl/maps/fcya8xTqngcRYLmEA',
      selected: false
    },
    {
      country: 'ca',
      company: 'CHOCOLAT CENTRAL',
      address: 'Quebec, Canadá',
      phone: '1-877-745-199 - 514-745-7199',
      fax: '514-745-8731',
      web: '',
      email: ' administration@chococentral.com - commande.order@chococentral.com',
      urlMap: 'https://goo.gl/maps/rgUmh1ztaKGa4Q2B8',
      selected: false
    },
    {
      country: 'cl',
      company: 'INDUSTRIAS NEUCHANTEL S.A.',
      address: 'Viña del Mar, Chile',
      phone: '+56997993731',
      fax: '',
      web: 'www.neucober.cl',
      email: 'josegil@neucober.cl, alonsogil@neucober.cl',
      urlMap: 'https://goo.gl/maps/cBXMAF8VnhcoJxN78',
      selected: false
    },
    {
      country: 'col',
      company: 'CASALUKER S.A.',
      address: 'CasaLuker S.A., Calle 13, Bogotá, Colombia',
      phone: '+57 (1) 4473700',
      fax: '',
      web: 'casaluker.com.co',
      email: 'lukercacao@casaluker.com.co - servicioalcliente@casaluker.com.co',
      urlMap: 'https://goo.gl/maps/o4sqALU4BCnF6uS19',
      selected: true
    },
    {
      country: 'cz',
      company: 'LYRA CHOCOLATE – SWEETPRO S.R.O.',
      address: 'Kalvária 3, 949 01 NITRA',
      phone: '00421 903 964 544',
      fax: '',
      web: 'www.lyrachocolate.com',
      email: 'info@lyrachocolate.com',
      urlMap: 'https://goo.gl/maps/DNLiSpEdaDSDgh21A',
      selected: false
    },
    {
      country: 'fr',
      company: 'JK SOURCING SARL',
      address: '13 Route de Trouville, 14000 Caen, Francia',
      phone: '+33 9 5233 0682 / +33 2 3183 5934',
      fax: '+33 9 57 33 06 82',
      web: 'www.chocolatemall.net',
      email: 'contact@chocolatemall.net',
      urlMap: 'https://goo.gl/maps/iQ7MWLPQde6AKyvDA',
      selected: false
    },
    {
      country: 'de',
      company: 'DILLICIOUS',
      address: 'Burbacher Straße 79, 53129 Bonn, Alemania',
      phone: '+49 (0) 228 / 92 96 01 66',
      fax: '',
      web: 'www.dillicious.eu',
      email: 'info@dillicious.eu',
      urlMap: 'https://goo.gl/maps/5NWNLnSWkmTFcZkV9',
      selected: false
    },
    {
      country: 'gr',
      company: 'OPTIMA S.A.',
      address: 'Sorou 1 Metamorfosi 144 52 Grecia',
      phone: '(+30)210 2893400',
      fax: '(+30)210 2845937',
      web: 'www.optima.gr',
      email: 'marketing@optima.gr',
      urlMap: 'https://goo.gl/maps/LURMgFa7Tvg7oiDH8',
      selected: false
    },
    {
      country: 'gt',
      company: 'CHOCOLÁ S.A.',
      address: 'Ruta 1 5-13, Zona 4, Guatemala',
      phone: '+ 502 2360-3007',
      fax: '',
      web: 'www.chocola.com.gt',
      email: 'martins@chocola.com.gt',
      urlMap: 'https://goo.gl/maps/H4zwuc6JKNfttrX39',
      selected: false
    },
    {
      country: 'hu',
      company: 'INTERFOOD & PHARMA KFT',
      address: 'Budapest, Hűvösvölgyi út 54, 1021 Hungría',
      phone: '0036-1-200-5717',
      fax: '',
      web: 'www.herbalfoods.hu',
      email: 'apcinterfood@apcinterfood.hu',
      urlMap: 'https://goo.gl/maps/PFLNKXBx6EzXcnaW6',
      selected: false
    },
    {
      country: 'it',
      company: 'NEWCHEM S.R.L.',
      address: 'Via M. F. Quintiliano, 30, Igea Marina, Rímini, Italia',
      phone: ' +39 025061987',
      fax: '+39 0255400495',
      web: 'www.newchem.it',
      email: 'info@newchem.it',
      urlMap: 'https://goo.gl/maps/XzYhYhwCz5a7u3wx8',
      selected: false
    },
    {
      country: 'jp',
      company: 'FINO DE AROMA, CO., LTD.',
      address: 'Grandmaison 101 2-22-5 Hongo, Bunkyo-ku',
      phone: '',
      fax: '',
      web: 'www.finodearoma.co.jp',
      email: 'negami@finodearoma.co.jp',
      urlMap: 'https://goo.gl/maps/cWomoH5wnHjVqPP28',
      selected: false
    },
    {
      country: 'lu',
      company: 'DELGIRO BVBA',
      address: 'Luxembourg, Luxemburgo',
      phone: '+32 (0) 475 62 0100',
      fax: '',
      web: 'www.delgiro.be',
      email: 'info@delgiro.be',
      urlMap: 'https://goo.gl/maps/ccjveaS8TLkuMy3z9',
      selected: false
    },
    {
      country: 'me',
      company: 'PASCAL CLAIR',
      address: 'European Business Center - Green Community Village - Dubái - Emiratos Árabes Unidos',
      phone: '+971 04 813 5899',
      fax: '+971 04 813 5898',
      web: 'www.pascalclair.com',
      email: 'pascal@pascalclair.com',
      urlMap: 'https://goo.gl/maps/BTxU5bKbs1byhY746',
      selected: false
    },
    {
      country: 'nl',
      company: 'DELGIRO BVBA',
      address: 'Netherlands',
      phone: '+32 (0) 475 62 0100',
      fax: '',
      web: 'www.delgiro.be',
      email: 'info@delgiro.be',
      urlMap: 'https://goo.gl/maps/7d1brsahpFoVM1hb9',
      selected: false
    },
    {
      country: 'ro',
      company: 'DUPONT EXIM SRL',
      address: 'Str.Drumul Gilâului nr.7 Sector 4',
      phone: ' 031 438 2967/073 128 0165',
      fax: '',
      web: 'www.dupont-ingredient.ro',
      email: 'comenzi@dupont-ingredient.ro',
      urlMap: 'https://goo.gl/maps/GA9kBQeEsBhePBTL9',
      selected: false
    },
    {
      country: 'ru',
      company: 'ASCOL',
      address: 'Elektrozavodskaya Street 20, Str. 1, of. 203',
      phone: '+7 (495) 780 6735',
      fax: '+7 (495) 780 6734',
      web: 'www.ascol.ru',
      email: 'es@ascol.ru',
      urlMap: 'https://goo.gl/maps/yD9QMYUK2LKKqMxp6',
      selected: false
    },
    {
      country: 'sk',
      company: 'LYRA CHOCOLATE – SWEETPRO S.R.O.',
      address: 'Konecna2, 95112 Ivanka pri',
      phone: '00421 903 964 544',
      fax: '',
      web: 'www.lyrachocolate.com',
      email: 'info@lyrachocolate.com',
      urlMap: 'https://goo.gl/maps/3GpBTrWbpreHtRiw6',
      selected: false
    },
    {
      country: 'tw',
      company: 'ANDY CONCEPT CO., LTD',
      address: 'Unit 8, Floor 15, No.99, Sec 1, Xintai 5th Rd., Xizhi Dist., New Taipei City 22175 TAIWAN,R.O.C',
      phone: '+886-2-26972626',
      fax: '+886-2-26972709',
      web: 'http://andyconcept.com.tw/',
      email: 'andy.concept@outlook.com',
      urlMap: 'https://goo.gl/maps/pRvuZ7aBwEWxGyoC9',
      selected: false
    },
    {
      country: 'ua',
      company: 'MAGNUM SP',
      address: 'Str. Kuibyshev 9, 1st floor, office 7',
      phone: '+38067579-17-73, +38067575-30-82',
      fax: '',
      web: 'magnum-sp.com.ua',
      email: 'magnum-nm@ukr.net',
      urlMap: 'https://goo.gl/maps/Qqs1Et7EspuJJSSw8',
      selected: false
    },
    {
      country: 'uk',
      company: 'MSK SPECIALIST INGREDIENTS',
      address: 'Office Suite A Sheepbridge Business Park, Sheepbridge Lane',
      phone: '44 0 124 6 41 221',
      fax: '',
      web: 'msk-ingredients.com',
      email: 'deborah.prynne@msk-ingredients.com',
      urlMap: 'https://goo.gl/maps/8HjttbgyivDt542E8',
      selected: false
    },
    {
      country: 'uk',
      company: 'HB INGREDIENTS',
      address: 'Cocoa House, 15 The cliffe Industrial Estate, Lewes, East Sussex, BN8 6JL, UK',
      phone: '44 0 845 8800799',
      fax: '',
      web: 'www.hbingredients.co.uk',
      email: 'sales@hbingredients.co.uk',
      urlMap: 'https://goo.gl/maps/wasitYrZHyVzKgb17',
      selected: false
    },
    {
      country: 'uk',
      company: 'KEYLINK',
      address: '99 Green Lane, Sheffield, Reino Unido',
      phone: '+44 (0) 114 245 5400',
      fax: '',
      web: 'www.keylink.org',
      email: 'julie@keylink.org',
      urlMap: 'https://goo.gl/maps/r1JmszGZQxuyuyHp8',
      selected: false
    },
    {
      country: 'us',
      company: 'IFIGOURMET',
      address: '760 Lakeside Drive, Unit A, Gurnee, IL 60031',
      phone: '847.855.7400',
      fax: '',
      web: 'www.ifigourmet.com',
      email: 'customerservice@ifigourmet.com',
      urlMap: 'https://goo.gl/maps/oyybJLtVVQUJdtUY6',
      selected: false
    }
  ]
  countries = [
    {
      name: 'ARGENTINA',
      abrev: 'ar'
    }, {
      name: 'AUSTRALIA',
      abrev: 'au'
    }, {
      name: 'BAHRAIN',
      abrev: 'bh'
    }, {
      name: 'BELGIUM',
      abrev: 'be'
    }, {
      name: 'BRAZIL',
      abrev: 'br'
    }, {
      name: 'CANADA',
      abrev: 'ca'
    }, {
      name: 'CHILE',
      abrev: 'cl'
    }, {
      name: 'COLOMBIA',
      abrev: 'co'
    }, {
      name: 'CZECH REPUBLIC',
      abrev: 'cz'
    }, {
      name: 'FRANCE',
      abrev: 'fr'
    }, {
      name: 'GERMANY',
      abrev: 'de'
    }, {
      name: 'GREECE',
      abrev: 'gr'
    }, {
      name: 'GUATEMALA',
      abrev: 'gl'
    }, {
      name: 'HUNGARY',
      abrev: 'hu'
    }, {
      name: 'ITALY',
      abrev: 'it'
    }, {
      name: 'JAPAN',
      abrev: 'jp'
    }, {
      name: 'LUXEMBOURG',
      abrev: 'lu'
    }, {
      name: 'MIDDLE EAST',
      abrev: 'me'
    }, {
      name: 'NETHERLANDS',
      abrev: 'nl'
    }, {
      name: 'ROMANIA',
      abrev: 'ro'
    }, {
      name: 'RUSSIA',
      abrev: 'ru'
    }, {
      name: 'SLOVAK REPUBLIK',
      abrev: 'sk'
    }, {
      name: 'TAIWAN',
      abrev: 'tw'
    }, {
      name: 'UKRANIE',
      abrev: 'ua'
    }, {
      name: 'UNITED KINGDOM ',
      abrev: 'uk'
    }, {
      name: 'UNITED STATES',
      abrev: 'us'
    }
  ]

  footerToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
    setTimeout(() => {
      this.setState({ isOpen: false });
    }, 60000)
  }

  showModalDist = () => {
    this.setState({
      distModalVisible: !this.state.distModalVisible,
    });
  };

  handleShowMoreInfo = (e) => {
    e.preventDefault();
    this.setState({
      moreInfoVisible: !this.state.moreInfoVisible,
    });
  };

  handleChange = (value) => {
    console.log(value);

    this.setState({
      distValue: value
    }, () => {
      this.selectDistributorCountry();
    })
  }

  selectDistributorCountry() {
    let arr = this.distributors.filter(e => e.country.includes(this.state.distValue));
    this.setState({ actualDist: arr });
  }

  componentDidMount() {
    this.selectDistributorCountry();
  }
  render() {
    const { history } = this.props;
    const { isOpen, distModalVisible, moreInfoVisible, distValue, actualDist } = this.state;
    const { Option } = Select;
    const selectTab = history.location.pathname;

    const isFooterHidden = this.hideView.some(function (v) { return history.location.pathname.includes(v); });

    return (
      !isFooterHidden &&
      <div>
        <div className={`footer-cover ${isOpen && 'footer-cover-open'}`}>
          <div className="footer-cover-bkg" onClick={this.footerToggle}></div>
          <FiChevronUp onClick={this.footerToggle} />
          <nav className={`footer-cover-nav footer-cover-${selectTab.slice(1)}`}>
            <Link to="/blog"><span>BLOG</span></Link>
            {selectTab !== '/' && <Link to="/"><span>CREATE YOUR OWN CHOCOLATE</span></Link>}
            <Link to='' onClick={e => { this.handleShowMoreInfo(e); this.footerToggle(); }}><span>MORE INFO</span></Link>
            <Link to="/contact-us"><span>CONTACT US</span></Link>
          </nav>
        </div>
        <button className="btn-dist-footer" onClick={() => this.showModalDist()}> FIND A DISTRIBUTOR </button>
        <div className={`modal-dist modal-dist-${distModalVisible && 'visible'}`}>
          <div className="modal-dist-bkg" onClick={() => this.showModalDist()}></div>
          <div className="modal-dist-modal">
            <MdClose className="btn-x" onClick={() => this.showModalDist()} />
            <div className="modal-dist-modal-dist">
              <div className="modal-dist-modal-dist-header">
                <h2>Distributors</h2>
                <Select size='small' defaultValue="co" style={{ width: 150 }} value={distValue} onChange={this.handleChange}>
                  {Object.keys(this.countries).map(i =>
                    <Option value={this.countries[i].abrev} key={i}>{this.countries[i].name}</Option>
                  )}
                </Select>
              </div>
              <div className="modal-dist-modal-dist-cards">
                {Object.keys(actualDist).map(i =>
                  <div key={i} className={`modal-dist-modal-dist-cards-card modal-dist-modal-dist-cards-card--${actualDist[i].selected && 'active'}`}>
                    <h2>{actualDist[i].company}</h2>
                    <p><span>Address: </span>{actualDist[i].address}</p>
                    <p><span>Phone: </span>{actualDist[i].phone}</p>
                    <p><span>Web: </span><a href={actualDist[i].web} target='_blank'>{actualDist[i].web}</a> </p>
                    <p><span>E-mail: </span> {actualDist[i].email}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-dist-modal-map">
              <img src={require('../../../assets/img/map-dist.png')} alt='map distirbuidores' />
            </div>
          </div>
        </div>
        {moreInfoVisible && <Footer mode='vertical' handleShowMoreInfo={this.handleShowMoreInfo} />}
      </div>
    );
  }
};

export default withRouter(FooterCover);
