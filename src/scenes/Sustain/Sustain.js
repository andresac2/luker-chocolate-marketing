import React from 'react';
import panel from '../../assets/img/sustain-panel.jpg'
import back from '../../assets/img/back.svg'
import { MdClose } from 'react-icons/md';
import { Form, Select, Input, Button, InputNumber } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import Article from '../../components/blog/article/article';
import FloatLogo from '../../components/layout/float-logo/float-logo';
//import SustainabilityBrief from 'https://www.lukerchocolate.com/static/media/Sustainabililty%202018%20Luker%20Chocolate%20VERSI%C3%93N%20DIGITAL.cb13c104.pdf';
//import CocoaForestPeaceAgreement from '../../assets/documents/Colombia-Cocoa-Forests-and-Peace-Initiative-Joint-Framework-for-Action-English.pdf';
//import zipDocuments from '../../assets/documents/documents-luker.zip';
import HelmetComponent from '../../commons/helmet/helmet';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';

//import termsConditions from '../../assets/documents/policies/Términos y condiciones de uso sitio web CasaLuker inglés 16dic2019.pdf';
//import privacyPolicy from '../../assets/documents/policies/Política privacidad sitio web CasaLuker inglés 16dic2019.pdf';
import { termsConditions } from '../../commons/data/data-en';
import { privacyPolicy } from '../../commons/data/data-es';

import { articlesSustain as articlesSustainEn, countries as dataCountries, modalReportItems as modalReportItemsEn } from '../../commons/data/data-en';
import { articlesSustain as articlesSustainEs, countries as paises, modalReportItems as modalReportItemsEs } from '../../commons/data/data-es';


class Sustain extends React.Component {
  SustainabilityBrief = 'https://www.lukerchocolate.com/static/media/Sustainabililty%202018%20Luker%20Chocolate%20VERSI%C3%93N%20DIGITAL.cb13c104.pdf';
  CocoaForestPeaceAgreement = 'https://www.lukerchocolate.com/static/media/Sustainabililty%202018%20Luker%20Chocolate%20VERSI%C3%93N%20DIGITAL.cb13c104.pdf';
  zipDocuments = 'https://www.lukerchocolate.com/static/media/Sustainabililty%202018%20Luker%20Chocolate%20VERSI%C3%93N%20DIGITAL.cb13c104.pdf';

  constructor(props) {
    super(props);
    this.state = {
      distModalVisible: false,
      reportModalVisible: false,
      articleModalVisible: false,
      firstItem: 0,
      modalSelectedIndex: 0,
      items: i18n.language === 'en' ? articlesSustainEn : articlesSustainEs,
      modalReportItems: i18n.language === 'en' ? modalReportItemsEn : modalReportItemsEs
    }
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
        this.downloadDocuments();
        this.props.form.resetFields();
      }
    });
  };

  downloadDocuments() {
    //(modalReportItems.filter(item => item.selected).some(function (v) { return v.id.includes(2) }))
    let docs = this.state.modalReportItems.filter(item => item.selected);
    if (docs.length === 1) {
      if (docs.some(function (v) { return v.id.includes(2) }))
        window.open(this.SustainabilityBrief);
      if (docs.some(function (v) { return v.id.includes(4) }))
        window.open(this.CocoaForestPeaceAgreement);
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
    console.log(id);
    this.setState({
      modalReportItems: this.state.modalReportItems.map(el => (el.id === id ? { ...el, selected } : el))
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { t } = this.props;
    const { items, firstItem, distModalVisible, reportModalVisible, articleModalVisible, modalSelectedIndex, modalReportItems } = this.state;
    const { Option } = Select;
    const altImg = 'img-example.svg';
    const countries = i18n.language === 'en' ? dataCountries : paises;

    return (
      <div className="sustain-component">
        <HelmetComponent title="Luker Chocolate | Sustainability" />
        <FloatLogo btnText='dist' />
        <div className="sustain-sidebar">
          <div className="sustain-sidebar--text">
            <h1>{t('header.sustainability')}</h1>
            <div className="sustain-sidebar--text-content" dangerouslySetInnerHTML={{ __html: t('sustainability.sustain-content') }} />
            <button onClick={() => this.showModalReport()}> {t('buttons.get-full-report')} </button>
          </div>
        </div>
        <div className="sustain-content">
          <div className="sustain-content-model">
            <h1>{t('sustainability.impact')}</h1>
            <div className="sustain-content-contain-carr">
              <img className="btn-next-img btn-next-img-left" src={back} alt='left' onClick={() => this.carrAction('l')} />
              <div className="sustain-content-contain-carr--items" >
                {Object.keys(items).map(i =>
                  <div key={i} className={`card-image ${firstItem > i && 'item-action--l'}`} onClick={() => this.showModalArticle(i)}>
                    <img src={require('../../assets/img/' + (items[i].img ? items[i].img : altImg))} alt={items[i].title} />
                    <p>{items[i].title}</p>
                    <div className="card-badges" >
                      {(items[i].badges).map((badge, j) =>
                        <div key={j} className={`card-badge`}>
                          <img src={require('../../assets/img/badges/' + badge)} alt={items[i].title} />
                        </div>)}
                    </div>
                  </div>)}
              </div>
              <img className="btn-next-img" src={back} alt='left' onClick={() => this.carrAction('r')} />
            </div>
            <div className="sustain-content-contain-carr--dots">
              <span className={`${firstItem < 1 && 'dots-active'}`} onClick={() => this.carrAction(0)} ></span>
              <span className={`${firstItem >= 1 && firstItem < 3 && 'dots-active'}`} onClick={() => this.carrAction(1)} ></span>
              <span className={`${firstItem >= 3 && 'dots-active'}`} onClick={() => this.carrAction(2)} ></span>
            </div>
          </div>
          <div className="sustain-content-model">
            <h1>{t('sustainability.we-go-beyond')}</h1>
            <div className="sustain-content-model--panel">
              <img src={panel} alt="Panel" />
              <a href='https://www.thechocolatedream.co/' target="_blank"> {t('buttons.find-out-more')} </a>
            </div>
          </div>
        </div>
        <div className={`modal-report modal-report-${reportModalVisible && 'visible'}`}>
          <div className="modal-report-bkg" onClick={() => this.showModalReport()}></div>
          <div className="modal-report-modal">
            <MdClose className="btn-x" onClick={() => this.showModalReport()} />
            <div className="modal-report-modal-report">
              <div className="modal-report-modal-report-header">
                <h2>{t('modals.modal-documents-title')}</h2>
              </div>
              <div className="modal-report-modal-report-cards">
                {
                  Object.keys(modalReportItems).map(i =>
                    <div key={i} className={`modal-report-modal-report-cards-card modal-report-modal-report-cards-card--${modalReportItems[i].selected && 'active'}`} onClick={() => this.modalItemToggle(modalReportItems[i].id, !modalReportItems[i].selected)}>
                      <h2>{modalReportItems[i].title}</h2>
                      <p>{modalReportItems[i].content}</p>
                    </div>
                  )
                }
              </div>
            </div>
            <div className="modal-report-modal-contact">
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
                    <div className="contact-form-products--list">
                      {modalReportItems.filter(item => item.selected).length > 0 ?
                        Object.keys(modalReportItems.filter(item => item.selected)).map(i =>
                          <div key={i} className={`contact-form-products--list-item`} onClick={() => this.modalItemToggle(modalReportItems.filter(item => item.selected)[i].id, false)}>
                            <img src={require('../../assets/img/img-example.svg')} alt={modalReportItems.filter(item => item.selected)[i].id} />
                            <p>{modalReportItems.filter(item => item.selected)[i].title}</p>
                          </div>)
                        : <span>{t('form.choose-documentation')}</span>}
                    </div>
                  </div>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="contact-form-button">
                      {t('buttons.download')}
                    </Button>
                  </Form.Item>
                  <p className="contact-form-terms">{t('form.clicking-download')} <a href={termsConditions} target="_blank">{t('form.terms-conditions')} </a> {t('form.and-our')} <a href={privacyPolicy} target="_blank">{t('form.privacy-policy')}</a>.</p>
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
              <div className="modal-article-header-badges">
                {(items[modalSelectedIndex].badges).map((badge, i) =>
                  <div key={i} className={`modal-badge`}>
                    <img src={require('../../assets/img/badges/' + badge)} alt={items[modalSelectedIndex].title} />
                  </div>)}
              </div>
            </div>
            <Article data={items[modalSelectedIndex]} />
          </div>
        </div>

      </div >
    );
  }
};
const WrappedSustain = Form.create({ name: 'report_form' })(Sustain);
export default withNamespaces()(WrappedSustain);
