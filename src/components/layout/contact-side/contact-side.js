import React from 'react'
import { withRouter } from 'react-router-dom';
import { Form, Select, Input, Button, InputNumber, Modal } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import termsConditions from '../../../assets/documents/policies/Términos y condiciones de uso sitio web CasaLuker inglés 16dic2019.pdf';
import privacyPolicy from '../../../assets/documents/policies/Política privacidad sitio web CasaLuker inglés 16dic2019.pdf';

class ContactSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: '', name: 'Name', email: 'email@example.com', phone: '', country: 'Colombia', products: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
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


  handleSubmit = e => {
    e.preventDefault();
    const templateId = 'contact_form_luker';
    console.log(this.props.products.filter(item => item.selected));
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //  values.push();
        values.products = 'And get some information about this products: ' + this.props.products.filter(item => item.selected).map(a => a.description).join(', ');
        this.sendFeedback(templateId, values);
        console.log('Received values of form: ', values);
      }
    });

  };

  sendFeedback(templateId, variables) {
    window.emailjs.send(
      'sendgrid', templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!');
      this.emailSent('Thank you for getting in touch! ', 'We appreciate you contacting us. One of our colleagues will get back in touch with you soon!');
      this.props.form.resetFields();
      this.props.handleSetProductSelected(this.props.products.filter(item => item.selected));
      this.goBackProducts();
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => (console.error('Oh well, you failed. Here some thoughts on the error that occured:', err), this.emailSent('Oh well, something failed', 'Check your conection and try again')));
  }

  emailSent(title, content) {
    const modal = Modal.success({
      title: title,
      content: content,
    });

    setTimeout(() => {
      modal.destroy();
    }, 8000);
  }

  goBackProducts() {
    let newRoute = (this.props.page === 'maquila') ? '/finished-chocolate-products' : (this.props.page === 'service') ? '' : '/ingredients';
    this.props.history.push('/products-services' + newRoute);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { products, page, history } = this.props;
    const { Option } = Select;
    const { TextArea } = Input;
    const altImg = 'img-example.svg';

    return (
      <div className={`contact-component contact-component--${page}`} >
        <div className={`contact-component-content`}>
          <h1>GIVE US YOUR DETAILS</h1>
          <button onClick={() => this.goBackProducts()}>jajajajja</button>
          <Form onSubmit={this.handleSubmit} className="contact-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input placeholder="Name" />,
              )}
            </Form.Item>
            {page === 'service' &&
              <Form.Item>
                {getFieldDecorator('companyName', {
                  rules: [{ required: true, message: 'Please input your Company name!' }],
                })(
                  <Input placeholder="Company Name" />,
                )}
              </Form.Item>}
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
            {page === 'service' &&
              <Form.Item>
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <InputNumber min={7} max={10} placeholder="Phone number" style={{ width: '100%' }} />,
                )}
              </Form.Item>
            }
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
                  {Object.keys(this.countries).map(i =>
                    <Option key={i} value={this.countries[i].abrev} key={i}>{this.countries[i].name}</Option>
                  )}
                </Select>,
              )}
            </Form.Item>
            {(page === 'maquila' || page === 'ingredients' || page === 'cacao' || page === 'maracas') &&
              <div className="contact-form-products">
                <p>Characteristics</p>
                {products &&
                  <div className="contact-form-products--list">
                    {products.filter(item => item.selected).length > 0 ?
                      page !== 'maquila' ?
                        Object.keys(products.filter(item => item.selected)).map(i =>
                          <div key={i} className={`contact-form-products--list-item`} onClick={() => this.props.handleSetProductSelected(products.filter(item => item.selected)[i])}>
                            <img src={require('../../../assets/img/' + (products.filter(item => item.selected)[i].img ? products.filter(item => item.selected)[i].img : altImg))} alt={products.filter(item => item.selected)[i].id} />
                            <p className={`contact-form-products--list-item-${page}`} >{products.filter(item => item.selected)[i].description}</p>
                          </div>)
                        : <><div className={`contact-form-products--list-item-${page}`} onClick={() => this.props.handleSetProductSelected()}>
                          <img src={require('../../../assets/img/' + products[0].img)} alt={products[0].description} />
                          <p>{products[0].description}</p>
                        </div>
                          (products.length > 0) && <div className={`contact-form-products--list-item-${page} contact-form-products--list-item-${page}-dmw`} onClick={() => this.props.handleSetProductSelected()}>{products[1]}</div></>
                      : <span>{page === 'maquila' ? 'Choose an option from the list' : 'Pick your choice from the list of products'}</span>
                    }
                  </div>
                }
              </div>
            }
            <FormItem>
              {getFieldDecorator('message', {
                rules: [{ required: true, message: 'Please leave us a comment!' }],
              })(
                <TextArea rows={3} placeholder="Comments" />
              )}
            </FormItem>
            <Form.Item>
              <Button type="primary" className="contact-form-button contact-form-button-back" onClick={() => this.props.handleShowFormContact(false)}>
                Back
              </Button>
              <Button type="primary" htmlType="submit" className="contact-form-button">
                Submit
              </Button>
            </Form.Item>
            <p className="contact-form-terms">By clicking "send" you agree to the <a href={termsConditions} target="_blank">terms and conditions</a> and our <a href={privacyPolicy} target="_blank">privacy policy</a>.</p>
          </Form>
        </div>
      </div >
    );
  }
};

const WrappedContactSide = Form.create({ name: 'contact_form' })(ContactSide);


export default withRouter(WrappedContactSide);