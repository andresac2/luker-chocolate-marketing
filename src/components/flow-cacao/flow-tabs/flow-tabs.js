import React from 'react';
import { Carousel } from 'antd';
import cacao from '../../../assets/img/cacaoOpen.jpg'
import granjeros from '../../../assets/img//granjeroCar.jpg'
import abastecimiento from '../../../assets/img/abastecimiento-car.jpg'
import procesamiento from '../../../assets/img/procesoCar.jpg'
import coberturas from '../../../assets/img/coberturaCar.jpg'
import producto from '../../../assets/img/productoCar.jpg'
import back from '../../../assets/img/back.svg'
import { withNamespaces } from 'react-i18next';

class FlowTabs extends React.Component {

  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this)
    this.state = {
      selectTab: 'cacao',
      statusOpened: true
    };
  }

  tabToggle(tab) {
    this.setState({ selectTab: tab });
  }

  handleCheck(status, aside) {
    if (status && aside === 'rigth') {
      this.setState({ statusOpened: !status })
    } else if (!status && aside == 'left') {
      this.setState({ statusOpened: !status })
    }
  }

  render() {
    const { t } = this.props;
    const { selectTab, statusOpened } = this.state;
    const cacaoImgs = ['static/media/cacao-fino-de-aroma.9975d69d.jpg', 'static/media/cacao-fino-de-aroma-1.0349d733.jpg', 'static/media/cacao-fino-de-aroma-2.4c9825c4.jpg'];
    const finishedImgs = ['static/media/finished-product-1.a09dd9cf.jpg', 'static/media/finished-product-2.34f5f615.jpg'];
    const harvestingImgs = ['static/media/harvesting-1.9f14c429.jpg', 'static/media/harvesting-2.079dc287.jpg', 'static/media/harvesting-3.8308f09b.jpg', 'static/media/harvesting-4.5cce74ac.jpg'];
    const postharvestingImgs = ['static/media/post-harvesting-1.f92d4cb1.jpg', 'static/media/post-harvesting-2.32f487a3.jpg', 'static/media/post-harvesting-3.734684e1.jpg', 'static/media/post-harvesting-4.275d5a09.jpg'];
    const processingImgs = ['static/media/processing-1.d6b755a6.jpg'];
    const raffinementImgs = ['static/media/raffinement-conching.f6701ba3.jpg'];

    return (
      <div className="flow-tabs">
        <div className={`flow-content-component flow-content-component--${selectTab}`}>
          <div className={`flow-content-component--text ${statusOpened ? 'opened' : 'close'}`} onClick={() => { this.handleCheck(statusOpened, 'left') }} >
            {selectTab === 'cacao' &&
              <div dangerouslySetInnerHTML={{ __html: t('chocolate-process.cocoa-fino-aroma-text') }} />
            }

            {selectTab === 'granjeros' &&
              <div dangerouslySetInnerHTML={{ __html: t('chocolate-process.harvesting-text') }} />
            }

            {selectTab === 'abastecimiento' &&
              <div dangerouslySetInnerHTML={{ __html: t('chocolate-process.post-harvesting-text') }} />
            }

            {selectTab === 'procesamiento' &&
              <div dangerouslySetInnerHTML={{ __html: t('chocolate-process.processing-text') }} />
            }

            {selectTab === 'coberturas' &&
              <div dangerouslySetInnerHTML={{ __html: t('chocolate-process.refinement-coaching-text') }} />
            }

            {selectTab === 'producto' &&
              <div dangerouslySetInnerHTML={{ __html: t('chocolate-process.finished-products-text') }} />
            }
            <div className="arrow-back">
              <img src="/static/media/back.9ae9d2c8.svg" />
            </div>
          </div>
          <div className={`flow-content-component--slider ${!statusOpened ? 'opened' : 'close'}`} onClick={() => { this.handleCheck(statusOpened, 'rigth') }} >
            <div className="arrow-back">
              <img className="back-rotate" src="/static/media/back.9ae9d2c8.svg" />
            </div>
            <Carousel autoplay>
              {selectTab === 'cacao' &&
                cacaoImgs.map((item, i) =>
                  <div key={i}>
                    <img src={item} alt={selectTab} key={i} />
                  </div>
                )
              }
              {selectTab === 'granjeros' &&
                harvestingImgs.map((item, i) =>
                  <div key={i}>
                    <img src={item} alt={selectTab} key={i} />
                  </div>)
              }
              {selectTab === 'abastecimiento' &&
                postharvestingImgs.map((item, i) =>
                  <div key={i}>
                    <img src={item} alt={selectTab} key={i} />
                  </div>)
              }
              {selectTab === 'procesamiento' &&
                processingImgs.map((item, i) =>
                  <div key={i}>
                    <img src={item} alt={selectTab} key={i} />
                  </div>)
              }
              {selectTab === 'coberturas' &&
                raffinementImgs.map((item, i) =>
                  <div key={i}>
                    <img src={item} alt={selectTab} key={i} />
                  </div>)
              }
              {selectTab === 'producto' &&
                finishedImgs.map((item, i) =>
                  <div key={i}>
                    <img src={item} alt={selectTab} key={i} />
                  </div>)
              }
            </Carousel>
          </div>
        </div>
        <div className={`flow-tab flow-tab--${selectTab}`}>
          <div onClick={() => this.tabToggle('cacao')} className={`flow-tab-item flow-tab-item--cacao flow-tab-item--${selectTab === 'cacao' && 'active'}`}><span>{t('chocolate-process.cocoa-fino').toUpperCase()}<br /> {t('chocolate-process.cocoa-aroma').toUpperCase()}</span></div>
          <div onClick={() => this.tabToggle('granjeros')} className={`flow-tab-item flow-tab-item--granjeros flow-tab-item--${selectTab === 'granjeros' && 'active'}`}><span>{t('chocolate-process.harvesting').toUpperCase()}</span></div>
          <div onClick={() => this.tabToggle('abastecimiento')} className={`flow-tab-item flow-tab-item--abastecimiento flow-tab-item--${selectTab === 'abastecimiento' && 'active'}`}><span>{t('chocolate-process.post-harvesting').toUpperCase()}</span></div>
          <div onClick={() => this.tabToggle('procesamiento')} className={`flow-tab-item flow-tab-item--procesamiento flow-tab-item--${selectTab === 'procesamiento' && 'active'}`}><span>{t('chocolate-process.processing').toUpperCase()}</span></div>
          <div onClick={() => this.tabToggle('coberturas')} className={`flow-tab-item flow-tab-item--coberturas flow-tab-item--${selectTab === 'coberturas' && 'active'}`}><span>{t('chocolate-process.refinement').toUpperCase()}<br /> {t('chocolate-process.coaching').toUpperCase()}</span></div>
          <div onClick={() => this.tabToggle('producto')} className={`flow-tab-item flow-tab-item--producto flow-tab-item--${selectTab === 'producto' && 'active'}`}><span>{t('chocolate-process.finished').toUpperCase()}<br /> {t('chocolate-process.products').toUpperCase()}</span></div>
        </div>
      </div >
    );
  }
};
export default withNamespaces()(FlowTabs);