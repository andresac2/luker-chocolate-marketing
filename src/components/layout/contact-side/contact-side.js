import React from 'react'
import { withRouter } from 'react-router-dom';
import i18n from '../../../i18n';
import { Form, Select, Input, Button, InputNumber, Modal } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { termsConditions } from "../../../commons/data/data-en";
import { privacyPolicy } from "../../../commons/data/data-en";
import { termsConditions as termsConditionsEs } from "../../../commons/data/data-es";
import { privacyPolicy as privacyPolicyEs } from "../../../commons/data/data-es";
import { withNamespaces } from 'react-i18next';
import { countries as dataCountries } from '../../../commons/data/data-en';
import { countries as paises } from '../../../commons/data/data-es';

class ContactSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: '', name: 'Name', email: 'email@example.com', phone: '', country: 'Colombia', products: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  countries = i18n.language === 'en' ? dataCountries : paises;

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
    this.props.history.push(i18n.t('routes.products-services') + newRoute);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { products, page, t } = this.props;
    const { Option } = Select;
    const { TextArea } = Input;
    const altImg = 'img-example.svg';

    return (
      <div className={`contact-component contact-component--${page}`} >
        <div className={`contact-component-content`}>
          <h1>{t('form.give-us-details')}</h1>
          <Form onSubmit={this.handleSubmit} className="contact-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: t('errors.required-name') }],
              })(
                <Input placeholder={t('form.your-name')} />,
              )}
            </Form.Item>
            {page === 'service' &&
              <Form.Item>
                {getFieldDecorator('companyName', {
                  rules: [{ required: true, message: t('errors.required-company') }],
                })(
                  <Input placeholder={t('form.company')} />,
                )}
              </Form.Item>}
            <FormItem>
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: t('errors.invalid-email'),
                  },
                  {
                    required: true,
                    message: t('errors.required-email'),
                  },
                ],
              })(<Input placeholder={t('form.your-email')} />)}
            </FormItem>
            {page === 'service' &&
              <Form.Item>
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: t('errors.required-number') }],
                })(
                  <InputNumber min={7} max={10} placeholder={t('form.phone-number')} style={{ width: '100%' }} />,
                )}
              </Form.Item>
            }
            <Form.Item>
              {getFieldDecorator('country', {
                rules: [{ required: true, message: t('errors.required-country') }],
              })(
                <Select
                  showSearch
                  placeholder={t('form.your-country')}
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
                <p>{t('form.characteristics')}</p>
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
                          {(products[1]) && <div className={`contact-form-products--list-item-${page} contact-form-products--list-item-${page}-dmw`} onClick={() => this.props.handleSetProductSelected()}>{products[1]}</div>}</>
                      : <span>{page === 'maquila' ? t('form.choose-option') : t('form.choose-products')}</span>
                    }
                  </div>
                }
              </div>
            }
            <FormItem>
              {getFieldDecorator('message', {
                rules: [{ required: true, message: t('errors.required-comment') }],
              })(
                <TextArea rows={3} placeholder={t('form.write-message')} />
              )}
            </FormItem>
            <Form.Item>
              <Button type="primary" className="contact-form-button contact-form-button-back" onClick={() => this.props.handleShowFormContact(false)}>
                {t('buttons.back')}
              </Button>
              <Button type="primary" htmlType="submit" className="contact-form-button">
                {t('buttons.send')}
              </Button>
            </Form.Item>
            <p className="contact-form-terms">{t('form.clicking-send')} <a href={i18n.language === 'en' ? termsConditions : termsConditionsEs} target="_blank">{t('form.terms-conditions')} </a> {t('form.and-our')} <a href={i18n.language === 'en' ? privacyPolicy : privacyPolicyEs} target="_blank">{t('form.privacy-policy')}</a>.</p>
          </Form>
        </div>
      </div >
    );
  }
};

const WrappedContactSide = Form.create({ name: 'contact_form' })(ContactSide);
export default withNamespaces()(withRouter(WrappedContactSide));