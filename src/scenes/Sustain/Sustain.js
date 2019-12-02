import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import panel from '../../assets/img/sustain-panel.png'
import back from '../../assets/img/back.svg'
import { MdClose } from 'react-icons/md';
import { Form, Select, Input, Button, InputNumber } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

class Sustain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      distModalVisible: false,
      reportModalVisible: true,
      firstItem: 0,
      items: [{
        img: 'costal-luker.png',
        title: 'Jobs',
        content: 'We are committed to small-scale farmers, which is why we have established a network of alliances with over 50 cocoa growers associations allowing us to guarantee the purchase of the entire harvest of each association, helping to create the maximum value possible for the farmers and their families. We buy directly from 65 associations and more than 7500 Colombian families. We’ve also trained around 30.000 farmers in Luker Farm and built 10 centralized milling facilities in Tumaco and have 1 currently under construction in Huila.'
      },
      {
        img: 'arauca-river.png',
        title: 'SMALL-SCALE FARMERS',
        content: 'We are committed to small-scale farmers, which is why we have established a network of alliances with over 50 cocoa growers associations allowing us to guarantee the purchase of the entire harvest of each association, helping to create the maximum value possible for the farmers and their families. We buy directly from 65 associations and more than 7500 Colombian families. We’ve also trained around 30.000 farmers in Luker Farm and built 10 centralized milling facilities in Tumaco and have 1 currently under construction in Huila.'
      },
      {
        img: 'cocoa-tree.png',
        title: 'Community',
        content: 'We are committed to small-scale farmers, which is why we have established a network of alliances with over 50 cocoa growers associations allowing us to guarantee the purchase of the entire harvest of each association, helping to create the maximum value possible for the farmers and their families. We buy directly from 65 associations and more than 7500 Colombian families. We’ve also trained around 30.000 farmers in Luker Farm and built 10 centralized milling facilities in Tumaco and have 1 currently under construction in Huila.'
      },
      {
        img: 'enviromental.png',
        title: 'Enviromental',
        content: 'We are committed to small-scale farmers, which is why we have established a network of alliances with over 50 cocoa growers associations allowing us to guarantee the purchase of the entire harvest of each association, helping to create the maximum value possible for the farmers and their families. We buy directly from 65 associations and more than 7500 Colombian families. We’ve also trained around 30.000 farmers in Luker Farm and built 10 centralized milling facilities in Tumaco and have 1 currently under construction in Huila.'
      },
      {
        img: 'cocoa-forest.png',
        title: 'cocoa forest',
        content: 'We are committed to small-scale farmers, which is why we have established a network of alliances with over 50 cocoa growers associations allowing us to guarantee the purchase of the entire harvest of each association, helping to create the maximum value possible for the farmers and their families. We buy directly from 65 associations and more than 7500 Colombian families. We’ve also trained around 30.000 farmers in Luker Farm and built 10 centralized milling facilities in Tumaco and have 1 currently under construction in Huila.'
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
    this.setState({
      distModalVisible: !this.state.distModalVisible,
    });
  };
  showModalReport = () => {
    this.setState({
      reportModalVisible: !this.state.reportModalVisible,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { items, firstItem, distModalVisible, reportModalVisible } = this.state;
    const { Option } = Select;

    const altImg = 'img-example.svg';
    return (
      <div className="sustain-component">
        <div className="sustain-sidebar">
          <div className="sustain-sidebar--dist">
            <img src={logo} className="logo" alt="Logo Luker" />
            <button onClick={() => this.showModalDist()}> DISTRIBUIDORES </button>
          </div>
          <div className="sustain-sidebar--text">
            <h1>SOSTENIBILIDAD</h1>
            <div className="sustain-sidebar--text-content">
              <p>En Luker Chocolate vemos la sostenibilidad como una herramienta para perdurar en el tiempo de manera responsable, siendo motores de transformación económica, social y ambiental. Estamos comprometidos con generar mayor bienestar en todos los actores de la cadena de valor, desde quienes cultivan el grano de cacao hasta nuestros clientes.</p>
              <p>Nuestra apuesta en la cadena de valor es integrarla, humanizarla y por último cerrarla con estrategias de valor compartido con nuestros clientes y aliados. Sabemos que necesitamos determinación para transformar las regiones cacaoteras, ya que el cacao en Colombia es producido por aproximadamente 38 mil familias que en el pasado fueron víctimas del conflicto armado del país y que cuentan con índices multidimensionales de pobreza muy bajos. Por eso, centramos nuestros esfuerzos en contribuir al cambio en estas regiones para que la calidad de vida de los agricultores y las comunidades mejores.</p>
            </div>
            <button onClick={() => this.showModalReport()}> GET FULL REPORT </button>
          </div>
        </div>
        <div className="sustain-content">
          <div className="sustain-content-model">
            <h1>Impact</h1>
            <div className="sustain-content-contain-carr">
              <img className="btn-next-img btn-next-img-left" src={back} alt='left' onClick={() => this.carrAction('l')} />
              <div className="sustain-content-contain-carr--items" >
                {Object.keys(items).map(i =>
                  <div key={i} className={`card-image ${firstItem > i && 'item-action--l'}`}>
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
            <h1>We go beyond</h1>
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
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                </div>
                <div className={`modal-report-modal-report-cards-card`}>
                  <h2>Sustainability Brief</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                </div>
                <div className={`modal-report-modal-report-cards-card`}>
                  <h2>Certifications</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                </div>
                <div className={`modal-report-modal-report-cards-card`}>
                  <h2>Cocoa Forest & Peace Agreement</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                </div>
              </div>
            </div>
            <div className="modal-report-modal-contact">
              <div className={`contact-component-content`}>
                <h1>DÉJANOS TUS DATOS</h1>
                <Form onSubmit={this.handleSubmit} className="contact-form">
                  <Form.Item>
                    {getFieldDecorator('username', {
                      rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                      <Input placeholder="Name" />,
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
                    <span>Choose your documentation</span>
                  </div>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="contact-form-button">
                      Download
                    </Button>
                  </Form.Item>
                  <p className="contact-form-terms">Al hacer clic en "enviar" aceptas términos y condiciones y política de privacidad</p>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
};
const WrappedSustain = Form.create({ name: 'report_form' })(Sustain);

export default WrappedSustain;