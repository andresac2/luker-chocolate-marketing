import React from 'react'
import { Form, Select, Input, Button, InputNumber } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

class ContactUs extends React.Component {

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
    const { products, page } = this.props;
    const { Option } = Select;
    const { TextArea } = Input;
    const altImg = 'img-example.svg';

    return (
      <div className={`contact-component contact-component--${page}`} >
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
                  <Option value="col">Colombia</Option>
                  <Option value="us">United States</Option>
                  <Option value="uk">United Kingdom</Option>
                </Select>,
              )}
            </Form.Item>
            {(page === 'maquila' || page === 'ingredients' || page === 'cacao' || page === 'maracas') &&
              <div className="contact-form-products">
                <p>Características</p>
                {products &&
                  <div className="contact-form-products--list">
                    {products.filter(item => item.selected).length > 0 ?
                      Object.keys(products.filter(item => item.selected)).map(i =>
                        <div key={i} className={`contact-form-products--list-item`} onClick={() => this.props.handleSetProductSelected(products.filter(item => item.selected)[i])}>
                          <img src={require('../../../assets/img/' + (products.filter(item => item.selected)[i].img ? products.filter(item => item.selected)[i].img : altImg))} alt={products.filter(item => item.selected)[i].id} />
                          <p className={`contact-form-products--list-item-${page}`} >{products.filter(item => item.selected)[i].description}</p>
                        </div>)
                      : <span>Drag your choice here</span>}
                  </div>
                }
              </div>
            }
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please leave us a comment!' }],
              })(
                <TextArea rows={4} placeholder="Comments" />
              )}
            </FormItem>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="contact-form-button">
                Send
              </Button>
            </Form.Item>
            <p className="contact-form-terms">Al hacer clic en "enviar" aceptas términos y condiciones y política de privacidad</p>
          </Form>
        </div>
      </div >
    );
  }
};

const WrappedContactUs = Form.create({ name: 'contact_form' })(ContactUs);


export default WrappedContactUs;