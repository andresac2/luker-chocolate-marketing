import React from 'react'
import { Form, Select, Input, InputNumber, Button, Modal, DatePicker, Upload, Icon } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/Lukerlogo.svg'
import Footer from '../footer/footer';
import { termsConditions, privacyPolicy } from "../../../commons/data/data-en";
import { termsConditions as termsConditionsEs, privacyPolicy as privacyPolicyEs } from "../../../commons/data/data-es";
import HelmetComponent from '../../../commons/helmet/helmet';
import { withNamespaces } from 'react-i18next';
import SelectLanguage from '../../../commons/select-lng/select-lng';
import i18n from '../../../i18n';
import { countries as dataCountries } from '../../../commons/data/data-en';
import { countries as paises } from '../../../commons/data/data-es';
import { RegisterCustomerSaleforce } from '../../../commons/services/salesforce';

class WorkWithUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = { feedback: '', name: 'Name', email: 'email@example.com', birthday: '', phone: '', country: 'Colombia', upload: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  countries = i18n.language === 'en' ? dataCountries : paises;

  handleSubmit = e => {
    e.preventDefault();
    const templateId = 'contact_form_luker';
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        const values = {
          ...fieldsValue,
          'birthday': fieldsValue['birthday'].format('YYYY-MM-DD')
        };
        console.log('Received values of form: ', values);
        this.SendSalesForce(values);
      }
    });

  };

  SendSalesForce(data) {
    let bodyData = {
      payload: {
        FirstName: data.username.replace(/ .*/, ''),
        LastName: data.username.substr(data.username.indexOf(" ") + 1),
        CLK_DescriptionoFirstTouchPoint__c: `Luker web Work With Us form`,
        CLK_CommentMessage__c: data.message,
        products__c: data.productsString,
        Email: data.email,
        LeadSource: "Website",
        MobilePhone: data.phone || "",
        Company: data.companyName || "No company",
        Description: data.message
      }
    }

    let emailData = `<h3>Hello</h3>
    <p>Our customer <strong>${data.username}</strong> from <strong>${data.country}</strong> born on <strong>${data.birthday}</strong> wants to work with us from this email: ${data.email}</p>
    ${data.productsString ? `<p>${data.products}</p>` : ''}
    <p></p>
    <p>Here is what he says:</p>
    <blockquote>${data.message}</blockquote>
    Best wishes, greetings from <strong>Luker WEB</strong> !!
    `;

    RegisterCustomerSaleforce(bodyData, emailData)
  }


  sendFeedback(templateId, variables) {
    window.emailjs.send(
      'sendgrid', templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!');
      this.emailSent('Thanks for the info!', `We'll look over your message and get back to you in a few days. Keep browsing!`);
      this.props.form.resetFields();
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => (console.error('Oh well, you failed. Here some thoughts on the error that occured:', err), this.emailSent('Oh well, something failed', 'Check your conection and try again')));
  }

  normFile = e => {
    console.log('Upload event:', e.fileList.length);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  handleChangeUpload = info => {
    let fileList = [...info.fileList];
    // 1. Limit the number of uploaded files
    // Only to show most recent uploaded file, and old ones will be replaced by the new
    fileList = fileList.slice(-1);

    this.setState({ upload: fileList });
  };

  emailSent(title, content) {
    const modal = Modal.success({
      title: title,
      content: content,
    });

    setTimeout(() => {
      modal.destroy();
    }, 8000);
  }

  //Function just to trick the Upload component without throwing an action error.
  dummyRequest({ file, onSuccess }) {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const { t } = this.props;
    const { fileUpload } = this.state;
    const { Option } = Select;
    const { TextArea } = Input;

    return (
      <div className={`work-with-us`} >
        <HelmetComponent title="Work with us" />
        <div className="work-with-us-header">
          <div className="btn-dist">
            <Link to="/" className="logo"> <img src="/static/media/Lukerlogo.af6f7609.svg" alt="Logo Luker" /></Link>
            <SelectLanguage />
          </div>
          <h1>{t('form.work-with-us')}</h1>
        </div>
        <div className={`work-with-us-content`}>
          <h2>{t('form.personal-info')}</h2>
          <Form onSubmit={this.handleSubmit} className="curriculum-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: t('errors.required-name') }],
              })(
                <Input placeholder={t('form.your-name')} />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: t('errors.required-number') }],
              })(
                <InputNumber minLength={7} maxLength={10} placeholder={t('form.phone-number')} style={{ width: '100%' }} />,
              )}
            </Form.Item>
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
            <FormItem>
              <FormItem
                label={t('form.birthday')}
                style={{ display: 'inline-block', float: 'left', marginRight: '20px', textAlign: 'left' }}>
                {getFieldDecorator('birthday', {
                  rules: [{ required: true, message: t('errors.required-number') }],
                })(
                  <DatePicker />
                )}
              </FormItem>
              <Form.Item
                label={t('form.your-country')}
                style={{ display: 'inline-block', minWidth: '230px', float: 'left', textAlign: 'left' }}>
                {getFieldDecorator('country', {
                  rules: [{ required: true, message: t('errors.required-country') }],
                })(
                  <Select
                    placeholder={t('form.your-country')}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {this.countries.map((country, i) =>
                      <Option key={i} value={country.name} key={i}>{country.name}</Option>
                    )}
                  </Select>,
                )}
              </Form.Item>
            </FormItem>
            <Form.Item
              label={t('form.curriculum-vitae')}
              extra={t('form.file-format')}
              style={{ textAlign: 'left' }}>
              {getFieldDecorator('upload', {
                rules: [{ required: true, message: t('errors.required-cv') }],
                //valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload name="file" customRequest={this.dummyRequest} accept=".docx,.doc,.rtf,.pdf" onChange={this.handleChangeUpload} fileList={this.state.upload}>
                  <Button className="curriculum-form-button">
                    <Icon type="upload" /> {t('buttons.select-file')}
                  </Button>
                </Upload>,
              )}
            </Form.Item>
            <FormItem>
              {getFieldDecorator('message', {
                rules: [{ required: true, message: t('errors.required-comment') }],
              })(
                <TextArea rows={3} placeholder={t('form.write-message')} />
              )}
            </FormItem>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="curriculum-form-button">
                {t('buttons.send')}
              </Button>
            </Form.Item>
            <p className="work-with-us-terms">{t('form.clicking-send')} <a href={i18n.language === 'en' ? termsConditions : termsConditionsEs} target="_blank">{t('form.terms-conditions')} </a> {t('form.and-our')} <a href={i18n.language === 'en' ? privacyPolicy : privacyPolicyEs} target="_blank">{t('form.privacy-policy')}</a>.</p>
          </Form>
        </div>
        <Footer />
      </div >
    );
  }
};

const WrappedWorkWithUs = Form.create({ name: 'curriculum_form' })(WorkWithUs);
export default withNamespaces()(WrappedWorkWithUs);