import React from 'react'
import { Form, Select, Input, Button, Modal } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/Lukerlogo.svg'
import Footer from '../footer/footer';
import { termsConditions } from "../../../commons/data/data-en";
import { privacyPolicy } from "../../../commons/data/data-en";
import { termsConditions as termsConditionsEs } from "../../../commons/data/data-es";
import { privacyPolicy as privacyPolicyEs } from "../../../commons/data/data-es";
import HelmetComponent from '../../../commons/helmet/helmet';
import { withNamespaces } from 'react-i18next';
import SelectLanguage from '../../../commons/select-lng/select-lng';

import i18n from '../../../i18n';
import { countries as dataCountries } from '../../../commons/data/data-en';
import { countries as paises } from '../../../commons/data/data-es';
import { SendEmail } from '../../../commons/services/emblueService';


class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = { feedback: '', name: 'Name', email: 'email@example.com', country: 'Colombia' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  countries = i18n.language === 'en' ? dataCountries : paises;

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.registerCustomerSaleforce(values)
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

  sendEmail(title, content, salesforce) {
    SendEmail(title, content, salesforce).then((response) =>
      (response.TotalSendEmail > 0) ?
        this.emailSent(i18n.t('form.contact-email-send-ok-title'), 'We appreciate you contacting us. One of our colleagues will get back in touch with you soon!')
        :
        this.emailSent(i18n.t('errors.email-send-error'), i18n.t('errors.try_again'))
    )
  }

  async registerCustomerSaleforce(client) {
    const templateId = 'contact_form_luker';
    const titleEmail = 'A petition to Luker Chocolate';
    const contentEMail = `<h3>Hello</h3>
    <p>Our customer <strong>${client.username}</strong> from <strong>${client.country}</strong> wants to get in touch with us from this email: ${client.email}</p>    
    <p>Here is what he says:</p>
    <blockquote>${client.message}</blockquote>
    Best wishes, greetings from <strong>Luker WEB</strong> !!
    `;

    const salesforceClient = {
      payload: {
        FirstName: client.username.replace(/ .*/, ''),
        LastName: client.username.substr(client.username.indexOf(" ") + 1),
        CLK_DescriptionoFirstTouchPoint__c: `Luker web Form Contact`,
        CLK_CommentMessage__c: client.message,
        Email: client.email,
        LeadSource: "Website",
        Company: "Luker Web",
        Description: client.message
      }
    }
    let salesforce;
    salesforce = await fetch('https://poetri-middleware.herokuapp.com/v1/function/invoke/1107b0d8-a027-4463-944c-4952c3544ad7', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': `Bearer 4xu7PghlWaSKClOugv0tN2+qa1voV47oFRU91W3aWn+gGeFatWYik+Dd99GcHMV7`
      },
      body: JSON.stringify(salesforceClient)
    }).then(async response => {
      if (response.status === 401) {
        console.log("401: ", response)
        return response;
      }
      response = await response.json()
      return response;
    }).catch(err => console.error("error", err))
    let stateSalesforce = 'prueba'
    if (salesforce.success) {
      stateSalesforce = "The user has been registered in Salesforce correctly."
      this.sendEmail(titleEmail, contentEMail, stateSalesforce)
    } else if (salesforce[0].errorCode === "DUPLICATES_DETECTED") {
      stateSalesforce = "The user was already registered in Salesforce."
      this.sendEmail(titleEmail, contentEMail, stateSalesforce)
      console.warn("Correo duplicado en salesforce")
    } else {
      stateSalesforce = "User failed to registered in salesforce. Error: " + salesforce[0].message
      this.sendEmail(titleEmail, contentEMail, stateSalesforce)
      console.error("Error salesforce: ", salesforce[0].message)
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { t } = this.props;
    const { Option } = Select;
    const { TextArea } = Input;
    return (
      <div className={`contact-us`} >
        <HelmetComponent title="Contact us" />
        <div className="contact-us-header">
          <div className="btn-dist">
            <Link to="/" className="logo"> <img src="/static/media/Lukerlogo.af6f7609.svg" alt="Logo Luker" /></Link>
            <SelectLanguage />
          </div>
          <h1>{t('form.contact-us')}</h1>
        </div >
        <div className={`contact-us-content`}>
          <p>{t('form.contact-message')}</p>
          <Form onSubmit={this.handleSubmit} className="contact-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: t('errors.required-name') }],
              })(
                <Input placeholder={t('form.your-name')} />,
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
            <Form.Item>
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
            <FormItem>
              {getFieldDecorator('message', {
                rules: [{ required: true, message: t('errors.required-comment') }],
              })(
                <TextArea rows={5} placeholder={t('form.write-message')} />
              )}
            </FormItem>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="contact-form-button">
                {t('buttons.send')}
              </Button>

            </Form.Item>
            <p className="contact-form-terms">{t('form.clicking-send')} <a href={i18n.language === 'en' ? termsConditions : termsConditionsEs} target="_blank">{t('form.terms-conditions')} </a> {t('form.and-our')} <a href={i18n.language === 'en' ? privacyPolicy : privacyPolicyEs} target="_blank">{t('form.privacy-policy')}</a>.</p>
          </Form>
        </div>
        <Footer />
      </div>
    );
  }
};

const WrappedContact = Form.create({ name: 'contact_form' })(Contact);
export default withNamespaces()(WrappedContact);