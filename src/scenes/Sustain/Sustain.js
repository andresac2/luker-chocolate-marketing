import React from 'react';
import panel from '../../assets/img/sustain-panel.png'
import back from '../../assets/img/back.svg'
import { MdClose } from 'react-icons/md';
import { Form, Select, Input, Button, InputNumber } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import Article from '../../components/blog/article/article';
import FloatLogo from '../../components/layout/float-logo/float-logo';

class Sustain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      distModalVisible: false,
      reportModalVisible: false,
      articleModalVisible: false,
      firstItem: 0,
      modalSelectedIndex: 0,
      items: [{
        img: 'costal-luker.png',
        flag: 'us',
        title: 'Jobs',
        badges: ['gender-equality.png', 'decent-work.png'],
        content: 'Thanks to our sustainability efforts, we’ve generated a total of 232 formal jobs in the community with 0% of child labor. We also generated 617 formal jobs in Bogotá and 71% of those positions are filled by millennials, guaranteeing as well 0% of child labor.<p></p>'
      },
      {
        img: 'arauca-river.png',
        flag: 'us',
        title: 'SMALL-SCALE FARMERS',
        badges: ['no-poverty.png', 'decent-work.png', 'reduced-inequalities.png'],
        content: 'We are committed to small-scale farmers, which is why we have established a network of alliances with over 50 cocoa growers associations allowing us to guarantee the purchase of the entire harvest of each association, helping to create the maximum value possible for the farmers and their families. We buy directly from 65 associations and more than 7500 Colombian families. We’ve also trained around 30.000 farmers in Luker Farm and built 10 centralized milling facilities in Tumaco and have 1 currently under construction in Huila. <p></p>'
      },
      {
        img: 'cocoa-tree.png',
        flag: 'us',
        title: 'Community',
        badges: ['no-poverty.png', 'decent-work.png', 'reduced-inequalities.png'],
        content: 'We support our cocoa producers and their communities by implementing wide impact actions that not only improve farmers’ economic situation but also benefit the stability of their families. So far, we’ve intervened 6 schools with the new school model and renovated 280 square meters of them. 600 people have been trained in entrepreneurship with a focus on gender studies and 600 students have been trained in academic and emotional skills.<p></p>Furthermore, 300 young people have been trained in technical programs, 60 adults have been trained in reading and math, and 300 teachers were trained in resilience and socio-emotional skills with 70 international and national volunteers, which led to the construction of 1 social innovation center.'
      },
      {
        img: 'enviromental.png',
        flag: 'us',
        title: 'Enviromental',
        badges: ['responsible-consumption.png', 'climate-action.png'],
        content: 'We know that reforestation attracts new species that can then be protected. That’s why with our environmental transformation strategies we have improved the conservation and care of 7 vulnerable species through the plantation of 600.000 new trees in agroforestry systems. The plantations have brought back species that had disappeared from the area. Whatsmore, we also participate in the 0 deforestation agreement “Cocoa, Forest and Peace initiative” led by the World Cocoa Foundation.<p></p>'
      },
      {
        img: 'cocoa-forest.png',
        flag: 'us',
        title: 'Cocoa forest',
        badges: ['no-poverty.png', 'gender-equality.png', 'decent-work.png', 'reduced-inequalities.png', 'responsible-consumption.png', 'climate-action.png'],
        content: `
        Back in 2011, we decided to implement a new strategy by planting our own crops in order to reach the following goals.
        <p></p>
        <ul>
          <li>Demonstrate that it was possible to have productive and profitable agroforestry plantations with the best varieties of Cacao Fino de Aroma, reforesting the countryside and enabling the return of various species of animals and birds.</li>
          <li>Demonstrate the social and environmental transformational power of a corporate crop when implemented in areas that were traditionally victims of the conflict.</li>
        </ul>
        <p></p>        
        This new approach allowed us to fully integrate the value chain and create better social and environmental wellbeing in the territories in which we were working. 
        This project began in Necoclí, Urabá Antioqueño, with 550 hectares of cocoa in what used to be a livestock farm. In 2017, this model was replicated in Casanare, with 1000 hectares of cacao, in what used to be a palm farm, creating a unique agroforestry system where both species coexist and in 2019, we began a 45-hectare agroforestry system in Huila.
        <p></p>
        The purpose of these projects is to take agricultural and social development to the communities in each of the regions in which we grow our cocoa and to come up with innovative solutions that are supported by our clients and partners. So far, we’ve accomplished to set up a total of 3 business crops with 1600 hectares planted sustainably in 3 regions of the country and we’ve projected a catch of 33,925 tons of Co2 per year in our crops.
        `
      }],
      modalReportItems: [
        {
          id: '1',
          title: 'SUSTAINABILITY REPORT',
          content: 'Find out what we have accomplished by the implementation of several different sustainability strategies in this report.',
          selected: false
        },
        {
          id: '2',
          title: 'SUSTAINABILITY BRIEF',
          content: 'Know the facts, findings, and objectives gathered for our sustainability initiatives.',
          selected: false
        },
        {
          id: '3',
          title: 'CERTIFICATIONS',
          content: 'Check our certifications and discover what our expertise and contributions can do.',
          selected: false
        },
        {
          id: '4',
          title: 'COCOA FOREST & PEACE AGREEMENT',
          content: 'Find out what we have accomplished by the implementation of several different sustainability strategies in this report.',
          selected: false
        }
      ]
    };
  }

  carrAction(fi) {
    if (fi === 'l' && this.state.firstItem !== 0) {
      this.setState({ firstItem: this.state.firstItem - 1 });
    }
    if (fi === 'r' && this.state.firstItem + 1 < this.state.items.length - 1) {
      this.setState({ firstItem: this.state.firstItem + 1 });
    }
    if (!isNaN(fi)) {
      this.setState({ firstItem: fi * 2 });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  showModalDist = () => {
    this.setState({ distModalVisible: !this.state.distModalVisible });
  };

  showModalReport = () => {
    this.setState({ reportModalVisible: !this.state.reportModalVisible });
  };

  showModalArticle = (i) => {
    this.setState({ articleModalVisible: !this.state.articleModalVisible, modalSelectedIndex: i || 0 });
  };

  modalItemToggle(id, selected) {
    console.log(id);
    this.setState({
      modalReportItems: this.state.modalReportItems.map(el => (el.id === id ? { ...el, selected } : el))
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { items, firstItem, distModalVisible, reportModalVisible, articleModalVisible, modalSelectedIndex, modalReportItems } = this.state;
    const { Option } = Select;
    const altImg = 'img-example.svg';

    const distributors = [
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
    const countries = [
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

    return (
      <div className="sustain-component">
        <FloatLogo btnText='dist' />
        <div className="sustain-sidebar">
          <div className="sustain-sidebar--text">
            <h1>SUSTAINABILITY</h1>
            <div className="sustain-sidebar--text-content">
              <p>At Luker Chocolate, we are committed to creating greater wellbeing for all the actors of the value chain, from the cocoa growers right through to our clients.</p>
              <p>We know that we need determination to transform the cocoa growing regions; in Colombia there are 38 thousand cocoa-producing families that were, in the past, victims of the country’s armed conflict and are subject to very low multidimensional poverty indices. As such, we focus our efforts on contributing to change in these regions in order to improve the quality of life of the farmers and their communities.</p>
            </div>
            <button onClick={() => this.showModalReport()}> GET FULL REPORT </button>
          </div>
        </div>
        <div className="sustain-content">
          <div className="sustain-content-model">
            <h1>IMPACT</h1>
            <div className="sustain-content-contain-carr">
              <img className="btn-next-img btn-next-img-left" src={back} alt='left' onClick={() => this.carrAction('l')} />
              <div className="sustain-content-contain-carr--items" >
                {Object.keys(items).map(i =>
                  <div key={i} className={`card-image ${firstItem > i && 'item-action--l'}`} onClick={() => this.showModalArticle(i)}>
                    <img src={require('../../assets/img/' + (items[i].img ? items[i].img : altImg))} alt={items[i].title} />
                    <p>{items[i].title}</p>
                    <div className="card-badges" >
                      {(items[modalSelectedIndex].badges).map((badge, i) =>
                        <div key={i} className={`card-badge`}>
                          <img src={require('../../assets/img/badges/' + badge)} alt={items[modalSelectedIndex].title} />
                        </div>)}
                    </div>
                  </div>)}
              </div>
              <img className="btn-next-img" src={back} alt='left' onClick={() => this.carrAction('r')} />
            </div>
            <div className="sustain-content-contain-carr--dots">
              <span className={`${firstItem < 1 && 'dots-active'}`} onClick={() => this.carrAction(0)} ></span>
              <span className={`${firstItem >= 1 && firstItem < 3 && 'dots-active'}`} onClick={() => this.carrAction(1)} ></span>
              <span className={`${firstItem >= 3 && 'dots-active'}`} onClick={() => this.carrAction(2)} ></span>
            </div>
          </div>
          <div className="sustain-content-model">
            <h1>WE GO BEYOND</h1>
            <div className="sustain-content-model--panel">
              <img src={panel} alt="Panel" />
              <button onClick={() => console.log('hi')}> FIND OUT MORE </button>
            </div>
          </div>
        </div>
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
                {Object.keys(distributors).map(i =>
                  <div className={`modal-dist-modal-dist-cards-card modal-dist-modal-dist-cards-card--active`}>
                    <h2>{distributors[i].company}</h2>
                    <p><span>Address:</span>{distributors[i].address}</p>
                    <p><span>Phone:</span>{distributors[i].phone}</p>
                    <p><span>Web:</span><a href={distributors[i].web} target='_blank'>{distributors[i].web}</a> </p>
                    <p><span>E-mail:</span> {distributors[i].email}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-dist-modal-map">
              <img src={require('../../assets/img/map-dist.png')} alt='map distirbuidores' />
            </div>
          </div>
        </div>
        <div className={`modal-report modal-report-${reportModalVisible && 'visible'}`}>
          <div className="modal-report-bkg" onClick={() => this.showModalReport()}></div>
          <div className="modal-report-modal">
            <MdClose className="btn-x" onClick={() => this.showModalReport()} />
            <div className="modal-report-modal-report">
              <div className="modal-report-modal-report-header">
                <h2>Select the documents you want!</h2>
              </div>
              <div className="modal-report-modal-report-cards">
                {
                  Object.keys(modalReportItems).map(i =>
                    <div key={i} className={`modal-report-modal-report-cards-card modal-report-modal-report-cards-card--${modalReportItems[i].selected && 'active'}`} onClick={() => this.modalItemToggle(modalReportItems[i].id, !modalReportItems[i].selected)}>
                      <h2>{modalReportItems[i].title}</h2>
                      <p>{modalReportItems[i].content}</p>
                    </div>
                  )
                }
              </div>
            </div>
            <div className="modal-report-modal-contact">
              <div className={`contact-component-content`}>
                <h1>GIVE US YOUR DETAILS</h1>
                <Form onSubmit={this.handleSubmit} className="contact-form">
                  <Form.Item>
                    {getFieldDecorator('username', {
                      rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                      <Input placeholder="Full Name" />,
                    )}
                  </Form.Item>
                  <FormItem>
                    {getFieldDecorator('email', {
                      rules: [
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ],
                    })(<Input placeholder="Email" />)}
                  </FormItem>
                  <Form.Item>
                    {getFieldDecorator('country', {
                      rules: [{ required: true, message: 'Please input your country!' }],
                    })(
                      <Select
                        showSearch
                        placeholder="Country"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="col">Colombia</Option>
                        <Option value="us">United States</Option>
                        <Option value="uk">United Kingdom</Option>
                      </Select>,
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('phone', {
                      rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                      <InputNumber min={7} max={10} placeholder="Phone number" style={{ width: '100%' }} />,
                    )}
                  </Form.Item>
                  <div className="contact-form-products">
                    <div className="contact-form-products--list">
                      {modalReportItems.filter(item => item.selected).length > 0 ?
                        Object.keys(modalReportItems.filter(item => item.selected)).map(i =>
                          <div key={i} className={`contact-form-products--list-item`} onClick={() => this.modalItemToggle(modalReportItems.filter(item => item.selected)[i].id, false)}>
                            <img src={require('../../assets/img/img-example.svg')} alt={modalReportItems.filter(item => item.selected)[i].id} />
                            <p>{modalReportItems.filter(item => item.selected)[i].title}</p>
                          </div>)
                        : <span>Drag documents in here</span>}
                    </div>
                  </div>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="contact-form-button">
                      Download
                    </Button>
                  </Form.Item>
                  <p className="contact-form-terms">By clicking "download" you agree to the terms and conditions and our privacy policy.</p>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className={`modal-article modal-article-${articleModalVisible && 'visible'}`}>
          <div className="modal-article-bkg" onClick={() => this.showModalArticle()}></div>
          <div className="modal-article-modal">
            <MdClose className="btn-x" onClick={() => this.showModalArticle()} />
            <div className="modal-article-header" style={{ backgroundImage: `url(${require(`../../assets/img/${items[modalSelectedIndex].img}`)})` }}>
              <h1>{items[modalSelectedIndex].title}</h1>
              <div className="modal-article-header-badges">
                {(items[modalSelectedIndex].badges).map((badge, i) =>
                  <div key={i} className={`modal-badge`}>
                    <img src={require('../../assets/img/badges/' + badge)} alt={items[modalSelectedIndex].title} />
                  </div>)}
              </div>
            </div>
            <Article data={items[modalSelectedIndex]} />
          </div>
        </div>

      </div >
    );
  }
};
const WrappedSustain = Form.create({ name: 'report_form' })(Sustain);

export default WrappedSustain;