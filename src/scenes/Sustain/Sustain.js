import React from 'react';
//import panel from '../../assets/img/sustain-panel.jpg'
//import back from '../../assets/img/back.svg'
import { MdClose } from 'react-icons/md';
import { Form, Select, Input, Button, InputNumber, Spin } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import Article from '../../components/blog/article/article';
import FloatLogo from '../../components/layout/float-logo/float-logo';
//import SustainabilityBrief from 'https://www.lukerchocolate.com/static/media/Sustainabililty%202018%20Luker%20Chocolate%20VERSI%C3%93N%20DIGITAL.cb13c104.pdf';
//import CocoaForestPeaceAgreement from '../../assets/documents/Colombia-Cocoa-Forests-and-Peace-Initiative-Joint-Framework-for-Action-English.pdf';
//import zipDocuments from '../../assets/documents/documents-luker.zip';
import HelmetComponent from '../../commons/helmet/helmet';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';

import { termsConditions } from '../../commons/data/data-en';
import { privacyPolicy } from '../../commons/data/data-es';

import { articlesSustain as articlesSustainEn, countries as dataCountries, modalReportItems as modalReportItemsEn } from '../../commons/data/data-en';
import { articlesSustain as articlesSustainEs, countries as paises, modalReportItems as modalReportItemsEs } from '../../commons/data/data-es';
import { getArticlesSustain, getArticlesSustainEs, getModalReportItems, getModalReportItemsEs } from '../../commons/services/api';
import Modals from '../../components/modals/modals';


class Sustain extends React.Component {
  SustainabilityBrief = 'https://www.lukerchocolate.com/static/media/Sustainabililty%202018%20Luker%20Chocolate%20VERSI%C3%93N%20DIGITAL.cb13c104.pdf';
  CocoaForestPeaceAgreement = 'https://www.lukerchocolate.com/static/media/Sustainabililty%202018%20Luker%20Chocolate%20VERSI%C3%93N%20DIGITAL.cb13c104.pdf';
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

  async getItems() {
    let arrItems = [];
    if (i18n.language === 'en') {
      getArticlesSustain().then(data =>
        data.map((e, i) => {
          arrItems.push(e.acf);
        })).then(data =>
          this.setState({ items: arrItems })
        )
    } else {
      getArticlesSustainEs().then(data =>
        data.map((e, i) => {
          arrItems.push(e.acf);
        })).then(data =>
          this.setState({ items: arrItems })
        )
    }
  }

  async getReportItems() {
    let arrItems = [];
    if (i18n.language === 'en') {
      getModalReportItems().then(data =>
        data.map((e, i) => {
          arrItems.push(e.acf);
          arrItems[i].selected = false
        })).then(data =>
          this.setState({ modalReportItems: arrItems })
        )
    } else {
      getModalReportItemsEs().then(data =>
        data.map((e, i) => {
          arrItems.push(e.acf);
          arrItems[i].selected = false
        })).then(data =>
          this.setState({ modalReportItems: arrItems })
        )
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
    const { items, firstItem, distModalVisible, reportModalVisible, articleModalVisible, modalSelectedIndex, modalReportItems } = this.state;
    const { Option } = Select;
    const altImg = 'img-example.svg';
    const countries = i18n.language === 'en' ? dataCountries : paises;
    const panel = "/static/media/sustain-panel.999e85fe.jpg";

    return (
      <div className="sustain-component">
        <HelmetComponent title={t('sustainability.titulo_seo')} keywords={t('sustainability.keywords')} titleOg={t('sustainability.titulo_protocolo_opengraph')} description={t('sustainability.meta_descripcion')} descriptionOg={t('sustainability.descripcion_opengraph')} cover={t('sustainability.imagen_open_graph.url')} />
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
              {items.length > 0 ? <div className="sustain-content-contain-carr--items" >
                <img className={`btn-next-img btn-next-img-left btn-next-img${firstItem < 1 && '-disabled'}`} src="/static/media/back.9ae9d2c8.svg" alt='left' onClick={() => this.carrAction('l')} />
                {Object.keys(items).map(i =>
                  <div key={i} className={`card-image ${firstItem > i && 'item-action--l'}`} onClick={() => this.showModalArticle(i)}>
                    <img src={(items[i].img ? items[i].img : altImg)} alt={items[i].title} />
                    <p>{items[i].title}</p>
                    <div className="card-badges" >
                      {(items[i].badges).map((badge, j) =>
                        <div key={j} className={`card-badge`}>
                          <img src={badge} alt={items[i].title} />
                        </div>)}
                    </div>
                  </div>)}
              </div> : <Spin size="large" />}
              <img className={`btn-next-img btn-next-img${firstItem >= 3 && '-disabled'}`} src="/static/media/back.9ae9d2c8.svg" alt='right' onClick={() => this.carrAction('r')} />
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
              <a href='http://thechocolatedream.com/' target="_blank"> {t('buttons.find-out-more')} </a>
            </div>
          </div>
        </div>
        <Modals visible={reportModalVisible} modal={'report-doc'} showModalDist={this.showModalReport} />
        <Modals visible={articleModalVisible} modal={'article'} showModalDist={this.showModalArticle} item={items[modalSelectedIndex]} />
      </div >
    );
  }
};
const WrappedSustain = Form.create({ name: 'report_form' })(Sustain);
export default withNamespaces()(WrappedSustain);
