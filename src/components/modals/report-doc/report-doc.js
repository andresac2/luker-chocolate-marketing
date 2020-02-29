import React from 'react';
//import panel from '../../assets/img/sustain-panel.jpg'
//import back from '../../assets/img/back.svg'
import { MdClose } from 'react-icons/md';
import { Form, Select, Input, Button, InputNumber, Spin } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import i18n from '../../../i18n';
import { withNamespaces } from 'react-i18next';

import { termsConditions, privacyPolicy } from "../../../commons/data/data-en";
import { termsConditions as termsConditionsEs, privacyPolicy as privacyPolicyEs } from "../../../commons/data/data-es";

import { articlesSustain as articlesSustainEn, countries as dataCountries } from '../../../commons/data/data-en';
import { articlesSustain as articlesSustainEs, countries as paises } from '../../../commons/data/data-es';
import { getArticlesSustain, getArticlesSustainEs, getModalReportItems, getModalReportItemsEs } from '../../../commons/services/api';


class ModalReportDoc extends React.Component {
  SustainabilityBrief = 'https://back.lukerchocolate.com/es/wp-content/uploads/2020/02/Sustainabililty-2018-Luker-Chocolate-version-digital.pdf';
  CocoaForestPeaceAgreement = 'https://back.lukerchocolate.com/es/wp-content/uploads/2020/02/Colombia-Cocoa-Forests-and-Peace-Initiative-Joint-Framework-for-Action-English.pdf';

  SustainabilityBriefEs = 'https://back.lukerchocolate.com/es/wp-content/uploads/2020/02/Sustainabililty-2018-Luker-Chocolate-version-digital.pdf';
  CocoaForestPeaceAgreementEs = 'https://back.lukerchocolate.com/es/wp-content/uploads/2020/02/Colombia-Cocoa-Forests-and-Peace-Initiative-Joint-Framework-for-Action-English.pdf';

  zipDocuments = 'https://www.back.lukerchocolate.com/wp-content/uploads/2020/02/documents-sustainability.zip';


  constructor(props) {
    super(props);
    this.state = {
      distModalVisible: false,
      reportModalVisible: false,
      articleModalVisible: false,
      firstItem: 0,
      modalSelectedIndex: 0,
      items: i18n.language === 'en' ? articlesSustainEn : articlesSustainEs,
      modalReportItems: ''//i18n.language === 'en' ? modalReportItemsEn : modalReportItemsEs
    };
    this.getReportItems = this.getReportItems.bind(this);
  }

  async getReportItems() {
    let arrItems = [];
    if (i18n.language === 'en') {
      getModalReportItems().then(data =>
        data.map((e, i) => {
          arrItems.push(e.acf);
          arrItems[i].selected = false
        })).then(() =>
          this.setState({ modalReportItems: arrItems })
        )
    } else {
      getModalReportItemsEs().then(data =>
        data.map((e, i) => {
          arrItems.push(e.acf);
          arrItems[i].selected = false
        })).then(() =>
          this.setState({ modalReportItems: arrItems })
        )
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
    if (docs.length === 1) {
      if (i18n.language === 'en') {
        if (docs.some(function (v) { return v.id.includes(2) }))
          window.open(this.SustainabilityBrief);
        if (docs.some(function (v) { return v.id.includes(4) }))
          window.open(this.CocoaForestPeaceAgreement);
      } else {
        if (docs.some(function (v) { return v.id.includes(2) }))
          window.open(this.SustainabilityBriefEs);
        if (docs.some(function (v) { return v.id.includes(4) }))
          window.open(this.CocoaForestPeaceAgreementEs);
      }
    } else {
      window.open(this.zipDocuments);
    }
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
    this.setState({
      modalReportItems: this.state.modalReportItems.map(el => (el.id === id ? { ...el, selected } : el))
    });
  };

  componentDidMount() {
    this.getReportItems();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { t } = this.props;
    const { reportModalVisible, modalReportItems } = this.state;
    const { Option } = Select;
    const countries = i18n.language === 'en' ? dataCountries : paises;
    return (
      <div className="modal-report">
        <div className="modal-report-report">
          <div className="modal-report-report-header">
            <h2>{t('modals.modal-documents-title')}</h2>
          </div>
          {modalReportItems.length > 0 ? <div className="modal-report-report-cards">
            {
              Object.keys(modalReportItems).map(i =>
                <div key={i} className={`modal-report-report-cards-card modal-report-report-cards-card--${modalReportItems[i].selected && 'active'}`} onClick={() => this.modalItemToggle(modalReportItems[i].id, !modalReportItems[i].selected)}>
                  <h2>{modalReportItems[i].title}</h2>
                  <p>{modalReportItems[i].content}</p>
                </div>
              )
            }
          </div> : <Spin size="large" />}
        </div>
        <div className="modal-report-contact">
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
                })(<Input placeholder="Email" />)}
              </FormItem>
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
                    {Object.keys(countries).map(i =>
                      <Option key={i} value={countries[i].abrev} key={i}>{countries[i].name}</Option>
                    )}
                  </Select>,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: t('errors.required-number') }],
                })(
                  <InputNumber min={7} placeholder={t('form.phone-number')} style={{ width: '100%' }} />,
                )}
              </Form.Item>
              <div className="contact-form-products">
                {modalReportItems.length > 0 ?
                  <div className="contact-form-products--list">
                    {modalReportItems.filter(item => item.selected).length > 0 ?
                      Object.keys(modalReportItems.filter(item => item.selected)).map(i =>
                        <div key={i} className={`contact-form-products--list-item`} onClick={() => this.modalItemToggle(modalReportItems.filter(item => item.selected)[i].id, false)}>
                          <img src={require('../../../assets/img/img-example.svg')} alt={modalReportItems.filter(item => item.selected)[i].id} />
                          <p>{modalReportItems.filter(item => item.selected)[i].title}</p>
                        </div>)
                      : <span>{t('form.choose-documentation')}</span>}
                  </div> : <Spin size="large" />}
              </div>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="contact-form-button">
                  {t('buttons.download')}
                </Button>
              </Form.Item>
              <p className="contact-form-terms">{t('form.clicking-download')} <a href={i18n.language === 'en' ? termsConditions : termsConditionsEs} target="_blank">{t('form.terms-conditions')} </a> {t('form.and-our')} <a href={i18n.language === 'en' ? privacyPolicy : privacyPolicyEs} target="_blank">{t('form.privacy-policy')}</a>.</p>
            </Form>
          </div>
        </div>
      </div>
    );
  }
};

const WrappedReportDoc = Form.create({ name: 'report_form' })(ModalReportDoc);
export default withNamespaces()(WrappedReportDoc);