import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import panel from '../../assets/img/sustain-panel.png'
import back from '../../assets/img/back.svg'
import { MdClose } from 'react-icons/md';
import { Form, Select, Input, Button, InputNumber } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import Article from '../../components/blog/article/article';

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
        content: 'Thanks to our sustainability efforts, we’ve generated a total of 232 formal jobs in the community with 0% of child labor. We also generated 617 formal jobs in Bogotá and 71% of those positions are filled by millennials, guaranteeing as well 0% of child labor.<div class="blog-article-content--img"><img src="/static/media/secado-2.53b5665a.png"></div>'
      },
      {
        img: 'arauca-river.png',
        flag: 'us',
        title: 'SMALL-SCALE FARMERS',
        content: 'We are committed to small-scale farmers, which is why we have established a network of alliances with over 50 cocoa growers associations allowing us to guarantee the purchase of the entire harvest of each association, helping to create the maximum value possible for the farmers and their families. We buy directly from 65 associations and more than 7500 Colombian families. We’ve also trained around 30.000 farmers in Luker Farm and built 10 centralized milling facilities in Tumaco and have 1 currently under construction in Huila.'
      },
      {
        img: 'cocoa-tree.png',
        flag: 'us',
        title: 'Community',
        content: 'We support our cocoa producers and their communities by implementing wide impact actions that not only improve farmers’ economic situation but also benefit the stability of their families. So far, we’ve intervened 6 schools with the new school model and renovated 280 square meters of them. 600 people have been trained in entrepreneurship with a focus on gender studies and 600 students have been trained in academic and emotional skills.<div class="blog-article-content--img"><img src="/static/media/granjero-cover.c29c20a3.png"></div>Furthermore, 300 young people have been trained in technical programs, 60 adults have been trained in reading and math, and 300 teachers were trained in resilience and socio-emotional skills with 70 international and national volunteers, which led to the construction of 1 social innovation center.'
      },
      {
        img: 'enviromental.png',
        flag: 'us',
        title: 'Enviromental',
        content: 'We know that reforestation attracts new species that can then be protected. That’s why with our environmental transformation strategies we have improved the conservation and care of 7 vulnerable species through the plantation of 600.000 new trees in agroforestry systems. The plantations have brought back species that had disappeared from the area. Whatsmore, we also participate in the 0 deforestation agreement “Cocoa, Forest and Peace initiative” led by the World Cocoa Foundation. '
      },
      {
        img: 'cocoa-forest.png',
        flag: 'us',
        title: 'Cocoa forest',
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
      }]
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

  render() {
    const { getFieldDecorator } = this.props.form;
    const { items, firstItem, distModalVisible, reportModalVisible, articleModalVisible, modalSelectedIndex } = this.state;
    const { Option } = Select;
    const altImg = 'img-example.svg';
    return (
      <div className="sustain-component">
        <div className="sustain-sidebar">
          <div className="sustain-sidebar--dist">
            <img src={logo} className="logo" alt="Logo Luker" />
            <button onClick={() => this.showModalDist()}> FIND A DISTRIBUTOR </button>
          </div>
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
            <h1>OUR IMPACT</h1>
            <div className="sustain-content-contain-carr">
              <img className="btn-next-img btn-next-img-left" src={back} alt='left' onClick={() => this.carrAction('l')} />
              <div className="sustain-content-contain-carr--items" >
                {Object.keys(items).map(i =>
                  <div key={i} className={`card-image ${firstItem > i && 'item-action--l'}`} onClick={() => this.showModalArticle(i)}>
                    <img src={require('../../assets/img/' + (items[i].img ? items[i].img : altImg))} alt={items[i].title} />
                    <p>{items[i].title}</p>
                  </div>)}
              </div>
              <img className="btn-next-img" src={back} alt='left' onClick={() => this.carrAction('r')} />
            </div>
            <div className="sustain-content-contain-carr--dots">
              {[...Array(Math.floor(items.length / 2))].map((_, i) =>
                <span key={i} className={`${(i * 2 === firstItem || i * 2 + 1 === firstItem) && 'dots-active'}`} onClick={() => this.carrAction(i)} ></span>
              )}
            </div>
          </div>
          <div className="sustain-content-model">
            <h1>WE INVITE YOU TO DREAM WITH US</h1>
            <div className="sustain-content-model--panel">
              <img src={panel} alt="Panel" />
              <button onClick={() => console.log('hi')}> GET FULL REPORT </button>
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
        <div className={`modal-report modal-report-${reportModalVisible && 'visible'}`}>
          <div className="modal-report-bkg" onClick={() => this.showModalReport()}></div>
          <div className="modal-report-modal">
            <MdClose className="btn-x" onClick={() => this.showModalReport()} />
            <div className="modal-report-modal-report">
              <div className="modal-report-modal-report-header">
                <h2>Get the full Report!</h2>
              </div>
              <div className="modal-report-modal-report-cards">
                <div className={`modal-report-modal-report-cards-card modal-report-modal-report-cards-card--active`}>
                  <h2>Sustainability Report</h2>
                  <p>Find out what we have accomplished by the implementation of several different sustainability strategies in this report.</p>
                </div>
                <div className={`modal-report-modal-report-cards-card`}>
                  <h2>Sustainability Brief</h2>
                  <p>Know the facts, findings, and objectives gathered for our sustainability initiatives.</p>
                </div>
                <div className={`modal-report-modal-report-cards-card`}>
                  <h2>Certifications</h2>
                  <p>Check our certifications and discover what our expertise and contributions can do.</p>
                </div>
                <div className={`modal-report-modal-report-cards-card`}>
                  <h2>Cocoa Forest & Peace Agreement</h2>
                  <p>Explore our commitment alongside other countries and companies to end deforestation and restore fores areas.</p>
                </div>
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
                    <span>Drag documents in here</span>
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