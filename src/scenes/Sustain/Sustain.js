import React from 'react';
import panel from '../../assets/img/sustain-panel.jpg'
import back from '../../assets/img/back.svg'
import { MdClose } from 'react-icons/md';
import { Form, Select, Input, Button, InputNumber } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import Article from '../../components/blog/article/article';
import FloatLogo from '../../components/layout/float-logo/float-logo';
import SustainabilityBrief from '../../assets/documents/Sustainabililty 2018 Luker Chocolate VERSIÓN DIGITAL.pdf';
import CocoaForestPeaceAgreement from '../../assets/documents/Colombia-Cocoa-Forests-and-Peace-Initiative-Joint-Framework-for-Action-English.pdf';

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
        img: 'costal-luker.jpg',
        flag: 'us',
        title: 'Jobs',
        badges: ['gender-equality.png', 'decent-work.png'],
        content: 'Thanks to our sustainability efforts, we’ve generated a total of 232 formal jobs in the community with 0% of child labor. We also generated 617 formal jobs in Bogotá and 71% of those positions are filled by millennials, guaranteeing as well 0% of child labor.<p></p>'
      },
      {
        img: 'arauca-river.jpg',
        flag: 'us',
        title: 'SMALL-SCALE FARMERS',
        badges: ['no-poverty.png', 'decent-work.png', 'reduced-inequalities.png'],
        content: 'We are committed to small-scale farmers, which is why we have established a network of alliances with over 50 cocoa growers associations allowing us to guarantee the purchase of the entire harvest of each association, helping to create the maximum value possible for the farmers and their families. We buy directly from 65 associations and more than 7500 Colombian families. We’ve also trained around 30.000 farmers in Luker Farm and built 10 centralized milling facilities in Tumaco and have 1 currently under construction in Huila. <p></p>'
      },
      {
        img: 'cocoa-tree.jpg',
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
        img: 'cocoa-forest.jpg',
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
          id: '2',
          title: 'SUSTAINABILITY BRIEF',
          content: 'Know the facts, findings, and objectives gathered for our sustainability initiatives.',
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
        this.downloadDocuments();
        this.props.form.resetFields();
      }
    });
  };

  downloadDocuments() {
    //(modalReportItems.filter(item => item.selected).some(function (v) { return v.id.includes(2) }))
    let docs = this.state.modalReportItems.filter(item => item.selected);
    if (docs.some(function (v) { return v.id.includes(2) }))
      window.open(SustainabilityBrief);
    if (docs.some(function (v) { return v.id.includes(4) }))
      window.open(CocoaForestPeaceAgreement);
  }

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
              <a href='http://www.thechocolatedream.co/' target="_blank"> FIND OUT MORE </a>
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
                        {Object.keys(countries).map(i =>
                          <Option key={i} value={countries[i].abrev} key={i}>{countries[i].name}</Option>
                        )}
                      </Select>,
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('phone', {
                      rules: [{ required: true, message: 'Please input your phone!' }],
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
                        : <span>Choose your documentation</span>}
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