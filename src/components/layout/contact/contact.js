import React from 'react'
import { Form, Select, Input, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/Lukerlogo.svg'
import Footer from '../footer/footer';

class Contact extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    const { TextArea } = Input;
    return (
      <div className={`contact-us`} >
        <div className="contact-us-header">
          <div className="btn-dist">
            <Link to='/'>
              <img src={logo} className="logo" alt="Logo Luker" />
            </Link>
          </div>
          <h1>Contact us</h1>
        </div >

        <div className={`contact-us-content`}>
          <p>Get in touch with us and have all your questions about chocolate answerd by our experts.</p>
          <Form onSubmit={this.handleSubmit} className="contact-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input placeholder="Your name" />,
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
              })(<Input placeholder="Your Email" />)}
            </FormItem>
            <Form.Item>
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
                  <Option value="col">Colombia</Option>
                  <Option value="us">United States</Option>
                  <Option value="uk">United Kingdom</Option>
                </Select>,
              )}
            </Form.Item>
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please leave us a comment!' }],
              })(
                <TextArea rows={5} placeholder="Write us a message!" />
              )}
            </FormItem>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="contact-form-button">
                Send
              </Button>
            </Form.Item>
            <p>By clicking "send" you agree to the terms and conditions and our privacy policy.</p>
          </Form>
        </div>
        <Footer />
      </div >
    );
  }
};

const WrappedContact = Form.create({ name: 'contact_form' })(Contact);


export default WrappedContact;