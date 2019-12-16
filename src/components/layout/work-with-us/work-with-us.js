import React from 'react'
import { Form, Select, Input, Button, Modal, DatePicker, Upload, Icon } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/Lukerlogo.svg'
import Footer from '../footer/footer';
import termsConditions from '../../../assets/documents/policies/Términos y condiciones de uso sitio web CasaLuker inglés 16dic2019.pdf';
import privacyPolicy from '../../../assets/documents/policies/Política privacidad sitio web CasaLuker inglés 16dic2019.pdf';

class WorkWithUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = { feedback: '', name: 'Name', email: 'email@example.com', birthday: '', phone: '', country: 'Colombia', upload: [] };
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
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        const values = {
          ...fieldsValue,
          'birthday': fieldsValue['birthday'].format('YYYY-MM-DD')
        };
        console.log('Received values of form: ', values);
        this.sendFeedback(templateId, values);
      }
    });

  };

  sendFeedback(templateId, variables) {
    window.emailjs.send(
      'sendgrid', templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!');
      this.emailSent('Thanks for filling out our form!', `We will look over your message and get back to you in a few days. In the meantime, you can check our production proccess, look over our products collection or browse through our latest blog posts.`);
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
    const { fileUpload } = this.state;
    const { Option } = Select;
    const { TextArea } = Input;

    return (
      <div className={`work-with-us`} >
        <div className="work-with-us-header">
          <div className="btn-dist">
            <Link to="/" className="logo"> <img src={logo} alt="Logo Luker" /></Link>
          </div>
          <h1>Work with us</h1>
        </div>
        <div className={`work-with-us-content`}>
          <h2>Personal information</h2>
          <Form onSubmit={this.handleSubmit} className="curriculum-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input placeholder="Full name" />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(<Input placeholder="Phone Number" />)}
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
              })(<Input placeholder="Your Email" />)}
            </FormItem>
            <FormItem>
              <FormItem
                label="Birthday"
                style={{ display: 'inline-block', float: 'left', marginRight: '20px', textAlign: 'left' }}>
                {getFieldDecorator('birthday', {
                  rules: [{ required: true, message: 'Please select your birthday date!' }],
                })(
                  <DatePicker />
                )}
              </FormItem>
              <Form.Item
                label="Country"
                style={{ display: 'inline-block', minWidth: '230px', float: 'left', textAlign: 'left' }}>
                {getFieldDecorator('country', {
                  rules: [{ required: true, message: 'Please input your country!' }],
                })(
                  <Select
                    showSearch
                    placeholder="Your Country"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {Object.keys(this.countries).map(i =>
                      <Option key={i} value={this.countries[i].name} key={i}>{this.countries[i].name}</Option>
                    )}
                  </Select>,
                )}
              </Form.Item>
            </FormItem>
            <Form.Item
              label="CURRICULUM VITAE"
              extra="(File Formats: *.doc(x), *.rtf, *.pdf)"
              style={{ textAlign: 'left' }}>
              {getFieldDecorator('upload', {
                rules: [{ required: true, message: 'Please upload your cv!' }],
                //valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload name="file" customRequest={this.dummyRequest} accept=".docx,.doc,.rtf,.pdf" onChange={this.handleChangeUpload} fileList={this.state.upload}>
                  <Button className="curriculum-form-button">
                    <Icon type="upload" /> SELECT A FILE
                  </Button>
                </Upload>,
              )}
            </Form.Item>
            <FormItem>
              {getFieldDecorator('message', {
                rules: [{ required: false, message: 'Please leave us a comment!' }],
              })(
                <TextArea rows={5} placeholder="Message (optional)!" />
              )}
            </FormItem>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="curriculum-form-button">
                Send
              </Button>
            </Form.Item>
            <p className="work-with-us-terms">By clicking "send" you agree to the <a href={termsConditions} target="_blank">terms and conditions</a> and our <a href={privacyPolicy} target="_blank">privacy policy</a>.</p>
          </Form>
        </div>
        <Footer />
      </div >
    );
  }
};

const WrappedWorkWithUs = Form.create({ name: 'curriculum_form' })(WorkWithUs);


export default WrappedWorkWithUs;